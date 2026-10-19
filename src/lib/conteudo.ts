import { site } from '../data/site';
import { hash, emCompleto, type Bairro, type Zona } from '../data/zonas';

export const faqSchema = (itens: { p: string; r: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: itens.map((f) => ({
    '@type': 'Question',
    name: f.p,
    acceptedAnswer: { '@type': 'Answer', text: f.r },
  })),
});

export const servicoSchema = (nome: string, descricao: string, area: string, url: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: nome,
  name: `${nome} - ${area}`,
  description: descricao,
  url: new URL(url, site.url).href,
  provider: { '@id': `${site.url}/#empresa` },
  areaServed: { '@type': 'Place', name: area },
});

export const faqGeral = [
  { p: 'Quais regiões vocês atendem?', r: 'Atendemos a Zona Sul, a Barra da Tijuca, Jacarepaguá e a Zona Norte do Rio de Janeiro, além de Niterói, São Gonçalo e Baixada Fluminense (Nova Iguaçu, Duque de Caxias, São João de Meriti, Nilópolis e Mesquita).' },
  { p: 'Quais marcas de aquecedor a gás vocês consertam?', r: 'Atendemos todas as principais marcas: Rinnai, Lorenzetti, Komeco, Bosch, Orbis, Sakura, Junkers, Cumulus, Rheem e outras.' },
  { p: 'Como funciona o orçamento?', r: 'Você pode enviar fotos e o modelo pelo WhatsApp para uma estimativa. No local, o técnico faz o diagnóstico e informa o valor final antes de iniciar o serviço.' },
  { p: 'O serviço tem garantia?', r: 'Sim. Todos os consertos, instalações e manutenções saem com garantia por escrito.' },
  { p: 'Meu aquecedor está com cheiro de gás, o que faço?', r: 'Feche o registro de gás, abra portas e janelas, não acione interruptores e entre em contato. Não tente usar o aparelho até a avaliação de um técnico.' },
  { p: 'De quanto em quanto tempo devo fazer manutenção?', r: 'A recomendação é uma manutenção preventiva por ano, ou a cada 6 meses em caso de uso intenso ou água com muito calcário.' },
];

const pick = <T,>(arr: T[], seed: string) => arr[hash(seed) % arr.length];

export const textoZona = (z: Zona) => [
  `Precisa de conserto de aquecedor a gás ${z.na}? A ${site.nome} atende ${z.bairros.length} bairros ${z.da} com técnicos especializados em aquecedores de passagem e de acumulação, analógicos e digitais.`,
  z.descricao,
  `Fazemos conserto, manutenção preventiva, limpeza, instalação, conversão de gás e troca de peças, sempre com diagnóstico antes do orçamento e garantia por escrito. Escolha o seu bairro abaixo ou chame direto no WhatsApp.`,
];

export const textoBairro = (b: Bairro) => {
  const n = b.nome;
  const em = b.em;
  const z = b.zona.nome;
  const naZ = b.zona.na;
  const daZ = b.zona.da;
  const abertura = pick([
    `Está sem água quente ${em}? A ${site.nome} faz conserto de aquecedor a gás ${emCompleto(b)}, com técnicos especializados e atendimento rápido.`,
    `Procurando conserto de aquecedor a gás ${em}? Nossa equipe atende ${n} e os demais bairros ${daZ} com diagnóstico preciso e garantia no serviço.`,
    `A ${site.nome} é especialista em conserto de aquecedor a gás ${em} (${b.local}). Atendemos casas, apartamentos e comércios do bairro com agilidade e segurança.`,
    `Se o seu aquecedor a gás ${em} não acende, desliga sozinho ou não esquenta a água, a ${site.nome} resolve. Atendemos todo o bairro e a região ${daZ}.`,
  ], n);
  const meio = pick([
    `Nossos técnicos trabalham com todas as marcas e modelos, de aquecedores de passagem digitais aos de acumulação. Antes de qualquer serviço, fazemos o diagnóstico completo e você aprova o orçamento.`,
    `Atendemos aquecedores Rinnai, Lorenzetti, Komeco, Bosch, Orbis e outras marcas. O técnico avalia o aparelho no local, explica o defeito e só começa depois da sua aprovação.`,
    `Seja um aquecedor digital com código de erro ou um modelo analógico que não acende, levamos ferramentas e peças para resolver o problema, na maioria dos casos, na primeira visita.`,
  ], n + 'm');
  const fim = pick([
    `Além do conserto, fazemos manutenção preventiva, limpeza, instalação e conversão de gás ${em}. Chame no WhatsApp e agende a visita.`,
    `Moradores ${em.replace(/^(em|no|na) /, (m) => ({ 'em ': 'de ', 'no ': 'do ', 'na ': 'da ' } as Record<string, string>)[m])} também contam com nossa manutenção preventiva anual, que reduz o consumo de gás e evita quebras. Solicite um orçamento sem compromisso.`,
    `Para quem mora ${em}, oferecemos ainda instalação de aquecedor dentro das normas, limpeza e troca de peças. Fale com a gente pelo WhatsApp.`,
  ], n + 'f');
  return [abertura, meio, fim];
};

export const faqBairro = (b: Bairro) => [
  { p: `Vocês fazem conserto de aquecedor a gás ${b.em}?`, r: `Sim. A ${site.nome} atende ${b.nome} e todos os bairros ${b.zona.da}, com visitas agendadas no mesmo dia sempre que possível.` },
  { p: `Quanto custa o conserto de aquecedor a gás ${b.em}?`, r: `O valor depende do defeito e da peça necessária. O técnico faz o diagnóstico e passa o orçamento antes de iniciar. Você também pode enviar o modelo e o problema pelo WhatsApp para uma estimativa.` },
  { p: `Vocês atendem apartamentos e condomínios ${b.em}?`, r: `Sim. Atendemos casas, apartamentos, condomínios e comércios ${b.em}, seguindo as regras de cada condomínio.` },
  { p: 'Quais marcas vocês atendem?', r: 'Todas as principais: Rinnai, Lorenzetti, Komeco, Bosch, Orbis, Sakura, Junkers, Cumulus, Rheem e outras.' },
];

export const faqZona = (z: Zona) => [
  { p: `Vocês atendem todos os bairros ${z.da}?`, r: `Atendemos ${z.bairros.length} bairros ${z.da}, entre eles ${z.bairros.slice(0, 5).map((b) => b.nome).join(', ')}. Se o seu bairro não aparecer na lista, fale com a gente.` },
  { p: `Em quanto tempo um técnico chega ${z.na}?`, r: `Sempre que possível agendamos a visita para o mesmo dia ou o próximo dia útil, no horário que for melhor para você.` },
  ...faqGeral.slice(1, 4),
];
