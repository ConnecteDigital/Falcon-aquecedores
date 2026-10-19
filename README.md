# Falcon Aquecedores

Site de conserto de aquecedor a gás em São Paulo, feito com [Astro](https://astro.build) (HTML estático, rápido e otimizado para SEO).

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
| Telefone, WhatsApp, e-mail, horário, domínio, números | `src/data/site.ts` |
| Serviços (uma página para cada) | `src/data/servicos.ts` |
| Zonas e bairros (uma página para cada) | `src/data/zonas.ts` |
| Depoimentos de clientes | `src/data/depoimentos.ts` |
| Cores e visual | `src/styles/global.css` (variáveis no topo) |

Se mudar o domínio, troque também em `astro.config.mjs` (`site`) e em `public/robots.txt`.

## Estrutura de URLs

- `/` Página inicial
- `/servicos/` e `/servicos/<servico>/` (ex.: `/servicos/conserto-de-aquecedor-a-gas/`)
- `/areas-atendidas/` Todas as zonas e bairros
- `/<zona>/` (ex.: `/zona-sul/`)
- `/<zona>/<bairro>/` (ex.: `/zona-sul/moema/`)
- `/sobre/`, `/contato/`

## SEO incluído

- Title, meta description e canonical únicos por página
- Open Graph / Twitter Card com imagem de compartilhamento
- Dados estruturados (JSON-LD): `HVACBusiness`, `Service`, `FAQPage`, `BreadcrumbList`, `ItemList`
- `sitemap-index.xml` automático e `robots.txt`
- Breadcrumbs, links internos entre serviços, zonas e bairros vizinhos
- Textos dos bairros com variações para evitar conteúdo duplicado
- HTML estático, CSS inline e quase nenhum JavaScript
