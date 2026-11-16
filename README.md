# THE WITNESS: THE WAY — O ÚLTIMO REINO
## Versão 3.0 · Prova vertical jogável

Esta edição aplica a auditoria de 11 de novembro de 2026 ao projeto. Ela **não substitui a campanha narrativa de 25 missões**: adiciona uma primeira missão explorável, com movimentação, interação espacial, investigação em três etapas, escolhas que geram consequências e um sistema de salvamento validado.

## O que está implementado nesta versão

- Cenário 2D explorável do Arquivo Central de Meridian, em 2099.
- Personagem Aren Vale desenhado por vetores no Canvas, com movimento e ciclo procedural de caminhada/repouso.
- Controles WASD, setas e controles de toque.
- Colisões simples com mobiliário e limites de cenário.
- Interações espaciais com seis pontos narrativos distribuídos pelas três etapas da missão 1.
- Três decisões baseadas nas alternativas da campanha original.
- Consequências persistidas em atributos e sinalizadores narrativos.
- Reações condicionais nas consequências apresentadas ao concluir a missão.
- Códice em quatro camadas: texto bíblico, contexto, interpretação e ficção.
- Diário de decisões, opções de acessibilidade e efeitos sonoros sintetizados opcionais.
- Salvamento com versão de esquema, validação estrutural, backup anterior e importação/exportação JSON.
- O Códice de consulta do menu não altera nem sobrescreve uma campanha.
- Edição narrativa anterior com as 25 missões preservada em `legacy/`.

## Jogar

**Método recomendado:** execute um servidor local na pasta `THE_WITNESS_THE_WAY_V3`.

Linux/macOS:

```bash
python3 -m http.server 8000
```

Windows PowerShell:

```powershell
py -m http.server 8000
```

Abra `http://localhost:8000` no navegador.

Também é possível abrir `index.html` diretamente. Em navegadores que restringem armazenamento ou carregamento local, prefira o servidor local.

## Controles

| Ação | Teclado | Celular |
|---|---|---|
| Caminhar | WASD ou setas | Direcional na tela |
| Examinar ponto próximo | E ou Espaço | Botão INTERAGIR |
| Fechar painel | Esc | Botão Fechar |
| Salvar | Botão SALVAR / automático | Botão SALVAR / automático |

Aproxime Aren dos marcadores dourados do cenário para examinar documentos, terminais e mensagens.

## Projeto

```text
THE_WITNESS_THE_WAY_V3/
├── index.html
├── styles.css
├── data/
│   └── mission-01.js
├── js/
│   ├── app.js
│   ├── state.js
│   └── world.js
├── assets/
│   └── favicon.svg
├── docs/
│   └── MASTER_PRODUCTION_BLUEPRINT_3.0.md
├── tests/
│   └── state.test.cjs
└── legacy/
    ├── index.html
    ├── app.js
    ├── campaign-data.js
    ├── styles.css
    └── README.md
```

## Salvamento e privacidade

- A nova prova vertical usa a chave local `tw-the-way-v3-campaign`.
- O save tem `schemaVersion` e `gameVersion` explícitos.
- A validação confere fase, etapa, posição do personagem, itens examinados, decisões, sinalizadores, atributos, desbloqueios, preferências e datas.
- Antes de substituir um save válido, uma cópia é guardada em `tw-the-way-v3-campaign.backup`.
- Se o save principal estiver inválido, o jogo tenta recuperar o backup.
- A importação rejeita arquivos grandes, JSON inválido, identificadores desconhecidos e estados incoerentes.
- Os dados ficam no navegador. Não há conta, backend, telemetria ou sincronização.
- O save da versão 3 é separado do save da edição narrativa anterior.

## Campanha de 25 missões

A pasta `legacy/` mantém a edição narrativa anterior com as 25 missões, os cinco atos, o Códice, o diário e os três finais humanos. Nesta entrega, a camada explorável nova cobre a Missão 01. A Missão 02–25 continua disponível na experiência narrativa em `legacy/index.html`, mas ainda não possui mapas, movimentação e sprites completos na nova camada visual.

A edição antiga recebeu validação mais forte do estado salvo, migração do esquema 1 para o 2, backup e separação do Códice de pré-visualização para que a consulta não salve um estado de campanha temporário.

## Limites conhecidos

- Aren é um sprite vetorial procedural desenhado em Canvas, não uma spritesheet ilustrada final.
- O cenário de Meridian é composto por formas 2D e efeitos procedurais; ainda não é arte final pintada.
- Não há dublagem nem trilha musical final. Os sons de interface são sintetizados localmente e opcionais.
- A prova vertical usa colisões retangulares simples; não há navegação por malha, física avançada ou mapas de múltiplas salas.
- A expansão dos cinco atos exige novos mapas, spritesheets, retratos, animações, diálogos reativos e testes de cada missão.
- A Segunda Vinda, na campanha narrativa, continua sendo o clímax teológico fixo da obra. Nenhuma escolha do jogador altera os acontecimentos centrais dos Evangelhos nem transforma Jesus em personagem controlável ou chefe.

## Testes

Com Node.js instalado:

```bash
node --test tests/state.test.cjs
```

Verificação sintática rápida:

```bash
node --check js/app.js
node --check js/state.js
node --check js/world.js
node --check data/mission-01.js
```

Leia `docs/MASTER_PRODUCTION_BLUEPRINT_3.0.md` para a especificação de expansão da prova vertical até a campanha visual completa.
