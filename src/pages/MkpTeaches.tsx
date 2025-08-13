import { ArrowLeft, BookOpen, Star, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const MkpTeaches = () => {
  const navigate = useNavigate();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openRecommendations, setOpenRecommendations] = useState<string[]>([]);

  const courses = [
    { name: 'British Literature', description: 'Exploring the rich tradition of British literary works' },
    { name: 'Journalism and Writing', description: 'Techniques for effective reporting and storytelling' },
    { name: 'The International Short Short Story', description: 'Global perspectives through short fiction' },
    { name: 'Writing for Stage and Screen', description: 'Crafting compelling dramatic narratives' },
    { name: 'Linguistics', description: 'The science and art of language' },
    { name: 'English as a Second Language', description: 'Helping students master English communication' }
  ];

  const testimonials = [
    {
      text: "Marianna's passion for literature was infectious. Her classes opened my eyes to the beauty of language.",
      author: "Sarah M., Former Student"
    },
    {
      text: "The way she explained Shakespeare made the works come alive. I still use her teaching methods today.",
      author: "Michael R., Teacher"
    },
    {
      text: "Her linguistics course was transformative. Marianna has a gift for making complex concepts accessible.",
      author: "Dr. Jennifer L., Professor"
    },
    {
      text: "As an ESL student, I was nervous about English literature. Marianna's patience and encouragement changed everything.",
      author: "Elena K., Graduate"
    },
    {
      text: "Her short story course taught me to see the world differently. Every story became a window to new understanding.",
      author: "David P., Writer"
    }
  ];

  const recommendations = {
    'Books': [
      'Pride and Prejudice by Jane Austen',
      'Jane Eyre by Charlotte Brontë',
      'Much Ado About Nothing by William Shakespeare',
    ],
    'Movies': [
      'She\'s The Man (2006)',
      'Shakespeare in Love (1998)',
    ],
    'Textbooks': [
      'The Norton Anthology of English Literature',
    ],
    'Short Stories': [
      'The Lottery by Shirley Jackson',
      'The Raven by Edgar Allan Poe',
      'The Necklace by Guy de Maupassant',
      'The Red Chief by O. Henry',
    ],
    'Authors': [
      'Jane Austen',
      'Shakespeare',
      'Edgar Allan Poe',
    ]
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const toggleRecommendation = (category: string) => {
    setOpenRecommendations(prev => 
      prev.includes(category) 
        ? prev.filter(cat => cat !== category)
        : [...prev, category]
    );
  };

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
          <h1 className="text-5xl font-serif text-foreground mb-4">Teaching</h1>
          <p className="text-xl text-muted-foreground italic">
            Inspiring minds through literature and language
          </p>
        </div>

        {/* Courses Section */}
        <section className="mb-16">
          <Card className="shadow-cottage border-border/50 bg-card/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <BookOpen className="w-6 h-6 text-primary" />
                Courses Taught
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.map((course, index) => (
                  <div 
                    key={index}
                    className="bg-secondary/30 rounded-xl p-6 hover:bg-secondary/50 transition-all duration-300 hover:shadow-glow border border-border/30"
                  >
                    <h3 className="font-semibold text-secondary-foreground mb-2 text-lg">{course.name}</h3>
                    <p className="text-sm text-secondary-foreground/80">{course.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Student Testimonials
        <section className="mb-16">
          <Card className="shadow-cottage border-border/50 bg-card/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Star className="w-6 h-6 text-primary-glow" />
                Student Testimonials
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div className="bg-accent/40 rounded-xl p-8 min-h-[200px] flex items-center justify-center">
                  <div className="text-center max-w-2xl">
                    <blockquote className="text-lg text-accent-foreground mb-4 italic">
                      "{testimonials[currentTestimonial].text}"
                    </blockquote>
                    <cite className="text-accent-foreground/80 font-medium">
                      — {testimonials[currentTestimonial].author}
                    </cite>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={prevTestimonial}
                    className="hover:bg-primary/20"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <div 
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                        }`}
                      />
                    ))}
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={nextTestimonial}
                    className="hover:bg-primary/20"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        */}

        {/* MKP Recommends */}
        <section className="mb-16">
          <Card className="shadow-cottage border-border/50 bg-card/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl">MKP Recommends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(recommendations).map(([category, items]) => (
                  <Collapsible
                    key={category}
                    open={openRecommendations.includes(category)}
                    onOpenChange={() => toggleRecommendation(category)}
                  >
                    <CollapsibleTrigger className="w-full">
                      <div className="flex items-center justify-between p-4 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors">
                        <h3 className="font-semibold text-primary text-lg">{category}</h3>
                        <ChevronDown className={`w-5 h-5 text-primary transition-transform ${
                          openRecommendations.includes(category) ? 'rotate-180' : ''
                        }`} />
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                        <ul className="space-y-2">
                          {items.map((item, index) => (
                            <li key={index} className="text-muted-foreground hover:text-foreground transition-colors">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default MkpTeaches;