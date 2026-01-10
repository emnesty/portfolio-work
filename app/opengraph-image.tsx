import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Luciano Silva - Product Designer & Front-end Developer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#09090b',
          backgroundImage: 'radial-gradient(circle at 25px 25px, #27272a 2%, transparent 0%), radial-gradient(circle at 75px 75px, #27272a 2%, transparent 0%)',
          backgroundSize: '100px 100px',
        }}
      >
        {/* Gradient Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15), transparent 50%)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            zIndex: 10,
          }}
        >
          {/* Icon/Logo */}
          <div
            style={{
              display: 'flex',
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '64px',
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            LS
          </div>

          {/* Name */}
          <div
            style={{
              display: 'flex',
              fontSize: '72px',
              fontWeight: 'bold',
              color: 'white',
              letterSpacing: '-0.02em',
            }}
          >
            Luciano Silva
          </div>

          {/* Roles */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '16px',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                padding: '12px 24px',
                backgroundColor: 'rgba(59, 130, 246, 0.2)',
                border: '2px solid rgba(59, 130, 246, 0.4)',
                borderRadius: '12px',
                color: '#60a5fa',
                fontSize: '28px',
                fontWeight: '600',
              }}
            >
              Product Designer
            </div>
            <div
              style={{
                display: 'flex',
                padding: '12px 24px',
                backgroundColor: 'rgba(139, 92, 246, 0.2)',
                border: '2px solid rgba(139, 92, 246, 0.4)',
                borderRadius: '12px',
                color: '#a78bfa',
                fontSize: '28px',
                fontWeight: '600',
              }}
            >
              Front-end Developer
            </div>
          </div>

          {/* Description */}
          <div
            style={{
              display: 'flex',
              color: '#a1a1aa',
              fontSize: '24px',
              maxWidth: '800px',
              textAlign: 'center',
              lineHeight: '1.4',
            }}
          >
            Creating exceptional digital experiences through design and code
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            color: '#52525b',
            fontSize: '20px',
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          luux.vercel.app
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
