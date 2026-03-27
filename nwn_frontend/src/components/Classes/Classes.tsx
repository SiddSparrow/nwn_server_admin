import React, { useState } from 'react';
import classesData from '../../dataSet/classes/classes.json';
import { ClassModal } from './ClassModal';
import { getClassImage, misterious } from './classImages';

export const Classes: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const hideImages = true;
  return (
    <>
      <div className="max-w-3xl mx-auto w-full">
        <div className="backdrop-blur-md bg-gray-800 border border-white/15 rounded-xl shadow-xl overflow-hidden">
          <div className="bg-white/10 border-b border-white/20 px-6 py-3">
            <h1 className="text-lg sm:text-xl font-semibold text-white">Classes</h1>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4">
            {classesData.classes.map((cls, index) => {
              
              const { src: image } = hideImages ? { src: misterious } : getClassImage(cls.name);
              const isMisterious = image === misterious;
              return (
                <button
                  key={cls.name}
                  onClick={() => setSelectedIndex(index)}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 transition-colors duration-150 text-left"
                >
                  <div className="relative flex-shrink-0">
                    <img
                      src={image}
                      alt={cls.name}
                      className={`w-10 h-10 rounded-full object-cover border border-white/20 ${isMisterious ? 'opacity-50' : ''}`}
                    />
                    {isMisterious && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg text-white/80 font-bold">?</span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white/90 text-xs sm:text-sm font-semibold truncate">
                      {cls.name}
                    </span>
                    <span className="text-xs text-amber-300 font-medium">
                      {cls.type}
                    </span> 
                  </div>
                  
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {selectedIndex !== null && (
        <ClassModal
          classes={classesData.classes}
          currentIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onNavigate={setSelectedIndex}
        />
      )}
    </>
  );
};
