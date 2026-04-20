import React, { useState } from 'react';
import { Page } from '../../types';
import { useAuth } from '../../contexts/AuthContext';
import { LoginModal } from '../Login/LoginModal';

interface HeaderProps {
  page: Page;
  onNavigate: (page: Page) => void;
}

export const Header: React.FC<HeaderProps> = ({ page, onNavigate }) => {
  const [loginOpen, setLoginOpen] = useState(false);
  const { username, logout } = useAuth();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="text-[22px] font-bold text-white/95 tracking-wide font-serif hover:text-white/80 transition-colors duration-200"
          >
            Terra RP
          </button>
          <nav>
            <ul className="flex items-center gap-3">
              {username && (
                <>
                  <li>
                    <span className="text-white/60 text-xs hidden sm:inline">{username}</span>
                  </li>
                  <li>
                    <button
                      onClick={() => onNavigate('admin')}
                      className={`hover:text-white transition-colors duration-200 text-xs sm:text-sm font-medium ${page === 'admin' ? 'text-white' : 'text-white/80'}`}
                    >
                      Admin
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => { logout(); onNavigate('home'); }}
                      className="px-[18px] py-[7px] rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white/90 text-[13px] font-semibold tracking-[0.02em] transition-colors duration-200"
                    >
                      Sair
                    </button>
                  </li>
                </>
              )}
              {!username && (
                <li>
                  <button
                    onClick={() => setLoginOpen(true)}
                    className="px-[18px] py-[7px] rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white/90 text-[13px] font-semibold tracking-[0.02em] transition-colors duration-200"
                  >
                    Login
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>

      {loginOpen && <LoginModal onClose={() => setLoginOpen(false)} />}
    </>
  );
};
