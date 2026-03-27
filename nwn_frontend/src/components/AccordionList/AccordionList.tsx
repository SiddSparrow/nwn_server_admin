import React, { useState } from 'react';

export interface AccordionItem {
  id: string;
  title: string;
  image?: string;
  content: React.ReactNode;
}

interface AccordionListProps {
  items: AccordionItem[];
  title: string;
}

export const AccordionList: React.FC<AccordionListProps> = ({ items, title }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="max-w-3xl mx-auto w-full">
      <div className="backdrop-blur-md bg-gray-800 border border-white/15 rounded-xl shadow-xl overflow-hidden">
        <div className="bg-white/10 border-b border-white/20 px-6 py-3">
          <h1 className="text-lg sm:text-xl font-semibold text-white">{title}</h1>
        </div>

        <div className="flex flex-col">
          {items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="border-b border-white/10 last:border-b-0">
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-center gap-4 px-6 py-3 hover:bg-white/5 transition-colors duration-150 text-left"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-10 h-10 rounded-full object-cover border border-white/20 flex-shrink-0"
                    />
                  )}
                  <span className="text-white/90 text-sm font-semibold flex-1">
                    {item.title}
                  </span>
                  <span
                    className={`text-white/60 text-xs transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  >
                    ▼
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-4 pt-1">
                    {item.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
