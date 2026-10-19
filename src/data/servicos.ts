export interface Servico {
  slug: string;
  nome: string;
  titulo: string; // <title>
  descricao: string; // meta description
  h1: string;
  resumo: string;
  icone: string;
  intro: string[];
  sinais: string[];
  inclui: string[];
  faq: { p: string; r: string }[];
}

export const servicos: Servico[] = [
  {
    slug: 'conserto-de-aquecedor-a-gas',
    nome: 'Conserto de Aquecedor a Gás',
    titulo: 'Conserto de Aquecedor a Gás em São Paulo',
    descricao:
      'Conserto de aquecedor a gás em São Paulo com técnico especializado. Diagnóstico preciso, peças originais e garantia. Chame no WhatsApp e agende hoje.',
    h1: 'Conserto de Aquecedor a Gás em São Paulo',
    resumo: 'Aquecedor não liga, desarma ou não esquenta? Diagnosticamos e consertamos no mesmo dia.',
    icone: 'ferramenta',
    intro: [
      'Quando o aquecedor a gás para de funcionar, o banho quente vira problema na hora. A Falcon Aquecedores faz o conserto de aquecedores de passagem e de acumulação, analógicos e digitais, com técnicos treinados e ferramentas de medição próprias.',
      'Começamos por um diagnóstico completo: verificamos a ignição, o sensor de chama, a válvula de gás, o fluxostato, a placa eletrônica e a exaustão. Assim você sabe exatamente o defeito e o valor antes de qualquer troca de peça.',
    ],
    sinais: [
      'Aquecedor não acende ou faz cliques sem chama',
      'Água sai morna ou alterna entre quente e fria',
      'Aparelho desliga sozinho durante o banho',
      'Código de erro no painel digital',
      'Chama amarelada ou cheiro de gás',
      'Barulhos, estalos ou vazamento de água',
    ],
    inclui: [
      'Diagnóstico técnico completo do aparelho',
      'Orçamento claro antes de iniciar o serviço',
      'Troca de peças com componentes de qualidade',
      'Teste de funcionamento e de estanqueidade do gás',
      'Garantia por escrito no serviço executado',
    ],
    faq: [
      { p: 'Quanto tempo leva o conserto de um aquecedor a gás?', r: 'A maioria dos consertos é resolvida na mesma visita, entre 1 e 2 horas. Quando é preciso encomendar uma peça específica, combinamos o retorno o quanto antes.' },
      { p: 'Vocês consertam aquecedor digital?', r: 'Sim. Atendemos aquecedores digitais e analógicos, de passagem e de acumulação, incluindo leitura de códigos de erro e reparo de placas.' },
      { p: 'O conserto tem garantia?', r: 'Sim. Todo serviço executado pela Falcon Aquecedores sai com garantia por escrito.' },
    ],
  },
  {
    slug: 'manutencao-de-aquecedor-a-gas',
    nome: 'Manutenção de Aquecedor a Gás',
    titulo: 'Manutenção de Aquecedor a Gás Preventiva em SP',
    descricao:
      'Manutenção preventiva de aquecedor a gás em São Paulo: limpeza, regulagem e testes de segurança. Mais economia de gás e vida útil para o seu aparelho.',
    h1: 'Manutenção Preventiva de Aquecedor a Gás',
    resumo: 'Revisão completa que evita quebras, reduz o consumo de gás e aumenta a segurança.',
    icone: 'escudo',
    intro: [
      'Os fabricantes recomendam revisar o aquecedor a gás pelo menos uma vez por ano. A manutenção preventiva evita que pequenos desgastes virem defeitos caros e mantém o aparelho queimando o gás de forma limpa e segura.',
      'Na visita, desmontamos, limpamos e regulamos os principais componentes, medimos a combustão e conferimos a chaminé. No fim, você recebe um relatório com o estado do aparelho.',
    ],
    sinais: [
      'Mais de 12 meses sem revisão',
      'Conta de gás subindo sem motivo',
      'Demora para a água esquentar',
      'Fuligem ou manchas escuras no aparelho',
      'Pressão de água mais fraca no chuveiro',
      'Aparelho com mais de 5 anos de uso',
    ],
    inclui: [
      'Limpeza do queimador e do trocador de calor',
      'Limpeza de filtros de água e de gás',
      'Regulagem de chama e de pressão',
      'Análise de combustão e da exaustão',
      'Teste de vazamento em conexões',
    ],
    faq: [
      { p: 'De quanto em quanto tempo devo fazer a manutenção?', r: 'O ideal é uma vez por ano. Em locais com água muito dura ou uso intenso, a cada 6 meses.' },
      { p: 'A manutenção preventiva reduz a conta de gás?', r: 'Sim. Um queimador limpo e bem regulado aproveita melhor o gás e esquenta a água mais rápido, gastando menos.' },
    ],
  },
  {
    slug: 'instalacao-de-aquecedor-a-gas',
    nome: 'Instalação de Aquecedor a Gás',
    titulo: 'Instalação de Aquecedor a Gás em São Paulo',
    descricao:
      'Instalação de aquecedor a gás de passagem e de acumulação em São Paulo, dentro das normas técnicas. Ponto de gás, água e chaminé com garantia.',
    h1: 'Instalação de Aquecedor a Gás',
    resumo: 'Instalação segura e dentro das normas, com ponto de gás, água e chaminé.',
    icone: 'instalacao',
    intro: [
      'Uma instalação mal feita compromete a segurança e a garantia do fabricante. A Falcon Aquecedores instala seu aquecedor a gás seguindo as normas técnicas (ABNT NBR 13103), com ventilação e exaustão adequadas.',
      'Ajudamos a escolher o modelo ideal para o número de pontos de água da casa e cuidamos de tudo: fixação, conexões de gás e água, duto de exaustão e testes finais.',
    ],
    sinais: [
      'Compra de um aquecedor novo',
      'Troca de chuveiro elétrico por aquecimento a gás',
      'Reforma de banheiro, cozinha ou área de serviço',
      'Mudança de local do aparelho',
      'Substituição de aquecedor antigo',
      'Instalação de aquecedor em apartamento',
    ],
    inclui: [
      'Visita técnica e orientação na escolha do modelo',
      'Fixação do aparelho e ligação hidráulica',
      'Conexão de gás com teste de estanqueidade',
      'Instalação do duto de exaustão (chaminé)',
      'Regulagem e demonstração de uso',
    ],
    faq: [
      { p: 'Vocês instalam aquecedor comprado pela internet?', r: 'Sim. Instalamos aparelhos de todas as principais marcas, comprados em loja física ou online.' },
      { p: 'Posso instalar o aquecedor dentro do banheiro?', r: 'Não. Pela norma, aquecedores a gás não podem ficar em banheiros ou dormitórios. Avaliamos o melhor local na visita.' },
    ],
  },
  {
    slug: 'limpeza-de-aquecedor-a-gas',
    nome: 'Limpeza de Aquecedor a Gás',
    titulo: 'Limpeza de Aquecedor a Gás e Desincrustação',
    descricao:
      'Limpeza de aquecedor a gás em São Paulo: queimador, serpentina e desincrustação de calcário. Água mais quente, menos gás e mais segurança.',
    h1: 'Limpeza de Aquecedor a Gás',
    resumo: 'Remoção de fuligem e calcário para devolver o rendimento do seu aparelho.',
    icone: 'gota',
    intro: [
      'Com o tempo, a serpentina do aquecedor acumula calcário e o queimador acumula fuligem. O resultado é água menos quente, mais consumo de gás e risco de superaquecimento.',
      'Fazemos a limpeza completa e a desincrustação da serpentina com produtos próprios, sem danificar os componentes, e devolvemos o aparelho regulado.',
    ],
    sinais: [
      'Água demora a esquentar',
      'Vazão de água diminuiu',
      'Chama amarela ou irregular',
      'Fuligem na carcaça ou na chaminé',
      'Aquecedor desliga por superaquecimento',
      'Barulho de chiado na serpentina',
    ],
    inclui: [
      'Desmontagem do conjunto de queima',
      'Desincrustação da serpentina (trocador de calor)',
      'Limpeza do queimador e dos injetores',
      'Limpeza dos filtros de entrada',
      'Montagem, regulagem e testes',
    ],
    faq: [
      { p: 'A limpeza resolve água que não esquenta?', r: 'Em muitos casos, sim. Calcário na serpentina é uma das causas mais comuns de perda de rendimento.' },
      { p: 'Quanto tempo dura a limpeza?', r: 'Em média de 1h30 a 2h30, dependendo do modelo e do nível de sujeira.' },
    ],
  },
  {
    slug: 'conversao-de-aquecedor-gn-glp',
    nome: 'Conversão de Gás GN e GLP',
    titulo: 'Conversão de Aquecedor a Gás GLP para GN em SP',
    descricao:
      'Conversão de aquecedor de GLP (gás de botijão) para GN (gás natural encanado) e vice-versa em São Paulo, com troca de injetores e regulagem.',
    h1: 'Conversão de Aquecedor de GLP para Gás Natural',
    resumo: 'Mudou o tipo de gás? Convertimos seu aquecedor com segurança e regulagem.',
    icone: 'troca',
    intro: [
      'Quando o prédio ou a casa passa do gás de botijão (GLP) para o gás natural encanado (GN), o aquecedor precisa ser convertido. Usar o aparelho sem conversão é perigoso e danifica os componentes.',
      'Trocamos os injetores e o que mais for necessário conforme o kit do fabricante, regulamos a pressão e testamos a combustão.',
    ],
    sinais: [
      'Chegada de gás natural no condomínio',
      'Mudança de imóvel com outro tipo de gás',
      'Aquecedor comprado para outro tipo de gás',
      'Chama muito alta ou muito baixa após troca de gás',
      'Cheiro de gás após mudança de rede',
      'Exigência da concessionária ou do síndico',
    ],
    inclui: [
      'Verificação da compatibilidade do modelo',
      'Troca de injetores e componentes do kit',
      'Ajuste da válvula e da pressão de gás',
      'Teste de estanqueidade e de combustão',
      'Etiqueta de identificação do gás convertido',
    ],
    faq: [
      { p: 'Todo aquecedor pode ser convertido?', r: 'A maioria sim, desde que o fabricante ofereça o kit de conversão para o modelo. Confirmamos isso antes da visita.' },
    ],
  },
  {
    slug: 'troca-de-pecas-de-aquecedor-a-gas',
    nome: 'Troca de Peças de Aquecedor',
    titulo: 'Troca de Peças de Aquecedor a Gás em São Paulo',
    descricao:
      'Troca de peças de aquecedor a gás: placa eletrônica, sensor, válvula de gás, fluxostato, ventilador e serpentina. Peças de qualidade e garantia.',
    h1: 'Troca de Peças de Aquecedor a Gás',
    resumo: 'Placa, sensores, válvulas, ventilador e serpentina com peças de qualidade.',
    icone: 'engrenagem',
    intro: [
      'Muitas vezes o aquecedor não precisa ser trocado: basta substituir o componente com defeito. Trabalhamos com peças de qualidade, compatíveis com o seu modelo.',
      'Identificamos a peça exata com testes de bancada e medições, para você não pagar por trocas desnecessárias.',
    ],
    sinais: [
      'Placa eletrônica queimada',
      'Sensor de temperatura ou de chama com defeito',
      'Válvula de gás travada',
      'Fluxostato que não detecta a água',
      'Ventilador (exaustor) barulhento ou parado',
      'Serpentina furada com vazamento',
    ],
    inclui: [
      'Teste do componente antes da troca',
      'Peça compatível com o modelo',
      'Instalação e calibração',
      'Teste completo do aparelho',
      'Garantia na peça e na mão de obra',
    ],
    faq: [
      { p: 'Vale a pena trocar a peça ou comprar outro aquecedor?', r: 'Depende da idade do aparelho e do custo da peça. Mostramos as duas opções com valores para você decidir.' },
    ],
  },
  {
    slug: 'conserto-de-aquecedor-de-acumulacao',
    nome: 'Conserto de Aquecedor de Acumulação',
    titulo: 'Conserto de Aquecedor de Acumulação (Boiler) a Gás',
    descricao:
      'Conserto e manutenção de aquecedor de acumulação a gás (boiler) em São Paulo: termostato, queimador, ânodo de magnésio e vazamentos.',
    h1: 'Conserto de Aquecedor de Acumulação a Gás',
    resumo: 'Reparo de boilers e reservatórios a gás: termostato, queimador e vazamentos.',
    icone: 'tanque',
    intro: [
      'Aquecedores de acumulação mantêm um reservatório de água quente e precisam de cuidados próprios, como a troca periódica do ânodo de magnésio e a limpeza do fundo do tanque.',
      'Consertamos termostatos, queimadores, termopares e válvulas de segurança, e verificamos o estado do reservatório para evitar vazamentos.',
    ],
    sinais: [
      'Reservatório não aquece ou demora horas',
      'Piloto apaga com frequência',
      'Água com cor ou cheiro diferente',
      'Vazamento na base do reservatório',
      'Válvula de segurança pingando',
      'Barulho de estalos dentro do tanque',
    ],
    inclui: [
      'Teste de termostato e termopar',
      'Limpeza do queimador e da chaminé',
      'Verificação e troca do ânodo de magnésio',
      'Drenagem e limpeza do reservatório',
      'Teste da válvula de segurança',
    ],
    faq: [
      { p: 'O que é o ânodo de magnésio?', r: 'É uma peça de sacrifício que protege o reservatório contra corrosão. Deve ser verificada a cada revisão e trocada quando desgastada.' },
    ],
  },
  {
    slug: 'reparo-de-vazamento-de-gas-em-aquecedor',
    nome: 'Vazamento de Gás e Água',
    titulo: 'Reparo de Vazamento em Aquecedor a Gás em SP',
    descricao:
      'Vazamento de gás ou de água no aquecedor? Localizamos e reparamos o vazamento com teste de estanqueidade em São Paulo. Atendimento rápido.',
    h1: 'Reparo de Vazamento em Aquecedor a Gás',
    resumo: 'Localização e reparo de vazamentos de gás e de água com teste de estanqueidade.',
    icone: 'alerta',
    intro: [
      'Cheiro de gás é sinal de alerta: feche o registro, abra as janelas, não acione interruptores e nos chame. Vazamentos de água também danificam o aparelho e a parede.',
      'Usamos detector eletrônico e teste de estanqueidade para localizar o ponto exato e fazemos o reparo das conexões, flexíveis, válvulas ou serpentina.',
    ],
    sinais: [
      'Cheiro de gás perto do aquecedor',
      'Gotejamento embaixo do aparelho',
      'Mancha de umidade na parede',
      'Chiado nas conexões',
      'Flexível de gás ressecado ou vencido',
      'Registro de gás com folga',
    ],
    inclui: [
      'Detecção eletrônica de vazamento',
      'Troca de flexíveis e vedações',
      'Reparo de conexões e registros',
      'Teste de estanqueidade da rede',
      'Orientações de segurança',
    ],
    faq: [
      { p: 'O que fazer se sentir cheiro de gás?', r: 'Feche o registro de gás, abra portas e janelas, não acenda luzes nem use fósforos ou isqueiros e chame um técnico.' },
    ],
  },
];

export const getServico = (slug: string) => servicos.find((s) => s.slug === slug)!;
