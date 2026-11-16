# THE WITNESS: THE WAY — O ÚLTIMO REINO
## MASTER PRODUCTION BLUEPRINT 3.0

**Data:** 11 de novembro de 2026  
**Base narrativa:** Bíblia de Desenvolvimento Narrativo V2.0, fornecida pelo usuário  
**Base técnica:** auditoria MASTER compartilhada em 11 de novembro de 2026  
**Status:** especificação de produção + prova vertical da Missão 01

---

## 1. Objetivo desta versão

Transformar a edição narrativa web em uma aventura 2D cinematográfica e explorável, sem descartar o trabalho já realizado. A campanha de 25 missões, seus cinco atos, o Códice, os personagens e os limites editoriais continuam sendo a espinha dorsal. A nova camada adiciona movimento, interação espacial, investigação, diálogos condicionais e uma apresentação visual progressivamente substituível por arte final.

A estratégia de produção é **vertical slice primeiro**: validar uma missão inteira — personagem, cenário, controles, interação, interface, escolhas, salvamento, áudio básico e testes — antes de produzir em escala os ativos de todas as missões.

### Resultado entregue nesta edição

A Missão 01, **O Arquivo que Sobrou**, está implementada como prova vertical explorável em Canvas 2D. As três etapas preservam a ordem e as alternativas narrativas essenciais da missão original:

1. A letra de Elena — preservar as notas integrais ou organizar uma edição de leitura.
2. Duas versões do mesmo fato — comparar proveniência e contexto ou aceitar a versão mais difundida.
3. O convite — perguntar qual problema a missão pretende responder ou priorizar a janela de partida.

A exploração espacial foi introduzida sem reescrever a campanha. A edição anterior, com as 25 missões em formato narrativo, continua incluída em `legacy/`.

---

## 2. Pilares de design

### 2.1. Testemunho, não posse

Aren aprende a preservar e interpretar evidências sem reivindicar controle sobre pessoas, acontecimentos ou significado. As ferramentas do jogo devem reforçar investigação, escuta, responsabilidade documental e cuidado comunitário.

### 2.2. Exploração sem combate obrigatório

A proposta é aventura narrativa. As atividades centrais são caminhar, observar, conversar, comparar registros, consultar o Códice, resolver desafios de informação e cuidar de recursos comunitários. Não adicionar combate apenas para preencher tempo.

### 2.3. Consequências humanas e não onipotentes

As escolhas mudam relações ficcionais, registros, acesso a informações, confiança e possibilidades de apoio. Não mudam o chamado dos discípulos, os milagres, a Paixão, a ressurreição ou a Segunda Vinda.

### 2.4. Quatro camadas de verdade editorial

Todo conteúdo deve separar:

- **Texto bíblico:** passagens identificadas, sem falas inventadas atribuídas a Jesus.
- **Contexto:** informação histórica e científica, com incertezas explicitadas.
- **Interpretação:** leitura teológica identificada como tal, incluindo a opção futurista escatológica do jogo.
- **Ficção:** personagens, tecnologia, diálogos, instituições, APX, Paradoxo de Haldren, Concórdia e eventos inventados.

### 2.5. A Segunda Vinda é fixa

Na leitura futurista escolhida pela obra, o retorno de Cristo é o clímax narrativo fixo. Não é prêmio, consequência de pontuação, final alternativo ou sequência jogável de combate.

---

## 3. Decisão técnica

### 3.1. Base da prova vertical

A Missão 01 usa HTML5 Canvas 2D e JavaScript sem dependências de runtime. Esta decisão reduz atrito de prototipagem e permite testar controles, colisões, câmera, objetos, feedback e salvamento no mesmo ambiente do site atual.

### 3.2. Perspectiva

Perspectiva 2D de três quartos/top-down leve, com cenário de salas exploráveis e profundidade sugerida por iluminação, sombra, escala e sobreposição. Não misturar pixel art com ilustração semi-realista na mesma cena. A representação vetorial atual de Aren e o cenário procedural são ativos provisórios para validar gameplay e enquadramento.

### 3.3. Caminho para expansão

Depois da validação da Missão 01, há duas opções técnicas admissíveis:

1. Continuar com Canvas 2D próprio se os mapas forem pequenos, poucos sistemas forem necessários e a equipe preferir controle direto.
2. Migrar a camada de exploração para um motor 2D de navegador, com versão fixada e testada, se mapas, colisões, animações, câmeras, áudio e ferramentas de cena passarem a ser difíceis de manter manualmente.

