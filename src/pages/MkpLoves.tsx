import { ArrowLeft, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const MkpLoves = () => {
  const navigate = useNavigate();

  const loves = [
    {
      title: 'Tea',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600',
      description: 'There\'s something magical about the ritual of tea time. Whether it\'s a delicate Earl Grey in the afternoon or a robust English Breakfast to start the day, tea brings moments of peace and reflection. The warmth of the cup in my hands, the gentle steam rising, and the perfect pause it creates in a busy day - tea is my daily meditation.'
    },
    {
      title: 'Treats',
      image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600',
      description: 'Life is sweeter with little indulgences. From homemade cookies fresh from the oven to delicate pastries from the local bakery, treats are about more than taste - they\'re about celebration, comfort, and sharing joy with others. Every special occasion deserves something sweet, and every ordinary day can become special with the right treat.'
    },
    {
      title: 'Cats',
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600',
      description: 'Cats are poetry in motion. Their independence inspires me, their purrs calm my soul, and their playful antics bring endless entertainment. Each cat has their own personality, their own story to tell. They teach us about living in the moment, finding joy in simple pleasures, and the art of being perfectly content with who you are.'
    },
    {
      title: 'Family',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600',
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
          <h1 className="text-5xl font-serif text-foreground mb-4">MKP Loves</h1>
          <p className="text-xl text-muted-foreground italic flex items-center justify-center gap-2">
            <Heart className="w-6 h-6 text-primary" />
            The simple joys that make life beautiful
            <Heart className="w-6 h-6 text-primary" />
          </p>
        </div>

        <div className="space-y-12">
          {loves.map((love, index) => (
            <Card 
              key={index} 
              className={`shadow-cottage border-border/50 bg-card/95 backdrop-blur-sm overflow-hidden ${
                index % 2 === 0 ? 'animate-fade-in-up' : 'animate-fade-in-up'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  {/* Image */}
                  <div className={`relative h-64 lg:h-80 ${
                    index % 2 === 1 ? 'lg:col-start-2' : ''
                  }`}>
                    <img 
                      src={love.image} 
                      alt={love.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
                  </div>
                  
                  {/* Content */}
                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${
                    index % 2 === 1 ? 'lg:col-start-1' : ''
                  }`}>
                    <h2 className="text-3xl font-serif text-foreground mb-6 flex items-center gap-3">
                      <Heart className="w-8 h-8 text-primary animate-gentle-float" />
                      {love.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {love.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Beautiful closing section */}
        <div className="text-center mt-16 mb-8">
          <Card className="shadow-cottage border-border/50 bg-card/95 backdrop-blur-sm">
            <CardContent className="p-12">
              <Heart className="w-16 h-16 text-primary mx-auto mb-6 animate-soft-glow" />
              <h2 className="text-2xl font-serif text-foreground mb-4">
                "The best things in life are the people we love, the places we've been, and the memories we've made along the way."
              </h2>
              <p className="text-muted-foreground italic">
                — Marianna's philosophy on finding joy in life's simple pleasures
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MkpLoves;