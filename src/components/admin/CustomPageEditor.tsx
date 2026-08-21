'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { GenericJsonEditor } from './GenericJsonEditor';
import { Block, BLOCK_TYPES, defaultBlock, CustomPage } from '@/lib/blocks';
import { colors } from '@/content/config';

const emptyPage: CustomPage = {
  slug: '',
  title: '',
  meta_description: '',
  published: true,
  show_in_menu: true,
  blocks: [],
};

export function CustomPageEditor({
  mode,
  initialPage,
}: {
  mode: 'create' | 'edit';
  initialPage?: CustomPage;
}) {
  const router = useRouter();
  const [page, setPage] = useState<CustomPage>(initialPage ?? emptyPage);
  const [newBlockType, setNewBlockType] = useState<Block['type']>('text');
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const updateField = <K extends keyof CustomPage>(key: K, value: CustomPage[K]) => {
    setPage((p) => ({ ...p, [key]: value }));
  };

  const addBlock = () => {
    setPage((p) => ({ ...p, blocks: [...p.blocks, defaultBlock(newBlockType)] }));
  };

  const removeBlock = (index: number) => {
    setPage((p) => ({ ...p, blocks: p.blocks.filter((_, i) => i !== index) }));
  };

  const moveBlock = (index: number, direction: -1 | 1) => {
    setPage((p) => {
      const newBlocks = [...p.blocks];
      const target = index + direction;
      if (target < 0 || target >= newBlocks.length) return p;
      [newBlocks[index], newBlocks[target]] = [newBlocks[target], newBlocks[index]];
      return { ...p, blocks: newBlocks };
    });
  };

  const updateBlock = (index: number, newBlock: Block) => {
    setPage((p) => {
      const newBlocks = [...p.blocks];
      newBlocks[index] = newBlock;
      return { ...p, blocks: newBlocks };
    });
  };

  const validateSlug = (slug: string) => /^[a-z0-9-]+$/.test(slug);

  const handleSave = async () => {
    setMessage(null);

    if (!page.slug || !validateSlug(page.slug)) {
      setMessage({ type: 'error', text: 'O endereço da página (slug) deve conter apenas letras minúsculas, números e hífens. Ex: promocoes-de-verao' });
      return;
    }
    if (!page.title) {
      setMessage({ type: 'error', text: 'Preencha o título da página.' });
      return;
    }

    setSaving(true);
    const supabase = createClient();

    if (mode === 'create') {
      const { error } = await supabase.from('custom_pages').insert({
        slug: page.slug,
        title: page.title,
        meta_description: page.meta_description,
        published: page.published,
        show_in_menu: page.show_in_menu,
        blocks: page.blocks,
      });

      if (error) {
        setMessage({ type: 'error', text: 'Erro ao criar página: ' + error.message });
        setSaving(false);
        return;
      }

      router.push('/admin/paginas-novas');
      router.refresh();
      return;
    }

    const { error } = await supabase
      .from('custom_pages')
      .update({
        title: page.title,
        meta_description: page.meta_description,
        published: page.published,
        show_in_menu: page.show_in_menu,
        blocks: page.blocks,
        updated_at: new Date().toISOString(),
      })
      .eq('slug', page.slug);

    if (error) {
      setMessage({ type: 'error', text: 'Erro ao salvar: ' + error.message });
      setSaving(false);
      return;
    }

    setMessage({ type: 'success', text: 'Salvo com sucesso!' });
    setSaving(false);
  };

  const handleDelete = async () => {
    if (!confirm(`Tem certeza que deseja apagar a página "${page.title}"? Essa ação não pode ser desfeita.`)) return;

    const supabase = createClient();
    const { error } = await supabase.from('custom_pages').delete().eq('slug', page.slug);

    if (error) {
      setMessage({ type: 'error', text: 'Erro ao apagar: ' + error.message });
      return;
    }

    router.push('/admin/paginas-novas');
    router.refresh();
  };

  return (
    <div style={{ maxWidth: '760px', margin: '0 auto', padding: '32px 24px' }}>
      <h1 style={{ fontSize: '24px', margin: '0 0 4px' }}>
        {mode === 'create' ? 'Nova Página' : `Editar: ${page.title}`}
      </h1>
      <p style={{ fontSize: '14px', opacity: 0.7, margin: '0 0 24px' }}>
        {mode === 'create'
          ? 'Preencha as informações básicas e monte a página adicionando blocos.'
          : `A página fica disponível em /pagina/${page.slug}`}
      </p>

      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          background: '#f5f5f5',
          padding: '12px 0',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          flexWrap: 'wrap',
        }}
      >
        <button
          onClick={handleSave}
          disabled={saving}
          style={{
            padding: '10px 24px',
            background: colors.accent,
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            fontSize: '14px',
            fontWeight: 500,
            cursor: saving ? 'default' : 'pointer',
            opacity: saving ? 0.7 : 1,
          }}
        >
          {saving ? 'Salvando...' : mode === 'create' ? 'Criar página' : 'Salvar alterações'}
        </button>
        {mode === 'edit' && (
          <button
            onClick={handleDelete}
            style={{
              padding: '10px 20px',
              background: 'transparent',
              color: '#c0392b',
              border: '1px solid #c0392b',
              borderRadius: '4px',
              fontSize: '14px',
              cursor: 'pointer',
            }}
          >
            Apagar página
          </button>
        )}
        {message && (
          <span style={{ fontSize: '13px', color: message.type === 'success' ? '#2d7a3e' : '#c0392b' }}>
            {message.text}
          </span>
        )}
      </div>

      <div
        style={{
          background: '#fff',
          border: `1px solid ${colors.divider}`,
          borderRadius: '8px',
          padding: '20px',
          marginBottom: '20px',
        }}
      >
        <h2 style={{ fontSize: '16px', margin: '0 0 16px' }}>Informações básicas</h2>

        <div style={{ marginBottom: '12px' }}>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '4px' }}>
            Endereço da página (slug)
          </label>
          <input
            type="text"
            value={page.slug}
            disabled={mode === 'edit'}
            onChange={(e) => updateField('slug', e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-'))}
            placeholder="promocoes-de-verao"
            style={{
              width: '100%',
              padding: '8px 10px',
              fontSize: '14px',
              border: `1px solid ${colors.divider}`,
              borderRadius: '4px',
              background: mode === 'edit' ? '#f0f0f0' : '#fff',
            }}
          />
          <p style={{ fontSize: '12px', opacity: 0.6, margin: '4px 0 0' }}>
            A página ficará em: recantodaimperatriz.com.br/pagina/{page.slug || 'seu-slug'}
          </p>
        </div>

        <div style={{ marginBottom: '12px' }}>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '4px' }}>Título</label>
          <input
            type="text"
            value={page.title}
            onChange={(e) => updateField('title', e.target.value)}
            style={{
              width: '100%',
              padding: '8px 10px',
              fontSize: '14px',
              border: `1px solid ${colors.divider}`,
              borderRadius: '4px',
            }}
          />
        </div>

        <div style={{ marginBottom: '12px' }}>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '4px' }}>
            Descrição (aparece no Google)
          </label>
          <textarea
            value={page.meta_description}
            onChange={(e) => updateField('meta_description', e.target.value)}
            rows={2}
            style={{
              width: '100%',
              padding: '8px 10px',
              fontSize: '14px',
              border: `1px solid ${colors.divider}`,
              borderRadius: '4px',
              fontFamily: 'inherit',
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: '20px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
            <input type="checkbox" checked={page.published} onChange={(e) => updateField('published', e.target.checked)} />
            Publicada (visível no site)
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
            <input
              type="checkbox"
              checked={page.show_in_menu}
              onChange={(e) => updateField('show_in_menu', e.target.checked)}
            />
            Mostrar no menu de navegação
          </label>
        </div>
      </div>

      <h2 style={{ fontSize: '16px', margin: '0 0 12px' }}>Blocos da página</h2>

      {page.blocks.map((block, i) => (
        <div
          key={i}
          style={{
            background: '#fff',
            border: `1px solid ${colors.divider}`,
            borderRadius: '8px',
            padding: '18px',
            marginBottom: '12px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span
              style={{
                fontSize: '12px',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: colors.accent,
                background: colors.surface,
                padding: '4px 10px',
                borderRadius: '4px',
              }}
            >
              {BLOCK_TYPES.find((b) => b.type === block.type)?.label ?? block.type}
            </span>
            <div style={{ display: 'flex', gap: '6px' }}>
              <button
                onClick={() => moveBlock(i, -1)}
                disabled={i === 0}
                style={{ fontSize: '12px', padding: '4px 8px', cursor: i === 0 ? 'default' : 'pointer', opacity: i === 0 ? 0.3 : 1 }}
              >
                ↑
              </button>
              <button
                onClick={() => moveBlock(i, 1)}
                disabled={i === page.blocks.length - 1}
                style={{
                  fontSize: '12px',
                  padding: '4px 8px',
                  cursor: i === page.blocks.length - 1 ? 'default' : 'pointer',
                  opacity: i === page.blocks.length - 1 ? 0.3 : 1,
                }}
              >
                ↓
              </button>
              <button
                onClick={() => removeBlock(i)}
                style={{ fontSize: '12px', padding: '4px 8px', color: '#c0392b', cursor: 'pointer' }}
              >
                Remover
              </button>
            </div>
          </div>

          <GenericJsonEditor
            value={(() => {
              const { type: _type, ...rest } = block;
              return rest;
            })() as never}
            onChange={(newVal) => updateBlock(i, { ...(newVal as object), type: block.type } as Block)}
          />
        </div>
      ))}

      <div
        style={{
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
          padding: '16px',
          background: colors.surface,
          borderRadius: '8px',
        }}
      >
        <select
          value={newBlockType}
          onChange={(e) => setNewBlockType(e.target.value as Block['type'])}
          style={{ padding: '8px 10px', fontSize: '14px', borderRadius: '4px', border: `1px solid ${colors.divider}` }}
        >
          {BLOCK_TYPES.map((bt) => (
            <option key={bt.type} value={bt.type}>
              {bt.label}
            </option>
          ))}
        </select>
        <button
          onClick={addBlock}
          style={{
            padding: '8px 16px',
            background: colors.accent,
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            fontSize: '14px',
            cursor: 'pointer',
          }}
        >
          + Adicionar bloco
        </button>
      </div>
    </div>
  );
}
