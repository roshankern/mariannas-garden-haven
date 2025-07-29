import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Music } from 'lucide-react';
import cottageInterior from '@/assets/cottage-interior.jpg';

const Index = () => {
  const navigate = useNavigate();
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

  const handleAreaClick = (area: string) => {
    switch (area) {
      case 'garden':
        navigate('/mkp-designs');
        break;
      case 'bookcase':
        navigate('/mkp-teaches');
        break;
      case 'tea':
        navigate('/mkp-loves');
        break;
      case 'woman':
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
          
          {/* Invisible clickable areas */}
          {/* Garden Window Area */}
          <button
            className="absolute top-[5%] left-[35%] w-[30%] h-[15%] rounded-lg transition-all duration-300 bg-transparent"
            onMouseEnter={() => setHoveredArea('garden')}
            onMouseLeave={() => setHoveredArea(null)}
            onClick={() => handleAreaClick('garden')}
            aria-label="View Designs"
          />

          {/* Bookcase Area */}
          <button
            className="absolute top-[15%] right-[10%] w-[25%] h-[30%] rounded-lg transition-all duration-300 bg-transparent"
            onMouseEnter={() => setHoveredArea('bookcase')}
            onMouseLeave={() => setHoveredArea(null)}
            onClick={() => handleAreaClick('bookcase')}
            aria-label="View Teaching"
          />

          {/* Tea Area */}
          <button
            className="absolute bottom-[25%] left-[42%] w-[16%] h-[20%] rounded-lg transition-all duration-300 bg-transparent"
            onMouseEnter={() => setHoveredArea('tea')}
            onMouseLeave={() => setHoveredArea(null)}
            onClick={() => handleAreaClick('tea')}
            aria-label="View Favorites"
          />

          {/* Woman/About Area */}
          <button
            className="absolute top-[25%] left-[10%] w-[25%] h-[50%] rounded-lg transition-all duration-300 bg-transparent"
            onMouseEnter={() => setHoveredArea('woman')}
            onMouseLeave={() => setHoveredArea(null)}
            onClick={() => handleAreaClick('woman')}
            aria-label="About Marianna"
          />

          {/* Hover tooltips */}
          {hoveredArea && (
            <div className={`absolute pointer-events-none ${
              hoveredArea === 'garden' ? 'top-[22%] left-[50%] transform -translate-x-1/2' :
              hoveredArea === 'bookcase' ? 'top-[12%] right-[22%] transform translate-x-1/2' :
              hoveredArea === 'tea' ? 'bottom-[47%] left-[50%] transform -translate-x-1/2' :
              'top-[20%] left-[15%]'
            }`}>
              <div className="bg-card/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-soft border border-border/50 animate-fade-in-up">
                <p className="text-card-foreground font-medium">
                  {hoveredArea === 'garden' && 'Designs'}
                  {hoveredArea === 'bookcase' && 'Teaching'}
                  {hoveredArea === 'tea' && 'Favorites'}
                  {hoveredArea === 'woman' && 'About Marianna'}
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