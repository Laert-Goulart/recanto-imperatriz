export const bookContent = {
  hero: {
    tag: 'BOOK CORPORATIVO',
    title: 'Material completo sobre os espaços e formatos',
    description: 'Baixe o e-book com fotos, informações técnicas e roteiro de visita.',
    image: {
      src: '/images/book-hero-jardim-hortensias.png',
      alt: 'Jardim com hortênsias',
    },
  },

  form: {
    title: 'Baixar o Book Corporativo',
    description: 'Preencha seus dados para receber o material em PDF.',
    fields: [
      { name: 'nome', label: 'Nome', type: 'text', required: true },
      { name: 'email', label: 'E-mail', type: 'email', required: true },
      { name: 'ddd', label: 'DDD', type: 'text', placeholder: '21', maxLength: 2, required: true },
      { name: 'telefone', label: 'Telefone', type: 'tel', placeholder: '99218-1254', required: true },
      {
        name: 'tipoEvento',
        label: 'Tipo de evento',
        type: 'select',
        options: [
          'Reunião Executiva',
          'Treinamento & Workshop',
          'Imersão & Offsite',
          'Confraternização',
          'Hospedagem para lazer',
        ],
        required: true,
      },
    ],
  },

  cover: {
    src: '/images/book-capa-ebook.png',
    alt: 'Capa do Book Corporativo',
  },

  pdf: '/images/book-corporativo-recanto-da-imperatriz.pdf',

  content: {
    tag: 'O QUE ESTÁ NO BOOK',
    sections: [
      {
        title: 'Visão geral da casa',
        description: 'Fotos de todos os ambientes internos e externos.',
      },
      {
        title: 'Formatos de evento',
        description: 'Detalhes técnicos e capacidade de cada formato.',
      },
      {
        title: 'Amenidades',
        description: 'Lista completa de infraestrutura disponível.',
      },
      {
        title: 'Roteiro de acesso',
        description: 'Endereço, estacionamento e instruções de chegada.',
      },
      {
        title: 'Informações de contato',
        description: 'WhatsApp, e-mail e horários de atendimento.',
      },
    ],
  },
};

export type BookContent = typeof bookContent;
