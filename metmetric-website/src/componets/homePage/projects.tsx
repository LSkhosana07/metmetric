import { useState } from 'react';
import { projects } from '../../Arrays/arrays';

export default function FeaturedCards() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="flex flex-col items-center gap-8 py-16 
                    md:flex-row md:justify-center md:gap-6">
      {projects.map((project, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`
                group cursor-pointer rounded-2xl overflow-hidden
                transition-all duration-300 ease-out
                ${
                  isActive
                    ? 'w-full max-w-95 md:max-w-100 lg:max-w-105 bg-white shadow-[0_40px_90px_rgba(19,89,202,0.35)] scale-95'
                    : 'w-full max-w-85 md:max-w-90 lg:max-w-95 bg-[#0B1220] border border-white/10 opacity-80 hover:opacity-100'
                }
              `}
            >
            {/* Image */}
            <div className="aspect-video w-full px-2 py-2 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover rounded-xl"
              />
            </div>

            {/* Content */}
            <div className={`p-6 ${isActive ? 'text-black' : 'text-white'}`}>
              <h3
                className={`text-2xl font-semibold mb-3 ${
                  isActive ? 'text-[#1359CA]' : 'text-white'
                }`}
              >
                {project.title}
              </h3>

              <p
                className={`text-base leading-relaxed ${
                  isActive ? 'text-black' : 'text-white'
                }`}
              >
                {project.description}
              </p>

              {isActive && (
                <button
                  className="
                    mt-6 w-full rounded-full py-3 text-sm font-semibold
                    text-white bg-linear-to-b from-[#15B5F8] to-[#1B33B8]
                    hover:opacity-90 transition
                  "
                >
                  View Project
                </button>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
}