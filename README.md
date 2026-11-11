# THE WITNESS: THE WAY — O ÚLTIMO REINO

Aventura narrativa 2D para navegador, construída a partir da Bíblia de Desenvolvimento Narrativo v2.0.

## Executar

Abra `index.html` em um navegador moderno. Para desenvolvimento local, recomenda-se servir a pasta por um servidor estático (por exemplo, `python -m http.server 8000`) e abrir `http://localhost:8000`.

Não há dependências de runtime nem serviços externos obrigatórios. As fontes web são opcionais; o navegador usa alternativas locais se estiver offline.

## O que está implementado

- Campanha com prólogo jogável e as 25 missões da bíblia narrativa.
- Cena 2D renderizada em Canvas com cenários distintos (Meridian, Galileia, Jerusalém e sequência final).
- Personagens desenhados proceduralmente no Canvas, com movimento de repouso e animação sutil; Aren é controlável.
- Exploração com WASD/setas, controles touch e interação contextual.
- Decisões com consequências em Integridade do Registro, Vínculos e Comunidade.
- Três finais humanos convergentes para o clímax fixo da Segunda Vinda.
- Elenco, códice, diário de decisões, autosave local, exportação e importação JSON.
- Layout responsivo e respeito a `prefers-reduced-motion`.

## Controles

- WASD ou setas: mover Aren.
- E: interagir quando estiver perto do ponto marcado.
- Celular: controles direcionais na cena e botão Interagir.
- Menu: exportar/importar salvamento ou reiniciar campanha.

## Diretrizes narrativas preservadas

- Jesus não é controlável, capturável, chefe ou ferramenta de progressão.
- O jogador não altera os acontecimentos bíblicos centrais.
- A Segunda Vinda é o clímax fixo e não depende de pontuação.
- A moldura escatológica futurista é identificada como interpretação escolhida pela obra, não consenso cristão.
- APX, Haldren, Concórdia e Selo são ficcionais; nenhuma tecnologia real é identificada como marca da Besta.
- A obra distingue registro bíblico, contexto histórico, interpretação e ficção.

## Limites desta entrega

Esta é uma versão jogável completa em estrutura e campanha, mas ainda não equivale a uma produção comercial final: arte de personagens e cenários é vetorial/procedural, sem spritesheets pintadas quadro a quadro; não há dublagem, trilha licenciada, localização profissional ou consultoria histórica/teológica externa. A camada sonora está preparada apenas como controle de interface, sem faixas incorporadas. O texto bíblico é citado por referências, evitando reproduzir traduções protegidas.

## Estrutura

- `index.html`: aplicação.
- `styles.css`: interface responsiva.
- `campaign.js`: dados das 25 missões.
- `game.js`: renderização, controles, decisões, salvamento e códice.
- `assets/favicon.svg`: ícone original.
