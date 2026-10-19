// Regiões e bairros atendidos. Para incluir ou remover um bairro basta editar
// os grupos da região: as páginas, os links e o sitemap são gerados sozinhos.
//
// Cada bairro pode ser só o nome ('Copacabana') ou um objeto quando o nome
// sozinho fica ambíguo: { nome: 'Centro de Niterói', curto: 'Centro' }.
// `nome` aparece nos títulos e textos; `curto` nas listas de bairros.
// Um bairro repetido em duas regiões (mesmo nome e cidade) ganha uma única
// página, na primeira região em que aparece.

export const slugify = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

type BairroDado = string | { nome: string; curto: string };

interface GrupoDado {
  titulo?: string;
  cidade?: string; // padrão: cidade da região
  bairros: BairroDado[];
}

interface ZonaDado {
  nome: string;
  na: string; // "na Zona Sul", "em Niterói"
  da: string; // "da Zona Sul", "de Niterói"
  local: string; // como a região aparece ao lado do bairro: "Zona Sul do Rio"
  cidade: string;
  descricao: string;
  grupos: GrupoDado[];
}

const RIO = 'Rio de Janeiro';

// Preposição usada antes do nome do bairro ("na Tijuca", "no Méier").
// Bairros fora desta lista usam "em" ("em Copacabana").
const NO = [
  'Leme', 'Leblon', 'Flamengo', 'Catete', 'Humaitá', 'Jardim Botânico', 'Cosme Velho', 'Recreio dos Bandeirantes',
  'Joá', 'Anil', 'Pechincha', 'Tanque', 'Camorim', 'Alto da Boa Vista', 'Andaraí', 'Grajaú', 'Maracanã', 'Méier',
  'Cachambi', 'Engenho de Dentro', 'Engenho Novo', 'Lins de Vasconcelos', 'Riachuelo', 'Rocha', 'Campinho',
  'Vital Brazil', 'Jardim Icaraí', 'Ingá', 'Centro de Niterói', 'Pé Pequeno', 'Fonseca', 'Barreto', 'Cafubá',
  'Centro de São Gonçalo', 'Zé Garoto', 'Estrela do Norte', 'Porto da Pedra', 'Porto Novo', 'Mutuá', 'Colubandê',
  'Rio do Ouro', 'Arsenal', 'Centro de Nova Iguaçu', 'Jardim Iguaçu', 'K-11', 'Caonze', 'Bairro da Luz', 'Moquetá',
  'Bairro da Prata', 'Centro de Duque de Caxias', 'Jardim 25 de Agosto', 'Parque Duque', 'Jardim Primavera',
  'Centro de São João de Meriti', 'Centro de Nilópolis', 'Centro de Mesquita',
];
const NA = [
  'Glória', 'Urca', 'Gávea', 'Lagoa', 'Barra da Tijuca', 'Barra Olímpica', 'Praça Seca', 'Gardênia Azul', 'Taquara',
  'Freguesia (Jacarepaguá)', 'Tijuca', 'Praça da Bandeira', 'Piedade', 'Penha', 'Vila da Penha', 'Vila São Luiz', 'Vila Emil',
];
const prep = (nome: string) => (NO.includes(nome) ? 'no' : NA.includes(nome) ? 'na' : 'em');

