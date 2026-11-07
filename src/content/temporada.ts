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

  // Trechos reais de avaliações publicadas no Airbnb
  depoimentos: {
    tag: 'O QUE DIZEM OS HÓSPEDES',
    title: 'Avaliações de quem já se hospedou',
    itens: [
      { nome: 'Marcos', data: 'Dezembro de 2025', texto: 'A casa é muito espaçosa e muito bem mobiliada, a natureza ao redor foi uma atração à parte. A casa muito limpa e bem organizada, a anfitriã muito atenciosa e sempre disponível.' },
      { nome: 'Vinicius', data: 'Julho de 2025', texto: 'Simplesmente um achado! Nossa estadia foi perfeita do início ao fim.' },
      { nome: 'Luiza', data: 'Julho de 2025', texto: 'Pelas fotos não se tem dimensão do tamanho da casa. São 3 pavimentos, sendo 1 área de lazer, o que permite descanso e curtição para o grupo.' },
      { nome: 'Brenda', data: 'Maio de 2025', texto: 'Nossa estadia no Recanto da Imperatriz foi sem dúvidas um final de semana maravilhoso.' },
      { nome: 'Paulo', data: 'Abril de 2025', texto: 'O Recanto da Imperatriz é um local mágico! Cheio de história, muito bem cuidado. Victoria nos recebeu com muito zelo, nos mostrou a casa que é imensa!' },
      { nome: 'Rosana', data: 'Março de 2025', texto: 'A casa superou nossas expectativas. Passamos um carnaval em família, maravilhoso, cheio de paz e envoltos por uma exuberante natureza.' },
    ],
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
    // As fotos abaixo aparecem na galeria, logo após as fotos da casa
    description: 'Suítes com varanda e vista para o verde e quartos charmosos no sótão.',
    itens: [
      { nome: 'Quarto 1', camas: '1 cama king' },
      { nome: 'Quarto 2', camas: '1 cama de casal' },
      { nome: 'Quarto 3', camas: '1 cama de casal' },
      { nome: 'Quarto 4', camas: '1 cama de casal e 1 de solteiro' },
      { nome: 'Quarto 5', camas: '1 cama de solteiro' },
    ],
    fotos: [
      { src: '/images/quarto-suite-cama-ferro.jpg', alt: 'Suíte com cama de casal' },
      { src: '/images/quarto-suite-banheiro.jpg', alt: 'Banheiro da suíte' },
      { src: '/images/quarto-sotao-sala.jpg', alt: 'Sala de estar no sótão' },
      { src: '/images/experiencia-areas-comuns.png', alt: 'Sala com lareira e bar' },
    ],
  },

  regras: {
    tag: 'ANTES DE RESERVAR',
    title: 'O que você precisa saber',
    horarios: [
      { label: 'Check-in', valor: '15:00 às 19:00' },
      { label: 'Check-out', valor: 'até 11:00' },
    ],
    itens: [
      { titulo: 'Até 10 hóspedes para pernoite', detalhe: '' },
      { titulo: 'Não são permitidos animais de estimação', detalhe: '' },
      { titulo: 'Proibido fumar', detalhe: 'Inclusive vapes e cigarros eletrônicos' },
      { titulo: 'Horário de silêncio', detalhe: 'Das 23:00 às 07:00' },
      { titulo: 'Fotografia comercial não permitida', detalhe: 'Inclusive filmagens comerciais' },
    ],
    cancelamento: 'A política de cancelamento depende das datas escolhidas e aparece no Airbnb ao selecionar o período.',
  },

  anfitria: {
    tag: 'SUA ANFITRIÃ',
    nome: 'Maria Victória',
    descricao: 'Empresária, recebe hóspedes no Recanto há 2 anos. "Eu amo conversar e trocar experiências, amo ver as pessoas ao meu redor felizes!"',
    stats: [
      { valor: '5,0 ★', label: 'nota como anfitriã' },
      { valor: '14', label: 'avaliações' },
      { valor: '100%', label: 'taxa de resposta' },
      { valor: 'Poucas horas', label: 'tempo de resposta' },
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
      { src: '/images/hospedagem-hero-varanda-casa.png', alt: 'Varanda e fachada da casa' },
      { src: '/images/eventos-hero-varanda.png', alt: 'Varanda com escadaria' },
    ],
    tituloQuartos: 'Quartos e ambientes internos',
  },

  natureza: {
    tag: 'RESERVA AMBIENTAL',
    title: 'Acorde com o canto dos pássaros',
    description:
      'A casa fica dentro de uma área de Mata Atlântica preservada. Saíras, sabiás, araçaris e outras espécies nativas fazem parte da paisagem de quem se hospeda no Recanto.',
    image: { src: '/images/ff-hero-ponte-jardim.png', alt: 'Lago com ponte cercado pela mata' },
    fotos: [
      // enquadramento: posição horizontal do recorte (0% = esquerda, 100% = direita)
      { src: '/images/fauna-4-saira-sete-cores.jpeg', alt: 'Saíra-sete-cores', enquadramento: '72%' },
      { src: '/images/fauna-10-sabia-laranjeira.jpeg', alt: 'Sabiá-laranjeira', enquadramento: '74%' },
      { src: '/images/fauna-3-arassaris.jpeg', alt: 'Araçaris', enquadramento: '64%' },
    ],
    linkTexto: 'Conheça as espécies nativas',
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
    image: { src: '/images/loc-hero-petropolis.jpg', alt: 'Petrópolis, a Cidade Imperial' },
  },

  faq: [
    { q: 'Como faço a reserva?', a: 'Pelo Airbnb, com pagamento seguro, ou falando direto com a anfitriã pelo WhatsApp.' },
    { q: 'Quantas pessoas a casa recebe?', a: 'Até 10 hóspedes, em 5 quartos com 6 camas e 7 banheiros.' },
    { q: 'A casa fica inteira para o meu grupo?', a: 'Sim. A casa é reservada exclusivamente para o seu grupo.' },
    { q: 'Quais são os horários de check-in e check-out?', a: 'Check-in das 15:00 às 19:00 e check-out até as 11:00.' },
    { q: 'Posso levar meu animal de estimação?', a: 'Não. A casa não aceita animais de estimação.' },
    { q: 'Tem estacionamento?', a: 'Sim, com vagas no local.' },
    { q: 'Posso fazer uma comemoração na casa?', a: 'A casa tem salão de festas. O horário de silêncio é das 23:00 às 07:00. Fale com a anfitriã pelo WhatsApp para combinar os detalhes.' },
    { q: 'Onde fica exatamente?', a: 'Em Petrópolis, a 15 minutos do centro histórico. O endereço completo é enviado após a reserva.' },
  ],

  cta: {
    title: 'Reserve a sua temporada na Serra',
    description: 'Consulte as datas disponíveis no Airbnb ou fale com a anfitriã pelo WhatsApp.',
    whatsappMensagem: 'Olá! Vim pelo site e gostaria de consultar datas para alugar a casa por temporada.',
  },
};

export type TemporadaContent = typeof temporadaContent;
