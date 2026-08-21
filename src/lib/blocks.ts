export type Block =
  | { type: 'hero'; tag: string; title: string; description: string; image: string }
  | { type: 'text'; tag: string; title: string; body: string }
  | { type: 'gallery'; tag: string; title: string; images: { src: string; alt: string }[] }
  | { type: 'cta'; title: string; description: string; buttonText: string; buttonLink: string };

export const BLOCK_TYPES: { type: Block['type']; label: string }[] = [
  { type: 'hero', label: 'Destaque (Hero) — imagem de fundo grande + título' },
  { type: 'text', label: 'Texto — título e parágrafo' },
  { type: 'gallery', label: 'Galeria de fotos' },
  { type: 'cta', label: 'Chamada para ação (botão)' },
];

export function defaultBlock(type: Block['type']): Block {
  switch (type) {
    case 'hero':
      return { type: 'hero', tag: 'DESTAQUE', title: 'Novo título', description: 'Descrição do destaque.', image: '' };
    case 'text':
      return { type: 'text', tag: 'SEÇÃO', title: 'Novo título', body: 'Escreva o texto aqui.' };
    case 'gallery':
      return { type: 'gallery', tag: 'GALERIA', title: 'Galeria de fotos', images: [] };
    case 'cta':
      return { type: 'cta', title: 'Chamada para ação', description: '', buttonText: 'Fale Conosco', buttonLink: '/#contato' };
  }
}

export type CustomPage = {
  id?: string;
  slug: string;
  title: string;
  meta_description: string;
  published: boolean;
  show_in_menu: boolean;
  blocks: Block[];
};