const dados: ZonaDado[] = [
  {
    nome: 'Zona Sul',
    na: 'na Zona Sul', da: 'da Zona Sul', local: 'Zona Sul do Rio', cidade: RIO,
    descricao:
      'Na Zona Sul do Rio atendemos de Copacabana, Ipanema e Leblon até Botafogo, Flamengo, Laranjeiras e Santa Teresa, em casas e prédios de todos os portes.',
    grupos: [{
      bairros: [
        'Copacabana', 'Leme', 'Ipanema', 'Leblon', 'Botafogo', 'Flamengo', 'Laranjeiras',
        'Catete', 'Glória', 'Humaitá', 'Urca', 'Gávea', 'Jardim Botânico', 'Lagoa',
        'São Conrado', 'Cosme Velho', 'Santa Teresa',
      ],
    }],
  },
  {
    nome: 'Barra da Tijuca',
    na: 'na Barra da Tijuca', da: 'da Barra da Tijuca', local: 'Barra da Tijuca', cidade: RIO,
    descricao:
      'Na Barra da Tijuca e no Recreio atendemos condomínios, casas e apartamentos, com técnicos que conhecem as instalações de gás da região.',
    grupos: [{
      bairros: ['Barra da Tijuca', 'Recreio dos Bandeirantes', 'Joá', 'São Conrado', 'Barra Olímpica'],
    }],
  },
  {
    nome: 'Jacarepaguá',
    na: 'em Jacarepaguá', da: 'de Jacarepaguá', local: 'Jacarepaguá', cidade: RIO,
    descricao:
      'Em Jacarepaguá atendemos Freguesia, Anil, Pechincha, Taquara, Vila Valqueire e bairros vizinhos, com visitas agendadas no mesmo dia sempre que possível.',
    grupos: [{
      bairros: [
        { nome: 'Freguesia (Jacarepaguá)', curto: 'Freguesia' }, 'Anil', 'Pechincha', 'Taquara',
        'Tanque', 'Praça Seca', 'Gardênia Azul', 'Curicica', 'Jacarepaguá', 'Camorim', 'Vila Valqueire',
      ],
    }],
  },
  {
    nome: 'Zona Norte',
    na: 'na Zona Norte', da: 'da Zona Norte', local: 'Zona Norte do Rio', cidade: RIO,
    descricao:
      'Na Zona Norte do Rio atendemos a região da Tijuca, o Grande Méier e bairros como São Cristóvão, Madureira, Penha e Bonsucesso.',
    grupos: [
      {
        titulo: 'Região da Tijuca',
        bairros: ['Tijuca', 'Alto da Boa Vista', 'Andaraí', 'Grajaú', 'Vila Isabel', 'Maracanã', 'Praça da Bandeira'],
      },
      {
        titulo: 'Grande Méier',
        bairros: [
          'Méier', 'Cachambi', 'Todos os Santos', 'Engenho de Dentro', 'Engenho Novo',
          'Lins de Vasconcelos', 'Riachuelo', 'Rocha', 'Piedade', 'Água Santa',
        ],
      },
      {
        titulo: 'Outras áreas',
        bairros: [
          'São Cristóvão', 'Del Castilho', 'Inhaúma', 'Irajá', 'Madureira', 'Cascadura', 'Campinho',
          'Penha', 'Vila da Penha', 'Olaria', 'Ramos', 'Bonsucesso',
        ],
      },
    ],
  },
  {
    nome: 'Niterói',
    na: 'em Niterói', da: 'de Niterói', local: 'Niterói', cidade: 'Niterói',
    descricao:
      'Em Niterói atendemos Icaraí, Santa Rosa, São Francisco, Ingá, Centro, Charitas e a Região Oceânica, de Piratininga a Itacoatiara.',
    grupos: [
      {
        titulo: 'Região de Icaraí',
        bairros: ['Icaraí', 'Santa Rosa', 'Vital Brazil', 'Jardim Icaraí', 'São Francisco', 'Ingá'],
      },
      {
        titulo: 'Outras regiões',
        bairros: [
          { nome: 'Centro de Niterói', curto: 'Centro' }, 'Charitas', 'Pé Pequeno', 'Fonseca', 'Barreto',
          'Piratininga', 'Camboinhas', 'Itaipu', 'Itacoatiara', 'Cafubá',
        ],
      },
    ],
  },
  {
    nome: 'São Gonçalo',
    na: 'em São Gonçalo', da: 'de São Gonçalo', local: 'São Gonçalo', cidade: 'São Gonçalo',
    descricao:
      'Em São Gonçalo atendemos do Centro e Zé Garoto até Alcântara, Neves, Porto da Pedra, Colubandê e região.',
    grupos: [{
      bairros: [
        { nome: 'Centro de São Gonçalo', curto: 'Centro' }, 'Zé Garoto', 'Estrela do Norte', 'Rocha',
        'Brasilândia', 'Santa Catarina', 'Neves', 'Porto da Pedra', 'Porto Novo', 'Boa Vista', 'Mutuá',
        'Trindade', 'Colubandê', 'Alcântara', 'Maria Paula', 'Rio do Ouro', 'Arsenal',
      ],
    }],
  },
  {
    nome: 'Baixada Fluminense',
    na: 'na Baixada Fluminense', da: 'da Baixada Fluminense', local: 'Baixada Fluminense', cidade: 'Baixada Fluminense',
    descricao:
      'Na Baixada Fluminense atendemos Nova Iguaçu, Duque de Caxias, São João de Meriti, Nilópolis e Mesquita.',
    grupos: [
      {
        titulo: 'Nova Iguaçu', cidade: 'Nova Iguaçu',
        bairros: [
          { nome: 'Centro de Nova Iguaçu', curto: 'Centro' }, 'Jardim Iguaçu', 'K-11', 'Caonze',
          { nome: 'Bairro da Luz', curto: 'da Luz' }, 'Moquetá', 'Bairro da Prata',
        ],
      },
      {
        titulo: 'Duque de Caxias', cidade: 'Duque de Caxias',
        bairros: [
          { nome: 'Centro de Duque de Caxias', curto: 'Centro' }, 'Jardim 25 de Agosto', 'Parque Duque',
          'Vila São Luiz', 'Jardim Primavera',
        ],
      },
      {
        titulo: 'São João de Meriti', cidade: 'São João de Meriti',
        bairros: [{ nome: 'Centro de São João de Meriti', curto: 'Centro' }, 'Vilar dos Teles', 'Agostinho Porto'],
      },
      {
        titulo: 'Nilópolis', cidade: 'Nilópolis',
        bairros: [{ nome: 'Centro de Nilópolis', curto: 'Centro' }, 'Olinda'],
      },
      {
        titulo: 'Mesquita', cidade: 'Mesquita',
        bairros: [{ nome: 'Centro de Mesquita', curto: 'Centro' }, 'Vila Emil'],
      },
    ],
  },
];

