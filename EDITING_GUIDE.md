# ✏️ Guia de Edição — Como Editar Seu Site Sozinho

Você não precisa de um programador para editar textos, fotos ou cores. Tudo está organizado para ser simples!

---

## 📝 1. EDITAR TEXTOS

### Onde estão os textos?
Todos os textos (títulos, descrições, parágrafos) estão em arquivos separados na pasta:
```
src/content/
├── home.ts          (textos da Home)
├── eventos.ts       (textos de Eventos)
├── hospedagem.ts    (textos de Hospedagem)
├── book.ts          (textos do Book Corporativo)
├── fauna.ts         (textos de Fauna/Espécies)
├── localizacao.ts   (textos de Localização)
└── config.ts        (informações globais: email, WhatsApp, cores)
```

### Como editar um texto?

**Exemplo: Trocar o título da Home**

1. Abra o arquivo `src/content/home.ts` no seu editor (VS Code, Sublime, etc)
2. Procure por `title:` (use Ctrl+F para buscar)
3. Encontre:
   ```typescript
   title: 'Eventos corporativos em Petrópolis para equipes que precisam sair da rotina sem perder estrutura.',
   ```
4. Mude para seu novo texto:
   ```typescript
   title: 'Seu novo título aqui',
   ```
5. Salve o arquivo (Ctrl+S)
6. Seu site atualiza automaticamente! (se estiver rodando localmente, você vê a mudança em tempo real)

### Atualizar no site ao vivo

Depois de editar:
```bash
git add src/content/home.ts
git commit -m "Update: Novo título na Home"
git push origin main
```

Vercel vai detectar a mudança e fazer deploy automático (leva ~1 min).

---

## 🖼️ 2. TROCAR FOTOS

### Onde estão as fotos?
```
public/images/
├── hero-*.png           (fotos do hero/destaque)
├── hospedagem-*.png     (fotos de hospedagem)
├── fauna-*.jpeg         (fotos de pássaros)
└── ... (mais 20+ fotos)
```

### Como trocar uma foto?

**Exemplo: Trocar a foto do hero da Home**

1. Você tem uma foto melhor chamada `nova-fachada.jpg`
2. Na pasta `public/images/`, DELETE o arquivo antigo `hero-fachada-externa.png`
3. Coloque a foto nova com o **MESMO NOME**: `hero-fachada-externa.png`
4. Pronto! O site atualiza automaticamente.

**OU**: Se quer usar um nome diferente:
1. Coloque a foto nova na pasta `public/images/`
2. Abra `src/content/home.ts`
3. Procure por `src: '/images/hero-fachada-externa.png'`
4. Mude para `src: '/images/sua-nova-foto.png'`
5. Salve

### Dicas de fotos
- Use **JPG** ou **PNG** (máximo 5 MB cada)
- Fotos grandes: 1200x800px é ideal
- Galeria (quadrados): 1000x1000px é ideal

---

## 🎨 3. TROCAR CORES

Cores estão em: `src/content/config.ts`

```typescript
export const colors = {
  bg: '#f7f3ea',         // Fundo claro
  surface: '#eee3cb',    // Fundo de cards
  text: '#1e2119',       // Texto principal (escuro)
  accent: '#355e3b',     // Verde principal (botões)
  accent2: '#b8902f',    // Dourado (detalhe)
  divider: '#e0dcd0',    // Linha de separação
};
```

**Para mudar a cor verde principal:**
1. Abra `src/content/config.ts`
2. Mude `accent: '#355e3b'` para sua cor (ex: `'#228B22'`)
3. Salve

Todas as cores usam **Hex Code** (ex: `#FF0000` é vermelho).
Para pegar uma cor: https://coolors.co ou https://color-picker.org

---

## 📞 4. TROCAR CONTATOS

**WhatsApp, Email, ou outras informações:**

Abra `src/content/config.ts` e mude:

```typescript
export const siteConfig = {
  whatsapp: '5521992181254',                          // Número WhatsApp
  email: 'contato@recantodaimperatriz.com.br',        // Email
  location: 'Petrópolis, RJ',                         // Localização
  airbnbUrl: 'https://www.airbnb.com.br/...',         // Link Airbnb
};
```

Após salvar, essas informações atualizam em TODO o site automaticamente.

---

## ➕ 5. ADICIONAR UMA NOVA PÁGINA

Quer criar uma página de "Promoções" ou "Blog"?

### Passo 1: Criar arquivo de conteúdo
1. Crie `src/content/promocoes.ts` (copie de `src/content/home.ts`)
2. Edite o conteúdo com seus textos e fotos

