import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Target, 
  Users, 
  Award, 
  BookOpen,
  Mail,
  MessageCircle,
  HelpCircle,
  Phone,
  MapPin,
  Heart,
  Lightbulb,
  Rocket,
  Shield
} from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Skill Mapping",
      description: "Comprehensive skill tracking and proficiency assessment to visualize your professional development journey."
    },
    {
      icon: BookOpen,
      title: "Career Guidance",
      description: "AI-powered career recommendations based on your unique skill profile and industry trends."
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Connect with industry professionals for personalized guidance and career advice."
    },
    {
      icon: Award,
      title: "Achievement System",
      description: "Gamified learning experience with badges, certificates, and milestone tracking."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Student-Centered",
      description: "Everything we build is designed with students' success and growth in mind."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly evolve our platform using the latest technology and educational insights."
    },
    {
      icon: Shield,
      title: "Trust & Privacy",
      description: "Your data is secure and we're transparent about how we help you achieve your goals."
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Founder & CEO",
      background: "Former educator with 15+ years in career development",
      image: "👩‍🎓"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      background: "Tech veteran specializing in AI and educational platforms",
      image: "👨‍💻"
    },
    {
      name: "Emma Thompson",
      role: "Head of Career Services",
      background: "Career counselor with expertise in industry trends",
      image: "👩‍💼"
    }
  ];

  const stats = [
    { number: "50K+", label: "Students Guided" },
    { number: "1000+", label: "Career Paths" },
    { number: "500+", label: "Partner Companies" },
    { number: "95%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About SkillMap
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Empowering students to discover their potential, map their skills, 
              and navigate their career journey with confidence and clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We believe every student has unique talents and potential. Our mission is to help 
                students discover, develop, and leverage their skills to create meaningful career paths 
                that align with their passions and market opportunities.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Through innovative technology, personalized guidance, and comprehensive resources, 
                we're transforming how students approach career planning and professional development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="default" size="lg">
                  Start Your Journey
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-card rounded-2xl flex items-center justify-center shadow-strong">
                <Rocket className="w-24 h-24 text-primary animate-float" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-accent rounded-full blur-2xl opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Makes Us <span className="gradient-text">Different</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive platform combines cutting-edge technology with proven 
              career development methodologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-interactive shadow-soft border-0">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at SkillMap.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-soft border-0">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate professionals dedicated to your career success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center shadow-soft border-0">
                <CardContent className="p-8">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.background}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Help Section */}
      <section className="py-20 bg-gradient-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Help or Have Questions?
            </h2>
            <p className="text-xl opacity-90">
              We're here to support you on your career journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <HelpCircle className="w-5 h-5" />
                  <span>Frequently Asked Questions</span>
                </CardTitle>
                <CardDescription className="text-white/80">
                  Find answers to common questions about using SkillMap
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  View FAQ
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>Contact Support</span>
                </CardTitle>
                <CardDescription className="text-white/80">
                  Get personalized help from our support team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12 space-y-4">
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>support@skillmap.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>1-800-SKILLMAP</span>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <MapPin className="w-4 h-4" />
              <span>San Francisco, CA • Remote-First Company</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;