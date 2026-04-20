import React, { useState } from 'react';
import { Page } from '../../types';

interface NavCardDef {
  label: string;
  desc: string;
  color: string;
  border: string;
  iconColor: string;
  icon: React.ReactNode;
  page?: Page;
  href?: string;
}

const NAV_CARDS: NavCardDef[] = [
  {
    label: 'Lore',
    page: 'lore',
    desc: 'A história e o mundo de Terra RP',
    color: 'rgba(251,191,36,0.15)',
    border: 'rgba(251,191,36,0.30)',
    iconColor: '#fbbf24',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    label: 'Regras do Servidor',
    page: 'regras',
    desc: 'Normas de conduta e roleplay',
    color: 'rgba(99,102,241,0.15)',
    border: 'rgba(99,102,241,0.30)',
    iconColor: '#818cf8',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: 'Mudanças',
    page: 'changes',
    desc: 'Atualizações e patches recentes',
    color: 'rgba(52,211,153,0.15)',
    border: 'rgba(52,211,153,0.30)',
    iconColor: '#34d399',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 1 21 5 17 9" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <polyline points="7 23 3 19 7 15" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
  },
  {
    label: 'Sistemas',
    page: 'regras',
    desc: 'Quests, morte, eventos e CNR',
    color: 'rgba(251,146,60,0.15)',
    border: 'rgba(251,146,60,0.30)',
    iconColor: '#fb923c',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://chat.whatsapp.com/',
    desc: 'Entre no grupo da comunidade',
    color: 'rgba(74,222,128,0.15)',
    border: 'rgba(74,222,128,0.30)',
    iconColor: '#4ade80',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    label: 'Discord',
    href: 'https://discord.gg/uN9rG9fC',
    desc: 'Servidor oficial no Discord',
    color: 'rgba(129,140,248,0.15)',
    border: 'rgba(129,140,248,0.30)',
    iconColor: '#818cf8',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.032.057a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
      </svg>
    ),
  },
];

interface NavCardsProps {
  onNavigate: (page: Page) => void;
}

interface NavCardProps {
  card: NavCardDef;
  onNavigate: (page: Page) => void;
}

const NavCard: React.FC<NavCardProps> = ({ card, onNavigate }) => {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    if (card.href) window.open(card.href, '_blank', 'noopener,noreferrer');
    else if (card.page) onNavigate(card.page);
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 10,
        padding: '18px 16px',
        borderRadius: 12,
        cursor: 'pointer',
        textAlign: 'left',
        background: hovered ? card.color : 'rgba(255,255,255,0.04)',
        border: `1px solid ${hovered ? card.border : 'rgba(255,255,255,0.12)'}`,
        transition: 'background 200ms, border-color 200ms, transform 150ms, box-shadow 150ms',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: hovered ? '0 8px 24px rgba(0,0,0,0.3)' : 'none',
        width: '100%',
      }}
    >
      <div style={{ color: card.iconColor, opacity: hovered ? 1 : 0.7, transition: 'opacity 200ms' }}>
        {card.icon}
      </div>
      <div>
        <div style={{
          fontSize: 13, fontWeight: 700,
          color: 'rgba(255,255,255,0.90)',
          fontFamily: 'system-ui, sans-serif',
          marginBottom: 3,
        }}>
          {card.label}
        </div>
        <div style={{
          fontSize: 11,
          color: 'rgba(255,255,255,0.50)',
          fontFamily: 'system-ui, sans-serif',
          lineHeight: 1.4,
        }}>
          {card.desc}
        </div>
      </div>
    </button>
  );
};

export const NavCards: React.FC<NavCardsProps> = ({ onNavigate }) => {
  return (
    <div className="w-full max-w-3xl mt-8">
      <h2 className="mb-4 text-xs font-semibold text-white/45 font-sans uppercase tracking-[0.10em]">
        Explorar
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {NAV_CARDS.map(card => (
          <NavCard key={card.label} card={card} onNavigate={onNavigate} />
        ))}
      </div>
    </div>
  );
};
