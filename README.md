# THE WITNESS: THE WAY — O ÚLTIMO REINO

**Edição narrativa web jogável — versão 1.0**  
Adaptação autoral da *Bíblia de Desenvolvimento Narrativo V2.0*, fornecida pelo usuário.

## O que está incluído

- Prólogo cósmico interativo e interlúdio do Conselho de Continuidade em 2075.
- Campanha principal com as **25 missões** distribuídas nos cinco atos do documento.
- Três etapas de decisão por missão, com consequências narrativas.
- Sistema de estado para integridade dos registros, confiança de Sela e Mattan, abertura de Mara, coragem de Ishan e coesão comunitária.
- Três desfechos humanos possíveis: **Arquivo Aberto**, **Memória sob Custódia** e **Testemunho Particular**.
- A Segunda Vinda continua sendo o clímax fixo da narrativa, independentemente das escolhas.
- Códice dividido em Texto bíblico, Contexto, Interpretação e Ficção do jogo.
- Diário de decisões, elenco, jornada, cronologia, progresso e salvamento local.
- Exportação/importação do progresso em JSON e opções de acessibilidade.

## Como jogar

### Opção simples

Abra `index.html` em um navegador moderno.

### Opção recomendada (servidor local)

Com Python 3 instalado, execute na pasta do jogo:

**Windows:** abra `iniciar_jogo_windows.bat`.

**Linux/macOS:** execute `./iniciar_jogo_linux_mac.sh`.

Depois abra `http://localhost:8000` no navegador. O servidor só publica os arquivos na própria máquina; não é necessário instalar dependências nem ter internet.

## Controles

O jogo é controlado por mouse, toque ou teclado do navegador. Escolha uma das opções narrativas e avance pelos registros de campo. As abas superiores abrem o Códice, Diário, Elenco, Jornada e Opções. O progresso é salvo automaticamente no armazenamento local do navegador; use **Opções → Exportar progresso** para guardar uma cópia.

## Requisitos e arquitetura

- HTML5, CSS e JavaScript puro.
- Sem framework, banco de dados, conta, backend ou dependências de runtime.
- `campaign-data.js`: campanha, personagens, prelúdios e Códice.
- `app.js`: estado da campanha, escolhas, desbloqueios, salvamento e renderização.
- `styles.css`: interface responsiva e estilos.
- `index.html`: ponto de entrada.

## Fidelidade e limites editoriais

A versão preserva os marcos centrais do documento: Aren não altera o chamado dos discípulos, os milagres, a Paixão ou a ressurreição; não é testemunha canônica adicional; Jesus não é controlável, capturável ou chefe de fase; não há combate contra Cristo ou contra o Pacificador; e a Segunda Vinda não é condicionada ao desempenho do jogador.

O jogo também preserva as distinções entre registro bíblico, contexto, interpretação e ficção. A leitura futurista do Apocalipse é identificada como a escolha teológica desta obra, não como consenso de todas as tradições cristãs. O Selo da Concórdia e o APX permanecem elementos ficcionais; nenhuma tecnologia ou pessoa real é identificada como cumprimento profético.

## Escopo desta entrega

Esta é uma **edição narrativa web completa e jogável da campanha**, com todas as 25 missões representadas por cenas, decisões e consequências. Ela não é uma produção AAA em 3D, não possui captura de movimento, dublagem, trilha licenciada, multiplayer ou a duração estimada de 20–26 horas citada como planejamento no documento. Essas características exigiriam equipe, orçamento, ativos audiovisuais e produção externa. O jogo entregue é funcional como experiência narrativa independente e expansível.
