# Fil&Soc

Catálogo de 18 vídeos de Filosofia e Sociologia, todos com capas individuais.

A página inicial segue a organização visual do Histoflix: menu simples, destaque grande com Assistir e Mais informações e grade única de conteúdos. A identidade Fil&Soc, os vídeos e as ilustrações são próprios deste projeto.

- 11 vídeos de Filosofia e 7 de Sociologia.
- Pesquisa por título e tema; filtros por disciplina, pensador, formato e duração.
- Player incorporado e alternativa para assistir no YouTube.
- Minha lista salva no navegador.
- Interface adaptada a celular e computador.

Os 35 conteúdos sem capa foram retirados do catálogo a pedido do usuário. Uma cópia dos dados antigos permanece em docs/catalogo-anterior-sem-capa.json, fora do catálogo e das páginas de títulos.

## Executar

Use Node.js 22:

```sh
npm ci
npm run dev
```

Para produção: npm run build e npm start.

Consulte PUBLICAR.md para enviar ao GitHub e publicar na Vercel. O projeto não exige banco de dados nem variáveis de ambiente. Não há tela de login.

Dados: src/data/catalogo.json. Capas geradas individualmente pela ferramenta integrada de imagens: public/capas. Prompts: docs/capas-prompts.json. Registros de pesquisa: docs/videos-verificados.json e docs/incorporacao.json. Testes: docs/VERIFICACAO.md.

Atualização do player: o botão externo foi removido. A reprodução ocorre no player incorporado. A marca interna do YouTube é definida pelo próprio serviço.
