
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, Shield, Target, Users, Heart, Zap, Clock, Lock } from 'lucide-react';

const Index = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleWaitlistSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "You're on the waitlist!",
        description: "We'll notify you when ScreenFine launches.",
      });
      setEmail('');
    }
  };

  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Financial Accountability",
      description: "£0.99 charge when you break your limits - real consequences for real change"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Charity Impact",
      description: "20% of fees go to your chosen charity - turn your struggles into social good"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Reward Pool",
      description: "20% goes to rewards for users maintaining streaks - get paid for staying focused"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Emergency Access",
      description: "1-minute extensions and 15-minute daily emergency access when you need it"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Uninstall Protection",
      description: "24-hour app deletion protection prevents impulsive decisions"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Always Allowed",
      description: "Essential apps like Maps, Phone, and Find My always accessible"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Manager",
      content: "Finally, a screen time app that actually works! The financial consequence made me think twice about mindless scrolling. I've saved hours and helped charity.",
      avatar: "SC"
    },
    {
      name: "Marcus Johnson",
      role: "Software Developer",
      content: "As someone who builds apps, I know how addictive they can be. ScreenFine's approach is genius - it hits where it hurts most, your wallet.",
      avatar: "MJ"
    },
    {
      name: "Emma Rodriguez",
      role: "University Student",
      content: "The friend challenges feature is incredible. We turned reducing screen time into a competitive game, and the loser pays everyone else!",
      avatar: "ER"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-green-900/20" />
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <Badge className="mb-6 bg-blue-600/20 text-blue-300 border-blue-600/30 animate-fade-in">
            Revolutionary Screen Time Control
          </Badge>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-white to-green-400 bg-clip-text text-transparent animate-fade-in">
            ScreenFine
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in">
            The first screen time app that charges you real money when you break your limits. 
            Turn your phone addiction into charity donations and rewards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              Join Waitlist
            </Button>
            <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg">
              See Demo
            </Button>
          </div>
        </div>
        
        {/* Floating iPhone Mockups */}
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden xl:block animate-fade-in">
          <div className="relative">
            <div className="w-72 h-[580px] bg-black rounded-[3rem] p-2 shadow-2xl border border-gray-800">
              <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden">
                <img 
                  src="/lovable-uploads/0327a512-7560-4249-b3ef-e0f53de3f83f.png" 
                  alt="ScreenFine App Blocks Interface" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute left-10 top-1/2 transform -translate-y-1/2 translate-y-20 hidden xl:block animate-fade-in">
          <div className="relative">
            <div className="w-72 h-[580px] bg-black rounded-[3rem] p-2 shadow-2xl border border-gray-800">
              <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden">
                <img 
                  src="/lovable-uploads/0580812b-3df7-4468-9cd4-3177ab5b439f.png" 
                  alt="ScreenFine App Stats Interface" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Traditional screen time apps don't work
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            You're an adult. No one's going to take your phone away. You can dismiss any notification, 
            override any limit, and delete any app. <span className="text-blue-400 font-semibold">Until now.</span>
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-8 text-center">
                <div className="text-red-400 text-4xl mb-4">⚠️</div>
                <h3 className="text-xl font-semibold text-white mb-3">Easy to Dismiss</h3>
                <p className="text-gray-400">Just tap "Ignore Limit" and continue scrolling endlessly</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-8 text-center">
                <div className="text-red-400 text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-semibold text-white mb-3">No Consequences</h3>
                <p className="text-gray-400">Breaking limits has zero impact on your life</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-8 text-center">
                <div className="text-red-400 text-4xl mb-4">🗑️</div>
                <h3 className="text-xl font-semibold text-white mb-3">Easy to Delete</h3>
                <p className="text-gray-400">Remove the app whenever it becomes inconvenient</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/10 to-green-900/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              ScreenFine hits where it hurts: <span className="text-green-400">Your wallet</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Real financial consequences create real behavioral change. When breaking your limit costs £0.99, 
              you'll think twice about that TikTok binge.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className="text-blue-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            How ScreenFine Works
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Set Your Limits</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Choose daily time limits for each app</p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Essential apps stay in "Always Allowed" category</p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">24-hour protection prevents impulsive limit changes</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-[520px] bg-black rounded-[2.5rem] p-2 shadow-2xl border border-gray-700">
                <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden">
                  <img 
                    src="/lovable-uploads/0327a512-7560-4249-b3ef-e0f53de3f83f.png" 
                    alt="ScreenFine Blocks Interface" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <div className="w-64 h-[520px] bg-black rounded-[2.5rem] p-2 shadow-2xl border border-gray-700">
                <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden">
                  <img 
                    src="/lovable-uploads/0580812b-3df7-4468-9cd4-3177ab5b439f.png" 
                    alt="ScreenFine Stats Interface" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold text-white mb-6">Pay When You Break</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">£0.99 charge unlocks all apps for the rest of the day</p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">20% goes to your chosen charity</p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">20% goes to reward pool for streak maintainers</p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Emergency access: 1min per app + 15min daily emergency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-900/10 to-blue-900/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Built for Independent Adults
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            When you're an adult, no one's going to monitor your screen time or take your phone away. 
            You need accountability that works when family can't help anymore.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Young Adults</h3>
                <p className="text-gray-400">University students and young professionals who need to build healthy digital habits independently</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Professionals</h3>
                <p className="text-gray-400">Adults who recognize their phone usage impacts their productivity and well-being</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Friend Challenges Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Challenge Your Friends
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Turn reducing screen time into a competitive game. Create challenges with friends, 
            and whoever breaks their limits first pays everyone else. Social accountability meets financial consequences.
          </p>
          
          <Card className="bg-gradient-to-r from-blue-900/20 to-green-900/20 border-gray-700 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-2xl font-semibold text-white mb-4">Group Challenges</h3>
              <p className="text-gray-300 mb-6">
                Create weekly or monthly challenges with friends. The first person to break their limits 
                pays £0.99 to each participant. Turn peer pressure into positive change.
              </p>
              <Badge className="bg-green-600/20 text-green-300 border-green-600/30">
                Coming Soon
              </Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/20 to-gray-800/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            What Early Users Say
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700">
                <CardContent className="p-8">
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Join the Waitlist
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Be among the first to experience the screen time app that actually works. 
            Get early access and special launch pricing.
          </p>
          
          <form onSubmit={handleWaitlistSignup} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-gray-900 border-gray-700 text-white placeholder-gray-400"
                required
              />
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                Join Waitlist
              </Button>
            </div>
          </form>
          
          <p className="text-gray-400 text-sm mt-4">
            No spam. We'll only email you when ScreenFine launches.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">ScreenFine</h3>
          <p className="text-gray-400 mb-6">
            The screen time app that charges you when you break your limits.
          </p>
          <div className="flex justify-center gap-8 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-gray-500 text-sm mt-8">
            © 2024 ScreenFine. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
