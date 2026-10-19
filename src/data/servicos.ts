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
    slug: 'conserto-de-aquecedor-a-gas',
    nome: 'Conserto de Aquecedor a Gás',
    titulo: 'Conserto de Aquecedor a Gás no Rio de Janeiro',
    descricao:
      'Conserto de aquecedor a gás no Rio de Janeiro com técnico especializado. Diagnóstico preciso, peças originais e garantia. Chame no WhatsApp e agende hoje.',
    h1: 'Conserto de Aquecedor a Gás no Rio de Janeiro',
    resumo: 'Aquecedor não liga, desarma ou não esquenta? Diagnosticamos e consertamos no mesmo dia.',
    icone: 'ferramenta',
    foto: { src: '/img/servicos/aquecedor-aberto-reparo', alt: 'Aquecedor a gás aberto com placa eletrônica durante conserto', retrato: true },
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
    titulo: 'Manutenção de Aquecedor a Gás no Rio de Janeiro',
    descricao:
      'Manutenção de aquecedor a gás no Rio de Janeiro: revisão técnica, regulagem, troca de componentes e testes de segurança. Todas as marcas, com garantia.',
    h1: 'Manutenção de Aquecedor a Gás no Rio de Janeiro',
    resumo: 'Revisão técnica, regulagem e troca de componentes para o aquecedor voltar a funcionar bem.',
    icone: 'escudo',
    foto: { src: '/img/servicos/tecnico-conserto-aquecedor', alt: 'Técnico da Falcon Aquecedores fazendo manutenção em aquecedor a gás Rinnai', retrato: true },
    intro: [
      'Quando o aquecedor começa a dar sinais de desgaste, como água oscilando de temperatura, demora para acender ou barulhos, é hora de uma manutenção técnica. A Falcon Aquecedores revisa o aparelho por completo e corrige o que estiver fora do lugar.',
      'O técnico testa ignição, sensores, válvula de gás, fluxostato, placa e ventilador, regula chama e pressão e, quando preciso, troca componentes com peças compatíveis com o seu modelo. Tudo com orçamento aprovado antes.',
    ],
    sinais: [
      'Água oscilando entre quente e fria',
      'Demora ou falha para acender',
      'Barulhos, estalos ou chiados',
      'Aquecedor desligando durante o banho',
      'Chama irregular ou amarelada',
      'Código de erro no painel',
    ],
    inclui: [
      'Revisão completa dos componentes',
      'Regulagem de chama, gás e pressão de água',
      'Troca de peças desgastadas quando necessário',
      'Teste de combustão e de exaustão',
      'Teste de vazamento e garantia no serviço',
    ],
    faq: [
      { p: 'Qual a diferença entre manutenção e manutenção preventiva?', r: 'A manutenção corrige um aquecedor que já apresenta falhas. A manutenção preventiva é a revisão e limpeza anual, feita antes de o problema aparecer.' },
      { p: 'Vocês fazem manutenção em aquecedor digital?', r: 'Sim. Atendemos aquecedores digitais e analógicos de todas as principais marcas.' },
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
    foto: { src: '/img/servicos/aquecedor-rinnai-prata-gas', alt: 'Aquecedor a gás Rinnai com ligações de gás, água quente e água fria identificadas', retrato: true },
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
    slug: 'chamine-para-aquecedor-a-gas',
    nome: 'Chaminé para Aquecedor',
    titulo: 'Chaminé e Exaustão para Aquecedor a Gás no RJ',
    descricao:
      'Instalação, troca e adequação de chaminé (duto de exaustão) para aquecedor a gás no Rio de Janeiro, conforme as normas. Segurança contra monóxido de carbono.',
    h1: 'Chaminé para Aquecedor a Gás',
    resumo: 'Instalação, troca e adequação do duto de exaustão para eliminar os gases com segurança.',
    icone: 'chamine',
    foto: { src: '/img/servicos/aquecedor-lorenzetti-instalado', alt: 'Duto de exaustão (chaminé) de aquecedor a gás Lorenzetti instalado', retrato: true },
    intro: [
      'A chaminé leva para fora os gases da queima, entre eles o monóxido de carbono, que é inodoro e perigoso. Um duto solto, furado, com diâmetro errado ou sem saída adequada coloca a família em risco e faz o aquecedor desarmar.',
      'A Falcon Aquecedores instala, troca e adequa chaminés de aquecedores a gás seguindo a norma ABNT NBR 13103: diâmetro correto, inclinação, fixação, terminal e vedação na saída.',
    ],
    sinais: [
      'Duto amassado, furado ou solto',
      'Aquecedor desarmando por exaustão',
      'Cheiro de gás queimado no ambiente',
      'Manchas escuras perto da chaminé',
      'Instalação de aquecedor novo',
      'Exigência do condomínio ou da vistoria de gás',
    ],
    inclui: [
      'Avaliação do trajeto e do diâmetro do duto',
      'Troca de duto flexível ou rígido',
      'Instalação de terminal e vedação na saída',
      'Fixação e inclinação corretas',
      'Teste de tiragem e de combustão',
    ],
    faq: [
      { p: 'Toda chaminé de aquecedor precisa ir para fora?', r: 'Sim. Os gases da queima precisam ser levados para a área externa por um duto adequado, conforme a norma.' },
      { p: 'Vocês adequam a chaminé para a vistoria do gás?', r: 'Sim. Fazemos as adequações de exaustão exigidas em vistorias e pelos condomínios.' },
    ],
  },
  {
    slug: 'pressurizador-para-aquecedor',
    nome: 'Pressurizador',
    titulo: 'Pressurizador para Aquecedor a Gás no Rio de Janeiro',
    descricao:
      'Instalação e conserto de pressurizador de água para aquecedor a gás no Rio de Janeiro. Mais pressão no chuveiro e aquecedor acendendo sempre. Lorenzetti, Komeco, Rinnai.',
    h1: 'Pressurizador para Aquecedor a Gás',
    resumo: 'Instalação e conserto de pressurizador para ter pressão no chuveiro e o aquecedor acendendo sempre.',
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
    slug: 'reparo-de-vazamento-de-gas-em-aquecedor',
    nome: 'Vazamento de Gás e Água',
    titulo: 'Reparo de Vazamento em Aquecedor a Gás no RJ',
    descricao:
      'Vazamento de gás ou de água no aquecedor? Localizamos e reparamos o vazamento com teste de estanqueidade no Rio de Janeiro. Atendimento rápido.',
    h1: 'Reparo de Vazamento em Aquecedor a Gás',
    resumo: 'Localização e reparo de vazamentos de gás e de água com teste de estanqueidade.',
    icone: 'alerta',
    foto: { src: '/img/servicos/tecnico-falcon-bosch', alt: 'Técnico da Falcon Aquecedores verificando conexões de aquecedor a gás Bosch', retrato: true },
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
