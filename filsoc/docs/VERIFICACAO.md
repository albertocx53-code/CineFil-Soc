# Verificação da atualização — 29/10/2026

## Conteúdo

- 35 entradas originais comparadas com o ZIP de origem e preservadas integralmente.
- 18 novas entradas: 11 de Filosofia e 7 de Sociologia.
- Títulos e canais conferidos pelo oEmbed do YouTube; durações conferidas pelo `videoDetails.lengthSeconds`, com o identificador correspondente ao vídeo solicitado.
- Os 18 links retornaram `playableInEmbed: true` na consulta. Isso não garante disponibilidade futura ou reprodução em todas as regiões e contas.
- Canal de publicação não foi confundido com autoria. Direção incluída apenas quando explicitamente identificada no título consultado (Rossellini). Autoria não confirmada não foi inventada.
- Formatos diferenciados: 14 documentários, 3 filmes e 1 audiobook. Os temas são classificação editorial baseada nos títulos, sem alegação de análise integral dos vídeos.
- 18 capas originais individuais geradas com a ferramenta integrada de imagens; prompts registrados em `capas-prompts.json`.

## Testes executados

- `npm run build`: compilação, verificação de tipos e geração de 64 páginas concluídas.
- 53 páginas de títulos responderam HTTP 200.
- 18 novas páginas contêm iframe e link externo; 18 imagens responderam HTTP 200.
- Identificadores únicos, temas existentes e dados de título/duração iguais aos registros de pesquisa.
- Navegador: seleção completa com 18 cards; filtro de Filosofia com 11; Sociologia com 7. Filtro de Marx combinado com Sociologia retorna 10 entradas, incluindo 6 do catálogo original e 4 novas.
- Busca `socrates` encontra Sócrates sem exigir acento.
- Favorito adicionado, exibido em Minha lista e mantido após recarregar; item de teste removido ao final.
- Página de Sócrates: endereço do iframe e link externo conferidos.
- Layout verificado em larguras de 390, 768 e 1440 pixels, sem transbordamento horizontal nas páginas verificadas. Revisão visual dos filtros e capas no navegador.
- Nenhum erro JavaScript reportado nas consultas ao console durante essas verificações.
- Aplicação rápida de filtros revista para manter as seleções durante a atualização do endereço.

## Ambiente e limites

Compilado localmente com Node.js 24.22.1 e Next.js 15.5.28. O projeto declara Node.js 22 para hospedagem. Dependências fixadas pelo `package-lock.json`.

O teste automático inicial de navegador externo não iniciou neste ambiente; a validação de interface foi feita no navegador integrado. A conferência dos players incluiu presença, URLs e sinal de permissão do YouTube, sem assistir integralmente aos 18 vídeos. Materiais e links antigos foram preservados e não tiveram a disponibilidade externa revalidada.

Esta verificação documenta o que foi testado; não constitui garantia de ausência de falhas em todos os aparelhos, contas ou serviços externos.
