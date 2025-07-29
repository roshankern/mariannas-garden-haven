import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    <div className="min-h-screen bg-cottage-gradient flex items-center justify-center p-4">
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
            className={`absolute top-[20%] left-[35%] w-[30%] h-[40%] rounded-lg transition-all duration-300 ${
              hoveredArea === 'garden' ? 'bg-primary/20 shadow-glow' : 'bg-transparent hover:bg-primary/10'
            }`}
            onMouseEnter={() => setHoveredArea('garden')}
            onMouseLeave={() => setHoveredArea(null)}
            onClick={() => handleAreaClick('garden')}
            aria-label="View Marianna's Designs"
          />

          {/* Bookcase Area */}
          <button
            className={`absolute top-[15%] right-[10%] w-[25%] h-[60%] rounded-lg transition-all duration-300 ${
              hoveredArea === 'bookcase' ? 'bg-secondary/30 shadow-glow' : 'bg-transparent hover:bg-secondary/15'
            }`}
            onMouseEnter={() => setHoveredArea('bookcase')}
            onMouseLeave={() => setHoveredArea(null)}
            onClick={() => handleAreaClick('bookcase')}
            aria-label="View Marianna's Teaching"
          />

          {/* Tea Area */}
          <button
            className={`absolute bottom-[25%] left-[40%] w-[20%] h-[20%] rounded-lg transition-all duration-300 ${
              hoveredArea === 'tea' ? 'bg-accent/40 shadow-glow' : 'bg-transparent hover:bg-accent/20'
            }`}
            onMouseEnter={() => setHoveredArea('tea')}
            onMouseLeave={() => setHoveredArea(null)}
            onClick={() => handleAreaClick('tea')}
            aria-label="View What Marianna Loves"
          />

          {/* Woman/About Area */}
          <button
            className={`absolute top-[25%] left-[10%] w-[25%] h-[50%] rounded-lg transition-all duration-300 ${
              hoveredArea === 'woman' ? 'bg-primary-glow/25 shadow-glow' : 'bg-transparent hover:bg-primary-glow/15'
            }`}
            onMouseEnter={() => setHoveredArea('woman')}
            onMouseLeave={() => setHoveredArea(null)}
            onClick={() => handleAreaClick('woman')}
            aria-label="About Marianna"
          />

          {/* Hover tooltips */}
          {hoveredArea && (
            <div className={`absolute pointer-events-none ${
              hoveredArea === 'garden' ? 'top-[15%] left-[45%]' :
              hoveredArea === 'bookcase' ? 'top-[10%] right-[15%]' :
              hoveredArea === 'tea' ? 'bottom-[20%] left-[45%]' :
              'top-[20%] left-[15%]'
            }`}>
              <div className="bg-card/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-soft border border-border/50 animate-fade-in-up">
                <p className="text-card-foreground font-medium">
                  {hoveredArea === 'garden' && 'MKP Designs'}
                  {hoveredArea === 'bookcase' && 'MKP Teaches'}
                  {hoveredArea === 'tea' && 'MKP Loves'}
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
          <p className="text-xl text-muted-foreground italic">
            Artist • Teacher • Lover of Beauty
          </p>
        </div>

        {/* Navigation hint */}
        <div className="text-center mt-6">
          <p className="text-muted-foreground text-sm">
            Hover over different areas of the cottage to explore Marianna's world
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;