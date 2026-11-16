(() => {
  'use strict';
  window.TW_DATA = {
    gameTitle: 'THE WITNESS: THE WAY — O ÚLTIMO REINO',
    mission: {
      id: 'm01', number: 1, title: 'O Arquivo que Sobrou',
      act: 'Ato I — A Origem e a Ruína', location: 'Meridian · 2099',
      opening: 'A chuva não toca a sala de arquivos: o edifício filtra o clima para conservar o que resta da infraestrutura. Aren Vale, 34 anos, encontra um exemplar físico do Evangelho de Lucas, marcado pela letra de sua mãe. Na tela ao lado, duas bases públicas descrevem o mesmo acontecimento de maneiras incompatíveis. O sistema oferece uma solução elegante: apagar a divergência e publicar uma versão única.',
      objective: 'Investigue os três vestígios do arquivo de Elena. Depois, tome três decisões: como preservar as notas, como comparar as fontes e qual pergunta levar ao Instituto.',
      stages: [
        {
          title: 'A letra de Elena',
          objective: 'Encontre o exemplar físico de Lucas, a comparação pública e a caixa de anotações.',
          itemIds: ['lucas', 'publicArchive', 'elenaBox'],
          choicePrompt: 'Como Aren deve preservar o arquivo?',
          choices: [
            { id: 'preserve', title: 'Preservar as notas integrais', description: 'Manter rasuras, dúvidas, datas e margens junto do texto principal.', result: 'Aren cria uma cópia de preservação. As dúvidas continuam visíveis e podem ser examinadas.', effects: { integrity: 2 }, flags: { archivePolicy: 'integral' } },
            { id: 'organize', title: 'Organizar uma edição de leitura', description: 'Separar o texto principal das notas, mantendo um caminho claro para consultar o original.', result: 'Aren organiza a leitura e registra onde cada nota foi movida. A clareza não precisa apagar a origem.', effects: { integrity: 1, community: 1 }, flags: { archivePolicy: 'organized' } }
          ]
        },
        {
          title: 'Duas versões do mesmo fato',
          objective: 'Examine a autoria e a circulação dos registros antes de escolher um procedimento.',
          itemIds: ['sourceMetadata', 'popularVersion'],
          choicePrompt: 'Qual procedimento é mais confiável?',
          choices: [
            { id: 'provenance', title: 'Comparar proveniência e contexto', description: 'Verificar autoria, data, finalidade e cadeia de preservação antes de concluir.', result: 'Aren suspende o veredito e registra o grau de confiança de cada fonte.', effects: { integrity: 2 }, flags: { sourcePolicy: 'provenance' } },
            { id: 'majority', title: 'Aceitar a versão mais difundida', description: 'A versão majoritária parece mais eficiente para a consulta do Conselho.', result: 'A busca fica mais rápida, mas a popularidade passa a ocupar o lugar da avaliação da fonte.', effects: { integrity: -1, mara: 1 }, flags: { sourcePolicy: 'majority' } }
          ]
        },
        {
          title: 'O convite',
          objective: 'Leia a mensagem do Instituto e decida qual pergunta Aren levará à reunião.',
          itemIds: ['instituteMessage'],
          choicePrompt: 'O que Aren pergunta antes de aceitar?',
          choices: [
            { id: 'missionQuestion', title: 'Qual pergunta a missão pretende responder?', description: 'Exigir que objetivo, limites e critérios de conclusão sejam registrados.', result: 'Aren pede uma carta de missão verificável, sem presumir que a resposta já esteja decidida.', effects: { integrity: 1, ishan: 1 }, flags: { meetingPriority: 'purpose' } },
            { id: 'departureWindow', title: 'Qual é a janela de partida?', description: 'Priorizar a logística, deixando a discussão ética para a reunião.', result: 'Aren confirma a agenda. A pergunta sobre o propósito permanece em aberto.', effects: { ishan: -1 }, flags: { meetingPriority: 'logistics' } }
          ]
        }
      ],
      interactables: {
        lucas: { name: 'Exemplar físico de Lucas', kind: 'DOCUMENTO', x: 480, y: 620, icon: '▤', body: 'A capa de tecido está gasta nas bordas. Entre as páginas há datas de consulta, perguntas e notas manuscritas por Elena. Uma anotação diz: “Não confunda uma fonte silenciosa com uma fonte contrária.” A frase é uma anotação ficcional da personagem, não uma citação bíblica.', prompt: 'Examinar o exemplar físico?' },
        publicArchive: { name: 'Comparador público 04-C', kind: 'TERMINAL', x: 880, y: 450, icon: '▣', body: 'Duas bases públicas descrevem o mesmo acontecimento de maneiras incompatíveis. O comparador propõe uma versão única, mas não mostra informação suficiente para decidir qual detalhe foi alterado. O painel registra: “Divergência detectada — normalização recomendada.”', prompt: 'Abrir o comparador público?' },
        elenaBox: { name: 'Caixa de anotações', kind: 'ARQUIVO', x: 1250, y: 650, icon: '◇', body: 'A caixa contém fichas de catalogação, cópias de consulta e um índice escrito à mão. Não há uma conclusão pronta. Elena preservou também as perguntas que não conseguiu responder.', prompt: 'Examinar a caixa de Elena?' },
        sourceMetadata: { name: 'Metadados de origem', kind: 'REGISTRO', x: 700, y: 450, icon: '⌁', body: 'O registro A informa autoria e data aproximada. O registro B foi republicado muitas vezes, mas sua cadeia de preservação está incompleta. Isso não torna automaticamente um deles verdadeiro ou falso; indica o que ainda precisa ser verificado.', prompt: 'Comparar autoria, data e proveniência?' },
        popularVersion: { name: 'Versão mais difundida', kind: 'PAINEL', x: 1080, y: 450, icon: '◉', body: 'O painel de circulação mostra qual versão foi replicada com mais frequência. O número de repetições mede alcance, não exatidão. Um aviso informa que a consolidação automática removeria as diferenças visíveis.', prompt: 'Examinar o painel de circulação?' },
        instituteMessage: { name: 'Mensagem do Instituto', kind: 'HOLOGRAMA', x: 910, y: 300, icon: '✧', body: 'MARA VOSS — DIRETORA DO INSTITUTO: “Aren, recebemos a referência ao arquivo de Elena. Gostaríamos que viesse ao Instituto de Continuidade para conhecer o Projeto Cavalo de Troia. O convite chama a pesquisa de ‘projeto de validação histórica’. A expressão fica suspensa na tela por alguns segundos.”', prompt: 'Assistir à mensagem de Mara?' }
      },
      codex: [
        { id: 'gospels', title: 'Os Evangelhos', kind: 'TEXTO BÍBLICO', text: 'Códice inicial: Mateus 1–2 e Lucas 1–2. A cena do arquivo apresenta um exemplar físico de Lucas anotado por Elena. A fala manuscrita reproduzida no jogo é ficcional e não deve ser confundida com o texto bíblico.', context: 'Os Evangelhos são testemunhos escritos em contextos antigos específicos. Uma leitura responsável observa gênero, finalidade, transmissão e diferenças entre os relatos, sem transformar cada divergência em erro ou em prova automática.', interpretation: 'A missão não decide uma controvérsia teológica. Ela introduz o método editorial do jogo: distinguir o que o texto diz, o contexto em que foi transmitido, a interpretação e a ficção criada para a campanha.', fiction: 'Aren encontra um exemplar físico anotado por Elena em Meridian, no ano de 2099. O arquivo 04-C, o comparador automático e a fala manuscrita são elementos ficcionais.' },
        { id: 'archives', title: 'Integridade documental', kind: 'CONTEXTO', text: 'A missão enfatiza preservação de proveniência, autoria, data, finalidade, variantes e cadeia de custódia.', context: 'Organizar uma edição de leitura pode ser útil, desde que a intervenção editorial seja documentada e o original permaneça consultável. Popularidade não equivale, por si só, a confiabilidade.', interpretation: 'A escolha do jogador mede o procedimento adotado por Aren, não a verdade de uma afirmação religiosa nem o mérito espiritual do jogador.', fiction: 'O comparador público 04-C e o mecanismo de normalização automática pertencem ao universo de THE WITNESS: THE WAY.' }
      ]
    },
    characters: {
      aren: { name: 'Aren Vale', age: '34 anos', role: 'Historiador de arquivos e operador temporal', look: 'Cabelo castanho-escuro curto e levemente ondulado; jaqueta de campo azul-grafite; camisa escura; calça funcional; bolsa transversal com fecho metálico discreto.' },
      elena: { name: 'Elena Vale', role: 'Pesquisadora de história religiosa e mãe de Aren', look: 'Retratada nesta missão por notas manuscritas, gravações de arquivo e fotografias antigas.' },
      mara: { name: 'Mara Voss', role: 'Diretora do Instituto de Continuidade', look: 'Voz e mensagem holográfica nesta missão; versão de 58 anos em 2099.' }
    },
    controls: { desktop: 'W A S D ou setas: mover · E ou Espaço: interagir · Esc: fechar painel', mobile: 'Use as setas na tela para mover e o botão INTERAGIR para examinar.' }
  };
})();
