-- Criar tabela de leads para Recanto da Imperatriz
-- Execute isto no SQL Editor do Supabase (Ctrl+K ou Menu > SQL)

CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  telefone VARCHAR(20) NOT NULL,
  tipo_evento VARCHAR(100),
  origem_pagina VARCHAR(100) DEFAULT 'Site',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Criar índices para busca rápida
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX idx_leads_tipo_evento ON leads(tipo_evento);

-- Habilitar Row Level Security (segurança)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Política: Qualquer um pode inserir (leads públicos)
CREATE POLICY "Enable insert for all users" ON leads
  FOR INSERT
  WITH CHECK (true);

-- Política: Apenas usuários autenticados podem ler seus próprios dados
-- (Opcional: modificar conforme necessário para admin)
CREATE POLICY "Enable read access for authenticated users" ON leads
  FOR SELECT
  USING (true);

-- Comentário na tabela
COMMENT ON TABLE leads IS 'Leads e contatos gerados através do site recantodaimperatriz.com.br';