export interface Bairro {
  nome: string;
  curto: string;
  em: string; // "na Tijuca", "em Copacabana"
  slug: string;
  cidade: string;
  local: string; // "Zona Sul do Rio", "Niterói", "Nova Iguaçu"
  zona: Zona;
}

export interface Grupo {
  titulo?: string;
  bairros: Bairro[];
}

export interface Zona {
  nome: string;
  slug: string;
  na: string;
  da: string;
  local: string;
  descricao: string;
  grupos: Grupo[];
  bairros: Bairro[];
}

const porChave = new Map<string, Bairro>();

export const zonas: Zona[] = dados.map((z) => {
  const zona: Zona = {
    nome: z.nome, slug: slugify(z.nome), na: z.na, da: z.da, local: z.local,
    descricao: z.descricao, grupos: [], bairros: [],
  };
  zona.grupos = z.grupos.map((g) => {
    const cidade = g.cidade ?? z.cidade;
    const local = g.cidade ?? z.local;
    const bairros = g.bairros.map((d) => {
      const nome = typeof d === 'string' ? d : d.nome;
      const curto = typeof d === 'string' ? d : d.curto;
      const chave = `${cidade}|${nome}`;
      const existente = porChave.get(chave);
      if (existente) return existente;
      const b: Bairro = { nome, curto, em: `${prep(nome)} ${nome}`, slug: slugify(nome), cidade, local, zona };
      porChave.set(chave, b);
      return b;
    });
    zona.bairros.push(...bairros);
    return { titulo: g.titulo, bairros };
  });
  return zona;
});

// Bairros com página própria (cada um só uma vez)
export const todosBairros: Bairro[] = [...porChave.values()];

export const urlZona = (z: Zona) => `/${z.slug}/`;
export const urlBairro = (b: Bairro) => `/${b.zona.slug}/${b.slug}/`;

// "em Copacabana, Zona Sul do Rio" / "no Centro de Niterói" / "na Barra da Tijuca"
export const emCompleto = (b: Bairro) =>
  b.nome.includes(b.local) || b.local.includes(b.nome) ? b.em : `${b.em}, ${b.local}`;

// Bairros vizinhos na lista (usados em links internos da página do bairro)
export const bairrosProximos = (b: Bairro, qtd = 8) => {
  const lista = b.zona.bairros;
  const i = lista.indexOf(b);
  const out: Bairro[] = [];
  for (let d = 1; out.length < qtd && d < lista.length; d++) {
    if (lista[i + d]) out.push(lista[i + d]);
    if (out.length < qtd && lista[i - d]) out.push(lista[i - d]);
  }
  return out;
};

// Hash simples e determinístico para variar textos entre páginas
export const hash = (s: string) => {
  let h = 0;
  for (const c of s) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return h;
};