A migração não deve ser feita por preferência abstrata. Deve ser decidida por protótipo de desempenho, complexidade de conteúdo, acessibilidade, facilidade de build e manutenção.

### 3.4. Estrutura atual e estrutura-alvo

Estrutura presente:

```text
index.html
styles.css
data/mission-01.js
js/app.js
js/state.js
js/world.js
assets/favicon.svg
docs/MASTER_PRODUCTION_BLUEPRINT_3.0.md
legacy/  (edição narrativa completa de 25 missões)
tests/
```

Estrutura-alvo depois da validação da prova vertical:

```text
src/
├── core/              # Estado, ciclo de jogo, eventos e progressão
├── systems/           # Save, escolhas, diálogo, inventário, áudio e acessibilidade
├── rendering/         # Câmera, cenas, sprites, partículas e transições
├── interface/         # HUD, diálogos, Códice, diário, mapa e opções
└── data/
    ├── campaign/      # Atos I–V, missões e cenas
    ├── characters/    # Personagens, relações, expressões e retratos
    ├── codex/         # Texto, contexto, interpretação e ficção
    └── world/         # Locais, mapas, interações e cronologia
assets/
├── characters/
├── portraits/
├── backgrounds/
├── tilesets/
├── audio/music/
├── audio/ambience/
├── audio/sfx/
├── ui/
└── cinematics/
tests/
```

Não mover módulos prematuramente. Cada nova pasta deve corresponder a uma responsabilidade real implementada.

---

## 4. Sistemas obrigatórios

### 4.1. Estado de jogo

O estado mínimo da campanha visual contém:

- versão do esquema e da campanha;
- fase atual e etapa da missão;
- posição e direção do protagonista;
- objetos examinados por etapa;
- decisões tomadas;
- sinalizadores de narrativa;
- atributos narrativos;
- entradas do Códice desbloqueadas;
- configurações de som, movimento e contraste;
- datas de criação e atualização.

O estado de interface temporária — Códice aberto, aba selecionada, janela modal, pré-visualização — não deve ser confundido com estado de campanha persistente.

### 4.2. Salvamento

Requisitos:

1. `schemaVersion` e `gameVersion` explícitos.
2. Validação de tipos, enumerações, limites, listas, identificadores, progresso e datas.
3. Backup do save anterior antes da substituição.
4. Recuperação automática de backup quando o arquivo principal for inválido.
5. Importação com limite de tamanho e validação antes de substituir o estado atual.
6. Exportação JSON legível.
7. Migração com testes quando o esquema mudar.
8. Saves da edição narrativa antiga isolados dos saves da edição visual.
9. Nenhuma pré-visualização do Códice pode criar ou sobrescrever uma campanha.

### 4.3. Movimentação e colisões

Na prova vertical:

- WASD, setas e botões direcionais por toque;
- movimento diagonal normalizado;
- velocidade independente da taxa de quadros;
- limites de sala e colisores de mobiliário;
- direção do personagem acompanha o último vetor de movimento;
- E/Espaço e botão de toque acionam a interação mais próxima;
- interação só ocorre dentro de um raio explícito;
- pausa de movimento durante diálogos e decisões.

Expansão:

- colisões por tiles ou polígonos, quando necessário;
- zonas de transição e portas;
- câmera com limites por mapa;
- pontos de navegação para personagens secundários;
- zonas de interação que funcionem com teclado e toque.

### 4.4. Interação e investigação

Cada ponto interativo precisa de:

- identificador estável;
- localização no mapa;
- nome e categoria;
- descrição legível;
- pré-condições;
- ação de examinar;
- estado visitado;
- efeito narrativo opcional;
- registro no diário ou no Códice, quando aplicável.

Não esconder progresso essencial em objetos sem indicação visual. Todos os objetos necessários à missão precisam ter marcadores, feedback e rótulos acessíveis.

### 4.5. Diálogo reativo

Um diálogo pode depender de:

- decisões anteriores;
- atributos de confiança;
- objetos encontrados;
- missões concluídas;
- sinalizadores de história;
- contexto do local.

A regra é: uma escolha deve produzir uma consequência observável mais tarde, não apenas alterar um número. Consequências válidas incluem fala alternativa, documento adicional, missão secundária, opção de investigação, reação de personagem ou acesso a uma solução diferente.

