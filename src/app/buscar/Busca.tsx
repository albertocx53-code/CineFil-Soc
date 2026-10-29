'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useOptimistic, useTransition } from 'react';
import { buscar, categorias } from '@/lib/catalogo';
import { TitleCard } from '@/components/TitleCard';
import { IconSearch } from '@/components/icons';

export function Busca() {
  const sp = useSearchParams();
  const router = useRouter();
  const caminho = usePathname();
  const [, startTransition] = useTransition();
  const [consulta, aplicar] = useOptimistic(sp.toString(), (atual: string, mudanca: { campo: string; valor: string }) => {
    const p = new URLSearchParams(atual);
    if (mudanca.valor) p.set(mudanca.campo, mudanca.valor);
    else p.delete(mudanca.campo);
    return p.toString();
  });
  const parametros = new URLSearchParams(consulta);
  const f = {
    q: parametros.get('q') ?? '',
    tema: parametros.get('tema') ?? '',
    tipo: parametros.get('tipo') ?? '',
    disciplina: parametros.get('disciplina') ?? '',
    duracao: parametros.get('duracao') ?? '',
    ordem: parametros.get('ordem') ?? 'relevancia',
    slides: parametros.get('slides') === '1',
  };
  const resultados = buscar(f);
  const algumFiltro = !!(f.q || f.tema || f.tipo || f.disciplina || f.duracao || f.slides);

  const mudar = (campo: string, valor: string) => {
    const p = new URLSearchParams(consulta);
    if (valor) p.set(campo, valor);
    else p.delete(campo);
    startTransition(() => {
      aplicar({ campo, valor });
      router.replace(`${caminho}?${p.toString()}`, { scroll: false });
    });
  };

  return (
    <>
      <form className="filters" role="search" onSubmit={(e) => { e.preventDefault(); mudar('q', String(new FormData(e.currentTarget).get('q') ?? '').trim()); }}>
        <input id="q" className="input" name="q" defaultValue={f.q} key={f.q} placeholder="Ex.: Platão, alienação, Peter Weir" aria-label="Termo de busca" />
        <select id="tipo" className="select" value={f.tipo} onChange={(e) => mudar('tipo', e.target.value)} aria-label="Tipo de conteúdo">
          <option value="">Todos os tipos</option>
          <option value="filme">Filmes</option>
          <option value="documentario">Documentários</option>
          <option value="curta">Curtas</option><option value="audiobook">Audiobooks</option>
          <option value="videoaula">Videoaulas</option>
            <option value="serie">Trilhas por conteúdo</option>
        </select>
        <select id="disciplina" className="select" value={f.disciplina} onChange={(e) => mudar('disciplina', e.target.value)} aria-label="Disciplina">
          <option value="">Filosofia e Sociologia</option>
          <option value="filosofia">Filosofia</option>
          <option value="sociologia">Sociologia</option>
        </select>
        <select className="select" value={f.tema} onChange={(e) => mudar('tema', e.target.value)} aria-label="Tema ou pensador">
          <option value="">Todos os temas e pensadores</option>
          {categorias().slice().sort((a,b) => a.nome.localeCompare(b.nome, 'pt-BR')).map((c) => <option key={c.slug} value={c.slug}>{c.nome}</option>)}
        </select>
        <select id="duracao" className="select" value={f.duracao} onChange={(e) => mudar('duracao', e.target.value)} aria-label="Duração">
          <option value="">Qualquer duração</option>
          <option value="curta">Até 40 min</option>
          <option value="media">41 a 100 min</option>
          <option value="longa">Mais de 100 min</option>
        </select>
        <select id="ordem" className="select" value={f.ordem} onChange={(e) => mudar('ordem', e.target.value)} aria-label="Ordenar por">
          <option value="relevancia">Mais relevantes</option>
          <option value="populares">Mais populares</option>
          <option value="recentes">Mais recentes</option>
        </select>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <label className="check"><input id="slides" type="checkbox" checked={f.slides} onChange={(e) => mudar('slides', e.target.checked ? '1' : '')} /> Com slides</label>
          <button className="btn btn--red" type="submit"><IconSearch /> Buscar</button>
        </div>
      </form>

      {resultados.length === 0 ? (
        <div className="empty">
          <IconSearch />
          <h2>Nada encontrado</h2>
          <p>Tente outro termo ou tire alguns filtros.</p>
        </div>
      ) : (
        <>
          <p style={{ padding: '0 var(--gutter)', color: 'var(--muted)', margin: '0 0 14px' }}>
            {algumFiltro ? `${resultados.length} resultado${resultados.length > 1 ? 's' : ''}` : 'Todo o catálogo'}
          </p>
          <div className="grid reveal" style={{ paddingBottom: 60 }}>
            {resultados.map((t) => <TitleCard key={t.slug} item={t} />)}
          </div>
        </>
      )}
    </>
  );
}
