// Lista de zonas e bairros atendidos. Para incluir ou remover um bairro,
// basta editar o array `bairros` da zona: as páginas, os links e o sitemap
// são gerados automaticamente.

export const slugify = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

interface ZonaBase {
  nome: string;
  descricao: string;
  bairros: string[];
}

const dados: ZonaBase[] = [
  {
    nome: 'Zona Sul',
    descricao:
      'Atendemos toda a Zona Sul de São Paulo, de bairros residenciais como Moema e Vila Mariana até a região de Santo Amaro, Interlagos e Campo Limpo.',
    bairros: [
      'Moema', 'Vila Mariana', 'Ibirapuera', 'Saúde', 'Jabaquara', 'Vila Clementino',
      'Planalto Paulista', 'Campo Belo', 'Brooklin', 'Vila Olímpia', 'Itaim Bibi',
      'Santo Amaro', 'Chácara Santo Antônio', 'Granja Julieta', 'Alto da Boa Vista',
      'Jardim Marajoara', 'Interlagos', 'Socorro', 'Cidade Ademar', 'Cidade Dutra',
      'Campo Grande', 'Morumbi', 'Vila Andrade', 'Campo Limpo', 'Capão Redondo',
      'Jardim São Luís', 'Jardim Ângela', 'Cursino', 'Ipiranga', 'Sacomã',
      'Vila Mascote', 'Jardim Paulista', 'Grajaú', 'Parelheiros',
    ],
  },
  {
    nome: 'Zona Oeste',
    descricao:
      'Na Zona Oeste atendemos de Pinheiros e Perdizes à Lapa, Butantã e região do Morumbi, com técnicos que conhecem os condomínios e as instalações da região.',
    bairros: [
      'Pinheiros', 'Alto de Pinheiros', 'Vila Madalena', 'Perdizes', 'Pompeia',
      'Lapa', 'Vila Leopoldina', 'Água Branca', 'Barra Funda', 'Butantã',
      'Jardim Europa', 'Jardim América', 'Cidade Jardim', 'Sumaré', 'Vila Romana',
      'Jaguaré', 'Rio Pequeno', 'Raposo Tavares', 'Vila Sônia', 'Jardim Bonfiglioli',
      'Alto da Lapa', 'Vila Ipojuca', 'Cerqueira César', 'Jaguara', 'Jardim Paulistano',
    ],
  },
  {
    nome: 'Zona Norte',
    descricao:
      'Na Zona Norte atendemos Santana, Tucuruvi, Casa Verde, Vila Guilherme e bairros vizinhos, com visitas agendadas no mesmo dia sempre que possível.',
    bairros: [
      'Santana', 'Tucuruvi', 'Mandaqui', 'Casa Verde', 'Vila Guilherme',
      'Vila Maria', 'Jaçanã', 'Tremembé', 'Água Fria', 'Parada Inglesa',
      'Lauzane Paulista', 'Imirim', 'Limão', 'Freguesia do Ó', 'Pirituba',
      'Jaraguá', 'Brasilândia', 'Cachoeirinha', 'Vila Medeiros', 'Jardim São Paulo',
      'Horto Florestal', 'Vila Nova Cachoeirinha', 'Carandiru', 'Vila Ede',
    ],
  },
  {
    nome: 'Zona Leste',
    descricao:
      'Na Zona Leste atendemos do Tatuapé e da Mooca até Penha, Vila Prudente e Itaquera, com técnicos posicionados na região para agilizar o atendimento.',
    bairros: [
      'Tatuapé', 'Mooca', 'Anália Franco', 'Vila Formosa', 'Carrão', 'Penha',
      'Vila Matilde', 'Belém', 'Brás', 'Água Rasa', 'Vila Prudente', 'Sapopemba',
      'Aricanduva', 'Vila Carrão', 'Cangaíba', 'Ermelino Matarazzo', 'São Mateus',
      'Itaquera', 'Guaianases', 'São Miguel Paulista', 'Itaim Paulista',
      'Cidade Tiradentes', 'Vila Esperança', 'Parque São Lucas', 'Vila Alpina',
      'Jardim Textil', 'Chácara Califórnia', 'Cidade Líder',
    ],
  },
  {
    nome: 'Centro',
    descricao:
      'No Centro de São Paulo atendemos residências, prédios antigos e comércios na Bela Vista, Consolação, Higienópolis, Liberdade e região.',
    bairros: [
      'Bela Vista', 'Consolação', 'Higienópolis', 'Liberdade', 'República',
      'Santa Cecília', 'Sé', 'Cambuci', 'Aclimação', 'Bom Retiro', 'Pacaembu',
      'Vila Buarque', 'Paraíso', 'Campos Elíseos', 'Luz',
    ],
  },
];

export interface Bairro {
  nome: string;
  slug: string;
  zona: Zona;
}

export interface Zona {
  nome: string;
  slug: string;
  na: string; // "na Zona Sul" / "no Centro"
  da: string; // "da Zona Sul" / "do Centro"
  descricao: string;
  bairros: Bairro[];
}

export const zonas: Zona[] = dados.map((z) => {
  const masc = z.nome === 'Centro';
  const zona: Zona = {
    nome: z.nome, slug: slugify(z.nome), descricao: z.descricao, bairros: [],
    na: `${masc ? 'no' : 'na'} ${z.nome}`, da: `${masc ? 'do' : 'da'} ${z.nome}`,
  };
  zona.bairros = z.bairros.map((nome) => ({ nome, slug: slugify(nome), zona }));
  return zona;
});

export const todosBairros: Bairro[] = zonas.flatMap((z) => z.bairros);

export const urlZona = (z: Zona) => `/${z.slug}/`;
export const urlBairro = (b: Bairro) => `/${b.zona.slug}/${b.slug}/`;

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
