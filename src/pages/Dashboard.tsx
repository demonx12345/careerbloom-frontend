import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useState } from "react";
import { 
  TrendingUp, 
  Target, 
  BookOpen, 
  Award, 
  Users, 
  Clock,
  ArrowRight,
  Plus,
  Star,
  Calendar,
  BarChart3,
  Cloud,
  RefreshCw
} from "lucide-react";

const Dashboard = () => {
  const [cloudData, setCloudData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const fetchCloudData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/hello');
      const data = await response.json();
      setCloudData(data);
    } catch (error) {
      console.error('Error fetching cloud data:', error);
      setCloudData({ error: 'Failed to connect to cloud service' });
    } finally {
      setLoading(false);
    }
  };

  const skillsData = [
    { name: "JavaScript", level: 85, category: "Technical" },
    { name: "React", level: 78, category: "Technical" },
    { name: "Project Management", level: 65, category: "Soft Skills" },
    { name: "Communication", level: 92, category: "Soft Skills" },
  ];

  const careerSuggestions = [
    { title: "Frontend Developer", match: 95, icon: "💻" },
    { title: "Full Stack Developer", match: 87, icon: "🚀" },
    { title: "UI/UX Designer", match: 72, icon: "🎨" },
  ];

  const recentActivities = [
    { action: "Completed JavaScript course", time: "2 hours ago", type: "learning" },
    { action: "Updated React skill level", time: "1 day ago", type: "skill" },
    { action: "Viewed Frontend Developer path", time: "3 days ago", type: "career" },
  ];

  const learningResources = [
    { title: "Advanced React Patterns", provider: "TechEd", duration: "4h", rating: 4.8 },
    { title: "JavaScript ES6+ Features", provider: "CodeAcademy", duration: "2h", rating: 4.9 },
    { title: "Project Management Basics", provider: "SkillShare", duration: "3h", rating: 4.7 },
  ];

  return (
    <div className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
            Welcome back, Sarah! 👋
          </h1>
          <p className="text-lg text-muted-foreground">
            Here's your skill mapping journey overview
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="card-interactive border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Skills</p>
                  <p className="text-3xl font-bold text-primary">24</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-interactive border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Career Match</p>
                  <p className="text-3xl font-bold text-secondary">95%</p>
                </div>
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-secondary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-interactive border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Courses Completed</p>
                  <p className="text-3xl font-bold text-tertiary">12</p>
                </div>
                <div className="w-12 h-12 bg-tertiary/10 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-tertiary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-interactive border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Achievements</p>
                  <p className="text-3xl font-bold text-quaternary">8</p>
                </div>
                <div className="w-12 h-12 bg-quaternary/10 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-quaternary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Cloud Service Demo */}
        <Card className="shadow-soft border-0 mb-8 bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Cloud className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl font-semibold">Vercel Cloud Service</CardTitle>
                  <CardDescription>Serverless function demonstration</CardDescription>
                </div>
              </div>
              <Button 
                onClick={fetchCloudData} 
                disabled={loading}
                size="sm"
                variant="outline"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Loading...
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Test Cloud
                  </>
                )}
              </Button>
            </div>
          </CardHeader>
          {cloudData && (
            <CardContent>
              <div className="bg-card rounded-lg p-4 border">
                <pre className="text-sm overflow-x-auto">
                  {JSON.stringify(cloudData, null, 2)}
                </pre>
              </div>
            </CardContent>
          )}
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Skills Overview */}
            <Card className="shadow-soft border-0">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl font-semibold">Your Skills</CardTitle>
                  <CardDescription>Track your skill development progress</CardDescription>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/skills">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Skill
                  </Link>
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                {skillsData.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="font-medium">{skill.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {skill.category}
                        </Badge>
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
                <Button variant="ghost" className="w-full" asChild>
                  <Link to="/skills">
                    View All Skills
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Career Suggestions */}
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Career Path Recommendations</CardTitle>
                <CardDescription>Based on your current skill profile</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {careerSuggestions.map((career, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg border hover:shadow-soft transition-smooth">
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl">{career.icon}</span>
                      <div>
                        <h3 className="font-semibold">{career.title}</h3>
                        <p className="text-sm text-muted-foreground">{career.match}% match</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                ))}
                <Button variant="secondary" className="w-full" asChild>
                  <Link to="/careers">
                    Explore All Careers
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Learning Resources */}
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Recommended Learning</CardTitle>
                <CardDescription>Curated for your goals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {learningResources.map((resource, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-medium text-sm">{resource.title}</h4>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{resource.provider}</span>
                      <span>{resource.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-current text-quaternary" />
                      <span className="text-xs font-medium">{resource.rating}</span>
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to="/resources">View All Resources</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activities */}
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Recent Activities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.type === 'learning' ? 'bg-secondary' :
                      activity.type === 'skill' ? 'bg-primary' : 'bg-tertiary'
                    }`} />
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                  <Link to="/skills">
                    <Target className="w-4 h-4 mr-2" />
                    Update Skills
                  </Link>
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                  <Link to="/profile">
                    <Users className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Link>
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                  <Link to="/careers">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Career Analysis
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;