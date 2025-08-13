import { ArrowLeft, Gem, Scissors, Package, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const MkpDesigns = () => {
  const navigate = useNavigate();

  // Import all design images
  const designImages = [
    '/src/assets/designs/1CCCBE65-FEBD-4FC5-B362-D6A23A8709C2.jpeg',
    '/src/assets/designs/IMG_5211.jpeg',
    '/src/assets/designs/IMG_5217.jpeg',
    '/src/assets/designs/IMG_5219.jpeg',
    '/src/assets/designs/IMG_5222.jpeg',
    '/src/assets/designs/IMG_5223.jpeg',
    '/src/assets/designs/IMG_5231.jpeg',
    '/src/assets/designs/IMG_5239.jpeg',
    '/src/assets/designs/IMG_5241.jpeg',
    '/src/assets/designs/IMG_5245.jpeg',
    '/src/assets/designs/IMG_5252.jpeg',
    '/src/assets/designs/IMG_5255.jpeg',
    '/src/assets/designs/IMG_5259.jpeg',
    '/src/assets/designs/IMG_5262.JPG',
    '/src/assets/designs/IMG_5266.jpeg',
    '/src/assets/designs/IMG_5267.jpeg',
    '/src/assets/designs/IMG_5272.jpeg',
    '/src/assets/designs/IMG_6041.jpeg',
    '/src/assets/designs/IMG_6042.jpeg',
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
                opts={{
                  align: "start",
                  loop: true,
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
                <CarouselPrevious className="-left-8 md:-left-12" />
                <CarouselNext className="-right-8 md:-right-12" />
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