import { ArrowLeft, Palette, Scissors, Package, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MkpDesigns = () => {
  const navigate = useNavigate();

  const jewelryImages = [
    'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400',
    'https://images.unsplash.com/photo-1506629905962-b4ba886fe9d8?w=400',
    'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400',
    'https://images.unsplash.com/photo-1506629905962-b4ba886fe9d8?w=400'
  ];

  const coloringImages = [
    'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400',
    'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400',
    'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400'
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
    { name: 'Beading for Kids', description: 'Fun jewelry projects for children' },
    { name: 'Fun with Stencils', description: 'Decorative art using stencil techniques' },
    { name: 'Zentangle Basics', description: 'Meditative drawing patterns' },
    { name: 'Embroidery Starter', description: 'Basic embroidery stitches and projects' },
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
          <h1 className="text-5xl font-serif text-foreground mb-4">MKP Designs</h1>
          <p className="text-xl text-muted-foreground italic">
            A collection of handcrafted beauty and artistic expression
          </p>
        </div>

        {/* Jewelry & Beading Gallery */}
        <section className="mb-16">
          <Card className="shadow-cottage border-border/50 bg-card/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Palette className="w-6 h-6 text-primary" />
                Jewelry & Beading Designs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {jewelryImages.map((image, index) => (
                  <div 
                    key={index} 
                    className="aspect-square rounded-lg overflow-hidden shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105"
                  >
                    <img 
                      src={image} 
                      alt={`Jewelry piece ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
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
                Available Craft Kits
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

        {/* Adult Coloring Books */}
        <section className="mb-16">
          <Card className="shadow-cottage border-border/50 bg-card/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <BookOpen className="w-6 h-6 text-primary" />
                Adult Coloring Books
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {coloringImages.map((image, index) => (
                  <div 
                    key={index} 
                    className="aspect-[3/4] rounded-lg overflow-hidden shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105"
                  >
                    <img 
                      src={image} 
                      alt={`Coloring book ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
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