import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Music } from 'lucide-react';
import cottageInterior from '@/assets/cottage-interior.jpg';

const Index = () => {
  const navigate = useNavigate();
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

  const handleAreaClick = (area: string) => {
    switch (area) {
      case 'designs':
        navigate('/mkp-designs');
        break;
      case 'teaching':
        navigate('/mkp-teaches');
        break;
      case 'favorites':
        navigate('/mkp-loves');
        break;
      case 'about':
        navigate('/about');
        break;
    }
  };

  return (
    <div className="min-h-screen bg-cottage-gradient">
      {/* Navigation Menu */}
      <nav className="flex justify-center items-center py-6">
        <div className="flex space-x-12">
          <button onClick={() => navigate('/')} className="text-foreground hover:text-primary transition-colors font-medium">
            Home
          </button>
          <button onClick={() => navigate('/mkp-designs')} className="text-foreground hover:text-primary transition-colors font-medium">
            Designs
          </button>
          <button onClick={() => navigate('/mkp-teaches')} className="text-foreground hover:text-primary transition-colors font-medium">
            Teaching
          </button>
          <button onClick={() => navigate('/mkp-loves')} className="text-foreground hover:text-primary transition-colors font-medium">
            Favorites
          </button>
          <button onClick={() => navigate('/about')} className="text-foreground hover:text-primary transition-colors font-medium">
            About
          </button>
        </div>
      </nav>

      <div className="flex items-center justify-center p-4">
        <div className="relative max-w-7xl w-full">
        {/* Cottage Scene Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-cottage animate-fade-in-up">
          <img 
            src={cottageInterior} 
            alt="Marianna's Cottage Interior" 
            className="w-full h-auto"
          />
          
          {/* White circles as visual indicators */}
          {/* Garden Window Circle */}
          <div 
            className="absolute top-[30%] left-[8%] w-16 h-16 bg-white rounded-full pointer-events-auto transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 opacity-30 hover:opacity-60 cursor-pointer"
            onClick={() => handleAreaClick('designs')}
            onMouseEnter={() => setHoveredArea('designs')}
            onMouseLeave={() => setHoveredArea(null)}
            aria-label="View Designs"
          />
          
          {/* Bookcase Circle */}
          <div 
            className="absolute top-[44%] right-[11%] w-16 h-16 bg-white rounded-full pointer-events-auto transform translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 opacity-30 hover:opacity-60 cursor-pointer"
            onClick={() => handleAreaClick('teaching')}
            onMouseEnter={() => setHoveredArea('teaching')}
            onMouseLeave={() => setHoveredArea(null)}
            aria-label="View Teaching"
          />
          
          {/* Tea Circle */}
          <div 
            className="absolute bottom-[18%] left-[58.5%] w-16 h-16 bg-white rounded-full pointer-events-auto transform -translate-x-1/2 translate-y-1/2 transition-opacity duration-300 opacity-30 hover:opacity-60 cursor-pointer"
            onClick={() => handleAreaClick('favorites')}
            onMouseEnter={() => setHoveredArea('favorites')}
            onMouseLeave={() => setHoveredArea(null)}
            aria-label="View Favorites"
          />
          
          {/* Woman/About Circle */}
          <div 
            className="absolute top-[85%] left-[22%] w-16 h-16 bg-white rounded-full pointer-events-auto transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 opacity-30 hover:opacity-60 cursor-pointer"
            onClick={() => handleAreaClick('about')}
            onMouseEnter={() => setHoveredArea('about')}
            onMouseLeave={() => setHoveredArea(null)}
            aria-label="About"
          />

          {/* Hover tooltips */}
          {hoveredArea && (
            <div className={`absolute pointer-events-none ${
              hoveredArea === 'designs' ? 'top-[15%] left-[8%] transform -translate-x-1/2' :
              hoveredArea === 'teaching' ? 'top-[29%] right-[11%] transform translate-x-1/2' :
              hoveredArea === 'favorites' ? 'bottom-[26%] left-[58.5%] transform -translate-x-1/2' :
              'top-[70%] left-[19%]'
            }`}>
              <div className="bg-card/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-soft border border-border/50 animate-fade-in-up">
                <p className="text-card-foreground font-medium">
                  {hoveredArea === 'designs' && 'Designs'}
                  {hoveredArea === 'teaching' && 'Teaching'}
                  {hoveredArea === 'favorites' && 'Favorites'}
                  {hoveredArea === 'about' && 'About'}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Website Title */}
        <div className="text-center mt-8 space-y-2">
          <h1 className="text-6xl font-serif text-foreground tracking-wide animate-gentle-float">
            Marianna Krejci-Papa
          </h1>
        </div>

        {/* Navigation hint */}
        <div className="text-center mt-6">
          <p className="text-muted-foreground text-sm">
            Hover over different areas of the cottage to explore Marianna's world
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Index;