# 🏡 Recanto da Imperatriz — Site Institucional

Site completo para hospedagem de temporada e eventos corporativos em Petrópolis-RJ.
Built with **Next.js 14** + **Supabase** + **Vercel**.

🌐 **Ao vivo:** [recantodaimperatriz.com.br](https://recantodaimperatriz.com.br)

---

## 📋 Estrutura do Projeto

```
recanto-imperatriz-website/
├── src/
│   ├── app/                  # Páginas e rotas (Next.js App Router)
│   │   ├── page.tsx          # Home
│   │   ├── eventos/          # Página de Eventos
│   │   ├── hospedagem/       # Página de Hospedagem
│   │   ├── book/             # Página do Book Corporativo
│   │   ├── fauna/            # Página de Fauna/Espécies
│   │   ├── localizacao/      # Página de Localização
│   │   └── api/leads/        # API de captura de leads
│   ├── components/           # Componentes reutilizáveis
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppButton.tsx
│   ├── content/              # Arquivos de conteúdo (EDITAR AQUI)
│   │   ├── home.ts
│   │   ├── eventos.ts
│   │   ├── hospedagem.ts
│   │   ├── book.ts
│   │   ├── fauna.ts
│   │   ├── localizacao.ts
│   │   └── config.ts         # Cores, contatos, etc
│   ├── hooks/
│   │   └── useLead.ts        # Hook para submissão de leads
│   └── lib/
│       └── supabase.ts       # Cliente Supabase
├── public/images/            # Fotos e assets
├── .env.example              # Template de variáveis de ambiente
├── QUICK_START.md            # ⚡ COMECE AQUI
├── DEPLOYMENT_GUIDE.md       # Instruções detalhadas de deployment
├── EDITING_GUIDE.md          # Como editar sozinho (sem programação)
└── SUPABASE_SETUP.sql        # SQL para criar tabela de leads
```

---

## 🚀 Quick Start

### Localmente
```bash
npm install
npm run dev
# Acesse http://localhost:3000
```

### Deploy (Vercel + Supabase + GitHub)
Siga o arquivo **`QUICK_START.md`** (15 min).

---

## ✨ Funcionalidades

✅ **6 Páginas Completas**
- Home com hero carrossel
- Eventos corporativos (hub de formatos)
- Hospedagem de temporada
- Book corporativo (lead magnet com PDF)
- Galeria de fauna/espécies nativas
- Localização e informações

✅ **Lead Capture**
- Formulários em cada página
- Integração Supabase (banco de dados)
- Redirecionamento WhatsApp automático
- API route para persistência

✅ **UX/UI**
- Responsivo (mobile, tablet, desktop)
- Galeria interativa com zoom (lightbox)
- Menu responsivo (hambúrguer em mobile)
- Design system consistente (cores, tipografia)

✅ **Performance**
- Next.js 14 com App Router
- Otimizado para Vercel
- Imagens otimizadas (`/public`)
- Sem dependências desnecessárias

---

## 📝 Edição de Conteúdo

**Não precisa de programação!**

### Editar Textos
→ Abra `src/content/home.ts` (ou qual página quiser)
→ Mude os valores
→ Faça `git push` (redeploy automático)

### Trocar Fotos
→ Coloque a foto em `public/images/`
→ Use o mesmo nome da foto anterior OU atualize a referência em `src/content/`

### Editar Cores
→ Abra `src/content/config.ts`
→ Mude os valores hex das cores
→ Redeploy automático

Consulte **`EDITING_GUIDE.md`** para instruções completas.

---

## 🔧 Tecnologias

- **Frontend:** Next.js 14 (React + TypeScript)
- **Backend:** Vercel Serverless Functions
- **Database:** Supabase (PostgreSQL)
- **Hosting:** Vercel
- **Version Control:** GitHub
- **Styling:** Inline CSS (sem dependências)

---

## 📊 Leads & Analytics

Todos os leads são capturados em `Supabase > Table Editor > leads`:
- Nome, Email, Telefone
- Tipo de evento / Origem da página
- Timestamp automático

Para relatórios, exporte como CSV.

---

## 🌍 Próximos Passos

- [ ] Adicionar depoimentos/case studies
- [ ] Blog com artigos sobre eventos
- [ ] Chat ao vivo (Intercom/Drift)
- [ ] Google Analytics
- [ ] Notificações por email ao receber lead

---

## 📚 Documentação Completa

- **`QUICK_START.md`** — Deployment em 15 minutos
- **`DEPLOYMENT_GUIDE.md`** — Instruções passo a passo (detalhado)
- **`EDITING_GUIDE.md`** — Como editar sozinho (textos, fotos, cores)
- **`SUPABASE_SETUP.sql`** — Schema do banco de dados

---

## 🆘 Suporte

### Problema?
1. Verifique o arquivo relevante (veja **Documentação Completa** acima)
2. Procure pela seção **Troubleshooting** no guia
3. Consulte a documentação oficial:
   - [Next.js Docs](https://nextjs.org/docs)
   - [Supabase Docs](https://supabase.com/docs)
   - [Vercel Docs](https://vercel.com/docs)

---

## 📞 Contato

- **WhatsApp:** [5521992181254](https://wa.me/5521992181254)
- **Email:** contato@recantodaimperatriz.com.br
- **Localização:** Petrópolis, RJ

---

## 📄 Licença

Privado — Recanto da Imperatriz

---

**Pronto para começar? Leia `QUICK_START.md` →**
