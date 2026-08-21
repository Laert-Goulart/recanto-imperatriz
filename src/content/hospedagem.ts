export const hospedagemContent = {
  hero: {
    tag: 'HOSPEDAGEM',
    title: 'Aluguel de temporada para família e amigos',
    description: 'A casa toda para você e seu grupo em Petrópolis.',
    image: {
      src: '/images/hospedagem-hero-varanda-casa.png',
      alt: 'Varanda da casa para hospedagem',
    },
  },

  amenidades: [
    {
      title: 'Quartos confortáveis',
      description: 'Acomodações para até 12 pessoas com camas e banheiros privativos.',
    },
    {
      title: 'Cozinha completa',
      description: 'Espaço para preparar refeições ou contratar catering.',
    },
    {
      title: 'Sala de estar',
      description: 'Convivência com TV, jogos e espaços aconchegantes.',
    },
    {
      title: 'Áreas externas',
      description: 'Jardins, trilhas e áreas de lazer ao ar livre.',
    },
    {
      title: 'Estacionamento',
      description: 'Vagas para múltiplos veículos no local.',
    },
    {
      title: 'Internet',
      description: 'Conexão de alta velocidade em toda a casa.',
    },
    {
      title: 'Aquecimento',
      description: 'Conforto para os dias frios de Petrópolis.',
    },
    {
      title: 'Privacidade',
      description: 'Casa reservada exclusivamente para seu grupo.',
    },
  ],

  galeria: {
    tag: 'GALERIA',
    title: 'A casa em detalhes',
    images: [
      { src: '/images/hero-fachada-externa.png', alt: 'Fachada da casa' },
      { src: '/images/hero-trilha-flores.png', alt: 'Trilha com flores' },
      { src: '/images/hero-casa-hortensias.png', alt: 'Casa com hortênsias' },
      { src: '/images/hero-cachoeira-poco.png', alt: 'Cachoeira' },
      { src: '/images/hero-cachoeira-jardim.png', alt: 'Jardim com cachoeira' },
      { src: '/images/hero-lago-ponte.png', alt: 'Lago com ponte' },
      { src: '/images/hero-jardins-sitio.png', alt: 'Jardins' },
      { src: '/images/experiencia-areas-comuns.png', alt: 'Áreas comuns' },
    ],
  },

  airbnb: {
    title: 'Veja também no Airbnb',
    description: 'Confira avaliações e mais fotos na plataforma de hospedagem.',
  },
};

export type HospedagemContent = typeof hospedagemContent;
