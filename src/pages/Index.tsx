
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, Shield, Target, Users, Heart, Zap, Clock, Lock, ArrowDown } from 'lucide-react';

const Index = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleWaitlistSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "You're on the waitlist!",
        description: "We'll notify you when ScreenFine launches!",
      });
      setEmail('');
    }
  };

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist-section');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="opacity-0 animate-fade-in">
            <Badge className="mb-8 bg-white/10 text-white border-white/20 text-lg px-6 py-2">
              Revolutionary Screen Time Control
            </Badge>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black mb-8 opacity-0 animate-fade-in [animation-delay:200ms] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            ScreenFine
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 opacity-0 animate-fade-in [animation-delay:400ms] leading-relaxed">
            The first screen time app that charges you <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold">real money</span> when you break your limits
          </p>
          
          <div className="opacity-0 animate-fade-in [animation-delay:600ms]">
            <Button 
              onClick={scrollToWaitlist}
              size="lg" 
              className="bg-white text-black hover:bg-gray-200 text-xl px-12 py-6 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Join Waitlist
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-10 opacity-0 animate-fade-in [animation-delay:800ms]">
          <ArrowDown className="w-8 h-8 text-gray-400 animate-bounce" />
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-16 opacity-0 animate-fade-in">
            Traditional apps don't work
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <div className="opacity-0 animate-fade-in [animation-delay:200ms]">
              <div className="text-6xl mb-6">⚠️</div>
              <h3 className="text-2xl font-bold mb-4">Easy to Dismiss</h3>
              <p className="text-gray-400 text-lg">Just tap "Ignore Limit" and continue scrolling</p>
            </div>
            
            <div className="opacity-0 animate-fade-in [animation-delay:400ms]">
              <div className="text-6xl mb-6">🔄</div>
              <h3 className="text-2xl font-bold mb-4">No Consequences</h3>
              <p className="text-gray-400 text-lg">Breaking limits has zero real impact</p>
            </div>
            
            <div className="opacity-0 animate-fade-in [animation-delay:600ms]">
              <div className="text-6xl mb-6">🗑️</div>
              <h3 className="text-2xl font-bold mb-4">Easy to Delete</h3>
              <p className="text-gray-400 text-lg">Just remove their apps when it becomes inconvenient</p>
            </div>
          </div>
          
          <p className="text-3xl text-white font-semibold opacity-0 animate-fade-in [animation-delay:800ms]">
            Until now.
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 opacity-0 animate-fade-in">
            We hit where it hurts:
          </h2>
          <h3 className="text-6xl md:text-8xl font-black text-green-400 mb-16 opacity-0 animate-fade-in [animation-delay:200ms]">
            Your wallet
          </h3>
          
          <p className="text-2xl text-gray-300 mb-20 max-w-4xl mx-auto opacity-0 animate-fade-in [animation-delay:400ms]">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold">Real financial consequences</span> create real behavioral change. 
            When breaking your limit costs £0.99, you'll think twice about that TikTok binge.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 opacity-0 animate-fade-in">
            How ScreenFine Works
          </h2>
          
          <div className="space-y-32">
            {/* Financial Accountability */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="opacity-0 animate-fade-in">
                <Target className="w-16 h-16 text-red-400 mb-8" />
                <h3 className="text-4xl font-bold mb-6">Financial Accountability</h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  £0.99 charge when you break your limits. Real money, real consequences, real change.
                  No more empty warnings you can dismiss.
                </p>
              </div>
              <div className="opacity-0 animate-fade-in [animation-delay:200ms]">
                <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 p-8 rounded-3xl border border-red-500/30">
                  <div className="text-center">
                    <div className="text-5xl font-black text-red-400 mb-4">£0.99</div>
                    <div className="text-xl text-gray-300">Per limit break</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Charity & Rewards */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 opacity-0 animate-fade-in">
                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 p-8 rounded-3xl border border-green-500/30">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-lg">To Charity</span>
                      <span className="text-2xl font-bold text-green-400">20%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg">To Reward Pool</span>
                      <span className="text-2xl font-bold text-blue-400">20%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg">App Development & Other Fees</span>
                      <span className="text-2xl font-bold text-gray-400">60%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 opacity-0 animate-fade-in [animation-delay:200ms]">
                <Heart className="w-16 h-16 text-green-400 mb-8" />
                <h3 className="text-4xl font-bold mb-6">Your Money Makes Impact</h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  20% goes to your chosen charity. 20% goes to rewards for users maintaining streaks.
                  Turn your struggles into social good and community rewards.
                </p>
              </div>
            </div>

            {/* Emergency Access */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="opacity-0 animate-fade-in">
                <Clock className="w-16 h-16 text-yellow-400 mb-8" />
                <h3 className="text-4xl font-bold mb-6">Emergency Access</h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Need Maps for navigation? Get 1 extra minute per app. 
                  True emergency? Claim 15 minutes once daily. We're strict, not cruel.
                </p>
              </div>
              <div className="opacity-0 animate-fade-in [animation-delay:200ms]">
                <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 p-8 rounded-3xl border border-yellow-500/30">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-400 mb-2">1 minute</div>
                      <div className="text-gray-300">Per app</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-400 mb-2">15 minutes</div>
                      <div className="text-gray-300">Daily emergency access</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Protection */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 opacity-0 animate-fade-in">
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-8 rounded-3xl border border-purple-500/30">
                  <div className="text-center space-y-4">
                    <Shield className="w-12 h-12 text-purple-400 mx-auto" />
                    <div className="text-2xl font-bold text-purple-400">24 Hour Protection</div>
                    <div className="text-gray-300">Against impulsive decisions</div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 opacity-0 animate-fade-in [animation-delay:200ms]">
                <Lock className="w-16 h-16 text-purple-400 mb-8" />
                <h3 className="text-4xl font-bold mb-6">Uninstall Protection</h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  24-hour app deletion protection prevents impulsive decisions. 
                  Locks on changing screen time limits prevent you from sabotaging your progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 opacity-0 animate-fade-in">
            Built for Independent Adults
          </h2>
          
          <p className="text-2xl text-gray-300 mb-16 opacity-0 animate-fade-in [animation-delay:200ms]">
            When you're an adult, no one's monitoring your screen time. 
            You need accountability that works when family can't help anymore.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-white/5 border-white/10 opacity-0 animate-fade-in [animation-delay:400ms]">
              <CardContent className="p-12">
                <Users className="w-16 h-16 text-blue-400 mx-auto mb-8" />
                <h3 className="text-2xl font-bold mb-4">Young Adults</h3>
                <p className="text-gray-300 text-lg">University students and young professionals building healthy digital habits early</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/10 opacity-0 animate-fade-in [animation-delay:600ms]">
              <CardContent className="p-12">
                <Target className="w-16 h-16 text-green-400 mx-auto mb-8" />
                <h3 className="text-2xl font-bold mb-4">Professionals</h3>
                <p className="text-gray-300 text-lg">Adults who recognize phone usage impacts productivity and well-being</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Friend Challenges */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 opacity-0 animate-fade-in">
            Challenge Your Friends
          </h2>
          
          <p className="text-2xl text-gray-300 mb-16 opacity-0 animate-fade-in [animation-delay:200ms]">
            Turn reducing screen time into a competitive game. 
            Whoever breaks their limits first pays everyone else.
          </p>
          
          <Card className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-purple-500/30 opacity-0 animate-fade-in [animation-delay:400ms]">
            <CardContent className="p-16">
              <div className="text-8xl mb-8">🏆</div>
              <h3 className="text-3xl font-bold mb-6">Group Challenges</h3>
              <p className="text-xl text-gray-300 mb-8">
                Create challenges with friends. First to break pays the others.
                Turn peer pressure into positive change.
              </p>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-lg px-6 py-2">
                Coming Soon
              </Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 opacity-0 animate-fade-in">
            What Early Users Say
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <Card className="bg-white/5 border-white/10 opacity-0 animate-fade-in [animation-delay:200ms]">
              <CardContent className="p-10">
                <p className="text-lg text-gray-300 mb-8 italic leading-relaxed">
                  "Addiction to screen time is hard to overcome, until now."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    SC
                  </div>
                  <div>
                    <p className="font-bold">Sarah Colls</p>
                    <p className="text-gray-400">Doctor</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/10 opacity-0 animate-fade-in [animation-delay:400ms]">
              <CardContent className="p-10">
                <p className="text-lg text-gray-300 mb-8 italic leading-relaxed">
                  "As someone who builds apps, I know how addictive they can be. ScreenFine's approach is genius - it hits where it hurts most."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    MJ
                  </div>
                  <div>
                    <p className="font-bold">Marcus Johnson</p>
                    <p className="text-gray-400">Software Developer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/10 opacity-0 animate-fade-in [animation-delay:600ms]">
              <CardContent className="p-10">
                <p className="text-lg text-gray-300 mb-8 italic leading-relaxed">
                  "The idea is incredible - I need something to help force me to reduce my screen time"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    Es
                  </div>
                  <div>
                    <p className="font-bold">Emma Smith</p>
                    <p className="text-gray-400">University Student</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist-section" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 opacity-0 animate-fade-in">
            Join the Waitlist
          </h2>
          
          <p className="text-2xl text-gray-300 mb-16 opacity-0 animate-fade-in [animation-delay:200ms]">
            Be among the first to experience the screen time app that actually works.
          </p>
          
          <form onSubmit={handleWaitlistSignup} className="max-w-md mx-auto opacity-0 animate-fade-in [animation-delay:400ms]">
            <div className="flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border-white/20 text-white placeholder-gray-400 h-14 text-lg rounded-full px-6"
                required
              />
              <Button 
                type="submit" 
                className="bg-white text-black hover:bg-gray-200 h-14 px-8 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                Join Waitlist
              </Button>
            </div>
          </form>
          
          <p className="text-gray-400 mt-8 opacity-0 animate-fade-in [animation-delay:600ms]">
            No spam. We'll only email you at significant ScreenFine moments.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">ScreenFine</h3>
          <p className="text-gray-400 mb-8 text-lg">
            The screen time app that charges you when you break your limits.
          </p>
          <p className="text-gray-500 mt-12">
            © 2025 ScreenFine. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