### 4.6. Diário e Códice

Diário: registrar decisão, contexto e resultado sem pontuação moral ou espiritual.

Códice: manter as quatro abas fixas — Texto bíblico, Contexto, Interpretação, Ficção do jogo. Não apresentar ficção autoral como versículo ou fato histórico.

### 4.7. Áudio

A prova vertical contém efeitos de interface sintetizados e opcionais. A produção final deverá incluir:

- música de prólogo;
- tema de Aren;
- tema histórico;
- tema de Meridian;
- tema da Concórdia;
- tema de encerramento;
- ambientes (água, vento, mercado, cidade e arquivo);
- efeitos de interação, documentos, transições e tecnologia.

Trilhas e efeitos finais devem ser originais ou licenciados. O som deve respeitar mute, controle de volume, preferência do usuário e política de redução de movimento quando sincronizado com animação.

---

## 5. Direção de arte

### 5.1. Linguagem visual

A identidade atual — azul-marinho, grafite, dourado envelhecido e luz âmbar — é preservada. A direção de arte deve evoluir para uma aventura 2D HD cinematográfica, com silhuetas legíveis, iluminação contextual e texturas coerentes.

Século I:

- pedra, madeira, barro, tecido, água e luz natural;
- poeira e calor com sutileza;
- paleta de areia, terracota, azul do lago e verde oliva;
- construções e objetos historicamente contextualizados;
- pessoas secundárias com vestuário e ocupações diversas, sem caricaturas.

Meridian, 2099:

- vidro, metal, materiais compostos e interfaces discretas;
- luz fria azulada com acentos âmbar;
- arquitetura funcional e limpa, não um campo de batalha permanente;
- propaganda pública serena, com controle representado por regras e ausência de liberdade, não por violência gráfica.

Prólogo e epílogo:

- formas abstratas e linguagem visual poética;
- sem representar as Pessoas da Trindade como três deuses ou corpos divinos separados;
- sem converter metáfora de criação em afirmação cosmológica científica.

### 5.2. Especificação de personagem

Alvo para spritesheets finais:

- atlas PNG transparente ou formato equivalente;
- quadros padronizados, inicialmente 128 × 192 px para personagem de corpo inteiro;
- ponto de origem consistente nos pés;
- quatro orientações quando o mapa exigir;
- 4 quadros de repouso e 6 de caminhada por direção como meta inicial;
- animações separadas para interação, observação e gestos especiais;
- retratos com expressões controladas e continuidade facial;
- metadados para nome de animação, quadro, duração e hitbox.

A prova vertical ainda não usa spritesheet final: Aren é desenhado em vetores no Canvas, com ciclos procedurais. Esse ativo serve para validar escala, leitura e movimento; não deve ser considerado arte final.

### 5.3. Model sheets por personagem

**Aren Vale — prioridade 1**  
34 anos em 2099. Historiador e operador temporal. Silhueta prática, jaqueta de campo azul-grafite, bolsa transversal, cabelo castanho-escuro curto. Expressões: neutra, concentrada, curiosa, preocupado, triste, determinado, reflexivo e cansado. Animações: repouso, caminhada, corrida curta, interação com arquivo, leitura e conversa.

**Mara Voss — prioridade 2**  
34 anos em 2075 e 58 em 2099. Duas idades com continuidade de traços. Postura de liderança, gestos contidos. Expressões: profissional, cansada, defensiva, arrependida, decidida. Animações iniciais: retrato, fala e gestos de apresentação.

**Ishan Sen — prioridade 2**  
41 anos em 2099. Engenheiro temporal. Aparência funcional e técnica; gestos cuidadosos. Expressões: concentração, preocupação, hesitação, franqueza e alívio. Animações: retrato, fala, operação de painel e manuseio de instrumentos.

**Sela bat Natan — prioridade 3**  
Comerciante de tecidos de Cafarnaum, aproximadamente 30 anos. Independente e observadora. Vestuário e ferramentas coerentes com a atividade comercial do século I. Expressões: atenção, humor discreto, desconfiança, compaixão, firmeza. Animações: caminhar, conversar, organizar tecidos e negociar.

**Mattan — prioridade 3**  
Pescador de 19 anos, irmão de Sela. Expressões: impulsividade, desconfiança, surpresa, coragem e cuidado. Animações: caminhar, carregar redes, trabalhar junto ao lago e conversar.

