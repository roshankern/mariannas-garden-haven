import { ArrowLeft, Mail, Linkedin, Palette, BookOpen, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import aboutImage from '@/assets/about/IMG_9421_Original.webp';

const About = () => {
  const navigate = useNavigate();

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
          <h1 className="text-5xl font-serif text-foreground mb-4">About Marianna</h1>
          <p className="text-xl text-muted-foreground italic">
            Artist, educator, and lover of all things beautiful
          </p>
        </div>

        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Profile Image */}
          <div className="animate-fade-in-up">
            <div className="shadow-cottage overflow-hidden rounded-lg">
              <div className="aspect-[3/4] relative">
                <img 
                  src={aboutImage}
                  alt="Marianna Krejci-Papa" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Card className="shadow-cottage border-border/50 bg-card/95 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-3xl font-serif text-foreground mb-6 text-center">Who I Am</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Welcome to my world! I'm Marianna Krejci-Papa, a passionate educator, artist, and lifelong learner who believes that beauty can be found in every corner of life. With decades of experience in teaching literature and language, I've had the privilege of inspiring countless students to discover the magic of words and stories.
                  </p>
                  <p>
                    My journey began in the classroom, where I taught everything from Shakespeare's timeless plays to the intricacies of linguistics. But my love for creation extends far beyond the written word. I find immense joy in crafting jewelry, designing beading patterns, and bringing beauty to life through various artistic mediums.
                  </p>
                  <p>
                    When I'm not teaching or creating, you'll find me curled up in my favorite reading chair with a cup of tea and a good book, surrounded by my beloved cats and the warmth of family. I believe that the simple pleasures in life - a perfectly brewed cup of tea, the purr of a contented cat, the laughter of loved ones - are what make existence truly rich.
                  </p>
                  <p>
                    Through this website, I hope to share my passions with you and perhaps inspire you to find your own creative spark. Whether you're here to learn, to admire handcrafted beauty, or simply to connect with someone who values the artistry of everyday life, I'm delighted you've found your way to my cottage.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Section */}
        <section className="mb-8">
          <Card className="shadow-cottage border-border/50 bg-card/95 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-3xl font-serif text-foreground mb-6 text-center">Let's Connect</h2>
              <p className="text-center text-muted-foreground mb-6">
                I'd love to hear from you! Whether you have questions about my work, want to collaborate, 
                or simply wish to share your own creative journey, don't hesitate to reach out.
              </p>
              <div className="flex justify-center gap-6">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="flex items-center gap-3 hover:bg-primary/20 border-primary/30"
                  onClick={() => window.location.href = 'mailto:mkp@mariannakrejcipapa.com'}
                >
                  <Mail className="w-5 h-5" />
                  Email Me
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="flex items-center gap-3 hover:bg-primary/20 border-primary/30"
                  onClick={() => window.open('https://linkedin.com/in/marianna-krejci-papa', '_blank')}
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;