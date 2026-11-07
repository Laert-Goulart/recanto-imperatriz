export const hospedagemContent = {
  hero: {
    tag: 'HOSPEDAGEM',
    title: 'Aluguel de temporada para família e amigos',
    description: 'A casa toda para você e seu grupo em Petrópolis.',
    image: {
      src: '/images/webp/hospedagem-hero-varanda-casa.webp',
      alt: 'Varanda da casa para hospedagem',
    },
  },

  amenidades: [
    {
      icon: 'bed',
      title: 'Quartos confortáveis',
      description: 'Acomodações para até 12 pessoas com camas e banheiros privativos.',
    },
    {
      icon: 'utensils',
      title: 'Cozinha completa',
      description: 'Espaço para preparar refeições ou contratar catering.',
    },
    {
      icon: 'tv',
      title: 'Sala de estar',
      description: 'Convivência com TV, jogos e espaços aconchegantes.',
    },
    {
      icon: 'sun',
      title: 'Áreas externas',
      description: 'Jardins, trilhas e áreas de lazer ao ar livre.',
    },
    {
      icon: 'car',
      title: 'Estacionamento',
      description: 'Vagas para múltiplos veículos no local.',
    },
    {
      icon: 'wifi',
      title: 'Internet',
      description: 'Conexão de alta velocidade em toda a casa.',
    },
    {
      icon: 'thermometer',
      title: 'Aquecimento',
      description: 'Conforto para os dias frios de Petrópolis.',
    },
    {
      icon: 'lock',
      title: 'Privacidade',
      description: 'Casa reservada exclusivamente para seu grupo.',
    },
  ],

  galeria: {
    tag: 'GALERIA',
    title: 'A casa em detalhes',
    images: [
      { src: '/images/webp/hero-fachada-externa.webp', alt: 'Fachada da casa' },
      { src: '/images/webp/hero-trilha-flores.webp', alt: 'Trilha com flores' },
      { src: '/images/webp/hero-casa-hortensias.webp', alt: 'Casa com hortênsias' },
      { src: '/images/webp/hero-cachoeira-poco.webp', alt: 'Cachoeira' },
      { src: '/images/webp/hero-cachoeira-jardim.webp', alt: 'Jardim com cachoeira' },
      { src: '/images/webp/hero-lago-ponte.webp', alt: 'Lago com ponte' },
      { src: '/images/webp/hero-jardins-sitio.webp', alt: 'Jardins' },
      { src: '/images/webp/experiencia-areas-comuns.webp', alt: 'Áreas comuns' },
    ],
  },

  airbnb: {
    title: 'Veja também no Airbnb',
    description: 'Confira avaliações e mais fotos na plataforma de hospedagem.',
  },
};

export type HospedagemContent = typeof hospedagemContent;