**Aurelian Veyr — prioridade 4**  
Governante ficcional e antagonista político. A aparência deve parecer plausível e carismática, nunca uma caricatura monstruosa. Variações: transmissão pública, encontro institucional e discurso final. Animações: fala, gesto de acolhimento, gesto de autoridade e pausa silenciosa.

**Elena Vale — prioridade 4**  
A idade não deve ser inventada se o roteiro não a especificar. A primeira aparição pode ser por retratos de arquivo, caligrafia, fotografias, gravações e documentos. O destino dela permanece indefinido na continuidade V2.0.

**Jesus Cristo — tratamento editorial especial**  
Não é personagem jogável, alvo de captura, chefe, ferramenta tecnológica ou agente de escolhas que modifiquem o texto bíblico. A direção de arte deve ser respeitosa, sem pretender afirmar uma aparência historicamente certa. Qualquer diálogo deve corresponder a passagem identificada e tradução autorizada/de uso permitido; não inventar falas privadas.

Personagens secundários do século I devem ser tratados como elenco de apoio e não como uma multidão genérica repetida.

### 5.4. Catálogo de cenários

**Meridian 2099:** Arquivo Central, Instituto de Continuidade, Câmara do Conselho, laboratório temporal, ruas centrais, praça da Concórdia, arquivo físico de Elena, abrigo comunitário, áreas administrativas e refúgio.

**Galileia e Judeia:** Rio Jordão, região desértica, estrada, Cafarnaum, mercado, casa/pátio, sinagoga, lago, barcos, encosta da multidão, Betânia, estradas de peregrinação e Jerusalém.

**Jerusalém — última semana:** entrada da cidade, área do Templo, espaço da ceia, jardim, áreas de julgamento, caminho e entorno da crucificação, túmulo e espaço do anúncio da ressurreição. A direção deve ser sóbria e não gráfica.

**Prólogo/epílogo:** abstrações cósmicas, mar antigo, horizonte e nova criação representados dentro dos limites teológicos da bíblia narrativa.

Cenários devem ser modulares: reusar bases com mudanças de horário, luz, clima, densidade de personagens e objetos, sem sugerir que cada reutilização seja um local histórico diferente.

---

## 6. Consequências persistentes

Os seis indicadores da campanha original são mantidos como referência narrativa: integridade do registro, confiança de Sela, confiança de Mattan, abertura de Mara, coragem de Ishan e coesão comunitária.

A camada visual também deve registrar flags semânticas, por exemplo:

- `archivePolicy`: integral ou organizada;
- `sourcePolicy`: proveniência ou popularidade;
- `meetingPriority`: propósito ou logística;
- `selasTrust`: confiança demonstrada em conversas futuras;
- `mattanMemory`: atitude lembrada pelo personagem;
- `maraAccountability`: disposição para reconhecer a cooptação;
- `ishanDisclosure`: disposição para revelar documentação;
- `communityAccess`: acesso da comunidade aos arquivos.

Não converter atributos em alinhamento moral, santidade, salvação ou merecimento. Valores são marcadores de estado narrativo e nunca alteram o clímax teológico fixo.

### Regra de design de escolha

Cada escolha importante deve possuir:

1. motivação compreensível;
2. benefício e custo legíveis;
3. resultado imediato;
4. consequência atrasada planejada;
5. teste que confirme a reação posterior;
6. possibilidade de uma escolha pragmática sem rotulá-la como maldade.

---

## 7. Plano de produção das 25 missões

