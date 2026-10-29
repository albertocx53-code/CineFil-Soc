# Verificação da versão com imagens — 29/10/2026

- Catálogo ativo limitado aos 18 conteúdos com capa: 11 Filosofia e 7 Sociologia.
- 35 conteúdos sem capa retirados das páginas, busca, destaques e favoritos exibidos. Os dados antigos foram arquivados em catalogo-anterior-sem-capa.json e comparados integralmente com o ZIP original.
- Estrutura da página inicial baseada na demonstração pública do Histoflix: destaque amplo, navegação curta e grade única. Identidade, conteúdo e capas mantidos como Fil&Soc.
- 18 páginas de títulos e 18 capas responderam HTTP 200; todas contêm iframe e link externo.
- Títulos e durações comparados com os registros originais da pesquisa; temas e identificadores validados.
- Navegador: 18 cards na página inicial; atalho de Sociologia com 7 resultados; apresentação para celular em 390 pixels sem transbordamento horizontal.
- Compilação final e verificação de tipos concluídas, com 29 páginas geradas.

Os dados de títulos, canais, duração em segundos e permissão de incorporação foram conferidos na atualização anterior. Os 18 vídeos retornaram playableInEmbed: true. Restrições do YouTube podem mudar; não houve reprodução integral dos 18 vídeos.

Canal de publicação não foi tratado como autoria. Dados não confirmados permanecem vazios. Capas são ilustrações editoriais geradas, não cartazes oficiais.

Build local com Node.js 24.22.1 e Next.js 15.5.28. Hospedagem configurada para Node.js 22. Nenhuma publicação remota foi realizada nesta etapa.

## Ajuste do player

O botão externo “Assistir no site original” e o aviso que o mencionava foram removidos da interface a pedido do usuário. Os vídeos continuam incorporados. A marca exibida dentro do player é controlada pelo YouTube; o parâmetro antigo modestbranding não tem efeito, conforme https://developers.google.com/youtube/player_parameters. Essa marca não foi ocultada.
