// Dados centrais da empresa. Altere aqui e o site inteiro é atualizado.
export const site = {
  nome: 'Falcon Aquecedores',
  slogan: 'Conserto de Aquecedor a Gás',
  url: 'https://www.falconaquecedores.com.br',
  cidade: 'São Paulo',
  uf: 'SP',
  // TODO: trocar pelos contatos reais
  telefone: '(11) 99999-9999',
  telefoneLink: '+5511999999999',
  whatsapp: '5511999999999',
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
    { valor: '5', rotulo: 'zonas de São Paulo' },
  ],
};

export const whatsappUrl = (msg: string = site.whatsappMensagem) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

export const marcas = [
  'Rinnai', 'Lorenzetti', 'Komeco', 'Bosch', 'Orbis', 'Sakura',
  'Junkers', 'Cumulus', 'Inova', 'Heliotek', 'Rheem', 'Ariston',
];
