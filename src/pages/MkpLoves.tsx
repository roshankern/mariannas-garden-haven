import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import teaAndTreatsImage from '@/assets/favorites/tea_and_treats.webp';
import paulineImage from '@/assets/favorites/IMG_2280.webp';
import familyImage from '@/assets/favorites/32C267AA-736F-452F-A9B1-F6DC0D58E48C.webp';

const MkpLoves = () => {
  const navigate = useNavigate();

  const loves = [
    {
      title: 'Tea and Treats',
      image: teaAndTreatsImage,
      description: 'Treasure the simple joys of life with a warm cup of tea and delightful treats. Whether it\'s a delicate Earl Grey in the afternoon or a robust English Breakfast to start the day, tea brings moments of peace and reflection. The warmth of the cup in my hands, the gentle steam rising, and the perfect pause it creates in a busy day - tea is my daily meditation.'
    },
    {
      title: 'Pauline',
      image: paulineImage,
      description: 'Pauline is a source of inspiration and joy. Her playful spirit and loving nature remind me to embrace life\'s adventures with an open heart. Whether we\'re sharing a quiet moment or embarking on a new journey, Pauline brings warmth and happiness to every experience.'
    },
    {
      title: 'Family',
      image: familyImage,
      description: 'Family is the heart of everything. The laughter shared around the dinner table, the stories passed down through generations, the unconditional love that sustains us through all of life\'s adventures. Whether gathered for holidays or enjoying quiet everyday moments, family creates the foundation of love, support, and belonging that makes life truly meaningful.'
    }
  ];

  return (
    <div className="min-h-screen bg-garden-gradient p-6">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-foreground hover:text-primary transition-colors mb-8 animate-fade-in-up"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Cottage
        </button>

        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-5xl font-serif text-foreground mb-4">Favorites</h1>
          <p className="text-xl text-muted-foreground italic">
            The simple joys that make life beautiful
          </p>
        </div>

        <div className="space-y-12">
          {loves.map((love, index) => (
            <div 
              key={index} 
              className={`shadow-cottage bg-card/95 backdrop-blur-sm overflow-hidden rounded-lg ${
                index % 2 === 0 ? 'animate-fade-in-up' : 'animate-fade-in-up'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[280px] ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Image */}
                <div className={`relative overflow-hidden ${
                  index % 2 === 1 ? 'lg:col-start-2' : ''
                }`}>
                  <img 
                    src={love.image} 
                    alt={love.title}
                    className="w-full h-full object-cover object-center min-h-[280px]"
                    style={{ 
                      aspectRatio: 'auto',
                      objectFit: 'cover',
                      objectPosition: 'center center'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
                </div>
                
                {/* Content */}
                <div className={`p-8 lg:p-12 flex flex-col justify-center ${
                  index % 2 === 1 ? 'lg:col-start-1' : ''
                }`}>
                  <h2 className="text-3xl font-serif text-foreground mb-6">
                    {love.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {love.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Beautiful closing section */}
        <div className="text-center mt-16 mb-8">
          <Card className="shadow-cottage border-border/50 bg-card/95 backdrop-blur-sm">
            <CardContent className="p-12">
              <h2 className="text-2xl font-serif text-foreground mb-4">
                "The best things in life are the people we love, the places we've been, and the memories we've made along the way."
              </h2>
              <p className="text-muted-foreground italic">
                — (Not Marianna)
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MkpLoves;