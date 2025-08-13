import { ArrowLeft, Gem, Scissors, Package, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';

// Import all design images
import design1 from '@/assets/designs/1CCCBE65-FEBD-4FC5-B362-D6A23A8709C2.webp';
import design2 from '@/assets/designs/IMG_5211.webp';
import design3 from '@/assets/designs/IMG_5217.webp';
import design4 from '@/assets/designs/IMG_5219.webp';
import design5 from '@/assets/designs/IMG_5222.webp';
import design6 from '@/assets/designs/IMG_5223.webp';
import design7 from '@/assets/designs/IMG_5231.webp';
import design8 from '@/assets/designs/IMG_5239.webp';
import design9 from '@/assets/designs/IMG_5241.webp';
import design10 from '@/assets/designs/IMG_5245.webp';
import design11 from '@/assets/designs/IMG_5252.webp';
import design12 from '@/assets/designs/IMG_5255.webp';
import design13 from '@/assets/designs/IMG_5259.webp';
import design14 from '@/assets/designs/IMG_5262.webp';
import design15 from '@/assets/designs/IMG_5266.webp';
import design16 from '@/assets/designs/IMG_5267.webp';
import design17 from '@/assets/designs/IMG_5272.webp';
import design18 from '@/assets/designs/IMG_6041.webp';
import design19 from '@/assets/designs/IMG_6042.webp';

const MkpDesigns = () => {
  const navigate = useNavigate();
  const [api, setApi] = useState<CarouselApi>();
  const intervalRef = useRef<NodeJS.Timeout>();

  // Auto-scroll functionality
  useEffect(() => {
    if (!api) return;

    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        api.scrollNext();
      }, 4000); // Slower interval for smoother perception
    };

    const stopAutoScroll = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };

    startAutoScroll();

    return () => stopAutoScroll();
  }, [api]);

  // Import all design images
  const designImages = [
    design1,
    design2,
    design3,
    design4,
    design5,
    design6,
    design7,
    design8,
    design9,
    design10,
    design11,
    design12,
    design13,
    design14,
    design15,
    design16,
    design17,
    design18,
    design19,
  ];

  const sewingSkills = [
    'Hemming & Alterations',
    'Custom Tailoring',
    'Button Replacement',
    'Zipper Repair',
    'Dress Alterations',
    'Pant Hemming',
    'Sleeve Adjustments',
    'Waist Taking In/Out'
  ];

  const craftKits = [
    { name: 'Wrapping Paper Making', description: 'Create beautiful custom gift wrap' },
    { name: 'Beading for Kids', description: 'Fun jewelry projects' },
    { name: 'Fun with Stencils', description: 'Decorative art using stencil techniques' },
    { name: 'Zentangle Basics', description: 'Meditative drawing patterns' },
    { name: 'Freeze Dance', description: 'Fun movement and dance activities' },
    { name: 'Card Making', description: 'Handmade greeting cards for any occasion' }
  ];

  return (
    <div className="min-h-screen bg-garden-gradient p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-foreground hover:text-primary transition-colors mb-8 animate-fade-in-up"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Cottage
        </button>

        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-5xl font-serif text-foreground mb-4">Designs</h1>
          <p className="text-xl text-muted-foreground italic">
            A collection of handcrafted beauty and artistic expression
          </p>
        </div>

        {/* Jewelry & Beading Gallery */}
        <section className="mb-16">
          <Card className="shadow-cottage border-border/50 bg-card/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Gem className="w-6 h-6 text-primary" />
                MKP Designs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Carousel
                setApi={setApi}
                opts={{
                  align: "start",
                  loop: true,
                  duration: 25, // Smoother transition duration
                  dragFree: true, // Enable free drag for smoother interaction
                }}
                className="w-full max-w-5xl mx-auto"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {designImages.map((image, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                      <div className="aspect-square rounded-lg overflow-hidden shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105">
                        <img 
                          src={image} 
                          alt={`MKP Design ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </CardContent>
          </Card>
        </section>

        {/* Sewing Skills */}
        <section className="mb-16">
          <Card className="shadow-cottage border-border/50 bg-card/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Scissors className="w-6 h-6 text-secondary-dark" />
                Hand-Sewn Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {sewingSkills.map((skill, index) => (
                  <div 
                    key={index}
                    className="bg-secondary/30 rounded-lg p-4 text-center hover:bg-secondary/50 transition-colors duration-300 border border-border/30"
                  >
                    <p className="font-medium text-secondary-foreground">{skill}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Craft Kits */}
        <section className="mb-16">
          <Card className="shadow-cottage border-border/50 bg-card/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Package className="w-6 h-6 text-accent-foreground" />
                Art with Kids
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {craftKits.map((kit, index) => (
                  <div 
                    key={index}
                    className="bg-accent/40 rounded-xl p-6 hover:bg-accent/60 transition-all duration-300 hover:shadow-glow border border-border/30"
                  >
                    <h3 className="font-semibold text-accent-foreground mb-2">{kit.name}</h3>
                    <p className="text-sm text-accent-foreground/80">{kit.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default MkpDesigns;