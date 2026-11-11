window.GAME_DATA = {
  "missions": [
    {
      "n": 1,
      "title": "O Arquivo que Sobrou",
      "act": "Ato I — A Origem e a Ruína",
      "location": "Meridian • 2099",
      "objective": "Examinar os registros de Elena e compreender como a memória pública foi editada.",
      "opening": "A chuva não toca a sala de arquivos: o edifício filtra o clima para conservar o que resta da infraestrutura. Aren Vale, 34 anos, encontra um exemplar físico do Evangelho de Lucas, marcado pela letra de sua mãe. Na tela ao lado, duas bases públicas descrevem o mesmo acontecimento de maneiras incompatíveis. O sistema oferece uma solução elegante: apagar a divergência e publicar uma versão única.",
      "base": "Ficção do jogo (D). Códice inicial: Mateus 1–2 e Lucas 1–2.",
      "stages": [
        {
          "title": "A letra de Elena",
          "narrative": "Entre as páginas há notas, datas de consulta e perguntas que Elena deixou sem resposta. Uma delas diz: “Não confunda uma fonte silenciosa com uma fonte contrária.” A frase é uma anotação ficcional da personagem, não uma citação bíblica.",
          "prompt": "Como Aren deve preservar o arquivo?",
          "choices": [
            {
              "text": "Preservar as notas integrais",
              "desc": "Manter rasuras, dúvidas, datas e margens junto do texto principal.",
              "result": "Aren cria uma cópia de preservação. As dúvidas continuam visíveis e podem ser examinadas.",
              "effects": {
                "integrity": 2
              },
              "unlock": [
                "creation"
              ]
            },
            {
              "text": "Organizar uma edição de leitura",
              "desc": "Separar o texto principal das notas, mantendo um caminho claro para consultar o original.",
              "result": "Aren organiza a leitura, mas registra onde cada nota foi movida. A clareza não precisa apagar a origem.",
              "effects": {
                "integrity": 1,
                "community": 1
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "Duas versões do mesmo fato",
          "narrative": "O comparador automático aponta divergências entre um registro público e um testemunho pessoal. Não há informação suficiente para decidir imediatamente qual detalhe foi alterado.",
          "prompt": "Qual procedimento é mais confiável?",
          "choices": [
            {
              "text": "Comparar proveniência e contexto",
              "desc": "Verificar autoria, data, finalidade e cadeia de preservação antes de concluir.",
              "result": "Aren suspende o veredito e registra o grau de confiança de cada fonte.",
              "effects": {
                "integrity": 2
              },
              "unlock": []
            },
            {
              "text": "Aceitar a versão mais difundida",
              "desc": "A versão majoritária parece mais eficiente para a consulta do Conselho.",
              "result": "A busca fica mais rápida, mas a popularidade passa a ocupar o lugar da avaliação da fonte.",
              "effects": {
                "integrity": -1,
                "mara": 1
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "O convite",
          "narrative": "Uma mensagem do Instituto de Continuidade chega com um pedido de reunião. O convite chama a pesquisa de “projeto de validação histórica”. A expressão incomoda Aren: Elena sempre falava em investigação, não em validação.",
          "prompt": "O que ele pergunta antes de aceitar?",
          "choices": [
            {
              "text": "Qual pergunta a missão pretende responder?",
              "desc": "Exigir que objetivo, limites e critérios de conclusão sejam registrados.",
              "result": "Aren pede uma carta de missão verificável, sem presumir que a resposta já esteja decidida.",
              "effects": {
                "integrity": 1,
                "ishan": 1
              },
              "unlock": []
            },
            {
              "text": "Qual é a janela de partida?",
              "desc": "Priorizar a logística, deixando a discussão ética para a reunião.",
              "result": "Aren confirma a agenda. A pergunta sobre o propósito permanece em aberto.",
              "effects": {
                "ishan": -1
              },
              "unlock": []
            }
          ]
        }
      ],
      "codex": [
        "creation",
        "project"
      ]
    },
    {
      "n": 2,
      "title": "O Cavalo de Troia",
      "act": "Ato I — A Origem e a Ruína",
      "location": "Instituto de Continuidade • 2099",
      "objective": "Entender a tecnologia temporal, registrar seus limites e reconhecer a alteração da missão.",
      "opening": "Mara Voss recebe Aren em uma sala sem janelas. Aos 58 anos, ela ainda fala como quem precisa manter uma instituição funcionando. Ishan Sen, engenheiro temporal, acompanha a apresentação com atenção excessiva aos indicadores de estabilidade. O plano oficial diz: observar, consultar e retornar. Uma cláusula técnica, no entanto, conserva a possibilidade de extração.",
      "base": "Ficção tecnológica do jogo (D).",
      "stages": [
        {
          "title": "A missão original",
          "narrative": "Mara apresenta o dossiê aprovado em 2075. O texto limita a operação à consulta e ao retorno; a cláusula de extração aparece em um anexo técnico posterior.",
          "prompt": "Aren pede que a cláusula seja tratada como quê?",
          "choices": [
            {
              "text": "Uma possibilidade que exige consentimento",
              "desc": "Registrar que nenhuma pessoa será removida sem consentimento e que a consulta não autoriza captura.",
              "result": "Mara não remove a cláusula, mas a ressalva de Aren passa a constar no registro da missão.",
              "effects": {
                "integrity": 2,
                "mara": 1
              },
              "unlock": []
            },
            {
              "text": "Uma ferramenta de contingência",
              "desc": "Aceitar a cláusula como recurso operacional, sem discutir seu alcance agora.",
              "result": "A reunião avança. Ishan percebe que a linguagem técnica está tornando o limite moral invisível.",
              "effects": {
                "integrity": -1,
                "ishan": -1
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "O limite da máquina",
          "narrative": "Ishan explica que a janela temporal é estreita e que a máquina não controla o contexto histórico. Uma chegada fora do ponto previsto pode separar Aren de qualquer apoio.",
          "prompt": "O que Aren solicita?",
          "choices": [
            {
              "text": "Um protocolo de retorno e uma cópia independente",
              "desc": "Definir critérios de abortagem, registro local e preservação de dados.",
              "result": "Ishan agradece a pergunta. Pela primeira vez, alguém trata seus avisos como parte central do projeto.",
              "effects": {
                "ishan": 2,
                "integrity": 1
              },
              "unlock": []
            },
            {
              "text": "Um aumento de potência",
              "desc": "Pedir mais margem operacional, mesmo sem compreender todos os riscos.",
              "result": "A equipe promete estudar a solicitação; a incerteza técnica não desaparece.",
              "effects": {
                "ishan": -1
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "A partida",
          "narrative": "A plataforma temporal desperta. No vidro, Aren vê por um instante a própria imagem sobreposta a uma gravação antiga de Elena. A missão não oferece garantia de que o futuro estará igual quando ele voltar.",
          "prompt": "Qual é a última decisão antes da travessia?",
          "choices": [
            {
              "text": "Levar o arquivo físico de Elena",
              "desc": "Preservar uma referência que não dependa da rede institucional.",
              "result": "O arquivo é acondicionado junto ao equipamento. Aren atravessa levando uma memória que pode ser questionada.",
              "effects": {
                "integrity": 1,
                "community": 1
              },
              "unlock": [
                "project"
              ]
            },
            {
              "text": "Levar apenas o equipamento oficial",
              "desc": "Reduzir peso e seguir o procedimento institucional.",
              "result": "A partida ocorre sem o arquivo físico. A decisão não muda o destino da missão, mas muda o que Aren terá em mãos.",
              "effects": {
                "mara": 1
              },
              "unlock": []
            }
          ]
        }
      ],
      "codex": [
        "project"
      ]
    },
    {
      "n": 3,
      "title": "A Voz no Jordão",
      "act": "Ato II — O Caminho",
      "location": "Rio Jordão • século I",
      "objective": "Observar João Batista e o batismo de Jesus sem transformar Aren em testemunha canônica.",
      "opening": "A travessia termina com o cheiro de água, terra e tecido molhado. Aren vê peregrinos reunidos em torno de João Batista. O equipamento registra o local, mas não oferece legenda para o que está acontecendo. O códice abre quatro referências evangélicas; cada uma preserva seu próprio enquadramento.",
      "base": "Mt 3–4; Mc 1:9–13; Lc 3:21–4:13; Jo 1:19–34. As cenas seguem uma moldura por vez.",
      "stages": [
        {
          "title": "A margem do rio",
          "narrative": "Aren mantém distância. A cena do batismo é apresentada na moldura escolhida para esta sequência, sem acrescentar falas privadas. O códice permite comparar os relatos depois.",
          "prompt": "Como classificar o que está vendo?",
          "choices": [
            {
              "text": "Registro evangélico e enquadramento escolhido",
              "desc": "Anotar a referência-base e separar a cena narrada da própria interpretação.",
              "result": "O códice marca Mateus como moldura desta cena e mantém as outras referências consultáveis.",
              "effects": {
                "integrity": 2
              },
              "unlock": [
                "jesus"
              ]
            },
            {
              "text": "Relato único e harmonizado",
              "desc": "Fundir todos os detalhes em uma única sequência sem indicar de onde vêm.",
              "result": "A linha do tempo fica simples, mas diferenças entre os relatos deixam de ser visíveis.",
              "effects": {
                "integrity": -1
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "Quatro relatos",
          "narrative": "O sistema oferece uma comparação entre João, Marcos, Mateus e Lucas. As diferenças não precisam ser tratadas como erro automático nem apagadas.",
          "prompt": "Qual é a melhor leitura?",
          "choices": [
            {
              "text": "Comparar sem forçar equivalência cronológica",
              "desc": "Registrar semelhanças, ênfases e diferenças de cada Evangelho.",
              "result": "Aren compreende que comparar não significa achatar os textos.",
              "effects": {
                "integrity": 2
              },
              "unlock": []
            },
            {
              "text": "Escolher apenas o detalhe mais conveniente",
              "desc": "Manter um único resumo e descartar as demais perspectivas.",
              "result": "O resumo é rápido, mas perde a pluralidade dos testemunhos.",
              "effects": {
                "integrity": -1
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "O deserto no códice",
          "narrative": "A tentação é estudada por meio dos relatos sinóticos. Aren não segue Jesus para o deserto nem inventa uma conversa que os textos não registram.",
          "prompt": "Que anotação deve acompanhar a entrada?",
          "choices": [
            {
              "text": "“Comparação dos relatos sinóticos”",
              "desc": "Indicar que a entrada é uma leitura comparativa, não uma observação independente de Aren.",
              "result": "A nota protege a distinção entre texto, reconstrução e ficção.",
              "effects": {
                "integrity": 1
              },
              "unlock": [
                "jesus"
              ]
            },
            {
              "text": "“Aren presenciou todos os acontecimentos”",
              "desc": "Tratar a viagem como licença para preencher lacunas narrativas.",
              "result": "O códice rejeita a anotação: Aren não pode reivindicar testemunho canônico.",
              "effects": {
                "integrity": -2
              },
              "unlock": []
            }
          ]
        }
      ],
      "codex": [
        "jesus"
      ]
    },
    {
      "n": 4,
      "title": "Pó de Cafarnaum",
      "act": "Ato II — O Caminho",
      "location": "Cafarnaum • Galileia",
      "objective": "Aprender a depender de pessoas locais e construir relações sem reduzir Sela e Mattan a ferramentas.",
      "opening": "Cafarnaum é estreita, movimentada e barulhenta. Aren erra ao interpretar um gesto de negociação no mercado. Sela bat Natan, comerciante de tecidos, percebe que ele não conhece os costumes locais. Mattan, seu irmão pescador, não confia no recém-chegado.",
      "base": "Contexto histórico aproximado (B); ecos de Mc 1–2 e Lc 4–5. Sela e Mattan são personagens ficcionais (D).",
      "stages": [
        {
          "title": "A remessa de tecidos",
          "narrative": "Sela precisa levar uma remessa antes do fim do movimento no mercado. Ela não pede que Aren seja seu protetor; pergunta apenas se ele pode ajudar a conferir as peças.",
          "prompt": "Como Aren responde?",
          "choices": [
            {
              "text": "Ajudar e seguir as instruções de Sela",
              "desc": "Aceitar uma tarefa concreta sem presumir que sabe como realizá-la.",
              "result": "Sela explica o percurso e a forma correta de conferir a remessa. A confiança nasce de respeito, não de heroísmo.",
              "effects": {
                "sela": 2,
                "community": 1
              },
              "unlock": []
            },
            {
              "text": "Priorizar imediatamente a missão",
              "desc": "Agradecer e seguir para procurar informações sobre Jesus.",
              "result": "Aren preserva tempo para a missão, mas Sela conclui a entrega sem ele.",
              "effects": {
                "sela": -1
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "O erro cultural",
          "narrative": "Mattan questiona a origem de Aren. A resposta automática do tradutor parece formal demais e quase ofensiva.",
          "prompt": "O que Aren faz?",
          "choices": [
            {
              "text": "Admitir que não conhece o costume",
              "desc": "Pedir que Sela explique como a situação deve ser entendida.",
              "result": "A conversa fica menos tensa. Sela não precisa corrigir uma certeza arrogante.",
              "effects": {
                "sela": 1,
                "mattan": 1
              },
              "unlock": []
            },
            {
              "text": "Insistir que o tradutor está correto",
              "desc": "Tratar a tradução como autoridade absoluta.",
              "result": "Mattan se fecha. Uma ferramenta útil não substitui escuta e contexto.",
              "effects": {
                "mattan": -2
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "A desconfiança de Mattan",
          "narrative": "Na margem do lago, Mattan pergunta se Aren está escondendo algo. A verdade completa não pode ser explicada sem colocar os dois em risco de confusão.",
          "prompt": "Qual resposta preserva a honestidade possível?",
          "choices": [
            {
              "text": "Contar que veio de muito longe e está tentando compreender",
              "desc": "Não inventar uma origem local; reconhecer os limites do que pode dizer.",
              "result": "Mattan continua desconfiado, mas percebe que Aren não está tentando dominá-lo.",
              "effects": {
                "mattan": 2,
                "sela": 1
              },
              "unlock": []
            },
            {
              "text": "Criar uma história conveniente",
              "desc": "Dizer que é mensageiro de uma região distante, sem base para sustentar a história.",
              "result": "A conversa termina, mas a confiança fica mais frágil.",
              "effects": {
                "mattan": -1
              },
              "unlock": []
            }
          ]
        }
      ],
      "codex": [
        "history"
      ]
    },
    {
      "n": 5,
      "title": "A Voz na Sinagoga",
      "act": "Ato II — O Caminho",
      "location": "Cafarnaum • Sinagoga",
      "objective": "Testemunhar o ensino de Jesus com sobriedade e distinguir relato de interpretação.",
      "opening": "Aren acompanha a reunião a uma distância respeitosa. O episódio é apresentado pela moldura de Marcos: Jesus ensina, e a narrativa descreve a reação dos presentes e a libertação de um homem. A direção evita transformar o episódio em espetáculo ou chefe de fase.",
      "base": "Mc 1:21–28; comparar Lc 4:31–37.",
      "stages": [
        {
          "title": "A reunião",
          "narrative": "O ambiente muda quando a autoridade do ensino é percebida pelos presentes. Aren não tem acesso a pensamentos secretos nem a uma gravação neutra de cada reação.",
          "prompt": "O que deve entrar no registro?",
          "choices": [
            {
              "text": "A sequência descrita em Marcos",
              "desc": "Anotar o que o texto narra e identificar a referência.",
              "result": "O registro mantém a cena ligada à fonte escolhida.",
              "effects": {
                "integrity": 2
              },
              "unlock": [
                "jesus"
              ]
            },
            {
              "text": "Uma explicação psicológica inventada",
              "desc": "Atribuir motivações internas a todos os presentes.",
              "result": "Aren percebe que a hipótese ultrapassa o que pode afirmar.",
              "effects": {
                "integrity": -1
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "O episódio",
          "narrative": "A narrativa bíblica descreve a libertação de um homem. A câmera não amplia a figura do espírito impuro nem acrescenta manifestações.",
          "prompt": "Como representar o acontecimento?",
          "choices": [
            {
              "text": "Manter a sobriedade do relato",
              "desc": "Deixar que a ação narrada seja o centro, sem efeitos inventados.",
              "result": "A cena preserva a dignidade do homem e a linguagem do Evangelho.",
              "effects": {
                "integrity": 1,
                "community": 1
              },
              "unlock": []
            },
            {
              "text": "Acrescentar sinais visuais espetaculares",
              "desc": "Tentar tornar a cena mais “compreensível” por meio de efeitos que o texto não descreve.",
              "result": "A equipe de registro marca o trecho como dramatização não autorizada.",
              "effects": {
                "integrity": -2
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "O limite do arquivo",
          "narrative": "Aren procura no equipamento uma explicação total para a cena. O sistema oferece apenas categorias de registro, não uma resposta sobre o sentido último do acontecimento.",
          "prompt": "Qual conclusão ele anota?",
          "choices": [
            {
              "text": "“O arquivo não substitui compreensão”",
              "desc": "Reconhecer o limite do método sem negar o que o texto testemunha.",
              "result": "Aren começa a distinguir precisão documental de sabedoria.",
              "effects": {
                "integrity": 1
              },
              "unlock": []
            },
            {
              "text": "“Tudo que não medi não aconteceu”",
              "desc": "Reduzir o episódio ao que o equipamento consegue quantificar.",
              "result": "A conclusão confunde limite do instrumento com limite da realidade.",
              "effects": {
                "integrity": -2
              },
              "unlock": []
            }
          ]
        }
      ],
      "codex": [
        "jesus"
      ]
    },
    {
      "n": 6,
      "title": "Redes e Chamados",
      "act": "Ato II — O Caminho",
      "location": "Mar da Galileia",
      "objective": "Ajudar Mattan e observar o chamado dos primeiros discípulos sem interferir nele.",
      "opening": "Mattan precisa remendar uma rede danificada. A tarefa é cotidiana, repetitiva e exige paciência. Mais tarde, Aren observa o chamado de Pedro, André, Tiago e João conforme a moldura evangélica selecionada. O protagonista está perto da história, mas não é seu centro.",
      "base": "Mc 1:16–20; Lc 5:1–11.",
      "stages": [
        {
          "title": "A rede",
          "narrative": "A rede se rompeu em mais de um ponto. Mattan sabe repará-la, mas está cansado e irritado com o desperdício.",
          "prompt": "Como Aren ajuda?",
          "choices": [
            {
              "text": "Aprender a técnica com Mattan",
              "desc": "Pedir demonstração e seguir o método do pescador.",
              "result": "A tarefa avança devagar. Mattan percebe que Aren está disposto a aprender.",
              "effects": {
                "mattan": 2
              },
              "unlock": []
            },
            {
              "text": "Tentar resolver sozinho",
              "desc": "Puxar os fios sem compreender a trama.",
              "result": "A rede fica mais confusa e Mattan precisa refazer parte do trabalho.",
              "effects": {
                "mattan": -1
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "O chamado",
          "narrative": "Aren vê os irmãos deixando redes e trabalho para seguir Jesus, conforme o relato escolhido. A sequência não pode ser alterada pelo jogador.",
          "prompt": "Como registrar a decisão dos pescadores?",
          "choices": [
            {
              "text": "Como chamado narrado pelo Evangelho",
              "desc": "Identificar a fonte e não atribuir a Aren qualquer influência.",
              "result": "O códice registra Mc 1:16–20 como base desta cena.",
              "effects": {
                "integrity": 2
              },
              "unlock": [
                "jesus"
              ]
            },
            {
              "text": "Como consequência da ajuda de Aren",
              "desc": "Sugerir que a tarefa anterior causou o chamado.",
              "result": "A hipótese é rejeitada: coincidência temporal não demonstra causalidade.",
              "effects": {
                "integrity": -2
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "Coragem",
          "narrative": "Depois, Mattan comenta que sempre pensou em coragem como dominar o medo e provar força. A experiência do dia o fez reconsiderar.",
          "prompt": "O que Aren reconhece?",
          "choices": [
            {
              "text": "Coragem também pode ser cuidar e permanecer",
              "desc": "Valorizar a responsabilidade cotidiana sem transformar Mattan em herói de combate.",
              "result": "Mattan não muda de personalidade de uma vez, mas a conversa abre espaço para confiança.",
              "effects": {
                "mattan": 1,
                "community": 1
              },
              "unlock": []
            },
            {
              "text": "Coragem é nunca demonstrar dúvida",
              "desc": "Reforçar uma expectativa de invulnerabilidade.",
              "result": "Mattan encerra a conversa. A frase não ajuda alguém que está aprendendo a cuidar.",
              "effects": {
                "mattan": -1
              },
              "unlock": []
            }
          ]
        }
      ],
      "codex": [
        "jesus",
        "history"
      ]
    },
    {
      "n": 7,
      "title": "O Monte e a Multidão",
      "act": "Ato II — O Caminho",
      "location": "Galileia • encosta do monte",
      "objective": "Acompanhar o Sermão da Montanha e compreender que ensino não é ferramenta de controle.",
      "opening": "A multidão se distribui pela encosta. Aren escolhe um lugar de onde possa ouvir sem empurrar os demais. A cena seleciona passagens de Mateus 5–7. O códice oferece Lucas 6:17–49 para comparação, sem declarar que as duas composições sejam cronologicamente idênticas.",
      "base": "Mt 5–7; comparar Lc 6:17–49. Não são acrescentadas falas novas a Jesus.",
      "stages": [
        {
          "title": "A atenção",
          "narrative": "Aren percebe que algumas pessoas anotam frases, enquanto outras escutam sem escrever. A interface permite marcar temas, mas não substitui a escuta.",
          "prompt": "Qual tema ele acompanha primeiro?",
          "choices": [
            {
              "text": "Bem-aventuranças e caráter do Reino",
              "desc": "Registrar a estrutura do ensino e sua orientação ética.",
              "result": "O códice organiza a entrada por temas sem reduzir o discurso a um slogan.",
              "effects": {
                "integrity": 1
              },
              "unlock": [
                "jesus"
              ]
            },
            {
              "text": "Uma lista de frases para convencer o Conselho",
              "desc": "Extrair sentenças isoladas como ferramenta de propaganda.",
              "result": "Aren reconhece que usar o ensino como instrumento de controle repetiria o erro do projeto.",
              "effects": {
                "integrity": -1,
                "mara": -1
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "Mateus e Lucas",
          "narrative": "O códice coloca lado a lado os discursos de Mateus e Lucas e sinaliza diferenças de organização e ênfase.",
          "prompt": "Como apresentar a comparação?",
          "choices": [
            {
              "text": "Manter as duas formas lado a lado",
              "desc": "Explicar semelhanças e diferenças sem forçar identidade total.",
              "result": "O leitor pode consultar cada Evangelho em seu próprio contexto.",
              "effects": {
                "integrity": 2
              },
              "unlock": []
            },
            {
              "text": "Apagar as diferenças para simplificar",
              "desc": "Criar uma única versão sem indicar as decisões editoriais.",
              "result": "A síntese parece mais limpa, mas esconde o método usado.",
              "effects": {
                "integrity": -1
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "O que não se controla",
          "narrative": "Aren fecha o registro automático. O ensino não pode ser convertido em algoritmo de obediência; o sentido exige responsabilidade de quem escuta.",
          "prompt": "Que nota encerra a entrada?",
          "choices": [
            {
              "text": "“Ouvir exige prática e discernimento”",
              "desc": "Tratar o ensino como convite à transformação, não como senha de poder.",
              "result": "Aren registra a frase como reflexão pessoal, não como citação bíblica.",
              "effects": {
                "integrity": 1,
                "community": 1
              },
              "unlock": []
            },
            {
              "text": "“O conhecimento garante autoridade”",
              "desc": "Confundir saber organizar palavras com ter autoridade sobre pessoas.",
              "result": "O registro revela a antiga tentação de Aren: controlar aquilo que deveria compreender.",
              "effects": {
                "integrity": -1
              },
              "unlock": []
            }
          ]
        }
      ],
      "codex": [
        "jesus"
      ]
    },
    {
      "n": 8,
      "title": "O Vento e o Mar",
      "act": "Ato II — O Caminho",
      "location": "Mar da Galileia",
      "objective": "Ajudar a manter a embarcação segura e testemunhar a tempestade acalmada sem inventar um combate.",
      "opening": "O céu fecha enquanto a embarcação atravessa o lago. A água bate de lado e os sons se misturam. Aren recebe tarefas concretas de segurança: firmar carga, recolher objetos soltos e manter espaço para que os passageiros se movam. O milagre não é um minijogo nem uma conquista do protagonista.",
      "base": "Mc 4:35–41; Mt 8:23–27; Lc 8:22–25.",
      "stages": [
        {
          "title": "A embarcação",
          "narrative": "A primeira rajada desloca os objetos. Mattan pede que Aren ajude a manter o espaço de passagem livre.",
          "prompt": "Qual ação é mais responsável?",
          "choices": [
            {
              "text": "Prender a carga e liberar a passagem",
              "desc": "Priorizar segurança coletiva e seguir a orientação de quem conhece o barco.",
              "result": "A embarcação continua difícil de manejar, mas as pessoas conseguem se mover com menos risco.",
              "effects": {
                "community": 2,
                "mattan": 1
              },
              "unlock": []
            },
            {
              "text": "Correr para o equipamento de registro",
              "desc": "Proteger primeiro a máquina, deixando a tarefa comum para os demais.",
              "result": "O equipamento permanece seco, mas Mattan percebe a prioridade escolhida.",
              "effects": {
                "community": -1,
                "mattan": -1
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "O silêncio",
          "narrative": "A cena segue o Evangelho-base. A água se aquieta conforme o relato; o jogo não adiciona criatura, arma ou explicação mecânica.",
          "prompt": "Como Aren registra o acontecimento?",
          "choices": [
            {
              "text": "Descrever a sequência e citar a fonte",
              "desc": "Separar a narrativa evangélica da interpretação pessoal.",
              "result": "O registro é completo sem afirmar uma explicação além do texto.",
              "effects": {
                "integrity": 2
              },
              "unlock": [
                "jesus"
              ]
            },
            {
              "text": "Afirmar que a máquina detectou a causa",
              "desc": "Inventar uma medição que o equipamento não possui.",
              "result": "O sistema não confirma a afirmação. Aren precisa corrigir o campo de interpretação.",
              "effects": {
                "integrity": -2
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "A pergunta",
          "narrative": "Depois da travessia, ninguém recebe uma explicação pronta de Aren. A pergunta sobre identidade e autoridade permanece no centro do relato.",
          "prompt": "Qual atitude ele escolhe?",
          "choices": [
            {
              "text": "Manter a interpretação aberta e estudar o texto",
              "desc": "Registrar a pergunta do episódio sem fingir que a resolveu.",
              "result": "Aren aceita que testemunhar não é possuir todas as respostas.",
              "effects": {
                "integrity": 1
              },
              "unlock": []
            },
            {
              "text": "Encerrar o assunto com uma teoria definitiva",
              "desc": "Apresentar sua hipótese como fato comprovado.",
              "result": "A pressa por conclusão enfraquece a qualidade do arquivo.",
              "effects": {
                "integrity": -1
              },
              "unlock": []
            }
          ]
        }
      ],
      "codex": [
        "jesus"
      ]
    },
    {
      "n": 9,
      "title": "Pão para a Multidão",
      "act": "Ato II — O Caminho",
      "location": "Região do lago • Galileia",
      "objective": "Ajudar pessoas ficcionais a reencontrarem familiares e não atribuir a multiplicação ao jogador.",
      "opening": "A multidão aumenta. Uma criança se separa de quem a acompanha; um homem procura a mãe idosa; pessoas se deslocam sem saber onde encontrar água. Aren pode ajudar a organizar encontros, mas não realiza a multiplicação dos pães nem controla o episódio.",
      "base": "Mc 6:30–44; Mt 14:13–21; Lc 9:10–17; Jo 6:1–14.",
      "stages": [
        {
          "title": "Pessoas, não números",
          "narrative": "Aren vê a multidão como um conjunto de dados até perceber que cada linha corresponde a alguém procurando outra pessoa.",
          "prompt": "O que ele prioriza?",
          "choices": [
            {
              "text": "Ajudar a reunir familiares",
              "desc": "Organizar referências simples e acompanhar a pessoa até o ponto combinado.",
              "result": "Duas famílias se reencontram. A cena devolve rostos aos números.",
              "effects": {
                "community": 2,
                "sela": 1
              },
              "unlock": []
            },
            {
              "text": "Contar a multidão primeiro",
              "desc": "Coletar números para o relatório antes de ajudar quem procura parentes.",
              "result": "O levantamento fica mais completo, mas a necessidade imediata permanece.",
              "effects": {
                "community": -1
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "O alimento",
          "narrative": "A narrativa da multiplicação segue uma das molduras evangélicas. Aren não distribui um alimento que o texto atribui ao acontecimento de Jesus.",
          "prompt": "Qual é a função do registro?",
          "choices": [
            {
              "text": "Documentar a fonte e o contexto",
              "desc": "Indicar o relato escolhido e comparar as demais versões no códice.",
              "result": "O episódio é registrado sem transformar o jogador em agente do sinal.",
              "effects": {
                "integrity": 2
              },
              "unlock": [
                "jesus"
              ]
            },
            {
              "text": "Atribuir a Aren a solução da escassez",
              "desc": "Fazer o protagonista parecer responsável pelo milagre.",
              "result": "O roteiro recusa essa alteração: o centro do episódio não é Aren.",
              "effects": {
                "integrity": -2
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "O que permanece",
          "narrative": "Mattan observa o reencontro de famílias e comenta que força e cálculo não explicam tudo o que viu.",
          "prompt": "Como Aren responde?",
          "choices": [
            {
              "text": "Valorizar a dignidade de quem foi ajudado",
              "desc": "Reconhecer que a tarefa humana foi cuidar de pessoas, não reivindicar o acontecimento.",
              "result": "Mattan passa a enxergar cuidado como parte da coragem.",
              "effects": {
                "mattan": 1,
                "community": 1
              },
              "unlock": []
            },
            {
              "text": "Transformar a ajuda em propaganda pessoal",
              "desc": "Registrar o feito de Aren como se fosse o centro da cena.",
              "result": "Aren repete o impulso de fazer de cada experiência uma prova sobre si.",
              "effects": {
                "mattan": -1,
                "integrity": -1
              },
              "unlock": []
            }
          ]
        }
      ],
      "codex": [
        "jesus"
      ]
    },
    {
      "n": 10,
      "title": "A Casa de Betânia",
      "act": "Ato II — O Caminho",
      "location": "Betânia • Judeia",
      "objective": "Acompanhar o luto e a esperança em João 11 sem interferir no episódio.",
      "opening": "A casa está cheia de pessoas que vieram estar com a família. Marta e Maria vivem o luto de Lázaro; a narrativa se desenvolve conforme João 11. Aren permanece observador. Não existe conversa secreta com Jesus para preencher lacunas, nem ação do jogador junto ao túmulo.",
      "base": "Jo 11:1–44.",
      "stages": [
        {
          "title": "A chegada",
          "narrative": "Aren encontra pessoas tentando ajudar de maneiras diferentes. Algumas falam; outras apenas permanecem perto da família.",
          "prompt": "Que postura ele adota?",
          "choices": [
            {
              "text": "Oferecer presença e ouvir",
              "desc": "Não exigir explicações nem tentar corrigir o luto dos outros.",
              "result": "A casa não fica menos triste, mas Aren não transforma a dor em tarefa de pesquisa.",
              "effects": {
                "community": 2,
                "sela": 1
              },
              "unlock": []
            },
            {
              "text": "Fazer perguntas para completar o relatório",
              "desc": "Priorizar detalhes de cronologia diante de pessoas enlutadas.",
              "result": "Aren percebe que a busca por informação pode ser invasiva.",
              "effects": {
                "community": -1,
                "sela": -1
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "O relato de João",
          "narrative": "O episódio apresenta a chegada de Jesus, o luto e o chamado de Lázaro, conforme o texto selecionado.",
          "prompt": "Como preservar a moldura?",
          "choices": [
            {
              "text": "Usar João 11 como fonte-base",
              "desc": "Indicar a referência e deixar claro que Aren não altera a sequência.",
              "result": "A entrada do códice fica vinculada ao texto que estrutura a cena.",
              "effects": {
                "integrity": 2
              },
              "unlock": [
                "jesus"
              ]
            },
            {
              "text": "Criar uma conversa adicional no caminho",
              "desc": "Inventar uma fala privada para explicar o que o texto não detalha.",
              "result": "Aren remove a passagem do arquivo principal e a marca como ficção não utilizada.",
              "effects": {
                "integrity": -2
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "A esperança",
          "narrative": "Aren observa que a esperança no episódio não apaga a realidade do luto. A missão de coletar dados já não parece suficiente para compreender o que está acontecendo.",
          "prompt": "Qual anotação pessoal ele faz?",
          "choices": [
            {
              "text": "“A esperança não exige fingir que a dor não existe”",
              "desc": "Separar a reflexão pessoal da narração bíblica.",
              "result": "A nota fica no diário de Aren, não no texto do Evangelho.",
              "effects": {
                "integrity": 1,
                "community": 1
              },
              "unlock": []
            },
            {
              "text": "“A fé elimina toda tristeza imediatamente”",
              "desc": "Reduzir a cena a uma fórmula emocional.",
              "result": "A frase não corresponde à complexidade do relato nem às pessoas presentes.",
              "effects": {
                "integrity": -1
              },
              "unlock": []
            }
          ]
        }
      ],
      "codex": [
        "jesus"
      ]
    },
    {
      "n": 11,
      "title": "A Estrada para Jerusalém",
      "act": "Ato II — O Caminho",
      "location": "Estradas da Judeia",
      "objective": "Compreender expectativas diversas sem representar um povo inteiro por uma única opinião.",
      "opening": "Aren viaja com peregrinos. Sela e Mattan discutem o futuro em termos muito diferentes: ela pensa em estabilidade para o comércio e a família; ele fala de mudança com impaciência. Nenhum dos dois representa todos os judeus do período. Jerusalém cresce no horizonte como centro religioso, político e econômico.",
      "base": "Mc 10–11; Lc 18–19; contexto histórico aproximado (B).",
      "stages": [
        {
          "title": "A conversa na estrada",
          "narrative": "Um peregrino pergunta o que as pessoas esperam de Jerusalém. As respostas variam conforme história, posição social e esperança religiosa.",
          "prompt": "Como Aren conduz o registro?",
          "choices": [
            {
              "text": "Registrar a diversidade de expectativas",
              "desc": "Identificar quem falou e evitar generalizar a partir de poucas pessoas.",
              "result": "O arquivo conserva vozes distintas sem convertê-las em consenso.",
              "effects": {
                "integrity": 2,
                "community": 1
              },
              "unlock": []
            },
            {
              "text": "Escolher uma resposta como opinião de todos",
              "desc": "Simplificar a narrativa com uma única expectativa coletiva.",
              "result": "Aren percebe que a generalização é confortável, mas falsa.",
              "effects": {
                "integrity": -2
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "O desvio",
          "narrative": "Sela precisa visitar um contato de comércio; Mattan quer seguir diretamente. Ambos apresentam razões legítimas.",
          "prompt": "Com quem Aren segue?",
          "choices": [
            {
              "text": "Acompanhar Sela e ouvir sua preocupação",
              "desc": "Respeitar sua autonomia e compreender a rede de relações que sustenta a viagem.",
              "result": "Sela compartilha informações sobre a cidade e os custos da jornada.",
              "effects": {
                "sela": 2,
                "community": 1
              },
              "unlock": []
            },
            {
              "text": "Acompanhar Mattan até o lago mais próximo",
              "desc": "Aceitar o desejo de seguir rápido, sem desqualificar Sela.",
              "result": "Mattan compartilha seu receio de perder o momento histórico.",
              "effects": {
                "mattan": 1
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "A cidade",
          "narrative": "Ao se aproximarem, Aren percebe que Jerusalém não é cenário abstrato: é cidade de culto, administração, comércio e peregrinação.",
          "prompt": "Que preparação ele faz?",
          "choices": [
            {
              "text": "Consultar o contexto antes de interpretar",
              "desc": "Abrir o códice sobre Templo, autoridades e peregrinação.",
              "result": "Aren chega com perguntas melhores e menos certezas precipitadas.",
              "effects": {
                "integrity": 1
              },
              "unlock": [
                "history"
              ]
            },
            {
              "text": "Tratar a cidade como pano de fundo",
              "desc": "Ignorar o contexto para procurar apenas os eventos principais.",
              "result": "A missão fica mais rápida, mas perde a textura histórica.",
              "effects": {
                "integrity": -1
              },
              "unlock": []
            }
          ]
        }
      ],
      "codex": [
        "history"
      ]
    },
    {
      "n": 12,
      "title": "A Cidade e o Templo",
      "act": "Ato III — A Cruz e a Manhã",
      "location": "Jerusalém • Templo",
      "objective": "Registrar a entrada em Jerusalém e a controvérsia no Templo sem simplificações étnicas.",
      "opening": "A cidade está cheia de peregrinos. A sequência da entrada e da controvérsia no Templo segue Marcos. O códice informa que João apresenta a purificação do Templo em outra posição narrativa. Aren observa diferenças sem inventar uma causa única para todos os acontecimentos.",
      "base": "Mc 11:1–19; Mt 21:1–17; Lc 19:28–48; comparar Jo 2:13–22.",
      "stages": [
        {
          "title": "A entrada",
          "narrative": "A chegada pública é narrada segundo Marcos. A multidão não é uma personagem homogênea; cada pessoa reage de modo próprio.",
          "prompt": "Como Aren registra a cena?",
          "choices": [
            {
              "text": "Preservar a moldura de Marcos e a diversidade",
              "desc": "Não converter a reação de alguns em descrição de todos.",
              "result": "O arquivo evita generalizações e mantém a fonte-base.",
              "effects": {
                "integrity": 2
              },
              "unlock": [
                "jesus"
              ]
            },
            {
              "text": "Descrever todos como um único bloco",
              "desc": "Tratar a multidão como se tivesse a mesma intenção.",
              "result": "Aren corrige a categoria: uma multidão não possui uma única voz.",
              "effects": {
                "integrity": -1
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "O Templo",
          "narrative": "A controvérsia é apresentada sem transformar os judeus do período em grupo culpado ou uniforme. A narrativa diz respeito a ações e autoridades situadas.",
          "prompt": "Que contexto deve acompanhar a cena?",
          "choices": [
            {
              "text": "Templo, peregrinação e autoridade",
              "desc": "Explicar o papel religioso e social do espaço.",
              "result": "O códice contextualiza o episódio sem reduzir a história a conflito étnico.",
              "effects": {
                "integrity": 1
              },
              "unlock": [
                "history"
              ]
            },
            {
              "text": "Uma explicação étnica simplista",
              "desc": "Atribuir responsabilidade coletiva a um povo inteiro.",
              "result": "A anotação é recusada por distorcer o contexto histórico e o próprio cuidado do roteiro.",
              "effects": {
                "integrity": -2
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "As diferenças dos relatos",
          "narrative": "João situa a purificação do Templo em outra posição narrativa. O jogo não resolve a diferença por imposição.",
          "prompt": "Como o códice apresenta a comparação?",
          "choices": [
            {
              "text": "Mostrar as posições de cada Evangelho",
              "desc": "Permitir consulta às duas estruturas narrativas.",
              "result": "A comparação permanece aberta e identificada.",
              "effects": {
                "integrity": 2
              },
              "unlock": []
            },
            {
              "text": "Apagar uma das posições",
              "desc": "Forçar uma cronologia única sem explicar a decisão.",
              "result": "A simplicidade custa transparência documental.",
              "effects": {
                "integrity": -1
              },
              "unlock": []
            }
          ]
        }
      ],
      "codex": [
        "jesus",
        "history"
      ]
    },
    {
      "n": 13,
      "title": "A Mesa e a Memória",
      "act": "Ato III — A Cruz e a Manhã",
      "location": "Jerusalém • lugar da ceia",
      "objective": "Apresentar a Última Ceia sem inserir Aren entre os discípulos.",
      "opening": "A noite se aproxima. Aren acompanha os acontecimentos de fora do círculo dos discípulos. A cena-base segue Marcos 14; o códice permite consultar as formas preservadas por Mateus, Lucas e João. A tela de extração reaparece, agora com uma urgência que não combina com o que Aren está testemunhando.",
      "base": "Mc 14:12–26; Mt 26:17–30; Lc 22:7–23; Jo 13–17.",
      "stages": [
        {
          "title": "O lugar de Aren",
          "narrative": "A interface oferece uma posição fictícia à mesa, como se a presença do protagonista pudesse torná-lo parte do relato. O roteiro não permite essa alteração.",
          "prompt": "Onde Aren permanece?",
          "choices": [
            {
              "text": "Do lado de fora, como observador ficcional",
              "desc": "Reconhecer que não ocupa lugar entre os discípulos.",
              "result": "O registro preserva a distinção entre a história bíblica e a presença inventada do jogador.",
              "effects": {
                "integrity": 2
              },
              "unlock": [
                "jesus"
              ]
            },
            {
              "text": "Inserir-se na mesa",
              "desc": "Tentar garantir uma posição no centro do acontecimento.",
              "result": "A cena é interrompida e a opção é marcada como incompatível com a continuidade.",
              "effects": {
                "integrity": -2
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "A memória",
          "narrative": "A cena segue a moldura de Marcos. O códice mostra referências paralelas, mas não atribui novas falas a Jesus.",
          "prompt": "Como registrar as diferenças?",
          "choices": [
            {
              "text": "Guardar a fonte-base e as referências paralelas",
              "desc": "Manter cada relato identificável.",
              "result": "Aren preserva uma comparação que poderá ser revista sem reescrever o texto.",
              "effects": {
                "integrity": 1
              },
              "unlock": []
            },
            {
              "text": "Fundir tudo em um diálogo novo",
              "desc": "Criar uma cena composta e atribuí-la ao Evangelho.",
              "result": "A opção é descartada por inventar falas e ocultar a composição.",
              "effects": {
                "integrity": -2
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "A extração",
          "narrative": "O sinal do Instituto volta a piscar: retorno imediato. Aren entende que cumprir a ordem literal significaria tratar a pessoa de Jesus como objeto de transporte.",
          "prompt": "O que ele faz com o marcador?",
          "choices": [
            {
              "text": "Preparar-se para desligá-lo no momento adequado",
              "desc": "Registrar a mudança de entendimento sem agir antes da cena necessária.",
              "result": "Aren decide que não usará a máquina para capturar Jesus.",
              "effects": {
                "integrity": 1,
                "ishan": 1
              },
              "unlock": []
            },
            {
              "text": "Manter a extração como prioridade",
              "desc": "Deixar o objetivo operacional acima do limite ético.",
              "result": "A ordem permanece na interface, mas a convicção de Aren está abalada.",
              "effects": {
                "integrity": -1,
                "ishan": -1
              },
              "unlock": []
            }
          ]
        }
      ],
      "codex": [
        "jesus"
      ]
    },
    {
      "n": 14,
      "title": "A Noite do Jardim",
      "act": "Ato III — A Cruz e a Manhã",
      "location": "Getsêmani • Jerusalém",
      "objective": "Acompanhar a prisão com sobriedade e escolher entre o equipamento e a integridade do registro.",
      "opening": "O jardim está escuro. Aren permanece distante, sem tomar o lugar de qualquer discípulo. A narrativa segue a moldura de Marcos; os outros Evangelhos permanecem acessíveis no códice. Quando a prisão começa, o equipamento emite um aviso de falha.",
      "base": "Mc 14:32–52; comparar Mt 26; Lc 22; Jo 18.",
      "stages": [
        {
          "title": "A distância",
          "narrative": "A cena não oferece uma missão de combate. Aren não pode impedir a prisão nem criar um resgate heroico que o texto não registra.",
          "prompt": "Como ele se posiciona?",
          "choices": [
            {
              "text": "Manter distância e não interferir",
              "desc": "Preservar o limite de observador e não ampliar o episódio.",
              "result": "Aren deixa a sequência histórica seguir sem transformá-la em aventura de ação.",
              "effects": {
                "integrity": 2
              },
              "unlock": []
            },
            {
              "text": "Correr para alterar o acontecimento",
              "desc": "Tentar mudar a prisão por uma ação improvisada.",
              "result": "A cena retorna ao limite narrativo: Aren não reescreve a Paixão.",
              "effects": {
                "integrity": -2
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "A falha do equipamento",
          "narrative": "Um aviso exige que Aren escolha qual função proteger: o núcleo temporal ou o registro local da sequência.",
          "prompt": "Qual prioridade faz sentido?",
          "choices": [
            {
              "text": "Preservar o registro local",
              "desc": "Aceitar que o equipamento pode ser perdido, mas a memória da cena não deve ser falsificada.",
              "result": "O registro permanece. O alerta de extração continua ativo.",
              "effects": {
                "integrity": 2,
                "ishan": 1
              },
              "unlock": []
            },
            {
              "text": "Proteger o núcleo temporal",
              "desc": "Salvar a possibilidade de retorno, mesmo com risco de perda parcial do registro.",
              "result": "Aren preserva a máquina. O arquivo registra a lacuna de forma explícita.",
              "effects": {
                "ishan": 1,
                "integrity": -1
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "A ordem de retorno",
          "narrative": "A interface exige extração imediata. A história bíblica não depende do funcionamento da máquina, e a missão precisa ser repensada.",
          "prompt": "O que Aren decide?",
          "choices": [
            {
              "text": "Não usar o sinal para interromper a Paixão",
              "desc": "Adiar a extração e manter a decisão de não capturar Jesus.",
              "result": "Aren assume a responsabilidade por retornar sem transformar Jesus em carga.",
              "effects": {
                "integrity": 1,
                "ishan": 1
              },
              "unlock": []
            },
            {
              "text": "Tentar uma última intervenção",
              "desc": "Buscar uma brecha para controlar o que não lhe pertence.",
              "result": "A tentativa falha e reforça o limite ético da missão.",
              "effects": {
                "integrity": -2
              },
              "unlock": []
            }
          ]
        }
      ],
      "codex": [
        "jesus"
      ]
    },
    {
      "n": 15,
      "title": "O Julgamento",
      "act": "Ato III — A Cruz e a Manhã",
      "location": "Jerusalém • autoridades locais e romanas",
      "objective": "Compreender a sequência do julgamento sem inventar conversas privadas ou motivos simplistas.",
      "opening": "Aren observa a sequência escolhida em Marcos. O códice permite comparar os relatos de Mateus, Lucas e João. O papel da autoridade romana é registrado no contexto da administração da Judeia, sem apagar as diferenças entre os textos nem atribuir culpa coletiva a um povo.",
      "base": "Mc 14:53–15:15; comparar Mt 26–27; Lc 22–23; Jo 18–19.",
      "stages": [
        {
          "title": "As fontes",
          "narrative": "As versões evangélicas não são cópias idênticas. Cada uma organiza cenas, ênfases e falas em sua própria forma.",
          "prompt": "Como Aren monta a linha do tempo?",
          "choices": [
            {
              "text": "Adotar Marcos como base e anotar comparações",
              "desc": "Manter a fonte principal visível e as demais em paralelo.",
              "result": "A linha do tempo fica auditável e não esconde suas escolhas editoriais.",
              "effects": {
                "integrity": 2
              },
              "unlock": [
                "jesus",
                "history"
              ]
            },
            {
              "text": "Criar um diálogo privado para explicar tudo",
              "desc": "Inventar uma conversa que torne os motivos mais simples.",
              "result": "Aren retira o trecho: nenhuma fonte apresentada sustenta a conversa.",
              "effects": {
                "integrity": -2
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "Autoridade e contexto",
          "narrative": "A sequência menciona autoridades locais e a autoridade romana. O cenário histórico é complexo e não cabe em uma acusação coletiva.",
          "prompt": "Qual linguagem é mais responsável?",
          "choices": [
            {
              "text": "Distinguir atores, instituições e contexto",
              "desc": "Identificar cada autoridade conforme a fonte e o período.",
              "result": "O registro evita transformar instituições e povos em blocos indiferenciados.",
              "effects": {
                "integrity": 1
              },
              "unlock": []
            },
            {
              "text": "Atribuir culpa a todo um povo",
              "desc": "Usar uma generalização para encerrar a investigação.",
              "result": "A anotação é marcada como inadequada e removida do resumo.",
              "effects": {
                "integrity": -2
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "O registro final",
          "narrative": "Aren percebe que a ordem de extração continua ativa, mas já não pode ser confundida com a finalidade da missão.",
          "prompt": "O que ele preserva?",
          "choices": [
            {
              "text": "O que cada fonte diz e o que não diz",
              "desc": "Deixar lacunas identificadas sem preenchê-las com especulação.",
              "result": "A integridade do arquivo é preservada mesmo diante da urgência.",
              "effects": {
                "integrity": 2
              },
              "unlock": []
            },
            {
              "text": "Apenas a versão que melhor serve ao projeto",
              "desc": "Escolher o material por utilidade política.",
              "result": "O arquivo começa a repetir a lógica da instituição que o enviou.",
              "effects": {
                "integrity": -2,
                "mara": -1
              },
              "unlock": []
            }
          ]
        }
      ],
      "codex": [
        "jesus",
        "history"
      ]
    },
    {
      "n": 16,
      "title": "Fora dos Muros",
      "act": "Ato III — A Cruz e a Manhã",
      "location": "Jerusalém • fora dos muros",
      "objective": "Representar a crucificação com respeito e encerrar a possibilidade de transportar Jesus.",
      "opening": "A câmera permanece com Aren e com as pessoas presentes. Não há enquadramento gráfico. O marcador de extração pulsa no canto da tela. A cena segue Marcos 15:16–41; os relatos paralelos permanecem no códice. Aren não pode impedir a crucificação nem reivindicar um lugar entre as testemunhas canônicas.",
      "base": "Mc 15:16–41; comparar Mt 27; Lc 23; Jo 19.",
      "stages": [
        {
          "title": "A câmera",
          "narrative": "O diretor de cena oferece duas distâncias de observação. A escolha determina a sobriedade do enquadramento, não o que acontece.",
          "prompt": "Como observar?",
          "choices": [
            {
              "text": "Manter a câmera com as pessoas e o ambiente",
              "desc": "Evitar imagens gráficas e manter o foco na dignidade humana.",
              "result": "A cena permanece contida e respeitosa.",
              "effects": {
                "community": 1,
                "integrity": 1
              },
              "unlock": []
            },
            {
              "text": "Aproximar a câmera para provocar impacto",
              "desc": "Buscar choque visual como substituto de significado.",
              "result": "A direção rejeita o excesso e retorna à linguagem sóbria definida para a obra.",
              "effects": {
                "integrity": -1
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "O marcador",
          "narrative": "O sistema de extração oferece uma última janela. A decisão de desligá-lo não altera a Paixão; apenas encerra a intenção de transportar Jesus.",
          "prompt": "Qual é a decisão de Aren?",
          "choices": [
            {
              "text": "Desativar o marcador de extração",
              "desc": "Abandonar definitivamente a ideia de capturar ou transportar Jesus.",
              "result": "O sinal se apaga. Aren retorna sozinho quando a janela segura permitir.",
              "effects": {
                "integrity": 2,
                "ishan": 1
              },
              "unlock": []
            },
            {
              "text": "Manter o marcador ativo",
              "desc": "Preservar uma ordem que já não pode ser considerada legítima.",
              "result": "A máquina mantém o comando, mas Aren sabe que a missão mudou de sentido.",
              "effects": {
                "integrity": -2,
                "ishan": -1
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "O silêncio",
          "narrative": "O episódio prossegue conforme o Evangelho-base. Aren não cria uma fala para preencher o silêncio nem atribui à máquina uma explicação teológica.",
          "prompt": "O que ele escreve?",
          "choices": [
            {
              "text": "Uma referência e uma nota de limite",
              "desc": "Registrar Marcos 15 e declarar que Aren não altera o acontecimento.",
              "result": "O arquivo fecha a cena sem reivindicar autoridade sobre ela.",
              "effects": {
                "integrity": 2
              },
              "unlock": [
                "jesus"
              ]
            },
            {
              "text": "Uma conclusão que o texto não afirma",
              "desc": "Transformar a própria emoção em explicação universal.",
              "result": "A nota é mantida apenas no diário pessoal, identificada como interpretação.",
              "effects": {
                "integrity": -1
              },
              "unlock": []
            }
          ]
        }
      ],
      "codex": [
        "jesus"
      ]
    },
    {
      "n": 17,
      "title": "A Manhã e o Túmulo",
      "act": "Ato III — A Cruz e a Manhã",
      "location": "Jerusalém • túmulo",
      "objective": "Apresentar o anúncio da ressurreição segundo João 20 sem usar gravação futura como prova tecnológica.",
      "opening": "A manhã começa antes que a cidade desperte por completo. A cena acompanha Maria Madalena conforme João 20. Aren permanece observador ficcional e não reivindica posição de testemunha canônica adicional. O equipamento não transforma a ressurreição em um dado laboratorial.",
      "base": "Jo 20:1–18; comparar Mt 28; Mc 16; Lc 24.",
      "stages": [
        {
          "title": "O túmulo",
          "narrative": "A cena segue João 20. Maria Madalena encontra o túmulo vazio e anuncia o ocorrido conforme o relato selecionado.",
          "prompt": "Como Aren identifica o acontecimento?",
          "choices": [
            {
              "text": "Como testemunho do Evangelho de João",
              "desc": "Citar a moldura e manter os outros relatos consultáveis.",
              "result": "Aren registra o anúncio sem inserir-se no grupo de testemunhas do texto.",
              "effects": {
                "integrity": 2
              },
              "unlock": [
                "jesus"
              ]
            },
            {
              "text": "Como resultado de uma gravação da máquina",
              "desc": "Afirmar que o equipamento futuro prova o acontecimento.",
              "result": "O sistema não oferece essa prova; o registro é corrigido para não confundir ficção tecnológica e testemunho evangélico.",
              "effects": {
                "integrity": -2
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "As mulheres e os relatos",
          "narrative": "O códice mostra que os Evangelhos apresentam suas próprias sequências e ênfases para a manhã da ressurreição.",
          "prompt": "Qual é a atitude editorial?",
          "choices": [
            {
              "text": "Comparar os relatos sem apagá-los",
              "desc": "Manter as diferenças visíveis para quem desejar estudar.",
              "result": "A comparação respeita cada texto e a forma como transmite o testemunho.",
              "effects": {
                "integrity": 2
              },
              "unlock": []
            },
            {
              "text": "Combinar os detalhes sem identificar fontes",
              "desc": "Criar uma narrativa composta como se fosse um relato único.",
              "result": "A síntese é marcada como harmonização, não como texto de um Evangelho.",
              "effects": {
                "integrity": -1
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "O retorno",
          "narrative": "A janela temporal se abre. Aren está sozinho. O objetivo original de trazer Jesus ao futuro foi abandonado; ele retorna com um testemunho, não com uma pessoa capturada.",
          "prompt": "Como ele parte?",
          "choices": [
            {
              "text": "Retornar sozinho",
              "desc": "Aceitar que a história não lhe pertence e que Jesus não é objeto de missão.",
              "result": "Aren atravessa a janela temporal. O destino do futuro será revelado na próxima missão.",
              "effects": {
                "integrity": 1,
                "ishan": 1
              },
              "unlock": []
            },
            {
              "text": "Tentar prolongar a permanência para obter mais dados",
              "desc": "Adiar o retorno em busca de controle e completude.",
              "result": "A janela fica instável e Aren precisa voltar sem a certeza que procurava.",
              "effects": {
                "integrity": -1,
                "ishan": -1
              },
              "unlock": []
            }
          ]
        }
      ],
      "codex": [
        "jesus",
        "newcreation"
      ]
    },
    {
      "n": 18,
      "title": "Retorno ao Mundo Sem Amanhã",
      "act": "Ato IV — O Império da Falsa Paz",
      "location": "Meridian • 2099",
      "objective": "Descobrir que a cidade mudou por dentro e que a Concórdia ocupa o espaço público.",
      "opening": "A luz da plataforma se fecha. Aren cai de joelhos, respirando com dificuldade. Não há sirenes nem ruínas. A cidade está limpa, iluminada e silenciosa. Uma tela pública mostra Aurelian Veyr; Aren reconhece o homem que aparecera discretamente na transmissão do Conselho, em 2075. Um cidadão percebe que ele não possui o Selo da Concórdia.",
      "base": "Ficção do jogo (D); ecos temáticos de Mt 24 e Ap 13. O Selo é símbolo ficcional.",
      "stages": [
        {
          "title": "A cidade intacta",
          "narrative": "O cenário parece melhor que o mundo deixado por Aren, mas há uma uniformidade desconfortável nas telas e nos anúncios.",
          "prompt": "O que investigar primeiro?",
          "choices": [
            {
              "text": "Observar o espaço público e as mensagens",
              "desc": "Comparar serviços, símbolos e linguagem antes de concluir.",
              "result": "Aren percebe padrões de pertencimento sem declarar ainda o que significam.",
              "effects": {
                "integrity": 1
              },
              "unlock": [
                "concordia"
              ]
            },
            {
              "text": "Procurar Mara imediatamente",
              "desc": "Priorizar contato com a pessoa que dirigia o projeto.",
              "result": "A busca encurta o caminho até o Instituto, mas deixa sinais públicos para depois.",
              "effects": {
                "mara": 1
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "A cerimônia",
          "narrative": "Um cidadão pergunta por que Aren está sem o Selo. A pergunta é feita com medo, não com hostilidade.",
          "prompt": "Como Aren responde?",
          "choices": [
            {
              "text": "Admitir que acabou de chegar",
              "desc": "Não fingir conhecer uma cerimônia que nunca viu.",
              "result": "O cidadão explica que a adesão pública passou a ser tratada como pertencimento.",
              "effects": {
                "community": 1,
                "integrity": 1
              },
              "unlock": []
            },
            {
              "text": "Inventar que perdeu a credencial",
              "desc": "Tentar evitar a conversa com uma mentira simples.",
              "result": "A resposta encerra o contato, mas aumenta a desconfiança.",
              "effects": {
                "community": -1
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "A transmissão",
          "narrative": "Veyr aparece sob a frase “A Concórdia é a última garantia”. A mesma voz do passado ocupa agora todos os painéis.",
          "prompt": "Que pista Aren registra?",
          "choices": [
            {
              "text": "A transmissão de 2075 e a de 2099",
              "desc": "Relacionar as duas aparições sem concluir que o futuro estava predeterminado.",
              "result": "Aren reconhece uma continuidade política que precisa ser investigada.",
              "effects": {
                "integrity": 2,
                "mara": 1
              },
              "unlock": []
            },
            {
              "text": "Tratar a coincidência como prova sobrenatural",
              "desc": "Concluir sem examinar a cadeia de acontecimentos.",
              "result": "O diário marca a conclusão como hipótese não demonstrada.",
              "effects": {
                "integrity": -1
              },
              "unlock": []
            }
          ]
        }
      ],
      "codex": [
        "concordia"
      ]
    },
    {
      "n": 19,
      "title": "O Selo da Concórdia",
      "act": "Ato IV — O Império da Falsa Paz",
      "location": "Meridian • distrito residencial",
      "objective": "Mostrar pressão econômica e exclusão sem detalhar técnicas de vigilância ou humilhar pessoas coagidas.",
      "opening": "Uma família procura abrigo depois de recusar uma cerimônia de adesão. Alguns vizinhos aceitaram o Selo por convicção; outros por medo; outros porque não encontraram alternativa para acessar serviços. O jogo não trata todos como moralmente idênticos nem identifica o Selo com qualquer tecnologia real.",
      "base": "Ap 13:16–18 como inspiração interpretativa (C); Selo da Concórdia (D).",
      "stages": [
        {
          "title": "A família",
          "narrative": "A família precisa encontrar um lugar seguro para passar a noite. Aren não conhece todas as redes comunitárias do distrito.",
          "prompt": "Como oferecer ajuda?",
          "choices": [
            {
              "text": "Perguntar do que precisam e ouvir primeiro",
              "desc": "Não presumir que sabe qual solução é melhor para eles.",
              "result": "A família escolhe o apoio necessário e mantém sua autonomia.",
              "effects": {
                "community": 2,
                "sela": 1
              },
              "unlock": []
            },
            {
              "text": "Decidir por eles",
              "desc": "Levar a família para um local sem consultar suas necessidades.",
              "result": "A ajuda cria novos problemas porque ignora a vontade de quem a recebe.",
              "effects": {
                "community": -1
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "O Selo",
          "narrative": "A credencial simboliza adesão ao regime e acesso a serviços. A narrativa não afirma que documentos digitais reais ou tecnologias atuais sejam a marca da Besta.",
          "prompt": "Como o códice deve apresentar o símbolo?",
          "choices": [
            {
              "text": "Como invenção ficcional inspirada em Apocalipse 13",
              "desc": "Distinguir símbolo literário e interpretação escatológica.",
              "result": "A entrada esclarece que nenhuma tecnologia real é identificada com o Selo.",
              "effects": {
                "integrity": 2
              },
              "unlock": [
                "apocalypse",
                "concordia"
              ]
            },
            {
              "text": "Como equivalência automática com algo do presente",
              "desc": "Associar o símbolo a um dispositivo real sem base.",
              "result": "A afirmação é removida por contrariar a regra editorial do jogo.",
              "effects": {
                "integrity": -2
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "Discrição ou publicidade",
          "narrative": "A família pergunta se a ajuda pode ser anunciada. Uma divulgação pública pode atrair atenção; o silêncio pode proteger, mas também esconder a injustiça.",
          "prompt": "Qual caminho Aren escolhe?",
          "choices": [
            {
              "text": "Ajudar discretamente, com consentimento",
              "desc": "Priorizar a segurança e respeitar a decisão da família.",
              "result": "O auxílio permanece pequeno, mas é construído com confiança.",
              "effects": {
                "community": 2,
                "sela": 1
              },
              "unlock": []
            },
            {
              "text": "Tornar o gesto público sem acordo",
              "desc": "Usar a história da família para pressionar o regime.",
              "result": "A exposição não autorizada quebra a confiança que a ajuda deveria proteger.",
              "effects": {
                "community": -2
              },
              "unlock": []
            }
          ]
        }
      ],
      "codex": [
        "concordia",
        "apocalypse"
      ]
    },
    {
      "n": 20,
      "title": "O Homem que Prometeu Paz",
      "act": "Ato IV — O Império da Falsa Paz",
      "location": "Palácio da Concórdia",
      "objective": "Revelar a cooptação do Projeto Cavalo de Troia e a responsabilidade de Mara.",
      "opening": "Aurelian Veyr fala com serenidade diante de um auditório. Não se apresenta como monstro nem afirma poderes sobrenaturais. Ishan leva Aren a uma sala subterrânea; Mara está diante de registros que assinou por anos. O contrato de 2094 indica que a viagem temporal deveria fornecer uma narrativa de legitimação ao regime.",
      "base": "2Ts 2:1–12; 1Jo 2:18–27; Ap 13. Aplicação futurista C/D, sem identificar pessoa real.",
      "stages": [
        {
          "title": "O pronunciamento",
          "narrative": "Veyr descreve a Concórdia como casa comum e amanhã comum. A promessa de unidade parece atraente para uma população exausta.",
          "prompt": "O que Aren identifica como problema central?",
          "choices": [
            {
              "text": "A pretensão de ser a resposta definitiva",
              "desc": "Distinguir coordenação política de exigência de lealdade absoluta.",
              "result": "Aren percebe que a falsa paz transforma serviço público em reivindicação de autoridade total.",
              "effects": {
                "integrity": 1
              },
              "unlock": [
                "apocalypse"
              ]
            },
            {
              "text": "A simples existência de instituições globais",
              "desc": "Tratar toda cooperação ampla como mal em si.",
              "result": "A conclusão é ampla demais: o problema é a exigência de lealdade e a apropriação da esperança.",
              "effects": {
                "integrity": -1
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "Mara e Ishan",
          "narrative": "Ishan revela que o projeto foi retaskado. Mara admite que assinou renovações e que acreditava impedir o colapso.",
          "prompt": "Qual é a prioridade de Aren?",
          "choices": [
            {
              "text": "Proteger Ishan e depois confrontar Mara com os documentos",
              "desc": "Reconhecer o risco imediato e exigir responsabilidade com base em evidência.",
              "result": "Ishan ganha espaço para falar. Mara não é absolvida, mas a conversa pode continuar.",
              "effects": {
                "ishan": 2,
                "mara": 1
              },
              "unlock": []
            },
            {
              "text": "Expor Mara antes de ouvir Ishan",
              "desc": "Transformar a revelação em acusação pública imediata.",
              "result": "A verdade aparece parcialmente, mas Ishan perde segurança e Mara se fecha.",
              "effects": {
                "mara": -1,
                "ishan": -1
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "O contrato de 2094",
          "narrative": "O documento mostra que a missão original de consulta foi convertida em instrumento de legitimação. O plano não dependia de trazer Jesus por vontade própria: bastava fabricar uma narrativa com o prestígio da viagem.",
          "prompt": "Como Aren registra a descoberta?",
          "choices": [
            {
              "text": "Preservar o contrato e sua cadeia de origem",
              "desc": "Manter o documento, a data e o contexto de produção.",
              "result": "A evidência pode ser examinada sem depender apenas da memória dos envolvidos.",
              "effects": {
                "integrity": 2,
                "ishan": 1
              },
              "unlock": [
                "project",
                "concordia"
              ]
            },
            {
              "text": "Publicar somente um resumo acusatório",
              "desc": "Reduzir o documento a uma frase de efeito.",
              "result": "A denúncia ganha velocidade, mas perde elementos verificáveis.",
              "effects": {
                "integrity": -1
              },
              "unlock": []
            }
          ]
        }
      ],
      "codex": [
        "apocalypse",
        "concordia"
      ]
    },
    {
      "n": 21,
      "title": "O Último Arquivo de Elena",
      "act": "Ato IV — O Império da Falsa Paz",
      "location": "Arquivo físico de Meridian",
      "objective": "Ler as notas de Elena sem transformá-las em previsão de 2099 ou calendário profético.",
      "opening": "O arquivo físico resistiu à reorganização digital do Instituto. Aren encontra notas sobre 1 João, 2 Tessalonicenses e Apocalipse. Elena não previu o ano de 2099. Suas páginas alertam contra datas e identificações precipitadas e perguntam o que acontece quando um poder exige para si a lealdade que pertence a Deus.",
      "base": "Ficção documental (D); textos estudados: 1Jo 2; 2Ts 2; Ap 13.",
      "stages": [
        {
          "title": "Quatro categorias",
          "narrative": "Elena separava texto bíblico, contexto histórico, interpretação e ficção. O sistema oferece quatro gavetas com documentos misturados.",
          "prompt": "Como Aren os organiza?",
          "choices": [
            {
              "text": "Separar cada categoria e registrar dúvidas",
              "desc": "Não apresentar interpretação como se fosse citação ou fato histórico.",
              "result": "Aren recupera o método de Elena e melhora a rastreabilidade do arquivo.",
              "effects": {
                "integrity": 2
              },
              "unlock": [
                "apocalypse"
              ]
            },
            {
              "text": "Fundir tudo em uma linha profética",
              "desc": "Tratar notas, hipóteses e acontecimentos ficcionais como uma única sequência.",
              "result": "O arquivo fica dramaticamente simples, mas metodologicamente incorreto.",
              "effects": {
                "integrity": -2
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "A anotação",
          "narrative": "Uma frase de Elena diz: “Quando alguém exigir para si o lugar que pertence a Deus, não confunda a promessa de ordem com a paz.” A própria ficha indica: frase original da personagem, não citação bíblica.",
          "prompt": "Como Aren identifica a frase?",
          "choices": [
            {
              "text": "Reflexão ficcional de Elena",
              "desc": "Preservar autoria, contexto e classificação D.",
              "result": "A frase permanece forte sem ser atribuída às Escrituras.",
              "effects": {
                "integrity": 2
              },
              "unlock": []
            },
            {
              "text": "Citação bíblica",
              "desc": "Usar a frase como se estivesse na Bíblia.",
              "result": "A ficha é corrigida antes da publicação: a frase pertence a Elena.",
              "effects": {
                "integrity": -2
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "Publicar ou custodiar",
          "narrative": "As notas podem ser publicadas integralmente ou mantidas no arquivo com acesso controlado. Nenhuma das opções altera o que Elena escreveu.",
          "prompt": "Qual é a decisão de Aren?",
          "choices": [
            {
              "text": "Publicar as notas com contexto e incertezas",
              "desc": "Permitir que a comunidade examine também os limites da pesquisa.",
              "result": "O arquivo ganha transparência; o alcance dependerá da resposta da comunidade.",
              "effects": {
                "integrity": 1,
                "mara": 1,
                "community": 1
              },
              "unlock": []
            },
            {
              "text": "Manter as notas sob custódia",
              "desc": "Proteger os documentos até que exista uma forma segura de compartilhá-los.",
              "result": "O arquivo é preservado, mas o acesso continua limitado.",
              "effects": {
                "ishan": 1,
                "community": -1
              },
              "unlock": []
            }
          ]
        }
      ],
      "codex": [
        "apocalypse",
        "newcreation"
      ]
    },
    {
      "n": 22,
      "title": "A Última Assembleia",
      "act": "Ato IV — O Império da Falsa Paz",
      "location": "Refúgio comunitário",
      "objective": "Organizar recursos e informação entre sobreviventes com histórias e decisões diferentes.",
      "opening": "Aren reúne pessoas de diferentes origens. Há quem tenha aderido à Concórdia por medo, quem tenha resistido, quem tenha ajudado vizinhos e quem ainda não saiba em quem confiar. A assembleia não procura uma solução perfeita; procura um modo justo de atravessar a próxima noite.",
      "base": "Ficção comunitária (D); temas de Mt 24 e Ap 12.",
      "stages": [
        {
          "title": "A distribuição",
          "narrative": "Os recursos não bastam para atender todos ao mesmo tempo. O grupo precisa estabelecer uma regra que seja compreensível e revisável.",
          "prompt": "Qual critério é escolhido?",
          "choices": [
            {
              "text": "Priorizar urgência e vulnerabilidade",
              "desc": "Avaliar necessidades reais e tornar a regra pública ao grupo.",
              "result": "A distribuição não resolve a escassez, mas reduz arbitrariedade.",
              "effects": {
                "community": 2,
                "mara": 1
              },
              "unlock": []
            },
            {
              "text": "Distribuir por ordem de chegada",
              "desc": "Aplicar uma regra simples e igual para todos, mesmo quando as necessidades diferem.",
              "result": "A regra parece neutra, mas deixa os mais vulneráveis em desvantagem.",
              "effects": {
                "community": -1
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "Memórias diferentes",
          "narrative": "Uma pessoa que aceitou o Selo teme ser expulsa. Outra, que recusou, sente que sua perda foi ignorada.",
          "prompt": "Como Aren conduz a conversa?",
          "choices": [
            {
              "text": "Ouvir sem apagar responsabilidades nem humilhar vítimas",
              "desc": "Reconhecer coerção e escolhas distintas, mantendo espaço para reparação.",
              "result": "O grupo não concorda em tudo, mas consegue continuar conversando.",
              "effects": {
                "community": 2,
                "sela": 1,
                "mattan": 1
              },
              "unlock": []
            },
            {
              "text": "Separar o grupo entre puros e culpados",
              "desc": "Reduzir histórias complexas a rótulos definitivos.",
              "result": "A assembleia se fragmenta e perde pessoas que poderiam colaborar.",
              "effects": {
                "community": -2
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "A decisão de Mara",
          "narrative": "Mara precisa decidir se rompe com a propaganda institucional e revela o que assinou.",
          "prompt": "O que Aren oferece a ela?",
          "choices": [
            {
              "text": "Um caminho de confissão documentada e reparação",
              "desc": "Não prometer absolvição; oferecer espaço para assumir responsabilidade e agir.",
              "result": "Mara aceita preparar um testemunho verificável, se a comunidade concordar.",
              "effects": {
                "mara": 2,
                "ishan": 1
              },
              "unlock": []
            },
            {
              "text": "Uma absolvição em troca de ajuda",
              "desc": "Tratar a confissão como moeda para encerrar o passado.",
              "result": "Mara hesita: responsabilidade não pode ser apagada por uma troca conveniente.",
              "effects": {
                "mara": -1
              },
              "unlock": []
            }
          ]
        }
      ],
      "codex": [
        "apocalypse"
      ]
    },
    {
      "n": 23,
      "title": "A Falsa Paz se Rompe",
      "act": "Ato IV — O Império da Falsa Paz",
      "location": "Praça da Concórdia",
      "objective": "Enfrentar a exigência pública de lealdade e proteger pessoas sem fazer do clímax uma batalha.",
      "opening": "Veyr anuncia que não haverá mais lealdades concorrentes. A cerimônia pública transforma a promessa de paz em exigência de culto político. Aren prepara o arquivo integral para transmissão. O sistema interrompe o sinal antes que a comunidade consiga ouvir tudo. A praça permanece cheia; o regime parece absoluto.",
      "base": "Ap 13; 2Ts 2; leitura futurista C/D.",
      "stages": [
        {
          "title": "A exigência",
          "narrative": "O pronunciamento deixa claro que a Concórdia não exige apenas cooperação: exige reconhecimento de Veyr como resposta definitiva.",
          "prompt": "Como Aren descreve a mudança?",
          "choices": [
            {
              "text": "Como passagem de serviço a culto político",
              "desc": "Identificar a exigência de lealdade absoluta como núcleo da ruptura.",
              "result": "A comunidade compreende por que a falsa paz deixou de ser apenas administração.",
              "effects": {
                "integrity": 1,
                "community": 1
              },
              "unlock": [
                "apocalypse"
              ]
            },
            {
              "text": "Como mera divergência administrativa",
              "desc": "Reduzir a exigência a uma disputa de procedimentos.",
              "result": "A descrição não alcança o conteúdo simbólico e político do pronunciamento.",
              "effects": {
                "integrity": -1
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "A transmissão cai",
          "narrative": "O canal oficial corta o arquivo. Pessoas começam a se mover; algumas procuram abrigo, outras aguardam notícias.",
          "prompt": "Qual é a prioridade?",
          "choices": [
            {
              "text": "Proteger as pessoas reunidas",
              "desc": "Organizar rotas seguras e apoio sem transformar a praça em campo de batalha.",
              "result": "A transmissão não continua, mas a comunidade evita que o arquivo custe novas vidas.",
              "effects": {
                "community": 2,
                "ishan": 1
              },
              "unlock": []
            },
            {
              "text": "Manter o sinal a qualquer custo",
              "desc": "Insistir na transmissão mesmo com risco para quem está reunido.",
              "result": "A tentativa falha e expõe pessoas a um risco que poderia ter sido reduzido.",
              "effects": {
                "community": -2
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "O testemunho",
          "narrative": "O arquivo pode circular por cópias independentes, redes comunitárias e registros físicos. Nenhum meio garante que todos acreditarão.",
          "prompt": "Como Aren distribui a memória?",
          "choices": [
            {
              "text": "Criar cópias com fontes, contexto e limites",
              "desc": "Não depender de um único canal ou porta-voz.",
              "result": "O testemunho continua disponível sem ser apresentado como controle total da interpretação.",
              "effects": {
                "integrity": 2,
                "ishan": 1,
                "community": 1
              },
              "unlock": []
            },
            {
              "text": "Entregar tudo a um único porta-voz",
              "desc": "Concentrar a divulgação em quem parece mais convincente.",
              "result": "A comunidade troca um monopólio por outro.",
              "effects": {
                "integrity": -1,
                "community": -1
              },
              "unlock": []
            }
          ]
        }
      ],
      "codex": [
        "apocalypse",
        "concordia"
      ]
    },
    {
      "n": 24,
      "title": "O Rei Retorna",
      "act": "Ato V — O Rei Retorna",
      "location": "Meridian • Praça da Concórdia e mundo",
      "objective": "Testemunhar a Segunda Vinda como clímax fixo, sem combate jogável nem fala inventada para Jesus.",
      "opening": "O sinal do regime falha. As telas deixam de repetir a mesma frase. O som da multidão diminui; não há explosão nem espetáculo de destruição. A luz não vem dos painéis, satélites ou da máquina temporal. O códice se abre nas referências escolhidas pela narrativa. A presença de Cristo é representada com majestade e sobriedade; Veyr perde a autoridade que reivindicava.",
      "base": "Mt 24:29–31; 1Ts 4:13–18; 2Ts 2:8; Ap 19:11–16. A sequência entre textos é interpretação C.",
      "stages": [
        {
          "title": "A tela se apaga",
          "narrative": "A propaganda perde o domínio do espaço. Pessoas que antes olhavam para os painéis passam a olhar umas para as outras.",
          "prompt": "Onde Aren permanece?",
          "choices": [
            {
              "text": "Ao lado da comunidade",
              "desc": "Não correr para o centro da cena nem reivindicar protagonismo.",
              "result": "Aren permanece com quem precisa de ajuda. A salvação não depende de sua performance.",
              "effects": {
                "community": 2
              },
              "unlock": []
            },
            {
              "text": "Tentar controlar o acontecimento",
              "desc": "Buscar uma posição de comando e explicar tudo em tempo real.",
              "result": "A ação não muda o clímax; apenas revela que Aren ainda luta contra a necessidade de controlar.",
              "effects": {
                "community": -1
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "A presença do Rei",
          "narrative": "A sequência usa a linguagem visual das passagens identificadas. Não há diálogo novo para Jesus, chefe final, batalha controlada pelo jogador ou conquista tecnológica.",
          "prompt": "Como o jogo apresenta o acontecimento?",
          "choices": [
            {
              "text": "Com sobriedade e referências explícitas",
              "desc": "Deixar o códice indicar os textos sem fingir que a encenação esgota o mistério.",
              "result": "O retorno permanece o centro teológico fixo desta versão.",
              "effects": {
                "integrity": 1
              },
              "unlock": [
                "newcreation"
              ]
            },
            {
              "text": "Como prêmio por uma pontuação elevada",
              "desc": "Vincular a Segunda Vinda ao desempenho do jogador.",
              "result": "A proposta é recusada: o evento não é recompensa por habilidade.",
              "effects": {
                "integrity": -2
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "O poder perde seu limite",
          "narrative": "Veyr perde a autoridade que reivindicava. Os fiéis são reunidos na esperança da obra. Aren deixa o arquivo cair e não tenta registrar tudo.",
          "prompt": "O que encerra o arco de Aren?",
          "choices": [
            {
              "text": "Aceitar que testemunhar não é possuir",
              "desc": "Deixar o arquivo fechado e permanecer com as pessoas.",
              "result": "Aren conclui sua mudança: da precisão como controle para o testemunho com humildade.",
              "effects": {
                "integrity": 1,
                "community": 1
              },
              "unlock": []
            },
            {
              "text": "Abrir o arquivo para registrar cada detalhe",
              "desc": "Tentar converter o acontecimento em mais um relatório total.",
              "result": "O gesto não altera o clímax, mas mostra que a antiga compulsão ainda não foi totalmente abandonada.",
              "effects": {
                "integrity": -1
              },
              "unlock": []
            }
          ]
        }
      ],
      "codex": [
        "newcreation"
      ]
    },
    {
      "n": 25,
      "title": "A Nova Criação",
      "act": "Ato V — O Rei Retorna",
      "location": "Epílogo",
      "objective": "Concluir com a promessa de renovação, mostrando as consequências humanas das escolhas.",
      "opening": "A narrativa desacelera. A queda do regime não se transforma em uma nova guerra. A esperança de Apocalipse 21–22 aponta para comunhão, cura e ausência de opressão. O jogo não tenta descrever além do que o texto permite. As últimas cenas variam conforme as relações e a forma como o testemunho foi preservado.",
      "base": "Ap 21–22; leitura teológica C. Epílogo autoral, sem cronograma escatológico.",
      "stages": [
        {
          "title": "O que fica",
          "narrative": "O destino dos arquivos reflete as escolhas acumuladas. A história converge para a mesma esperança, mas o estado das relações humanas varia.",
          "prompt": "Como Aren compreende o próprio legado?",
          "choices": [
            {
              "text": "Como memória compartilhada e revisável",
              "desc": "O testemunho pode ser consultado por outras pessoas, com fontes e limites.",
              "result": "Aren deixa de tratar o arquivo como propriedade pessoal.",
              "effects": {
                "integrity": 1,
                "community": 1
              },
              "unlock": []
            },
            {
              "text": "Como documento definitivo sob seu controle",
              "desc": "Guardar a última palavra para si.",
              "result": "O arco termina com uma tensão não resolvida: a vontade de controlar ainda permanece.",
              "effects": {
                "integrity": -1
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "Os vínculos",
          "narrative": "Sela, Mattan, Mara e Ishan aparecem conforme as decisões anteriores. Nenhuma relação é reduzida a uma barra de aprovação; cada personagem conserva autonomia e história.",
          "prompt": "Que lembrança Aren escolhe preservar?",
          "choices": [
            {
              "text": "As pessoas como agentes de suas próprias decisões",
              "desc": "Reconhecer o que cada um escolheu e o que precisou suportar.",
              "result": "O diário final não transforma os companheiros em recompensas do protagonista.",
              "effects": {
                "community": 2
              },
              "unlock": []
            },
            {
              "text": "Apenas os momentos em que o ajudaram",
              "desc": "Resumir os outros pela utilidade que tiveram para a missão.",
              "result": "A lembrança fica incompleta e centrada em Aren.",
              "effects": {
                "community": -1
              },
              "unlock": []
            }
          ]
        },
        {
          "title": "O último reino",
          "narrative": "A câmera se afasta. Não há novo inimigo, calendário ou tarefa de conquista. A tela retoma o tema musical do prólogo, agora resolvido em uma harmonia única.",
          "prompt": "Qual frase encerra o diário?",
          "choices": [
            {
              "text": "“A humanidade tentou construir uma máquina para trazer o Salvador. O verdadeiro Rei não precisou ser trazido.”",
              "desc": "Encerrar com a ideia central da obra, como texto autoral do jogo.",
              "result": "O título final surge: O ÚLTIMO REINO.",
              "effects": {
                "integrity": 1
              },
              "unlock": [
                "newcreation"
              ]
            },
            {
              "text": "“A máquina salvou o mundo”",
              "desc": "Atribuir à tecnologia a salvação que a história recusa atribuir a Aren.",
              "result": "A frase é descartada; a conclusão permanece fiel ao tema central.",
              "effects": {
                "integrity": -2
              },
              "unlock": []
            }
          ]
        }
      ],
      "codex": [
        "newcreation"
      ]
    }
  ],
  "prelude": [
    {
      "title": "O Princípio — O ritmo antes do relógio",
      "subtitle": "Prólogo cósmico",
      "pages": [
        "Tela totalmente escura. Não há ruído cósmico, horizonte, distância ou perspectiva reconhecível. O silêncio não representa um lugar físico onde Deus estivesse; é uma imagem para a incapacidade humana de conceber o anterior à criação.",
        "NARRADOR (texto ficcional): “Antes de qualquer medida, não havia relógio que pudesse contar. Antes de qualquer horizonte, não havia distância a atravessar. O princípio não foi encontrado: foi dado.”",
        "Uma luz sem fonte visível surge. Três motivos sonoros se entrelaçam como um único tema em três linhas harmônicas. O Primeiro, O Segundo e O Maestro são nomes poéticos, não três deuses, partes separadas ou uma hierarquia. A imagem sugere, de modo limitado, a confissão cristã do único Deus trino.",
        "NARRADOR (texto ficcional): “O Um não estava sozinho. O Ser não era ausência. E o Maestro não dividia o que era eterno. O que a língua humana chama por nomes distintos não se deixa aprisionar por nossas divisões.”",
        "A imagem se abre para o cosmos: expansão e resfriamento, formação de átomos, estrelas e discos de gás e poeira ao redor de estrelas jovens. Partículas se agregam lentamente. A Terra aparece não como centro físico do universo, mas como o lugar da história humana que será acompanhada.",
        "A câmera se aproxima de um mar antigo. O som das águas conduz à primeira página do códice: Gênesis. A narração abandona a tentativa de explicar Deus. Corte para silêncio. Surge o título: THE WITNESS: THE WAY."
      ],
      "refs": "Gn 1:1–3; Jo 1:1–3, 14; Cl 1:15–17; Hb 1:1–3. A encenação e a narração são ficcionais; não constituem cosmologia científica nem nova revelação."
    },
    {
      "title": "O Conselho de Continuidade",
      "subtitle": "Meridian • 2075",
      "pages": [
        "Uma sala circular, sem janelas. Hologramas mostram rotas marítimas interrompidas, infraestrutura em falha e a colônia humana de Ares, em Marte, devastada por um impacto. Marte permanece intacto; a colônia foi destruída. Não há imagens gráficas.",
        "Um painel apresenta o APX: mais de cinco bilhões de mortes acumuladas no universo ficcional. Sua causa, transmissão e mecanismo não são descritos. Outro painel define o Paradoxo de Haldren: a velocidade de produção de crises supera a velocidade de resposta das instituições.",
        "MARA VOSS, 34 anos, observa os dados. “O sistema ainda funciona. O que deixou de funcionar foi a confiança entre as pessoas.” O presidente responde que as crises agora se alimentam umas das outras.",
        "As portas se abrem. ELENA VALE entra com um arquivo físico e projeta o nome JESUS DE NAZARÉ. Ela apresenta fontes romanas e judaicas, os quatro Evangelhos e registros da expansão das primeiras comunidades. Distingue evidência histórica sobre Jesus e o movimento cristão do testemunho evangélico sobre milagres e ressurreição.",
        "ELENA: “Há convergências históricas suficientes para estudar Jesus como uma figura real do século I, executada sob autoridade romana. [...] Não vou cometer o erro de dizer que uma fonte romana provou um milagre. Não provou. Os relatos de milagres pertencem ao testemunho cristão.”",
        "O Conselho debate. A ordem original é consultar e retornar, sem remover qualquer pessoa de seu tempo sem consentimento e sem editar fontes para fabricar uma resposta. A votação é aprovada por margem estreita. Mara vota a favor, mas anota: “Uma testemunha não é uma solução operacional.”",
        "Em uma transmissão pública ao fundo, um líder humanitário ainda pouco conhecido, Aurelian Veyr, aparece com serenidade. Não há música ameaçadora. A imagem parece comum; só mais tarde o jogador reconhecerá a pista."
      ],
      "refs": "Ficção do universo (D). Em 2075, Mara tem 34 anos; em 2099, 58. APX, Haldren e a colônia Ares são invenções ficcionais."
    }
  ],
  "codex": [
    {
      "id": "creation",
      "title": "A criação",
      "unlock": 0,
      "text": "Gn 1–3; Jo 1:1–14; Cl 1:15–17; Hb 1:1–3. O prólogo usa imagens e nomes poéticos para sugerir a fé cristã no único Deus trino. O nada absoluto é metáfora cinematográfica, não um lugar físico. A sequência científica do cosmos não é apresentada como conteúdo astrofísico da Bíblia.",
      "context": "A descrição visual do universo usa expansão, resfriamento, formação de átomos e estrelas, e discos protoplanetários. É uma camada de representação científica, diferente do testemunho bíblico.",
      "interpretation": "O vínculo entre criação, Verbo e Espírito é uma leitura cristã dos textos identificados. O jogo não oferece uma fórmula doutrinária nova.",
      "fiction": "O Primeiro, O Segundo e O Maestro são metáforas visuais ficcionais. Não são três deuses, três essências, partes separadas ou uma hierarquia divina."
    },
    {
      "id": "project",
      "title": "Projeto Cavalo de Troia",
      "unlock": 0,
      "text": "O Conselho aprovou em 2075 uma missão de consulta e retorno. A viagem temporal é parte da ficção científica do jogo.",
      "context": "A narrativa diferencia documentação histórica, testemunho e interpretação. A pesquisa de Elena não afirma que fontes romanas provaram milagres.",
      "interpretation": "A ideia de testemunhar sem possuir é o eixo moral do arco de Aren.",
      "fiction": "A máquina temporal, o Instituto de Continuidade e o Projeto Cavalo de Troia são invenções do universo."
    },
    {
      "id": "jesus",
      "title": "Jesus de Nazaré",
      "unlock": 3,
      "text": "As cenas usam referências evangélicas específicas: batismo, tentação, ensino, sinais, Paixão e ressurreição. O jogo escolhe uma fonte-base por cena e mantém as demais consultáveis.",
      "context": "Jesus é situado no mundo judaico do século I, sob a administração romana na Judeia. A reconstrução cotidiana do jogo é aproximada e admite incertezas.",
      "interpretation": "Os Evangelhos são testemunhos cristãos. O jogo não transforma Aren em testemunha canônica nem afirma que uma gravação futura prove milagres.",
      "fiction": "Aren, Sela e Mattan são personagens ficcionais. Aren observa; não muda o chamado dos discípulos, a Paixão ou a ressurreição."
    },
    {
      "id": "history",
      "title": "O século I",
      "unlock": 4,
      "text": "O códice acompanha Galileia, Judeia, Roma, Herodes Antipas, Pilatos, o Templo, pesca e peregrinação.",
      "context": "Rotas, arquitetura, costumes e práticas sociais são reconstruções históricas aproximadas. Onde há debate, o jogo não inventa consenso.",
      "interpretation": "Os diálogos de Sela e Mattan expressam perspectivas individuais, não uma opinião representativa de todo o povo judeu.",
      "fiction": "Cafarnaum, Betânia e Jerusalém são cenários; a vida cotidiana de Sela e Mattan é ficcional e situada."
    },
    {
      "id": "concordia",
      "title": "A Concórdia e o Selo",
      "unlock": 18,
      "text": "Ap 13:16–18 inspira simbolicamente a pressão de adesão econômica e pública retratada no jogo.",
      "context": "O documento não identifica documentos digitais, vacinas, moedas ou tecnologias atuais com a marca da Besta.",
      "interpretation": "O uso do Selo como símbolo pertence a uma leitura escatológica específica, não consensual entre as tradições cristãs.",
      "fiction": "A Concórdia é o regime supranacional de 2099. O Selo é uma credencial ficcional de pertencimento; não representa tecnologia real."
    },
    {
      "id": "apocalypse",
      "title": "Anticristo, homem da iniquidade e Besta",
      "unlock": 20,
      "text": "O termo “anticristo” aparece nas cartas de João (1Jo 2:18–27; 4:1–6; 2Jo 7). 2Ts 2 fala do homem da iniquidade. Apocalipse descreve a Besta.",
      "context": "Esses textos pertencem a contextos literários e históricos próprios. Apocalipse não usa o substantivo “Anticristo” para nomear a Besta.",
      "interpretation": "Associar esses elementos a uma figura final é uma interpretação cristã desenvolvida. O jogo escolhe uma lente futurista, sem declará-la única ou consensual.",
      "fiction": "Aurelian Veyr é personagem inventado. O roteiro não o identifica com pessoa real nem usa manchetes contemporâneas como prova profética."
    },
    {
      "id": "newcreation",
      "title": "A Segunda Vinda e a nova criação",
      "unlock": 24,
      "text": "Mt 24:29–31; 1Ts 4:13–18; 2Ts 2:8; Ap 19:11–16; Ap 21–22. O clímax do jogo segue uma ordem narrativa escolhida pela equipe.",
      "context": "As tradições cristãs divergem sobre tribulação, arrebatamento, milênio e sequência dos acontecimentos finais.",
      "interpretation": "A obra adota uma moldura futurista específica. A Segunda Vinda é um clímax fixo da ficção e não depende de pontuação, habilidade ou escolha do jogador.",
      "fiction": "Não há cronograma profético, previsão do mundo real, fala nova atribuída a Jesus ou final alternativo em que Cristo não retorna."
    }
  ],
  "people": [
    {
      "name": "Aren Vale",
      "age": "34 anos em 2099",
      "role": "Historiador de arquivos e operador temporal.",
      "arc": "Confunde precisão com compreensão; aprende a testemunhar sem possuir e a resistir sem reivindicar ser salvador.",
      "kind": "D"
    },
    {
      "name": "Elena Vale",
      "age": "Pesquisadora; fora da vida pública desde 2089",
      "role": "Mãe de Aren e autora do dossiê de 2075.",
      "arc": "Sua integridade documental inspira o protagonista. Seu destino não é definido; o arquivo físico permanece preservado.",
      "kind": "D"
    },
    {
      "name": "Mara Voss",
      "age": "34 em 2075; 58 em 2099",
      "role": "Estrategista que se torna diretora do Instituto.",
      "arc": "Aprovou o projeto por esperança pragmática e percebe tarde que a Concórdia o cooptou. Pode confessar sua responsabilidade, mas não apagar danos.",
      "kind": "D"
    },
    {
      "name": "Ishan Sen",
      "age": "41 em 2099",
      "role": "Engenheiro temporal.",
      "arc": "Conhece os limites do equipamento e sabe que a missão foi alterada. Precisa escolher entre segurança pessoal e verdade.",
      "kind": "D"
    },
    {
      "name": "Sela bat Natan",
      "age": "Cerca de 30 anos",
      "role": "Comerciante de tecidos de Cafarnaum.",
      "arc": "Independente e observadora. Sua vida não se reduz a servir Aren.",
      "kind": "D"
    },
    {
      "name": "Mattan",
      "age": "19 anos",
      "role": "Pescador e irmão de Sela.",
      "arc": "Impulsivo e desconfiado. Aprende que coragem também pode significar cuidar, ouvir e permanecer.",
      "kind": "D"
    },
    {
      "name": "Aurelian Veyr — O Pacificador",
      "age": "Não especificada",
      "role": "Governante ficcional de 2099.",
      "arc": "Ascende prometendo reconstrução e paz, mas exige lealdade absoluta. Na leitura futurista do jogo, encarna uma figura anticristã.",
      "kind": "C/D"
    },
    {
      "name": "Jesus Cristo",
      "age": "—",
      "role": "Centro da história bíblica.",
      "arc": "Não é controlável, capturável ou substituível por Aren. As cenas seguem passagens identificadas e não inventam falas.",
      "kind": "A/C"
    }
  ]
};