| Nº | Missão | Cenário primário | Mecânica visual principal |
|---:|---|---|---|
| 01 | O Arquivo que Sobrou | Arquivo Central, Meridian | Exploração, coleta de evidências e método documental — prova vertical implementada |
| 02 | O Cavalo de Troia | Instituto de Continuidade | Conversas, leitura de cláusulas e inspeção da máquina |
| 03 | A Voz no Jordão | Rio Jordão | Exploração de margem, observação e códice Sinótico |
| 04 | Pó de Cafarnaum | Cafarnaum | Mercado, ajuda comunitária e relação com Sela/Mattan |
| 05 | A Voz na Sinagoga | Cafarnaum | Cena observacional e registro de fontes |
| 06 | Redes e Chamados | Mar da Galileia | Atividade de pesca e observação do chamado |
| 07 | O Monte e a Multidão | Encosta na Galileia | Posicionamento na multidão, escuta e comparação do códice |
| 08 | O Vento e o Mar | Lago da Galileia | Interação de ambiente e sequência climática |
| 09 | Pão para a Multidão | Região do lago | Reencontro de pessoas e apoio à multidão |
| 10 | A Casa de Betânia | Betânia | Exploração narrativa e observação do luto |
| 11 | A Estrada para Jerusalém | Estrada da Judeia | Escolha de rota, conversas e peregrinação |
| 12 | A Cidade e o Templo | Jerusalém | Exploração urbana e registro de diferenças dos Evangelhos |
| 13 | A Mesa e a Memória | Jerusalém | Cena observacional e registro, sem inserir Aren na mesa |
| 14 | A Noite do Jardim | Getsêmani | Observação e decisão sobre equipamento/registro |
| 15 | O Julgamento | Jerusalém | Investigação documental e contexto de autoridade romana |
| 16 | Fora dos Muros | Jerusalém | Cena sóbria e decisão sobre o marcador de extração |
| 17 | A Manhã e o Túmulo | Jerusalém | Anúncio conforme João 20, sem Aren como testemunha canônica |
| 18 | Retorno ao Mundo Sem Amanhã | Meridian | Nova exploração e reconhecimento de ambiente alterado |
| 19 | O Selo da Concórdia | Meridian | Apoio a família e consequências sociais |
| 20 | O Homem que Prometeu Paz | Palácio da Concórdia | Investigação, diálogo com Mara e Ishan |
| 21 | O Último Arquivo de Elena | Arquivo físico | Códice, proveniência, leitura e publicação de notas |
| 22 | A Última Assembleia | Refúgio | Distribuição de recursos e decisões comunitárias |
| 23 | A Falsa Paz se Rompe | Praça da Concórdia | Transmissão, proteção comunitária e convergência narrativa |
| 24 | O Rei Retorna | Meridian e mundo | Cinemática fixa, sem combate jogável |
| 25 | A Nova Criação | Epílogo | Encerramento contemplativo, sem nova guerra |

A tabela é plano de implementação visual. A estrutura narrativa das 25 missões está preservada na edição `legacy/`.

---

## 8. Prova vertical — critérios de aceitação

A Missão 01 só é considerada validada quando o seguinte conjunto passa:

### Apresentação

- menu abre sem erro;
- cenário renderiza em desktop e celular;
- Aren é visível e se movimenta;
- direção do personagem acompanha a última direção;
- objetos interativos são visualmente identificáveis;
- HUD informa missão, etapa e objetivo.

### Interação

- personagem não atravessa limites nem mobiliário configurado;
- marcador só é ativado dentro do raio;
- objetos já examinados mostram estado concluído;
- todas as evidências necessárias podem ser encontradas;
- diálogos bloqueiam movimentação até serem fechados;
- escolha só aparece após a inspeção de todos os itens da etapa.

### Consequência

- cada uma das seis alternativas pode ser escolhida;
- o diário registra ordem, rótulo e resultado;
- flags e atributos são aplicados;
- o resumo final reflete as escolhas realizadas;
- a missão conclui após três decisões;
- o texto do convite leva à Missão 02, sem antecipar conteúdo não implementado no slice.

### Persistência

- nova campanha cria um estado válido;
- autosave preserva etapa, posição, objetos e escolhas;
- continuar restaura exatamente a etapa;
- JSON exportado reimporta sem perda;
- JSON inválido é recusado sem sobrescrever o save;
- backup pode restaurar um save principal corrompido;
- abrir o Códice não grava nem altera a campanha.

### Acessibilidade

- controles de teclado funcionam;
- botões têm rótulos acessíveis;
- diálogos usam regiões semânticas;
- tamanho do texto permanece legível em celular;
- alto contraste e redução de movimento funcionam;
- as escolhas não dependem apenas de cor.

---

## 9. Matriz de testes de software

| Suíte | Casos | Critério |
|---|---|---|
| Estado | inicial válido; fase desconhecida; coordenada fora do mundo; decisão inválida | inválidos devem ser recusados |
| Progressão | três etapas em sequência; etapa sem evidências; item duplicado | progressão bloqueia estado incompleto |
| Salvamento | gravar; backup; recuperar backup; import válido; import corrompido | não perder campanha válida |
| Interação | distância fora do raio; item já usado; item de outra etapa | nenhuma interação indevida |
| Escolhas | seis alternativas; flags e atributos | cada escolha aplica seu efeito previsto |
| Renderização | desktop, tablet, celular, densidade alta | HUD e canvas permanecem utilizáveis |
| Acessibilidade | teclado, toque, contraste, movimento reduzido | todas as ações essenciais continuam acessíveis |
| Continuidade | fatos bíblicos fixos e ficção identificada | nenhuma escolha reescreve os marcos bíblicos |

