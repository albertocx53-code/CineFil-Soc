# Publicar o Fil&Soc

## GitHub + Vercel

1. Extraia este ZIP.
2. Crie um repositório no GitHub e envie o conteúdo da pasta `filsoc` para a raiz dele. Inclua `src`, `public`, `docs`, `package.json`, `package-lock.json`, `next.config.mjs` e os demais arquivos de configuração, inclusive `.gitignore`.
3. Não envie `node_modules` nem `.next`.
4. Na Vercel, escolha **Add New → Project**, importe esse repositório e mantenha o preset **Next.js**.
5. Use Node.js 22, instalação `npm ci` e compilação `npm run build`. Não são necessárias variáveis de ambiente.
6. Clique em **Deploy**. As próximas alterações enviadas ao GitHub geram novas publicações.

GitHub armazena o código. Esta versão utiliza a execução padrão do Next.js e deve ser hospedada na Vercel ou em outro servidor Node.js; enviá-la diretamente ao GitHub Pages não executa a aplicação.

## Conferir antes de publicar

Com Node.js 22 instalado, abra um terminal na pasta do projeto:

```sh
npm ci
npm run build
npm start
```

Abra http://localhost:3000. Para editar com atualização automática, use `npm run dev`.

## Editar o catálogo

Os dados estão em `src/data/catalogo.json`. As 18 novas entradas possuem `fonte`, com canal, URL original, duração em segundos e data de conferência. Os títulos do YouTube foram preservados. `chamada` é o rótulo curto da capa; os temas são classificação editorial baseada no título do vídeo.

As capas individuais estão em `public/capas`, nomeadas pelo identificador do vídeo. São ilustrações editoriais geradas, e não cartazes oficiais. O conjunto de prompts está em `docs/capas-prompts.json`.

`docs/videos-verificados.json` registra títulos, canais e durações. `docs/incorporacao.json` registra o sinal `playableInEmbed` consultado nas páginas do YouTube. Canal de publicação e autoria da obra são informações diferentes: a direção foi preenchida apenas quando expressa no título conferido. Dados não confirmados permanecem vazios.

## Reprodução

Cada vídeo tem player incorporado. O botão externo foi retirado a pedido do usuário. A indicação de incorporação foi conferida na consulta, mas restrições do YouTube podem mudar conforme região, idade, conta ou decisão do canal. Não há cópia dos vídeos no projeto.

## Funcionalidades mantidas

Catálogo original, fichas pedagógicas, slides, materiais, favoritos locais, busca sem acentos, trilhas, animações e navegação responsiva. A nova seleção fica na página inicial e em `/buscar?tema=selecao-youtube`.

## Versão atual: somente conteúdos com capa

Esta versão mostra 18 vídeos. Os 35 conteúdos sem imagem foram retirados do catálogo e arquivados em docs/catalogo-anterior-sem-capa.json. A página inicial usa destaque amplo e grade única, inspirados na organização do Histoflix. Não há login. As funções de fichas e slides permanecem no código para uso futuro, mas os conteúdos antigos sem imagem não são exibidos.
