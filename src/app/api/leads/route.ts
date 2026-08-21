import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nome, email, telefone, tipo_evento, origem_pagina } = body;

    // Validação básica
    if (!nome || !email || !telefone) {
      return NextResponse.json(
        { error: 'Nome, email e telefone são obrigatórios' },
        { status: 400 }
      );
    }

    // Inserir lead no Supabase
    const { data, error } = await supabase.from('leads').insert([
      {
        nome,
        email,
        telefone,
        tipo_evento: tipo_evento || 'Não especificado',
        origem_pagina: origem_pagina || 'Site',
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Erro ao gravar lead. Tente novamente.' },
        { status: 500 }
      );
    }

    // Sucesso
    return NextResponse.json(
      {
        success: true,
        message: 'Lead gravado com sucesso!',
        data,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json(
      { error: 'Erro no servidor' },
      { status: 500 }
    );
  }
}

// GET para health check
export async function GET() {
  return NextResponse.json({ status: 'API de leads funcionando' });
}
