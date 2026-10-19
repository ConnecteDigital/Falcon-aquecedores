// Dados centrais da empresa. Altere aqui e o site inteiro é atualizado.
export const site = {
  nome: 'Falcon Aquecedores',
  slogan: 'Conserto de Aquecedor a Gás',
  url: 'https://www.falconaquecedores.com.br',
  cidade: 'Rio de Janeiro',
  uf: 'RJ',
  regiao: 'Rio de Janeiro e região', // usado em textos: "atendemos todo o Rio de Janeiro e região"
  telefone: '(21) 97562-5861',
  telefoneBotao: '021 97562-5861', // como o número aparece nos botões de ligar
  telefoneLink: '+5521975625861',
  whatsapp: '5521975625861',
  whatsappMensagem: 'Olá! Vim pelo site da Falcon Aquecedores e gostaria de um orçamento.',
  email: 'contato@falconaquecedores.com.br',
  endereco: {
    rua: '',
    bairro: '',
    cep: '',
  },
  horario: 'Segunda a sábado, das 7h às 20h',
  horarioSchema: [{ dias: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], abre: '07:00', fecha: '20:00' }],
  instagram: '',
  facebook: '',
  numeros: [
    { valor: '+10', rotulo: 'anos de experiência' },
    { valor: '+5.000', rotulo: 'aquecedores atendidos' },
    { valor: '90 dias', rotulo: 'de garantia no serviço' },
    { valor: '7', rotulo: 'regiões atendidas' },
  ],
};

export const whatsappUrl = (msg: string = site.whatsappMensagem) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

export const marcas = [
  'Rinnai', 'Lorenzetti', 'Komeco', 'Bosch', 'Orbis', 'Sakura',
  'Junkers', 'Cumulus', 'Inova', 'Heliotek', 'Rheem', 'Ariston',
];
