# Falcon Aquecedores

Site de conserto de aquecedor a gás no Rio de Janeiro e região, feito com [Astro](https://astro.build) (HTML estático, rápido e otimizado para SEO).

## Comandos

```bash
npm install      # instala as dependências
npm run dev      # servidor local em http://localhost:4321
npm run build    # gera o site final na pasta dist/
```

Na Vercel ou Netlify o projeto é detectado automaticamente (framework **Astro**, saída `dist/`).

## Onde editar

| O que | Arquivo |
| --- | --- |
| Telefone (inclusive o formato 021 dos botões), WhatsApp, horário, domínio, números | `src/data/site.ts` |
| Serviços (uma página para cada) | `src/data/servicos.ts` |
| Regiões, sub-regiões e bairros (uma página para cada) | `src/data/zonas.ts` |
| Depoimentos de clientes | `src/data/depoimentos.ts` |
| Fotos do carrossel "Serviços realizados" | pasta `src/assets/trabalhos/` |
| Cores e visual | `src/styles/global.css` (variáveis no topo) |

Se mudar o domínio, troque também em `astro.config.mjs` (`site`) e em `public/robots.txt`.

## Estrutura de URLs

- `/` Página inicial
- `/servicos/` e `/servicos/<servico>/` (ex.: `/servicos/conserto-de-aquecedor-a-gas/`)
- `/rio-de-janeiro/` Página da cidade do Rio (Zona Sul, Barra, Jacarepaguá e Zona Norte)
- A página geral de áreas atendidas é a própria home (`/#areas`)
- `/<zona>/` (ex.: `/zona-sul/`, `/niteroi/`, `/baixada-fluminense/`)
- `/<zona>/<bairro>/` (ex.: `/zona-sul/copacabana/`, `/zona-norte/tijuca/`)
- `/sobre/`, `/contato/`

## SEO incluído

- Title, meta description e canonical únicos por página
- Open Graph / Twitter Card com imagem de compartilhamento
- Dados estruturados (JSON-LD): `HVACBusiness`, `Service`, `FAQPage`, `BreadcrumbList`, `ItemList`
- `sitemap-index.xml` automático e `robots.txt`
- Breadcrumbs, links internos entre serviços, zonas e bairros vizinhos
- Textos dos bairros com variações para evitar conteúdo duplicado
- HTML estático, CSS inline e quase nenhum JavaScript

## Fotos do carrossel "Serviços realizados"

Coloque as fotos (.jpg, .jpeg, .png, .webp) e vídeos curtos (.mp4, até uns 10 MB) na pasta
`src/assets/trabalhos/`.
Não precisa redimensionar: no build elas são convertidas para WebP e reduzidas automaticamente.

- O nome do arquivo vira a legenda e o texto alternativo (bom para o Google). Use nomes descritivos,
  separados por hífen, sem acentos: `instalacao-aquecedor-rinnai-copacabana.jpg` vira
  "Instalação aquecedor rinnai copacabana".
- Os itens aparecem em ordem alfabética. Um número no começo do nome (`01-`, `03a-`) define a posição
  e não aparece na legenda.
- Capa de vídeo (opcional): uma imagem em `src/assets/trabalhos/capas/` com o mesmo nome do vídeo.
- Pelo site do GitHub: abra a pasta `src/assets/trabalhos`, clique em **Add file > Upload files**,
  arraste as fotos e confirme o commit.
