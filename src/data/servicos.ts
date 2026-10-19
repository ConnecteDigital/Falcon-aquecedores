export interface Servico {
  slug: string;
  nome: string;
  titulo: string; // <title>
  descricao: string; // meta description
  h1: string;
  resumo: string;
  icone: string;
  foto: { src: string; alt: string; retrato?: boolean };
  intro: string[];
  sinais: string[];
  inclui: string[];
  faq: { p: string; r: string }[];
}

export const servicos: Servico[] = [
  {
    slug: 'conserto-e-manutencao-de-aquecedor-a-gas',
    nome: 'Conserto e Manutenção de Aquecedor a Gás',
    titulo: 'Conserto e Manutenção de Aquecedor a Gás no RJ',
    descricao:
      'Conserto e manutenção de aquecedor a gás no Rio de Janeiro e Niterói com técnico especializado. Diagnóstico preciso, peças originais e garantia. Chame no WhatsApp.',
    h1: 'Conserto e Manutenção de Aquecedor a Gás',
    resumo: 'Aquecedor não liga, desarma ou não esquenta? Diagnosticamos, consertamos e revisamos no mesmo dia.',
    icone: 'ferramenta',
    foto: { src: '/img/servicos/tecnico-conserto-aquecedor', alt: 'Técnico da Falcon Aquecedores fazendo conserto e manutenção de aquecedor a gás Rinnai', retrato: true },
    intro: [
      'Quando o aquecedor a gás para de funcionar ou começa a dar sinais de desgaste, o banho quente vira problema. A Falcon Aquecedores faz o conserto e a manutenção de aquecedores de passagem e de acumulação, analógicos e digitais, com técnicos treinados e ferramentas de medição próprias.',
      'Começamos por um diagnóstico completo: verificamos ignição, sensor de chama, válvula de gás, fluxostato, placa eletrônica, ventilador e exaustão. Regulamos chama e pressão e, quando preciso, trocamos componentes com peças compatíveis com o seu modelo. Você sabe o defeito e o valor antes de qualquer serviço.',
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
      'Regulagem de chama, gás e pressão de água',
      'Troca de peças com componentes de qualidade',
      'Teste de funcionamento, combustão e estanqueidade',
      'Garantia por escrito no serviço executado',
    ],
    faq: [
      { p: 'Quanto tempo leva o conserto de um aquecedor a gás?', r: 'A maioria dos consertos é resolvida na mesma visita, entre 1 e 2 horas. Quando é preciso encomendar uma peça específica, combinamos o retorno o quanto antes.' },
      { p: 'Vocês consertam aquecedor digital?', r: 'Sim. Atendemos aquecedores digitais e analógicos, de passagem e de acumulação, incluindo leitura de códigos de erro e reparo de placas.' },
      { p: 'Qual a diferença entre esta manutenção e a manutenção preventiva?', r: 'Aqui corrigimos um aquecedor que já apresenta falhas. A manutenção preventiva é a limpeza e revisão anual, feita antes de o problema aparecer.' },
      { p: 'O serviço tem garantia?', r: 'Sim. Todo serviço executado pela Falcon Aquecedores sai com garantia por escrito.' },
    ],
  },
  {
    slug: 'instalacao-de-aquecedor-a-gas',
    nome: 'Instalação de Aquecedor a Gás',
    titulo: 'Instalação de Aquecedor a Gás no Rio de Janeiro',
    descricao:
      'Instalação de aquecedor a gás de passagem e de acumulação no Rio de Janeiro, dentro das normas técnicas. Ponto de gás, água e chaminé com garantia.',
    h1: 'Instalação de Aquecedor a Gás',
    resumo: 'Instalação segura e dentro das normas, com ponto de gás, água e chaminé.',
    icone: 'instalacao',
    foto: { src: '/img/servicos/aquecedor-rinnai-branco', alt: 'Aquecedor a gás Rinnai digital instalado com duto de exaustão', retrato: true },
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
    slug: 'manutencao-preventiva-de-aquecedor-a-gas',
    nome: 'Manutenção Preventiva',
    titulo: 'Manutenção Preventiva de Aquecedor a Gás no RJ',
    descricao:
      'Manutenção preventiva de aquecedor a gás no Rio de Janeiro: limpeza do queimador, desincrustação da serpentina, regulagem e testes de segurança. Mais economia e vida útil.',
    h1: 'Manutenção Preventiva de Aquecedor a Gás',
    resumo: 'Limpeza e revisão anual que evitam quebras, reduzem o consumo de gás e aumentam a segurança.',
    icone: 'gota',
    foto: { src: '/img/servicos/aquecedor-lorenzetti-digital', alt: 'Aquecedor a gás Lorenzetti digital funcionando após manutenção preventiva', retrato: true },
    intro: [
      'Os fabricantes recomendam revisar o aquecedor a gás pelo menos uma vez por ano. Com o tempo, a serpentina acumula calcário e o queimador acumula fuligem: a água esquenta menos, o consumo de gás sobe e o aparelho pode superaquecer.',
      'Na manutenção preventiva desmontamos e limpamos o conjunto de queima, fazemos a desincrustação da serpentina, limpamos os filtros, regulamos o aparelho e testamos combustão e chaminé. No fim, você recebe o aquecedor funcionando como novo.',
    ],
    sinais: [
      'Mais de 12 meses sem revisão',
      'Conta de gás subindo sem motivo',
      'Água demora a esquentar',
      'Vazão de água diminuiu',
      'Fuligem ou manchas escuras no aparelho',
      'Aparelho com mais de 5 anos de uso',
    ],
    inclui: [
      'Limpeza do queimador e dos injetores',
      'Desincrustação da serpentina (trocador de calor)',
      'Limpeza dos filtros de água e de gás',
      'Regulagem de chama e de pressão',
      'Análise de combustão, exaustão e teste de vazamento',
    ],
    faq: [
      { p: 'De quanto em quanto tempo devo fazer a manutenção preventiva?', r: 'O ideal é uma vez por ano. Em locais com água muito dura ou uso intenso, a cada 6 meses.' },
      { p: 'A manutenção preventiva reduz a conta de gás?', r: 'Sim. Um queimador limpo e bem regulado aproveita melhor o gás e esquenta a água mais rápido, gastando menos.' },
      { p: 'Quanto tempo leva?', r: 'Em média de 1h30 a 2h30, dependendo do modelo e do nível de sujeira.' },
    ],
  },
  {
    slug: 'venda-de-aquecedor-a-gas',
    nome: 'Venda de Aquecedor a Gás',
    titulo: 'Venda de Aquecedor a Gás com Instalação no RJ',
    descricao:
      'Venda de aquecedor a gás com instalação no Rio de Janeiro. Ajudamos a escolher o modelo e a vazão certos para sua casa. Rinnai, Lorenzetti, Komeco, Bosch e mais.',
    h1: 'Venda de Aquecedor a Gás com Instalação',
    resumo: 'Ajudamos a escolher o aquecedor certo e entregamos instalado, testado e com garantia.',
    icone: 'carrinho',
    foto: { src: '/img/servicos/aquecedor-instalado-rinnai', alt: 'Aquecedor a gás Rinnai digital novo instalado', retrato: true },
    intro: [
      'Comprar o aquecedor errado é um problema comum: vazão pequena demais para os chuveiros da casa, modelo incompatível com o tipo de gás ou sem espaço para a chaminé. A Falcon Aquecedores indica o modelo ideal antes da compra.',
      'Avaliamos quantos pontos de água quente você tem, o tipo de gás (GN ou GLP) e o local de instalação, e oferecemos o aquecedor já com a instalação completa feita pela nossa equipe, dentro das normas.',
    ],
    sinais: [
      'Aquecedor antigo que vive dando defeito',
      'Troca de chuveiro elétrico por gás',
      'Reforma ou imóvel novo',
      'Água quente não dá para dois chuveiros',
      'Conserto mais caro que um aparelho novo',
      'Mudança para gás natural encanado',
    ],
    inclui: [
      'Visita técnica e indicação do modelo e da vazão',
      'Aquecedores das principais marcas',
      'Instalação completa de gás, água e chaminé',
      'Regulagem e teste de funcionamento',
      'Garantia do fabricante e da instalação',
    ],
    faq: [
      { p: 'Qual aquecedor devo comprar para minha casa?', r: 'Depende de quantos pontos de água quente serão usados ao mesmo tempo e do tipo de gás. Fazemos essa conta com você antes da compra.' },
      { p: 'O preço já inclui a instalação?', r: 'Passamos o orçamento com o aparelho e a instalação completa, para você saber o valor total antes de fechar.' },
    ],
  },
  {
    slug: 'conversao-de-aquecedor-gn-glp',
    nome: 'Conversão de Gás GN e GLP',
    titulo: 'Conversão de Aquecedor a Gás GLP para GN no RJ',
    descricao:
      'Conversão de aquecedor de GLP (gás de botijão) para GN (gás natural encanado) e vice-versa no Rio de Janeiro, com troca de injetores e regulagem.',
    h1: 'Conversão de Aquecedor de GLP para Gás Natural',
    resumo: 'Mudou o tipo de gás? Convertimos seu aquecedor com segurança e regulagem.',
    icone: 'troca',
    foto: { src: '/img/servicos/central-de-gas-glp-regulador', alt: 'Central de gás GLP com regulador de pressão instalada pela Falcon Aquecedores', retrato: true },
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
    slug: 'construcao-de-tubulacao-de-gas',
    nome: 'Construção de Tubulação de Gás',
    titulo: 'Construção de Tubulação de Gás no Rio de Janeiro',
    descricao:
      'Construção de tubulação de gás no Rio de Janeiro: rede nova para aquecedores, fogões e centrais de gás, em cobre, multicamada ou aço, conforme as normas, com teste de estanqueidade.',
    h1: 'Construção de Tubulação de Gás',
    resumo: 'Rede de gás nova para aquecedores, fogões e centrais, feita dentro das normas e testada.',
    icone: 'tubo',
    foto: { src: '/img/servicos/tubulacao-gas-aquecedores-rinnai', alt: 'Tubulação de gás e água construída para vários aquecedores Rinnai', retrato: true },
    intro: [
      'Uma tubulação de gás bem feita é a base de uma instalação segura. A Falcon Aquecedores constrói redes de gás novas para casas, apartamentos, condomínios e comércios, desde a central ou o medidor até cada ponto de consumo: aquecedores, fogões e equipamentos.',
      'Definimos o trajeto e o diâmetro da rede de acordo com a quantidade de aparelhos, usamos materiais adequados (cobre, multicamada ou aço), instalamos registros e reguladores e, no fim, fazemos o teste de estanqueidade para garantir que não há vazamento.',
    ],
    sinais: [
      'Instalação de aquecedor a gás em imóvel sem ponto de gás',
      'Reforma de cozinha, banheiro ou área de serviço',
      'Troca do botijão (GLP) por gás encanado (GN)',
      'Instalação de vários aquecedores em condomínio ou comércio',
      'Tubulação antiga, corroída ou fora das normas',
      'Mudança de local do aquecedor ou do fogão',
    ],
    inclui: [
      'Avaliação do local e definição do trajeto',
      'Dimensionamento da rede conforme os aparelhos',
      'Tubulação em cobre, multicamada ou aço',
      'Instalação de registros e reguladores de pressão',
      'Teste de estanqueidade e garantia no serviço',
    ],
    faq: [
      { p: 'Vocês fazem a tubulação de gás para mais de um aquecedor?', r: 'Sim. Construímos redes para vários aquecedores, como em condomínios, academias e comércios, com o dimensionamento correto para todos funcionarem ao mesmo tempo.' },
      { p: 'A tubulação segue as normas técnicas?', r: 'Sim. Seguimos as normas da ABNT para instalações de gás e fazemos o teste de estanqueidade ao final.' },
      { p: 'Vocês fazem tubulação para gás natural e para GLP?', r: 'Sim. Construímos redes para gás natural encanado (GN) e para gás de botijão ou central (GLP).' },
    ],
  },
  {
    slug: 'pressurizador-para-aquecedor',
    nome: 'Venda e Instalação de Pressurizador',
    titulo: 'Venda e Instalação de Pressurizador no Rio de Janeiro',
    descricao:
      'Venda e instalação de pressurizador de água para aquecedor a gás no Rio de Janeiro. Mais pressão no chuveiro e aquecedor acendendo sempre. Lorenzetti, Komeco, Rinnai.',
    h1: 'Venda e Instalação de Pressurizador',
    resumo: 'Venda e instalação de pressurizador para ter pressão no chuveiro e o aquecedor acendendo sempre.',
    icone: 'pressao',
    foto: { src: '/img/servicos/pressurizador-lorenzetti', alt: 'Pressurizador de água Lorenzetti para aquecedor a gás' },
    intro: [
      'Em casas e apartamentos com pouca pressão de água, o aquecedor a gás pode não acender ou apagar no meio do banho, porque precisa de uma vazão mínima para funcionar. O pressurizador resolve isso e ainda melhora a pressão do chuveiro.',
      'A Falcon Aquecedores dimensiona, instala e conserta pressurizadores para aquecedor a gás, com ligação hidráulica e elétrica corretas e regulagem para trabalhar em conjunto com o aquecedor.',
    ],
    sinais: [
      'Aquecedor não acende com pouca água',
      'Chuveiro com pressão fraca',
      'Aquecedor apaga quando abre outra torneira',
      'Pressurizador ligando e desligando sozinho',
      'Pressurizador barulhento ou vazando',
      'Caixa d’água pouco acima do chuveiro',
    ],
    inclui: [
      'Avaliação da pressão e da vazão da casa',
      'Indicação do modelo de pressurizador',
      'Instalação hidráulica e elétrica',
      'Conserto e troca de pressurizador',
      'Regulagem junto com o aquecedor',
    ],
    faq: [
      { p: 'Preciso de pressurizador para o meu aquecedor?', r: 'Se a caixa d’água fica pouco acima dos chuveiros ou o aquecedor apaga com frequência, o pressurizador costuma resolver. Avaliamos no local.' },
      { p: 'Vocês consertam pressurizador?', r: 'Sim. Consertamos e trocamos pressurizadores de diversas marcas, como Lorenzetti, Komeco e Rinnai.' },
    ],
  },
  {
    slug: 'conserto-e-manutencao-de-boiler',
    nome: 'Conserto e Manutenção de Boiler',
    titulo: 'Conserto e Manutenção de Boiler no Rio de Janeiro',
    descricao:
      'Conserto e manutenção de boiler (reservatório térmico) no Rio de Janeiro: resistência, termostato, válvulas, ânodo de magnésio, drenagem e vazamentos. Boilers a gás, elétricos e solares.',
    h1: 'Conserto e Manutenção de Boiler no Rio de Janeiro',
    resumo: 'Conserto e manutenção de boilers a gás, elétricos e solares: resistência, termostato, válvulas e vazamentos.',
    icone: 'tanque',
    foto: { src: '/img/servicos/boiler-reservatorio', alt: 'Boiler reservatório térmico de inox para água quente' },
    intro: [
      'O boiler (reservatório térmico) guarda a água quente da casa e trabalha junto com o aquecedor a gás, com a resistência elétrica ou com o sistema de aquecimento solar. Quando ele falha, a água não esquenta, acaba rápido ou o reservatório começa a vazar.',
      'A Falcon Aquecedores faz o conserto e a manutenção de boilers de baixa e de alta pressão, horizontais e verticais. Testamos resistência, termostato e válvulas, localizamos vazamentos e, na manutenção periódica, drenamos e limpamos o reservatório e verificamos o ânodo de magnésio, que protege o boiler contra a corrosão.',
    ],
    sinais: [
      'Água do boiler não esquenta ou esquenta pouco',
      'Água quente acaba muito rápido',
      'Disjuntor desarma quando a resistência liga',
      'Vazamento no reservatório ou nas conexões',
      'Válvula de alívio pingando sem parar',
      'Mais de 12 meses sem manutenção',
    ],
    inclui: [
      'Teste e troca de resistência e termostato',
      'Verificação das válvulas de segurança, alívio e retenção',
      'Drenagem e limpeza do reservatório',
      'Inspeção e troca do ânodo de magnésio',
      'Reparo de vazamentos em conexões',
    ],
    faq: [
      { p: 'Vocês consertam boiler solar?', r: 'Sim. Consertamos e fazemos manutenção em boilers ligados a aquecimento solar, a gás e elétrico, incluindo resistência de apoio, termostato e válvulas.' },
      { p: 'De quanto em quanto tempo o boiler precisa de manutenção?', r: 'O recomendado é uma revisão por ano, com drenagem do reservatório e verificação do ânodo de magnésio.' },
      { p: 'Vale a pena consertar ou trocar o boiler?', r: 'Na maioria dos casos o conserto resolve. Se o reservatório estiver furado por corrosão, mostramos as opções de troca com valores para você decidir.' },
    ],
  },
  {
    slug: 'resina-na-tubulacao-de-gas',
    nome: 'Resina na Tubulação',
    titulo: 'Resina na Tubulação de Gás no Rio de Janeiro',
    descricao:
      'Aplicação de resina na tubulação de gás no Rio de Janeiro: elimina vazamentos por dentro do cano, sem quebrar paredes e pisos. Teste de estanqueidade e garantia.',
    h1: 'Resina na Tubulação de Gás no Rio de Janeiro',
    resumo: 'Vedação da tubulação de gás por dentro, com resina, sem quebrar paredes e pisos.',
    icone: 'gota',
    foto: { src: '/img/servicos/tecnico-falcon-bosch', alt: 'Técnico da Falcon Aquecedores verificando a tubulação de gás de um aquecedor', retrato: true },
    intro: [
      'Tubulações de gás antigas podem apresentar pequenos vazamentos por corrosão ou falhas nas conexões que ficam dentro da parede. Trocar todo o encanamento significa quebrar paredes, pisos e azulejos, com obra demorada e cara.',
      'Com a aplicação de resina na tubulação, a Falcon Aquecedores veda o cano por dentro: limpamos a rede, aplicamos uma resina própria para gás que forma uma nova camada interna e, depois da cura, fazemos o teste de estanqueidade para confirmar que não há mais vazamento.',
    ],
    sinais: [
      'Cheiro de gás sem causa aparente',
      'Reprovação no teste de estanqueidade',
      'Vistoria de gás do condomínio exigindo reparo',
      'Medidor de gás girando com tudo desligado',
      'Tubulação antiga e embutida na parede',
      'Corte do gás pela concessionária por vazamento',
    ],
    inclui: [
      'Localização do vazamento e teste inicial da rede',
      'Limpeza interna da tubulação',
      'Aplicação de resina própria para gás',
      'Teste de estanqueidade após a cura',
      'Laudo do teste e garantia no serviço',
    ],
    faq: [
      { p: 'Precisa quebrar parede para aplicar a resina?', r: 'Não. A resina é aplicada por dentro da tubulação existente, a partir dos pontos de gás, sem quebra-quebra.' },
      { p: 'A resina resolve vazamento em tubulação embutida?', r: 'Sim. É justamente indicada para tubulações embutidas em paredes e pisos, onde a troca exigiria obra.' },
      { p: 'O que fazer se sentir cheiro de gás?', r: 'Feche o registro de gás, abra portas e janelas, não acione interruptores nem use fogo e chame um técnico.' },
    ],
  },
];

export const getServico = (slug: string) => servicos.find((s) => s.slug === slug)!;
