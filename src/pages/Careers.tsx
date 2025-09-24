import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Search, 
  Filter, 
  Code, 
  Palette, 
  Users, 
  Briefcase,
  TrendingUp,
  Clock,
  DollarSign,
  MapPin,
  Star,
  ArrowRight,
  Zap,
  Target
} from "lucide-react";

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCareer, setSelectedCareer] = useState(null);

  const careers = [
    {
      id: 1,
      title: "Frontend Developer",
      category: "Technology",
      match: 95,
      salary: "$70K - $120K",
      growth: "High",
      experience: "1-3 years",
      location: "Remote/Hybrid",
      description: "Create engaging user interfaces and experiences using modern web technologies.",
      skills: ["JavaScript", "React", "CSS", "HTML", "TypeScript"],
      companies: ["Google", "Facebook", "Netflix", "Airbnb"],
      icon: "💻",
      color: "primary"
    },
    {
      id: 2,
      title: "Full Stack Developer",
      category: "Technology",
      match: 87,
      salary: "$80K - $140K",
      growth: "Very High",
      experience: "2-5 years",
      location: "Remote/On-site",
      description: "Build complete web applications from frontend to backend infrastructure.",
      skills: ["JavaScript", "React", "Node.js", "Database", "DevOps"],
      companies: ["Microsoft", "Amazon", "Spotify", "Stripe"],
      icon: "🚀",
      color: "secondary"
    },
    {
      id: 3,
      title: "UI/UX Designer",
      category: "Design",
      match: 72,
      salary: "$60K - $100K",
      growth: "High",
      experience: "1-4 years",
      location: "Remote/Hybrid",
      description: "Design intuitive and beautiful user experiences for digital products.",
      skills: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping"],
      companies: ["Apple", "Adobe", "Figma", "Slack"],
      icon: "🎨",
      color: "tertiary"
    },
    {
      id: 4,
      title: "Product Manager",
      category: "Business",
      match: 68,
      salary: "$90K - $160K",
      growth: "High",
      experience: "3-7 years",
      location: "Hybrid/On-site",
      description: "Lead product strategy and development from conception to launch.",
      skills: ["Strategy", "Analytics", "Communication", "Leadership"],
      companies: ["Google", "Facebook", "Uber", "Salesforce"],
      icon: "📊",
      color: "quaternary"
    },
    {
      id: 5,
      title: "Data Scientist",
      category: "Technology",
      match: 65,
      salary: "$85K - $130K",
      growth: "Very High",
      experience: "2-5 years",
      location: "Remote/Hybrid",
      description: "Analyze complex data to drive business insights and machine learning solutions.",
      skills: ["Python", "SQL", "Machine Learning", "Statistics"],
      companies: ["Netflix", "Spotify", "LinkedIn", "Tesla"],
      icon: "📈",
      color: "primary"
    },
    {
      id: 6,
      title: "Marketing Manager",
      category: "Business",
      match: 58,
      salary: "$65K - $110K",
      growth: "Medium",
      experience: "2-6 years",
      location: "Hybrid/On-site",
      description: "Develop and execute marketing strategies to drive brand awareness and growth.",
      skills: ["Digital Marketing", "Analytics", "Content Creation", "Strategy"],
      companies: ["HubSpot", "Shopify", "Buffer", "Canva"],
      icon: "📢",
      color: "secondary"
    },
  ];

  const categories = [
    { value: "all", label: "All Fields" },
    { value: "Technology", label: "Technology" },
    { value: "Design", label: "Design" },
    { value: "Business", label: "Business" },
    { value: "Healthcare", label: "Healthcare" },
  ];

  const filteredCareers = careers.filter(career => {
    const matchesSearch = career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         career.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || career.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getMatchColor = (match: number) => {
    if (match >= 80) return "text-success";
    if (match >= 60) return "text-secondary";
    if (match >= 40) return "text-warning";
    return "text-destructive";
  };

  const getGrowthBadge = (growth: string) => {
    const variants = {
      "Very High": "default",
      "High": "secondary", 
      "Medium": "outline",
      "Low": "destructive"
    };
    return variants[growth] || "outline";
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Career Path Explorer
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover career opportunities perfectly matched to your skill profile. 
            Explore paths, growth potential, and requirements for your dream role.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="shadow-soft border-0 text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-primary mb-1">{careers.length}</div>
              <div className="text-xs text-muted-foreground">Career Paths</div>
            </CardContent>
          </Card>
          <Card className="shadow-soft border-0 text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-secondary mb-1">
                {careers.filter(c => c.match >= 80).length}
              </div>
              <div className="text-xs text-muted-foreground">High Matches</div>
            </CardContent>
          </Card>
          <Card className="shadow-soft border-0 text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-tertiary mb-1">
                {careers.filter(c => c.growth === "Very High" || c.growth === "High").length}
              </div>
              <div className="text-xs text-muted-foreground">High Growth</div>
            </CardContent>
          </Card>
          <Card className="shadow-soft border-0 text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-quaternary mb-1">
                {careers.filter(c => c.location.includes("Remote")).length}
              </div>
              <div className="text-xs text-muted-foreground">Remote Options</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="shadow-soft border-0 mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search careers or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category.value}
                      variant={selectedCategory === category.value ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category.value)}
                    >
                      {category.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Career Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredCareers.map((career) => (
            <Card key={career.id} className="card-interactive shadow-soft border-0 group">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{career.icon}</span>
                    <div>
                      <CardTitle className="text-lg group-hover:gradient-text transition-all">
                        {career.title}
                      </CardTitle>
                      <CardDescription>{career.category}</CardDescription>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-lg font-bold ${getMatchColor(career.match)}`}>
                      {career.match}%
                    </div>
                    <div className="text-xs text-muted-foreground">match</div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {career.description}
                </p>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-success" />
                    <span className="text-xs">{career.salary}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-secondary" />
                    <Badge variant={getGrowthBadge(career.growth) as any} className="text-xs px-2 py-0">
                      {career.growth}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs">{career.experience}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs">{career.location}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-medium text-muted-foreground">Key Skills:</div>
                  <div className="flex flex-wrap gap-1">
                    {career.skills.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs px-2 py-0">
                        {skill}
                      </Badge>
                    ))}
                    {career.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs px-2 py-0">
                        +{career.skills.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full group-hover:variant-default transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-4xl">{career.icon}</span>
                        <div>
                          <DialogTitle className="text-2xl">{career.title}</DialogTitle>
                          <p className="text-muted-foreground">{career.category}</p>
                        </div>
                      </div>
                    </DialogHeader>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold mb-2">Description</h3>
                        <p className="text-sm text-muted-foreground">{career.description}</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                            <span className="text-sm font-medium">Skill Match</span>
                            <span className={`font-bold ${getMatchColor(career.match)}`}>
                              {career.match}%
                            </span>
                          </div>
                          <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                            <span className="text-sm font-medium">Salary Range</span>
                            <span className="font-bold text-success">{career.salary}</span>
                          </div>
                          <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                            <span className="text-sm font-medium">Growth</span>
                            <Badge variant={getGrowthBadge(career.growth) as any}>
                              {career.growth}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                            <span className="text-sm font-medium">Experience</span>
                            <span className="font-medium">{career.experience}</span>
                          </div>
                          <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                            <span className="text-sm font-medium">Work Style</span>
                            <span className="font-medium">{career.location}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3">Required Skills</h3>
                        <div className="flex flex-wrap gap-2">
                          {career.skills.map((skill, index) => (
                            <Badge key={index} variant="outline" className="px-3 py-1">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3">Top Companies</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {career.companies.map((company, index) => (
                            <div key={index} className="flex items-center space-x-2 p-2 rounded-lg bg-muted/30">
                              <div className="w-6 h-6 bg-gradient-hero rounded-full flex items-center justify-center">
                                <span className="text-xs text-white font-bold">
                                  {company.charAt(0)}
                                </span>
                              </div>
                              <span className="text-sm font-medium">{company}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3 pt-4">
                        <Button variant="default" className="flex-1">
                          <Target className="w-4 h-4 mr-2" />
                          Set as Goal
                        </Button>
                        <Button variant="secondary" className="flex-1">
                          <Zap className="w-4 h-4 mr-2" />
                          Find Learning Path
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCareers.length === 0 && (
          <Card className="shadow-soft border-0 text-center py-12">
            <CardContent>
              <div className="text-muted-foreground mb-4">
                <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg">No careers found</p>
                <p className="text-sm">Try adjusting your search or filters</p>
              </div>
              <Button variant="outline" onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}>
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Careers;