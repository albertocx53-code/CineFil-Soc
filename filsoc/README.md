<div align="center">

<img src="public/icons/icon-192.png" width="96" alt="Ícone do Fil&Soc" />

# FIL&SOC

Atualização: 18 vídeos com títulos e durações conferidos, capas editoriais individuais e filtro por tema/pensador. Consulte [PUBLICAR.md](PUBLICAR.md) para publicar e [docs/VERIFICACAO.md](docs/VERIFICACAO.md) para os testes e limites da verificação.

**O cinema transforma. O conhecimento permanece.**

Filmes, documentários, slides e fichas pedagógicas para professores de Filosofia e Sociologia.
Sem login, sem senha, sem código: quem tem o link entra direto.

</div>

---

## O que tem

- **Início** no estilo streaming, com banner em destaque e fileiras por tema.
- **Seções:** Filmes, Documentários, Filosofia, Sociologia e Slides.
- **Página de cada filme** com slides incorporados, vídeos, materiais para baixar, onde assistir e a ficha pedagógica completa (objetivos, conceitos, perguntas para debate, plano de aula, roteiro de análise, atividades e referências).
- **Pesquisa** por filme, diretor, filósofo, conceito ou tema, sem precisar de acento.
- **Minha lista**, salva no próprio navegador do professor.
- **Celular:** barra inferior e opção de instalar na tela inicial.
- **Animações de cinema:** abertura com o logo (uma vez por visita, clique para pular), banner com pôster em 3D que segue o mouse, fileiras e cartões que entram em cena ao rolar, transição entre páginas. Quem ativou "reduzir movimento" no aparelho vê tudo sem animação.

Não usa banco de dados nem variáveis de ambiente. Todo o conteúdo fica em um único arquivo: `src/data/catalogo.json`.

---

## Rodar no computador

Precisa do [Node.js](https://nodejs.org) 22.

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

---

## Publicar (Vercel)

1. Envie esta pasta para um repositório no GitHub.
2. Em [vercel.com](https://vercel.com), clique em **Add New → Project**, escolha o repositório e clique em **Deploy**.
3. Pronto. Não precisa cadastrar nenhuma variável.

Toda vez que você fizer `git push`, a Vercel publica a versão nova sozinha.

---

## Adicionar slides, vídeos e materiais

Abra `src/data/catalogo.json`, encontre o filme pelo `"slug"` e preencha as listas:

```json
"slides": [
  { "titulo": "Aula: Matrix e a alegoria da caverna", "url": "https://www.canva.com/design/XXXX/YYYY/view" }
],
"videos": [
  { "titulo": "Videoaula: Descartes em 10 minutos", "url": "https://www.youtube.com/watch?v=XXXX" }
],
"materiais": [
  { "titulo": "Plano de aula completo", "url": "https://drive.google.com/file/d/XXXX/view", "formato": "pdf" }
]
```

O site transforma sozinho o link em uma apresentação ou vídeo dentro da página. Funciona com:

| Onde está | Que link usar |
|---|---|
| **Canva** | Compartilhar → Mais → **Link público de visualização** |
| **Google Slides** | Compartilhar → "Qualquer pessoa com o link" → copie o link |
| **Google Drive** (PDF, PowerPoint) | Compartilhar → "Qualquer pessoa com o link" → copie o link |
| **YouTube** ou **Vimeo** | O link normal do vídeo |

No Google Drive e no Google Slides, o arquivo precisa estar como **"Qualquer pessoa com o link pode ver"**, senão o professor vê uma tela pedindo acesso.

### Adicionar um filme novo

Copie um bloco inteiro de um filme existente (de `{` até `}`), cole no final da lista `"titulos"` e troque os textos. O `"slug"` é o endereço da página (só letras minúsculas, números e hífens, sem acento).

Para usar uma imagem própria no lugar da arte automática, coloque o link em `"capa"` (vertical) e `"banner"` (horizontal). Use apenas imagens que você tem direito de usar.

---

## Estrutura

```
src/data/catalogo.json     todo o conteúdo (filmes, fichas, slides)
src/lib/catalogo.ts        leitura do catálogo, fileiras e busca
src/app/                   páginas: início, seções, filme, pesquisa, minha lista
src/components/            cabeçalho, banner, fileiras, cards, arte dos filmes
public/                    ícones e configuração do app no celular
```

---

<div align="center">

**FIL&SOC** · Os filmes citados pertencem aos seus titulares.

</div>
