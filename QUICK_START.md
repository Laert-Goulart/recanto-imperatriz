# ⚡ Quick Start — Próximos Passos (15 min)

Tudo está pronto! Agora siga exatamente estes passos:

---

## PASSO 1: Criar Repositório no GitHub (2 min)

1. Vá para https://github.com/new
2. Nome do repositório: **`recanto-site`**
3. Descrição: _"Site institucional do Recanto da Imperatriz"_
4. Escolha: **Public** (para que Vercel consiga acessar)
5. ❌ **NÃO** marque "Initialize this repository with:"
6. Clique em **Create repository**

Você será levado a uma página com comandos. Deixe ela aberta para o próximo passo.

---

## PASSO 2: Push para GitHub (3 min)

**No terminal/PowerShell da pasta `recanto-imperatriz-website`:**

```bash
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/recanto-site.git
git push -u origin main
```

Substitua `SEU_USUARIO` pelo seu usuário GitHub.

**Exemplo:**
```bash
git branch -M main
git remote add origin https://github.com/tiagoreis/recanto-site.git
git push -u origin main
```

✅ Seu código está no GitHub agora!

---

## PASSO 3: Configurar Supabase (5 min)

### 3.1 Criar Tabela
1. Vá para https://supabase.com e faça login
2. Clique em seu projeto
3. Menu lateral → **SQL Editor**
4. Clique em **New Query**
5. Copie TODO o conteúdo do arquivo `SUPABASE_SETUP.sql` (abra na pasta do projeto)
6. Cole no editor SQL
7. Clique em **Run** (Ctrl+Enter)

✅ Tabela criada!

### 3.2 Pegar Credenciais
1. Menu lateral → **Settings** → **API**
2. Copie:
   - **Project URL** (começa com `https://`)
   - **Anon Public Key** (começa com `eyJhbG`)
3. Abra um bloco de notas e cole lá (você vai usar em breve)

---

## PASSO 4: Criar `.env.local` (2 min)

Na pasta `recanto-imperatriz-website`, crie um arquivo chamado `.env.local`:

**Conteúdo:**
```
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-publica-aqui
```

**Como preencher:**
- `https://seu-projeto.supabase.co` → substitua por sua URL do Supabase (Passo 3.2)
- `sua-chave-publica-aqui` → substitua pela Anon Public Key (Passo 3.2)

**Exemplo:**
```
NEXT_PUBLIC_SUPABASE_URL=https://abcdefgh.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

✅ Não precisa fazer commit deste arquivo (está em `.gitignore`)

---

## PASSO 5: Deploy na Vercel (3 min)

### 5.1 Conectar Vercel
1. Vá para https://vercel.com
2. Faça login (com GitHub)
3. Clique em **Add New** → **Project**
4. Procure por `recanto-site` na lista
5. Clique em **Import**

### 5.2 Configurar Environment Variables
1. Na próxima página, procure por **Environment Variables**
2. Clique em **Add New**
3. Adicione as mesmas variáveis:
   - Nome: `NEXT_PUBLIC_SUPABASE_URL`
   - Valor: `https://seu-projeto.supabase.co`
4. Clique em **Add Environment Variable** novamente
5. Adicione a segunda:
   - Nome: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Valor: sua chave do Supabase
6. Clique em **Deploy**

Aguarde 2-3 minutos. Quando aparecer ✅ **Ready**, seu site está no ar!

### 5.3 Copiar URL de Deploy
Vercel vai gerar uma URL tipo:
```
https://recanto-site.vercel.app
```

Copie essa URL — você vai precisar em breve.

---

## PASSO 6: Testar Tudo (2 min)

1. Abra https://recanto-site.vercel.app (ou a URL da Vercel que gerou)
2. Vá até o formulário de contato (**Fale Conosco**)
3. Preencha com seus dados
4. Clique em **Enviar**
5. Deve abrir WhatsApp Web automaticamente ✅

### Verificar se gravou no Supabase:
1. Vá para Supabase > **Table Editor**
2. Clique em `leads`
3. Você deve ver seu teste na tabela ✅

---

## PASSO 7: Configurar Domínio (5 min)

### 7.1 Na Vercel
1. Vá para seu projeto na Vercel
2. **Settings** → **Domains**
3. Clique em **Add Domain**
4. Digite: `recantodaimperatriz.com.br`
5. Clique em **Add**

Vercel vai mostrar dois tipos de registro. **Anote:**
- Tipo de registro (A ou CNAME)
- Valor do registro

### 7.2 No seu Registrador de Domínio
Você comprou o domínio em qual site? (Godaddy, UOL, Namecheap, etc?)

1. Acesse a plataforma onde comprou
2. Procure por **DNS Management** ou **Editar DNS**
3. Procure por registros **A** ou **CNAME**
4. Adicione o registro que Vercel mostrou
5. Salve

⏳ **Aguarde 24-48h** (a Internet precisa replicar)

### 7.3 Testar
```bash
ping recantodaimperatriz.com.br
```

Se mostrar um IP da Vercel, funcionou! ✅

---

## 📋 CHECKLIST FINAL

- [ ] Repositório `recanto-site` criado no GitHub
- [ ] `git push` feito (código no GitHub)
- [ ] Supabase: tabela `leads` criada (SQL executado)
- [ ] `.env.local` criado com credenciais do Supabase
- [ ] Vercel conectado ao GitHub
- [ ] Environment variables adicionadas na Vercel
- [ ] Deploy concluído (status ✅ Ready)
- [ ] Formulário testado e lead gravado no Supabase
- [ ] Domínio apontado para Vercel (DNS configurado)
- [ ] Site funcionando em `recantodaimperatriz.com.br` ✅

---

## 🎉 PRONTO!

Seu site institucional está **100% funcional**:
- ✅ 6 páginas completas
- ✅ Capturas de leads automáticas
- ✅ Integração com WhatsApp
- ✅ Responsivo (mobile, tablet, desktop)
- ✅ Otimizado para Vercel
- ✅ Pronto para editar (sem programação)

---

## 📚 Próximas Leituras

- **DEPLOYMENT_GUIDE.md** — Instruções detalhadas de cada passo
- **EDITING_GUIDE.md** — Como editar textos, fotos, cores sozinho
- **SUPABASE_SETUP.sql** — SQL para criar a tabela de leads

---

## 🆘 PRECISA DE AJUDA?

Se algo não funcionar:

1. **Erro de credenciais Supabase?**
   - Verifique se copiou corretamente (sem espaços extras)
   - Tente novamente no `.env.local`

2. **Deploy falhou?**
   - Vá em Vercel > Deployments > clique no deploy com ❌
   - Procure pela mensagem de erro no final
   - Comumente é variável não configurada

3. **Formulário não grava?**
   - Abra DevTools (F12) > Console
   - Procure por mensagens de erro (geralmente vermelhas)
   - Isso vai dar dicas do que está errado

---

**Boa sorte! 🚀**
Se tudo der certo, seu site está pronto. Se tiver dúvidas, consulte os guias (DEPLOYMENT_GUIDE.md e EDITING_GUIDE.md).