A prova vertical inclui testes automatizados de validação de estado e verificações sintáticas. A validação completa em navegadores, aparelhos físicos, leitor de tela e diferentes proporções continua sendo uma etapa obrigatória de QA.

---

## 10. Roadmap de produção

### Fase 1 — Base confiável

**Entregue parcialmente nesta edição:** versão do save, validação, backup, recuperação, importação/exportação e isolamento do preview do Códice na edição antiga; teste automatizado do estado da prova vertical.

Pendências: auditoria manual de navegadores e recuperação de saves reais de versões publicadas do repositório, caso o usuário forneça snapshots e critérios de migração específicos.

### Fase 2 — Prova vertical

**Entregue nesta edição:** uma sala explorável, Aren vetorial, caminhada, colisões simples, seis objetos de interação divididos em três etapas, três decisões, consequências e Códice.

Pendências: arte final de Aren, spritesheet ilustrada, retratos de Elena e Mara, design sonoro original e polimento de animação.

### Fase 3 — Expansão do Ato I

- transformar a sala do arquivo em conjunto modular de interiores;
- implementar o Instituto e a Câmara do Conselho;
- desenvolver Mara e Ishan com retratos e diálogos condicionais;
- criar transições para o ano 2075 e a partida temporal;
- adicionar missões secundárias sem contradizer a bíblia V2.0.

### Fase 4 — Século I

- construir kit de cenário reutilizável de Galileia/Judeia;
- desenvolver Sela e Mattan;
- implementar interação ambiental, conversas e investigação;
- validar cada cena com uma referência evangélica-base;
- manter Aren como observador, não como substituto de discípulos ou testemunha canônica adicional.

### Fase 5 — Retorno e conclusão

- produzir Meridian sob a Concórdia;
- desenvolver consequências comunitárias e diálogos reativos;
- desenvolver três finais humanos de estado documental/comunitário;
- produzir a Segunda Vinda como clímax fixo e não jogável;
- concluir com Apocalipse 21–22 como horizonte de esperança.

---

## 11. Riscos e medidas preventivas

| Risco | Medida |
|---|---|
| Produzir centenas de artes antes de validar gameplay | usar a prova vertical como teste de escala e leitura |
| Consequências apenas numéricas | definir resposta atrasada verificável por escolha |
| Perda de progresso | save validado, backup e exportação |
| Contradições entre atos | identificadores e cronologia centralizados |
| Mistura entre Escritura e ficção | quatro camadas do Códice obrigatórias |
| Representação visual que pareça doutrina ou retrato histórico certo | nota editorial e direção de arte não definitiva |
| Conteúdo pesado ou gráfico na Paixão | enquadramento sóbrio, sem exploração gráfica |
| Aumentar escopo para 3D cedo demais | manter 2D enquanto isso satisfizer a experiência |
| Dependência de fontes externas para jogar | build estático; fontes externas são melhoria opcional |

---

## 12. Definição de “jogo completo”

A campanha só deverá ser chamada de **edição visual completa** quando:

1. as 25 missões tiverem uma cena jogável, não apenas cartões de texto;
2. os cinco atos tiverem ambientes e transições;
3. Aren tiver animações completas e personagens recorrentes tiverem retratos/estados visuais;
4. diálogos e escolhas possuírem consequências imediatas e atrasadas;
5. Códice, diário, inventário de evidências, mapa e salvamento estiverem integrados;
6. todos os três desfechos humanos forem testados;
7. a Segunda Vinda permanecer fixa;
8. a trilha e os efeitos tiverem licenciamento/originalidade documentados;
9. acessibilidade e desempenho forem verificados em dispositivos-alvo;
10. não houver bloqueadores críticos de continuidade, segurança ou perda de dados.

**Status atual:** prova vertical explorável da Missão 01 + campanha narrativa completa de 25 missões preservada na edição anterior. Não declarar os cinco atos como visualmente completos até cumprir a definição acima.
