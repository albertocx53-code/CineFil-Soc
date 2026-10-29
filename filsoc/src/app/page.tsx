import Link from 'next/link';
import { destaques, todos } from '@/lib/catalogo';
import { HeroBanner } from '@/components/HeroBanner';
import { TitleCard } from '@/components/TitleCard';

export default function Inicio() {
  return (
    <div className="stream-home">
      <HeroBanner itens={destaques()} />
      <section id="catalogo" className="stream-catalog" aria-labelledby="catalogo-titulo">
        <div className="stream-catalog-head">
          <h2 id="catalogo-titulo">Todos os vídeos</h2>
          <Link href="/buscar" className="btn btn--ghost">Filtrar por disciplina e tema</Link>
        </div>
        <div className="stream-disciplines" aria-label="Explorar disciplinas">
          <Link href="/buscar?disciplina=filosofia">Filosofia · 11 vídeos</Link>
          <Link href="/buscar?disciplina=sociologia">Sociologia · 7 vídeos</Link>
          <Link href="/buscar?tipo=documentario">Documentários</Link>
          <Link href="/buscar?tipo=filme">Filmes</Link>
          <Link href="/buscar?tipo=audiobook">Audiobook</Link>
        </div>
        <div className="grid">{todos().map(t => <TitleCard key={t.slug} item={t} />)}</div>
      </section>
    </div>
  );
}
