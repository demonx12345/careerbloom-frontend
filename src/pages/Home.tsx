import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Target, 
  BookOpen, 
  TrendingUp, 
  Users, 
  Award, 
  Rocket,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import dashboardPreview from "@/assets/dashboard-preview.jpg";
import careerPaths from "@/assets/career-paths.jpg";

const Home = () => {
  const features = [
    {
      icon: Target,
      title: "Skill Mapping",
      description: "Track and visualize your skills with our comprehensive mapping system."
    },
    {
      icon: BookOpen,
      title: "Career Guidance",
      description: "Get personalized career recommendations based on your skill profile."
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Monitor your learning journey and celebrate your achievements."
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Connect with industry experts for guidance and career advice."
    }
  ];

  const benefits = [
    "Personalized career path recommendations",
    "Skill gap analysis and improvement suggestions",
    "Access to curated learning resources",
    "Industry insights and market trends",
    "Progress tracking and goal setting",
    "Professional networking opportunities"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              Your Skills,
              <span className="block gradient-text bg-gradient-to-r from-white to-secondary-light bg-clip-text text-transparent">
                Your Future
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in">
              Discover your potential with SkillMap - the comprehensive platform that maps your abilities,
              guides your career, and unlocks opportunities tailored just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
              <Button variant="hero" size="hero" asChild>
                <Link to="/register">
                  Get Started Free
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/careers">Explore Careers</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Everything You Need to Excel
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive platform provides all the tools and guidance you need to map your skills and advance your career.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-interactive border-0 shadow-soft hover:shadow-medium">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Track Your Progress with
                <span className="gradient-text"> Smart Analytics</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our intuitive dashboard gives you a comprehensive view of your skill development,
                career progress, and personalized recommendations.
              </p>
              <ul className="space-y-4 mb-8">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button variant="default" size="lg" asChild>
                <Link to="/dashboard">View Dashboard</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={dashboardPreview} 
                alt="Dashboard Preview" 
                className="rounded-2xl shadow-strong hover:shadow-medium transition-smooth hover:scale-105"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-hero rounded-full blur-2xl opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img 
                src={careerPaths} 
                alt="Career Paths" 
                className="rounded-2xl shadow-strong hover:shadow-medium transition-smooth hover:scale-105"
              />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-accent rounded-full blur-2xl opacity-40"></div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Discover Your Perfect
                <span className="gradient-text"> Career Path</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Explore hundreds of career possibilities tailored to your unique skill set.
                Our AI-powered matching system connects your abilities with real opportunities.
              </p>
              <ul className="space-y-4 mb-8">
                {benefits.slice(3, 6).map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/careers">Explore Careers</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Rocket className="w-16 h-16 mx-auto mb-6 animate-float" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Launch Your Career?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students who have discovered their potential with SkillMap.
            Start your journey today and unlock your future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="hero" asChild>
              <Link to="/register">
                Start Your Journey
                <ArrowRight className="w-6 h-6 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;