// Página de temporada — destino dos anúncios do Google Ads.
// Números e avaliações espelham o anúncio publicado no Airbnb.
// Campos vazios ('') não aparecem no site.
export const temporadaContent = {
  hero: {
    tag: 'CASA DE TEMPORADA EM PETRÓPOLIS',
    title: 'Uma casa inteira na natureza da Serra, só para o seu grupo.',
    description:
      'Casa de três andares em uma reserva ambiental com cachoeira, lareira e salão de festas, a 15 minutos do centro histórico de Petrópolis.',
    precoAPartirDe: '',
    image: {
      src: '/images/hero-fachada-externa.png',
      alt: 'Vista aérea da casa cercada pela Mata Atlântica',
    },
  },

  numeros: [
    { valor: '10', label: 'hóspedes' },
    { valor: '5', label: 'quartos' },
    { valor: '6', label: 'camas' },
    { valor: '7', label: 'banheiros' },
  ],

  provaSocial: {
    tag: 'AVALIAÇÕES',
    title: 'Nota máxima de quem já se hospedou',
    nota: '5,0',
    totalAvaliacoes: '11 avaliações no Airbnb',
    selos: ['Preferido dos hóspedes', 'Top 10% das acomodações', 'Anfitriã de destaque'],
    categorias: [
      { label: 'Limpeza', nota: '5,0' },
      { label: 'Precisão', nota: '5,0' },
      { label: 'Check-in', nota: '5,0' },
      { label: 'Comunicação', nota: '5,0' },
      { label: 'Localização', nota: '4,9' },
      { label: 'Custo-benefício', nota: '5,0' },
    ],
    linkTexto: 'Ler as avaliações no Airbnb',
  },

  diferenciais: {
    tag: 'A CASA',
    title: 'O que torna a estadia especial',
    itens: [
      { icon: 'leaf', title: 'Reserva ambiental', description: 'Cachoeira, ducha natural, trilhas, lago e a fauna da Mata Atlântica.' },
      { icon: 'flame', title: 'Sala com lareira', description: 'Sala de estar com lareira e bar para as noites frias da Serra.' },
      { icon: 'party', title: 'Salão de festas', description: 'Espaço para reunir a família e os amigos em ocasiões especiais.' },
      { icon: 'game', title: 'Sinuca e brinquedoteca', description: 'Sala de jogos para os adultos e espaço para as crianças.' },
      { icon: 'utensils', title: 'Cozinha ampla', description: 'Cozinha completa e espaço gourmet para preparar as refeições do grupo.' },
      { icon: 'car', title: 'Estacionamento', description: 'Vagas no local para os carros do grupo.' },
      { icon: 'wifi', title: 'Wi-Fi', description: 'Internet disponível na casa.' },
      { icon: 'lock', title: 'Privacidade', description: 'A casa inteira reservada só para o seu grupo.' },
    ],
  },

  quartos: {
    tag: 'QUARTOS',
    title: 'Onde todos dormem bem',
    description: 'Suítes com varanda e vista para o verde e quartos charmosos no sótão.',
    itens: [
      { nome: 'Quarto 1', camas: '1 cama king' },
      { nome: 'Quarto 2', camas: '1 cama de casal' },
      { nome: 'Quarto 3', camas: '1 cama de casal' },
      { nome: 'Quarto 4', camas: '1 cama de casal e 1 de solteiro' },
      { nome: 'Quarto 5', camas: '1 cama de solteiro' },
    ],
  },

  galeria: {
    tag: 'GALERIA',
    title: 'A casa em imagens',
    images: [
      { src: '/images/hero-fachada-externa.png', alt: 'Vista aérea da casa' },
      { src: '/images/experiencia-areas-comuns.png', alt: 'Sala de estar com bar' },
      { src: '/images/hero-cachoeira-poco.png', alt: 'Cachoeira e poço natural' },
      { src: '/images/hero-casa-hortensias.png', alt: 'Entrada da casa com hortênsias' },
      { src: '/images/hero-lago-ponte.png', alt: 'Lago com ponte' },
      { src: '/images/hero-trilha-flores.png', alt: 'Trilha com azaleias' },
      { src: '/images/hero-jardins-sitio.png', alt: 'Jardins do sítio' },
      { src: '/images/hero-cachoeira-jardim.png', alt: 'Jardim com cachoeira' },
    ],
  },

  localizacao: {
    tag: 'LOCALIZAÇÃO',
    title: 'Natureza perto de tudo',
    itens: [
      { valor: '15 min', label: 'do centro histórico de Petrópolis' },
      { valor: '25 min', label: 'de Itaipava' },
      { valor: '1h30', label: 'do Rio de Janeiro, aproximadamente' },
    ],
    observacao: 'O endereço completo e o roteiro de chegada são enviados após a confirmação da reserva.',
  },

  faq: [
    { q: 'Como faço a reserva?', a: 'Pelo Airbnb, com pagamento seguro, ou falando direto com a anfitriã pelo WhatsApp.' },
    { q: 'Quantas pessoas a casa recebe?', a: 'Até 10 hóspedes, em 5 quartos com 6 camas e 7 banheiros.' },
    { q: 'A casa fica inteira para o meu grupo?', a: 'Sim. A casa é reservada exclusivamente para o seu grupo.' },
    { q: 'Tem estacionamento?', a: 'Sim, com vagas no local.' },
    { q: 'Posso fazer uma comemoração na casa?', a: 'A casa tem salão de festas. Fale com a anfitriã pelo WhatsApp para combinar os detalhes.' },
    { q: 'Onde fica exatamente?', a: 'Em Petrópolis, a 15 minutos do centro histórico. O endereço completo é enviado após a reserva.' },
  ],

  cta: {
    title: 'Reserve a sua temporada na Serra',
    description: 'Consulte as datas disponíveis no Airbnb ou fale com a anfitriã pelo WhatsApp.',
    whatsappMensagem: 'Olá! Vim pelo site e gostaria de consultar datas para alugar a casa por temporada.',
  },
};

export type TemporadaContent = typeof temporadaContent;
