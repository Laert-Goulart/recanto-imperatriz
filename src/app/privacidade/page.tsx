import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { CookiePreferencesButton } from '@/components/CookiePreferencesButton';
import { siteConfig, colors } from '@/content/config';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Recanto da Imperatriz',
  description: 'Como o Recanto da Imperatriz coleta, usa e protege seus dados pessoais, de acordo com a LGPD.',
  alternates: { canonical: '/privacidade' },
};

const ATUALIZADO_EM = '8 de novembro de 2026';

const H2: React.CSSProperties = { fontSize: '22px', fontWeight: 700, margin: '36px 0 10px' };
const P: React.CSSProperties = { fontSize: '15px', lineHeight: 1.7, margin: '0 0 12px', opacity: 0.88 };

export default function Privacidade() {
  return (
    <div style={{ background: colors.bg, color: colors.text, minHeight: '100vh' }}>
      <Header />
      <main style={{ maxWidth: '780px', margin: '0 auto', padding: '56px clamp(20px, 5vw, 64px)' }}>
        <span style={{ fontSize: '12px', letterSpacing: '0.04em', textTransform: 'uppercase', opacity: 0.6 }}>LGPD</span>
        <h1 style={{ fontSize: 'clamp(30px, 4vw, 42px)', fontWeight: 700, margin: '10px 0 6px' }}>Política de Privacidade</h1>
        <p style={{ ...P, fontSize: '13px', opacity: 0.6 }}>Última atualização: {ATUALIZADO_EM}</p>

        <p style={P}>
          Esta política explica como o <b>{siteConfig.name}</b> trata os dados pessoais de quem visita o site{' '}
          <b>recantodaimperatriz.com.br</b>, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
        </p>

        <h2 style={H2}>1. Quem é o responsável pelos seus dados</h2>
        <p style={P}>
          O controlador dos dados é o {siteConfig.name}, localizado em {siteConfig.location}. Para qualquer assunto
          relacionado a privacidade, fale conosco pelo e-mail <a href={`mailto:${siteConfig.email}`} style={{ color: colors.accent }}>{siteConfig.email}</a>.
        </p>

        <h2 style={H2}>2. Quais dados coletamos</h2>
        <p style={P}><b>Dados que você nos envia:</b> nome, e-mail, telefone (com DDD) e tipo de evento ou hospedagem de interesse, quando você preenche um formulário do site (contato ou download do Book Corporativo). Registramos também a página em que o formulário foi enviado.</p>
        <p style={P}><b>Dados de navegação:</b> páginas visitadas, cliques em botões (como WhatsApp e Airbnb), tipo de dispositivo, navegador e localização aproximada (cidade/região), coletados por cookies de medição — somente se você aceitar.</p>

        <h2 style={H2}>3. Para que usamos os dados</h2>
        <ul style={{ ...P, paddingLeft: '20px' }}>
          <li>Responder seu contato e enviar informações, propostas e o material solicitado;</li>
          <li>Medir o desempenho do site e dos nossos anúncios e melhorar a experiência de navegação;</li>
          <li>Exibir anúncios do Recanto para quem já visitou o site (remarketing), se você aceitar os cookies.</li>
        </ul>
        <p style={P}>Não vendemos seus dados pessoais.</p>

        <h2 style={H2}>4. Bases legais</h2>
        <p style={P}>
          Tratamos os dados de formulário para atender à sua solicitação e a procedimentos preliminares de uma reserva ou
          contratação (art. 7º, V, da LGPD) e com base no nosso legítimo interesse em responder seu contato (art. 7º, IX).
          Os cookies de medição e publicidade dependem do seu consentimento (art. 7º, I), que você pode retirar a qualquer momento.
        </p>

        <h2 style={H2}>5. Cookies</h2>
        <p style={P}>
          Ao entrar no site, você escolhe se aceita ou recusa cookies de medição e publicidade. Se recusar, eles não são
          gravados no seu navegador. Utilizamos o Google Analytics e o Google Ads e, quando ativado, o Pixel da Meta
          (Facebook/Instagram).
        </p>
        <CookiePreferencesButton />

        <h2 style={H2}>6. Com quem compartilhamos</h2>
        <p style={P}>Compartilhamos dados apenas com prestadores de serviço necessários ao funcionamento do site, que atuam conforme nossas instruções:</p>
        <ul style={{ ...P, paddingLeft: '20px' }}>
          <li>Hospedagem do site e armazenamento dos formulários (provedores de nuvem);</li>
          <li>Google (Analytics e Ads) e, se ativado, Meta, para medição e anúncios;</li>
          <li>WhatsApp e Airbnb, quando você escolhe falar conosco ou reservar por esses serviços — nesse caso, valem também as políticas de privacidade deles.</li>
        </ul>
        <p style={P}>Alguns desses provedores podem armazenar dados fora do Brasil, com as salvaguardas previstas na LGPD.</p>

        <h2 style={H2}>7. Por quanto tempo guardamos</h2>
        <p style={P}>
          Mantemos os dados de contato pelo tempo necessário para atender sua solicitação e para cumprir obrigações legais.
          Você pode pedir a exclusão a qualquer momento.
        </p>

        <h2 style={H2}>8. Seus direitos</h2>
        <p style={P}>Pela LGPD (art. 18), você pode solicitar a qualquer momento:</p>
        <ul style={{ ...P, paddingLeft: '20px' }}>
          <li>Confirmação de que tratamos seus dados e acesso a eles;</li>
          <li>Correção de dados incompletos ou desatualizados;</li>
          <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
          <li>Portabilidade e informação sobre com quem compartilhamos;</li>
          <li>Revogação do consentimento.</li>
        </ul>
        <p style={P}>
          Para exercer seus direitos, escreva para <a href={`mailto:${siteConfig.email}`} style={{ color: colors.accent }}>{siteConfig.email}</a>.
          Você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).
        </p>

        <h2 style={H2}>9. Segurança</h2>
        <p style={P}>Usamos conexão criptografada (HTTPS) e acesso restrito aos dados armazenados.</p>

        <h2 style={H2}>10. Alterações</h2>
        <p style={P}>Esta política pode ser atualizada. A data da última versão aparece no topo da página.</p>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
