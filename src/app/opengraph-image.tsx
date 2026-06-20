import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'João Paulo Pereira — Desenvolvedor Full Stack Júnior';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background:
            'radial-gradient(ellipse at 80% 20%, #2a1758 0%, #140a35 40%, #020617 100%)',
          color: '#f8fafc',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* estrelas decorativas */}
        <div style={{ position: 'absolute', top: '90px', right: '180px', width: '4px', height: '4px', background: '#e0e7ff', borderRadius: '50%', boxShadow: '0 0 8px #a78bfa', display: 'flex' }} />
        <div style={{ position: 'absolute', top: '180px', right: '90px', width: '3px', height: '3px', background: '#cffafe', borderRadius: '50%', boxShadow: '0 0 6px #22d3ee', display: 'flex' }} />
        <div style={{ position: 'absolute', bottom: '220px', right: '140px', width: '2px', height: '2px', background: '#f5d0fe', borderRadius: '50%', boxShadow: '0 0 4px #c084fc', display: 'flex' }} />
        <div style={{ position: 'absolute', top: '260px', left: '60%', width: '3px', height: '3px', background: '#e0e7ff', borderRadius: '50%', boxShadow: '0 0 6px #a78bfa', display: 'flex' }} />
        {/* orbe planeta decorativo */}
        <div style={{ position: 'absolute', top: '-120px', right: '-120px', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, rgba(196,181,253,0.35) 0%, rgba(139,92,246,0.25) 40%, rgba(76,29,149,0.1) 70%, transparent 100%)', display: 'flex' }} />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: '72px',
              height: '72px',
              borderRadius: '20px',
              background:
                'linear-gradient(135deg, #a78bfa 0%, #22d3ee 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              fontWeight: 700,
              color: '#0b0820',
              letterSpacing: '-1px',
              boxShadow: '0 0 24px rgba(167, 139, 250, 0.4)',
            }}
          >
            JP
          </div>
          <div
            style={{
              fontSize: '28px',
              color: '#c4b5fd',
              letterSpacing: '-0.5px',
            }}
          >
            joao-paulo-pereira.dev
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', zIndex: 1 }}>
          <div
            style={{
              fontSize: '76px',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-2px',
              color: '#f8fafc',
            }}
          >
            João Paulo Pereira
          </div>
          <div
            style={{
              fontSize: '38px',
              background:
                'linear-gradient(90deg, #a78bfa 0%, #22d3ee 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              fontWeight: 500,
              letterSpacing: '-0.5px',
            }}
          >
            Desenvolvedor Full Stack Júnior
          </div>
          <div
            style={{
              fontSize: '26px',
              color: '#94a3b8',
              maxWidth: '900px',
              lineHeight: 1.4,
            }}
          >
            Node.js · TypeScript · React · SQL — Documentação-first, automação com IA e boas práticas.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '22px',
            color: '#64748b',
            borderTop: '1px solid rgba(167, 139, 250, 0.15)',
            paddingTop: '24px',
            zIndex: 1,
          }}
        >
          <div style={{ display: 'flex', gap: '32px' }}>
            <span>Next.js</span>
            <span>·</span>
            <span>TypeScript</span>
            <span>·</span>
            <span>Prisma</span>
            <span>·</span>
            <span>PostgreSQL</span>
          </div>
          <div style={{ color: '#a78bfa', fontWeight: 600, letterSpacing: '0.5px' }}>Portfólio</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
