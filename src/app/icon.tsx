import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'radial-gradient(circle at 30% 30%, #1e1147 0%, #0b0820 70%, #020617 100%)',
          borderRadius: '8px',
          position: 'relative',
        }}
      >
        {/* estrela pequena topo-direita */}
        <div
          style={{
            position: 'absolute',
            top: '5px',
            right: '6px',
            width: '2px',
            height: '2px',
            background: '#e0e7ff',
            borderRadius: '50%',
            boxShadow: '0 0 3px #a78bfa',
          }}
        />
        {/* estrela base-esquerda */}
        <div
          style={{
            position: 'absolute',
            bottom: '6px',
            left: '5px',
            width: '1.5px',
            height: '1.5px',
            background: '#cffafe',
            borderRadius: '50%',
            boxShadow: '0 0 2px #22d3ee',
          }}
        />
        {/* orbe central com glow */}
        <div
          style={{
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle at 35% 30%, #c4b5fd 0%, #8b5cf6 45%, #4c1d95 100%)',
            boxShadow:
              '0 0 8px rgba(139, 92, 246, 0.9), 0 0 16px rgba(34, 211, 238, 0.4)',
          }}
        />
      </div>
    ),
    { ...size }
  );
}
