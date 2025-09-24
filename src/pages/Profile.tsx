import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Edit,
  Save,
  Camera,
  Award,
  Target,
  TrendingUp,
  BookOpen,
  Star,
  Link as LinkIcon,
  Github,
  Linkedin,
  Globe
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { toast } = useToast();

  const [profileData, setProfileData] = useState({
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    title: "Frontend Developer",
    bio: "Passionate frontend developer with 3+ years of experience building modern web applications. Love creating intuitive user experiences and learning new technologies.",
    joinDate: "January 2023",
    website: "sarahjohnson.dev",
    github: "sarahjdev",
    linkedin: "sarah-johnson-dev"
  });

  const skills = [
    { name: "JavaScript", level: 85, category: "Technical" },
    { name: "React", level: 78, category: "Technical" },
    { name: "CSS/SASS", level: 80, category: "Technical" },
    { name: "Node.js", level: 65, category: "Technical" },
    { name: "Communication", level: 92, category: "Soft Skills" },
    { name: "Project Management", level: 70, category: "Soft Skills" },
  ];

  const achievements = [
    { title: "Skill Explorer", description: "Added 10+ skills to profile", icon: "🎯", date: "2 weeks ago" },
    { title: "Learning Streak", description: "7 day learning streak", icon: "🔥", date: "1 week ago" },
    { title: "Course Completer", description: "Completed 5 courses", icon: "🎓", date: "1 month ago" },
    { title: "Career Focused", description: "Set career goals", icon: "🚀", date: "2 months ago" },
  ];

  const learningHistory = [
    { title: "Advanced React Patterns", provider: "TechEd", completed: "2024-01-15", rating: 5 },
    { title: "JavaScript ES6+ Guide", provider: "CodeAcademy", completed: "2024-01-02", rating: 5 },
    { title: "UI/UX Design Fundamentals", provider: "DesignMaster", completed: "2023-12-20", rating: 4 },
  ];

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
            My Profile
          </h1>
          <p className="text-lg text-muted-foreground">
            Manage your personal information and career preferences
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="shadow-soft border-0 sticky top-8">
              <CardHeader className="text-center pb-2">
                <div className="relative mx-auto mb-4">
                  <Avatar className="w-24 h-24 mx-auto">
                    <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
                    <AvatarFallback className="text-2xl bg-gradient-hero text-white">
                      {profileData.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    size="icon"
                    variant="outline"
                    className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full"
                  >
                    <Camera className="w-4 h-4" />
                  </Button>
                </div>
                <CardTitle className="text-xl">{profileData.name}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  {profileData.title}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="text-center text-sm text-muted-foreground">
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>Joined {profileData.joinDate}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{profileData.location}</span>
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground">{profileData.bio}</p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3 pt-4 border-t">
                  <Button variant="outline" size="icon" className="w-8 h-8">
                    <Globe className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="w-8 h-8">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="w-8 h-8">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </div>

                <Button 
                  variant={isEditing ? "success" : "outline"} 
                  className="w-full" 
                  onClick={isEditing ? handleSave : () => setIsEditing(true)}
                >
                  {isEditing ? (
                    <>
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </>
                  ) : (
                    <>
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Profile
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="achievements">Awards</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Card className="shadow-soft border-0 text-center">
                    <CardContent className="p-4">
                      <div className="text-2xl font-bold text-primary mb-1">24</div>
                      <div className="text-xs text-muted-foreground">Skills</div>
                    </CardContent>
                  </Card>
                  <Card className="shadow-soft border-0 text-center">
                    <CardContent className="p-4">
                      <div className="text-2xl font-bold text-secondary mb-1">12</div>
                      <div className="text-xs text-muted-foreground">Courses</div>
                    </CardContent>
                  </Card>
                  <Card className="shadow-soft border-0 text-center">
                    <CardContent className="p-4">
                      <div className="text-2xl font-bold text-tertiary mb-1">8</div>
                      <div className="text-xs text-muted-foreground">Awards</div>
                    </CardContent>
                  </Card>
                  <Card className="shadow-soft border-0 text-center">
                    <CardContent className="p-4">
                      <div className="text-2xl font-bold text-quaternary mb-1">95%</div>
                      <div className="text-xs text-muted-foreground">Match</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Top Skills */}
                <Card className="shadow-soft border-0">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Top Skills</CardTitle>
                      <Button variant="outline" size="sm">View All</Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {skills.slice(0, 4).map((skill, index) => (
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
                  </CardContent>
                </Card>

                {/* Recent Achievements */}
                <Card className="shadow-soft border-0">
                  <CardHeader>
                    <CardTitle className="text-lg">Recent Achievements</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {achievements.slice(0, 3).map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-muted/30">
                        <span className="text-2xl">{achievement.icon}</span>
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm">{achievement.title}</h4>
                          <p className="text-xs text-muted-foreground">{achievement.description}</p>
                        </div>
                        <span className="text-xs text-muted-foreground">{achievement.date}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="details" className="space-y-6">
                <Card className="shadow-soft border-0">
                  <CardHeader>
                    <CardTitle className="text-lg">Personal Information</CardTitle>
                    <CardDescription>Update your personal details and contact information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={profileData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="title">Job Title</Label>
                        <Input
                          id="title"
                          value={profileData.title}
                          onChange={(e) => handleInputChange('title', e.target.value)}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={profileData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          value={profileData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          value={profileData.location}
                          onChange={(e) => handleInputChange('location', e.target.value)}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="website">Website</Label>
                        <Input
                          id="website"
                          value={profileData.website}
                          onChange={(e) => handleInputChange('website', e.target.value)}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        value={profileData.bio}
                        onChange={(e) => handleInputChange('bio', e.target.value)}
                        disabled={!isEditing}
                        rows={4}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft border-0">
                  <CardHeader>
                    <CardTitle className="text-lg">Social Links</CardTitle>
                    <CardDescription>Connect your social media profiles</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="github">GitHub Username</Label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-sm text-muted-foreground">
                          github.com/
                        </span>
                        <Input
                          id="github"
                          value={profileData.github}
                          onChange={(e) => handleInputChange('github', e.target.value)}
                          disabled={!isEditing}
                          className="rounded-l-none"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="linkedin">LinkedIn Profile</Label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-sm text-muted-foreground">
                          linkedin.com/in/
                        </span>
                        <Input
                          id="linkedin"
                          value={profileData.linkedin}
                          onChange={(e) => handleInputChange('linkedin', e.target.value)}
                          disabled={!isEditing}
                          className="rounded-l-none"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="achievements" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <Card key={index} className="shadow-soft border-0">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center text-2xl">
                            {achievement.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold">{achievement.title}</h3>
                            <p className="text-sm text-muted-foreground">{achievement.description}</p>
                            <p className="text-xs text-muted-foreground mt-1">{achievement.date}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="history" className="space-y-6">
                <Card className="shadow-soft border-0">
                  <CardHeader>
                    <CardTitle className="text-lg">Learning History</CardTitle>
                    <CardDescription>Courses and certifications you've completed</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {learningHistory.map((course, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg border">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <BookOpen className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">{course.title}</h4>
                            <p className="text-sm text-muted-foreground">{course.provider}</p>
                            <p className="text-xs text-muted-foreground">Completed: {course.completed}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < course.rating ? 'fill-current text-quaternary' : 'text-muted-foreground'}`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;