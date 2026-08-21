# 🚀 Guia Completo de Deployment — Recanto da Imperatriz

## Pré-requisitos
- ✅ Conta GitHub criada
- ✅ Conta Vercel criada e vinculada ao GitHub
- ✅ Conta Supabase criada
- ✅ Domínio `recantodaimperatriz.com.br` já adquirido

---

## PASSO 1: Configurar Supabase (5 min)

### 1.1 Acessar Supabase
1. Vá para https://supabase.com
2. Faça login com sua conta
3. Selecione seu projeto (ou crie um novo com nome "recanto-site")

### 1.2 Criar Tabela de Leads
1. No menu lateral, clique em **SQL Editor**
2. Clique em **New Query**
3. Cole o conteúdo do arquivo `SUPABASE_SETUP.sql` (pasta do projeto)
4. Clique em **Run** (Ctrl+Enter)
5. ✅ Tabela `leads` criada com sucesso!

### 1.3 Obter Credenciais
1. No menu lateral, clique em **Settings** > **API**
2. Copie:
   - **Project URL** (ex: `https://seu-projeto.supabase.co`)
   - **Anon Public Key** (chave pública, começa com `eyJhbG...`)
3. Guarde essas informações — usaremos em breve

---

## PASSO 2: Configurar Variáveis de Ambiente

### 2.1 Criar arquivo `.env.local`
Na pasta raiz do projeto (`recanto-imperatriz-website/`):

1. Copie o arquivo `.env.example` e renomeie para `.env.local`
2. Abra `.env.local` e preencha:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-publica-aqui
   NEXT_PUBLIC_WHATSAPP_NUMBER=5521992181254
   ADMIN_EMAIL=seu-email@recantodaimperatriz.com.br
   ```

3. **IMPORTANTE:** Nunca commit `.env.local` (já está em `.gitignore`)

### 2.2 Testar localmente
```bash
npm run dev
```
Acesse http://localhost:3000 e teste o formulário de contato.

---

## PASSO 3: GitHub (3 min)

### 3.1 Criar Repositório
1. Vá para https://github.com/new
2. Nome: `recanto-site` (ou sua preferência)
3. Descrição: "Site institucional — Recanto da Imperatriz"
4. Privado ou Público: sua escolha
5. **Não** inicialize com README (já temos um)
6. Clique em **Create repository**

### 3.2 Push Inicial
Na pasta do projeto:
```bash
git init
git add .
git commit -m "Initial commit: Complete Recanto website with Supabase integration"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/recanto-site.git
git push -u origin main
```

✅ Seu código agora está no GitHub!

---

## PASSO 4: Deploy na Vercel (2 min)

### 4.1 Conectar Vercel ao GitHub
1. Vá para https://vercel.com
2. Faça login (com sua conta GitHub)
3. Clique em **Add New** > **Project**
4. Selecione seu repositório `recanto-site`
5. Clique em **Import**

### 4.2 Configurar Environment Variables
1. Na página do projeto Vercel, vá para **Settings** > **Environment Variables**
2. Adicione as mesmas variáveis:
   - `NEXT_PUBLIC_SUPABASE_URL` = URL do Supabase
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = Chave do Supabase
   - `NEXT_PUBLIC_WHATSAPP_NUMBER` = `5521992181254`
   - `ADMIN_EMAIL` = seu-email@recantodaimperatriz.com.br

3. Clique em **Save**

### 4.3 Fazer Deploy
1. Volte para a aba **Deployments**
2. Clique em **Redeploy** (da última versão)
3. Aguarde (~ 2-3 minutos)
4. Quando aparecer ✅ **Ready**, seu site está no ar!

Vercel vai gerar uma URL: `https://recanto-site.vercel.app` (ou seu custom domain)

---

## PASSO 5: Configurar DNS do Domínio (5 min)

### 5.1 Informações Vercel
1. Na página do projeto Vercel, vá para **Settings** > **Domains**
2. Clique em **Add Domain**
3. Digite `recantodaimperatriz.com.br`
4. Clique em **Add**

Vercel vai mostrar as instruções de DNS. Geralmente você precisa adicionar:
- **Registro CNAME** ou **Registro A**

### 5.2 Atualizar DNS (onde você comprou o domínio)
Acesse a plataforma onde registrou o domínio (ex: Godaddy, Namecheap, UOL, etc):

1. Procure por **DNS Settings** ou **Editar DNS**
2. Adicione os registros que Vercel mostrou
3. Aguarde 24-48h para propagação (geralmente é mais rápido)

### 5.3 Testar
```bash
ping recantodaimperatriz.com.br
```
Ou acesse `https://recantodaimperatriz.com.br` no navegador.

✅ Seu site está online!

---

## PASSO 6: Testar Formulários & Leads

### 6.1 Testar Contato
1. Acesse seu site
2. Scroll até **"Fale Conosco"**
3. Preencha o formulário e envie
4. Você deve ser redirecionado para WhatsApp Web
5. Um lead foi gravado no Supabase ✅

### 6.2 Verificar Lead no Supabase
1. Vá para Supabase > **Table Editor**
2. Clique na tabela `leads`
3. Você deve ver o lead que acabou de gravar
4. Verifique os campos: nome, email, telefone, tipo_evento, origem_pagina, created_at

✅ Tudo funcionando!

---

## PASSO 7: Configurações Extras (Opcional)

### 7.1 Habilitar Notificações por Email (futuro)
Você pode configurar disparar um email quando um novo lead chegar. Isso requer:
- Supabase Webhooks + SendGrid/Resend
- Next.js API route para enviar email

### 7.2 Analytics
Vercel oferece analytics nativos:
- Vá para **Analytics** no painel Vercel
- Veja quantas visitas, quais páginas mais acessadas, etc.

### 7.3 Performance
- Vercel gera relatórios de **Web Vitals** automaticamente
- Seu site vai estar otimizado para mobile e desktop

---

## 📋 Checklist Final

- [ ] Supabase projeto criado
- [ ] Tabela `leads` criada (SQL executado)
- [ ] `.env.local` preenchido com credenciais
- [ ] Repositório GitHub criado
- [ ] Código pushado para GitHub (`git push`)
- [ ] Vercel conectado ao GitHub
- [ ] Environment variables configuradas na Vercel
- [ ] Deploy concluído (status ✅)
- [ ] Domínio apontado para Vercel (DNS configurado)
- [ ] Formulários testados (lead gravado com sucesso)

---

## 🆘 Troubleshooting

### "Erro ao gravar lead"
- Verifique se a tabela `leads` foi criada no Supabase
- Confirme que as environment variables estão corretas (sem espaços extras)
- Veja os logs: Vercel > Deployments > Logs

### "Site mostra erro 404"
- Verifique se o DNS foi configurado corretamente
- Aguarde 24h para propagação completa
- Teste com `https://recanto-site.vercel.app` (URL da Vercel, sem domínio)

### "WhatsApp não abre"
- Verifique o número em `siteConfig` (deve ser `5521992181254` sem formatação)
- Teste direto: https://wa.me/5521992181254

---

## 📞 Suporte

Se tiver dúvidas:
1. Consulte a documentação do Supabase: https://supabase.com/docs
2. Consulte a documentação do Vercel: https://vercel.com/docs
3. Verifique o console do navegador (F12) para erros JavaScript

**Bom deployment! 🚀**
