export const localizacaoContent = {
  hero: {
    tag: 'LOCALIZAÇÃO',
    title: 'Petrópolis, Região Serrana do Rio de Janeiro',
    description: 'Perto o suficiente para caber na agenda, longe o bastante para sair da rotina.',
    image: {
      src: '/images/webp/loc-hero-petropolis.webp',
      alt: 'Vista de Petrópolis',
    },
  },

  blocos: [
    {
      icon: '📍',
      title: 'Região',
      description: 'Petrópolis, a Cidade Imperial, na Região Serrana do Rio de Janeiro, cercada pela Mata Atlântica.',
    },
    {
      icon: '🚗',
      title: 'Acesso',
      description: 'Pela BR-040 (Rio–Petrópolis), aproximadamente 1h30 de carro a partir do Rio de Janeiro. Estacionamento no local.',
    },
    {
      icon: '🏠',
      title: 'Endereço',
      description: 'Petrópolis, Rio de Janeiro — a 15 minutos do centro histórico e 25 minutos de Itaipava. O endereço exato e o roteiro de chegada são enviados após a confirmação da reserva.',
    },
    {
      icon: '🔒',
      title: 'Privacidade',
      description: 'Casa inteira reservada só para o seu grupo, dentro de uma reserva ambiental.',
    },
  ],

  mapa: {
    src: '/images/webp/mapa-acesso.webp',
    alt: 'Mapa de acesso ao Recanto da Imperatriz',
  },

  clima: {
    title: 'Clima e Ambiente',
    description:
      'Petrópolis tem clima subtropical úmido, com temperaturas mais frias do que o Rio de Janeiro. Ideal para encontros corporativos em qualquer época do ano.',
  },

  roteiro: {
    title: 'Roteiro de chegada',
    description: 'Após confirmação, enviamos instruções detalhadas de como chegar, vagas de estacionamento e informações de acesso.',
  },

  visita: {
    title: 'Agende uma visita',
    description: 'Recomendamos conhecer o local antes de confirmar seu evento. Fale conosco pelo WhatsApp para marcar.',
  },
};

export type LocalizacaoContent = typeof localizacaoContent;