### Passo 2: Criar página
1. Crie pasta: `src/app/promocoes/`
2. Dentro, crie arquivo `page.tsx` (copie de `src/app/page.tsx`)
3. Importe seu conteúdo: `import { promocoesContent } from '@/content/promocoes';`
4. Customize o layout

### Passo 3: Adicionar ao menu
1. Abra `src/components/Header.tsx`
2. Procure por `<NavLink href="/eventos">`
3. Adicione: `<NavLink href="/promocoes">Promoções</NavLink>`

Pronto! Nova página criada e apareça no menu.

---

## 📤 6. FLUXO DE EDIÇÃO (Git + Vercel)

### Se você está editando via VS Code:

```bash
# 1. Fazer suas mudanças nos arquivos

# 2. Verificar o que mudou
git status

# 3. Adicionar mudanças
git add .

# 4. Descrever as mudanças
git commit -m "Update: Novo título na Home e troca de foto"

# 5. Enviar para GitHub
git push origin main
```

**Após `git push`:**
- GitHub recebe suas mudanças
- Vercel detecta automaticamente
- Deploy começa (leva 1-2 min)
- Seu site ao vivo atualiza ✅

### Se você estiver editando direto no GitHub:
1. Vá para https://github.com/seu-usuario/recanto-site
2. Clique em `src/content/home.ts`
3. Clique no ícone de lápis (Edit)
4. Faça suas mudanças
5. Clique em **Commit changes...**
6. Escreva uma descrição (ex: "Update título Home")
7. Clique em **Commit**

Vercel detecta e faz deploy automaticamente!

---

## ⚙️ 7. ATUALIZAR FORMULÁRIOS

Formulários estão em cada página e automaticamente enviam leads para o Supabase.

**Campos disponíveis:**
- `nome` - Texto livre
- `email` - Email válido
- `telefone` - Número de telefone
- `tipo_evento` - Seleção (Reunião, Treinamento, etc)

Para adicionar um campo novo (ex: "Número de pessoas"):

1. Abra `src/app/page.tsx` (ou a página que quer editar)
2. Procure por `const [contactForm, setContactForm]`
3. Adicione o novo campo:
   ```typescript
   const [contactForm, setContactForm] = useState({
     nome: '',
     email: '',
     telefone: '',
     numPessoas: '',  // NOVO
   });
   ```
4. Copie um dos inputs e customize para `numPessoas`
5. Na função `handleContactSubmit`, inclua o novo campo:
   ```typescript
   const leadRecorded = await submitLead({
     nome,
     email,
     telefone,
     numPessoas,  // NOVO
     tipo_evento: 'Contato Geral',
     origem_pagina: 'Home - Formulário de Contato',
   });
   ```

---

## 📊 8. VER DADOS DOS LEADS

Seus leads (contatos) vão para o Supabase.

### Acessar Supabase:
1. Vá para https://supabase.com
2. Faça login
3. Clique em seu projeto
4. Menu lateral > **Table Editor**
5. Clique em `leads`

Você vai ver uma tabela com todos os contatos (nome, email, telefone, quando foi enviado, etc).

### Exportar dados:
1. Clique no botão ⋮ (três pontos) no canto superior direito
2. Selecione **Download as CSV**
3. Abra em Excel ou Google Sheets

---

## ✅ CHECKLIST DE EDIÇÃO

- [ ] Sou capaz de editar textos em `src/content/*.ts`
- [ ] Sei como trocar fotos em `public/images/`
- [ ] Sei como editar cores em `src/content/config.ts`
- [ ] Consigo fazer `git add`, `git commit`, `git push`
- [ ] Entendo que após `git push`, Vercel faz deploy automaticamente
- [ ] Sou capaz de acessar Supabase para ver leads

---

## 🆘 PROBLEMAS COMUNS

**"Editei mas o site não atualizou"**
- Fez `git push`? Se não, faça!
- Esperou 2 minutos? Vercel leva esse tempo para deploy.
- Limpe cache do navegador (Ctrl+Shift+Delete)

**"Apaguei algo e quebrou o site"**
- Vá em GitHub > seu repositório > Deployments
- Clique no deploy anterior (aquele que funcionava)
- Clique em **Redeploy** para voltar à versão anterior

**"Não consigo fazer push ao GitHub"**
- Você tem credenciais SSH configuradas?
- Tente: `git remote set-url origin https://github.com/seu-usuario/recanto-site.git`
- Depois `git push origin main`

---

## 📞 PRÓXIMAS IDEIAS

- [ ] Adicionar seção de "Depoimentos" (com fotos dos clientes)
- [ ] Criar página de "Blog" com artigos sobre eventos
- [ ] Adicionar chat ao vivo (Intercom, Drift, etc)
- [ ] Integrar com Google Analytics

**Boa edição! 🎉**
