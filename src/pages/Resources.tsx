import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Filter, 
  BookOpen, 
  Video, 
  FileText, 
  ExternalLink,
  Star,
  Clock,
  Users,
  Award,
  Play,
  Download,
  Globe
} from "lucide-react";

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const resources = [
    {
      id: 1,
      title: "Advanced React Patterns",
      type: "Course",
      category: "Technical", 
      provider: "TechEd Pro",
      duration: "4h 30m",
      level: "Advanced",
      rating: 4.8,
      students: 12543,
      price: "Free",
      description: "Master advanced React patterns including render props, compound components, and custom hooks.",
      skills: ["React", "JavaScript", "Hooks", "Patterns"],
      link: "#",
      icon: Video,
      featured: true
    },
    {
      id: 2,
      title: "JavaScript ES6+ Complete Guide",
      type: "Course",
      category: "Technical",
      provider: "CodeAcademy",
      duration: "6h 15m", 
      level: "Intermediate",
      rating: 4.9,
      students: 25789,
      price: "$49",
      description: "Comprehensive guide to modern JavaScript features and best practices.",
      skills: ["JavaScript", "ES6", "Modern Syntax", "APIs"],
      link: "#",
      icon: Video,
      featured: true
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      type: "Course",
      category: "Design",
      provider: "DesignMaster",
      duration: "8h 45m",
      level: "Beginner",
      rating: 4.7,
      students: 18432,
      price: "$29",
      description: "Learn the fundamentals of user interface and user experience design.",
      skills: ["UI Design", "UX Research", "Figma", "Prototyping"],
      link: "#",
      icon: Video,
      featured: false
    },
    {
      id: 4,
      title: "Project Management Essentials",
      type: "eBook",
      category: "Business",
      provider: "BusinessBooks",
      duration: "3h read",
      level: "Beginner",
      rating: 4.6,
      students: 8921,
      price: "Free",
      description: "Essential project management methodologies and tools for modern teams.",
      skills: ["Project Management", "Agile", "Scrum", "Leadership"],
      link: "#",
      icon: FileText,
      featured: false
    },
    {
      id: 5,
      title: "Data Science with Python",
      type: "Course",
      category: "Technical",
      provider: "DataLearn",
      duration: "12h 30m",
      level: "Intermediate",
      rating: 4.8,
      students: 31245,
      price: "$79",
      description: "Complete data science course covering pandas, numpy, matplotlib, and machine learning.",
      skills: ["Python", "Data Science", "Machine Learning", "Analytics"],
      link: "#",
      icon: Video,
      featured: true
    },
    {
      id: 6,
      title: "Digital Marketing Strategy",
      type: "Workshop",
      category: "Business",
      provider: "MarketPro",
      duration: "2h live",
      level: "Intermediate",
      rating: 4.5,
      students: 5643,
      price: "$19",
      description: "Live workshop on modern digital marketing strategies and tools.",
      skills: ["Digital Marketing", "SEO", "Social Media", "Analytics"],
      link: "#",
      icon: Users,
      featured: false
    },
    {
      id: 7,
      title: "Communication Skills Masterclass",
      type: "Course", 
      category: "Soft Skills",
      provider: "SkillBuilder",
      duration: "5h 20m",
      level: "All Levels",
      rating: 4.9,
      students: 22156,
      price: "$39",
      description: "Develop exceptional communication skills for professional success.",
      skills: ["Communication", "Public Speaking", "Leadership", "Interpersonal"],
      link: "#",
      icon: Video,
      featured: true
    },
    {
      id: 8,
      title: "Node.js Backend Development",
      type: "Course",
      category: "Technical",
      provider: "BackendMaster",
      duration: "10h 15m",
      level: "Intermediate",
      rating: 4.7,
      students: 15782,
      price: "$59",
      description: "Build scalable backend applications with Node.js, Express, and databases.",
      skills: ["Node.js", "Express", "Database", "APIs"],
      link: "#",
      icon: Video,
      featured: false
    }
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "Technical", label: "Technical" },
    { value: "Design", label: "Design" },
    { value: "Business", label: "Business" },
    { value: "Soft Skills", label: "Soft Skills" },
  ];

  const resourceTypes = [
    { value: "all", label: "All Types" },
    { value: "Course", label: "Courses" },
    { value: "eBook", label: "eBooks" },
    { value: "Workshop", label: "Workshops" },
    { value: "Article", label: "Articles" },
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredResources = resources.filter(r => r.featured);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "success";
      case "Intermediate": return "warning";
      case "Advanced": return "destructive";
      default: return "secondary";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Course": return Video;
      case "eBook": return FileText;
      case "Workshop": return Users;
      case "Article": return BookOpen;
      default: return BookOpen;
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Learning Resources
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Curated courses, tutorials, and materials to help you master new skills and advance your career.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="shadow-soft border-0 text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-primary mb-1">{resources.length}</div>
              <div className="text-xs text-muted-foreground">Total Resources</div>
            </CardContent>
          </Card>
          <Card className="shadow-soft border-0 text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-secondary mb-1">
                {resources.filter(r => r.price === "Free").length}
              </div>
              <div className="text-xs text-muted-foreground">Free Resources</div>
            </CardContent>
          </Card>
          <Card className="shadow-soft border-0 text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-tertiary mb-1">
                {resources.filter(r => r.featured).length}
              </div>
              <div className="text-xs text-muted-foreground">Featured</div>
            </CardContent>
          </Card>
          <Card className="shadow-soft border-0 text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-quaternary mb-1">4.7</div>
              <div className="text-xs text-muted-foreground">Avg Rating</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
            <TabsTrigger value="all">All Resources</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="ebooks">eBooks</TabsTrigger>
            <TabsTrigger value="workshops">Workshops</TabsTrigger>
          </TabsList>

          {/* Filters */}
          <Card className="shadow-soft border-0">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search resources, skills, or topics..."
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

          <TabsContent value="all" className="space-y-6">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredResources.map((resource) => {
                const TypeIcon = getTypeIcon(resource.type);
                return (
                  <Card key={resource.id} className="card-interactive shadow-soft border-0 group">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                            <TypeIcon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg group-hover:gradient-text transition-all line-clamp-1">
                              {resource.title}
                            </CardTitle>
                            <CardDescription className="flex items-center space-x-2">
                              <span>{resource.provider}</span>
                              <span>•</span>
                              <span>{resource.type}</span>
                            </CardDescription>
                          </div>
                        </div>
                        {resource.featured && (
                          <Badge className="bg-gradient-accent text-white">Featured</Badge>
                        )}
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {resource.description}
                      </p>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 fill-current text-quaternary" />
                            <span className="font-medium">{resource.rating}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4 text-muted-foreground" />
                            <span>{resource.students.toLocaleString()}</span>
                          </div>
                        </div>
                        <Badge variant={getLevelColor(resource.level) as any}>
                          {resource.level}
                        </Badge>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span>{resource.duration}</span>
                        </div>
                        <div className="font-bold text-primary">
                          {resource.price}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="text-xs font-medium text-muted-foreground">Skills you'll learn:</div>
                        <div className="flex flex-wrap gap-1">
                          {resource.skills.slice(0, 3).map((skill, index) => (
                            <Badge key={index} variant="outline" className="text-xs px-2 py-0">
                              {skill}
                            </Badge>
                          ))}
                          {resource.skills.length > 3 && (
                            <Badge variant="outline" className="text-xs px-2 py-0">
                              +{resource.skills.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Button variant="default" size="sm" className="flex-1">
                          <Play className="w-4 h-4 mr-2" />
                          {resource.price === "Free" ? "Start Free" : "Enroll Now"}
                        </Button>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="featured" className="space-y-6">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {featuredResources.map((resource) => {
                const TypeIcon = getTypeIcon(resource.type);
                return (
                  <Card key={resource.id} className="card-interactive shadow-medium border-2 border-primary/20">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center">
                            <TypeIcon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl gradient-text">
                              {resource.title}
                            </CardTitle>
                            <CardDescription className="flex items-center space-x-2">
                              <span>{resource.provider}</span>
                              <span>•</span>
                              <span>{resource.type}</span>
                            </CardDescription>
                          </div>
                        </div>
                        <Badge className="bg-gradient-accent text-white">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        {resource.description}
                      </p>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 fill-current text-quaternary" />
                            <span className="font-medium">{resource.rating}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4 text-muted-foreground" />
                            <span>{resource.students.toLocaleString()}</span>
                          </div>
                        </div>
                        <Badge variant={getLevelColor(resource.level) as any}>
                          {resource.level}
                        </Badge>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span>{resource.duration}</span>
                        </div>
                        <div className="font-bold text-xl text-primary">
                          {resource.price}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="text-xs font-medium text-muted-foreground">Skills you'll master:</div>
                        <div className="flex flex-wrap gap-1">
                          {resource.skills.map((skill, index) => (
                            <Badge key={index} variant="secondary" className="text-xs px-2 py-1">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button variant="hero" size="lg" className="w-full">
                        <Play className="w-5 h-5 mr-2" />
                        {resource.price === "Free" ? "Start Learning Free" : "Get Premium Access"}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="courses">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredResources.filter(r => r.type === "Course").map((resource) => (
                <Card key={resource.id} className="card-interactive shadow-soft border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Video className="w-5 h-5 text-primary" />
                      <span>{resource.title}</span>
                    </CardTitle>
                    <CardDescription>{resource.provider}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-primary">{resource.price}</span>
                      <Button size="sm">Enroll Now</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ebooks">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredResources.filter(r => r.type === "eBook").map((resource) => (
                <Card key={resource.id} className="card-interactive shadow-soft border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <FileText className="w-5 h-5 text-tertiary" />
                      <span>{resource.title}</span>
                    </CardTitle>
                    <CardDescription>{resource.provider}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-primary">{resource.price}</span>
                      <Button size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="workshops">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredResources.filter(r => r.type === "Workshop").map((resource) => (
                <Card key={resource.id} className="card-interactive shadow-soft border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-secondary" />
                      <span>{resource.title}</span>
                    </CardTitle>
                    <CardDescription>{resource.provider}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-primary">{resource.price}</span>
                      <Button size="sm">Join Workshop</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {filteredResources.length === 0 && (
          <Card className="shadow-soft border-0 text-center py-12">
            <CardContent>
              <div className="text-muted-foreground mb-4">
                <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg">No resources found</p>
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

export default Resources;