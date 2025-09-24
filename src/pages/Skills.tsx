import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Plus, 
  Search, 
  Filter, 
  Code, 
  Palette, 
  Users, 
  Briefcase,
  Edit2,
  Trash2,
  Star
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Skills = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const { toast } = useToast();

  const [skills, setSkills] = useState([
    { id: 1, name: "JavaScript", category: "Technical", level: 85, experience: "3 years", verified: true },
    { id: 2, name: "React", category: "Technical", level: 78, experience: "2 years", verified: true },
    { id: 3, name: "Node.js", category: "Technical", level: 65, experience: "1.5 years", verified: false },
    { id: 4, name: "Project Management", category: "Soft Skills", level: 70, experience: "2 years", verified: false },
    { id: 5, name: "Communication", category: "Soft Skills", level: 92, experience: "5 years", verified: true },
    { id: 6, name: "UI/UX Design", category: "Design", level: 60, experience: "1 year", verified: false },
    { id: 7, name: "Marketing", category: "Business", level: 45, experience: "6 months", verified: false },
    { id: 8, name: "Leadership", category: "Soft Skills", level: 75, experience: "3 years", verified: true },
  ]);

  const categories = [
    { value: "all", label: "All Categories", icon: null },
    { value: "Technical", label: "Technical", icon: Code },
    { value: "Design", label: "Design", icon: Palette },
    { value: "Soft Skills", label: "Soft Skills", icon: Users },
    { value: "Business", label: "Business", icon: Briefcase },
  ];

  const filteredSkills = skills.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || skill.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getLevelColor = (level: number) => {
    if (level >= 80) return "text-success";
    if (level >= 60) return "text-secondary";
    if (level >= 40) return "text-warning";
    return "text-destructive";
  };

  const getLevelBadge = (level: number) => {
    if (level >= 80) return { label: "Expert", variant: "default" };
    if (level >= 60) return { label: "Advanced", variant: "secondary" };
    if (level >= 40) return { label: "Intermediate", variant: "outline" };
    return { label: "Beginner", variant: "destructive" };
  };

  const handleAddSkill = () => {
    toast({
      title: "Skill Added",
      description: "Your new skill has been added to your profile.",
    });
    setIsAddDialogOpen(false);
  };

  const handleDeleteSkill = (skillId: number) => {
    setSkills(skills.filter(skill => skill.id !== skillId));
    toast({
      title: "Skill Removed",
      description: "The skill has been removed from your profile.",
    });
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              Skills Management
            </h1>
            <p className="text-lg text-muted-foreground">
              Track and develop your professional abilities
            </p>
          </div>
          
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="default" size="lg" className="mt-4 md:mt-0">
                <Plus className="w-5 h-5 mr-2" />
                Add New Skill
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Skill</DialogTitle>
                <DialogDescription>
                  Add a new skill to your profile and set your proficiency level.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="skillName">Skill Name</Label>
                  <Input id="skillName" placeholder="e.g., Python, Public Speaking" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Technical">Technical</SelectItem>
                      <SelectItem value="Design">Design</SelectItem>
                      <SelectItem value="Soft Skills">Soft Skills</SelectItem>
                      <SelectItem value="Business">Business</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="proficiency">Proficiency Level (%)</Label>
                  <Input id="proficiency" type="number" min="0" max="100" placeholder="e.g., 75" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Experience</Label>
                  <Input id="experience" placeholder="e.g., 2 years, 6 months" />
                </div>
                <Button onClick={handleAddSkill} className="w-full">
                  Add Skill
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-soft border-0">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">{skills.length}</div>
              <div className="text-sm text-muted-foreground">Total Skills</div>
            </CardContent>
          </Card>
          <Card className="shadow-soft border-0">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-secondary mb-2">
                {skills.filter(s => s.level >= 80).length}
              </div>
              <div className="text-sm text-muted-foreground">Expert Level</div>
            </CardContent>
          </Card>
          <Card className="shadow-soft border-0">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-tertiary mb-2">
                {skills.filter(s => s.verified).length}
              </div>
              <div className="text-sm text-muted-foreground">Verified</div>
            </CardContent>
          </Card>
          <Card className="shadow-soft border-0">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-quaternary mb-2">
                {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
              </div>
              <div className="text-sm text-muted-foreground">Average Level</div>
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
                  placeholder="Search skills..."
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
                      className="flex items-center space-x-1"
                    >
                      {category.icon && <category.icon className="w-4 h-4" />}
                      <span>{category.label}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => {
            const levelBadge = getLevelBadge(skill.level);
            return (
              <Card key={skill.id} className="card-interactive shadow-soft border-0">
                <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-3">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                    {skill.verified && (
                      <Star className="w-4 h-4 fill-current text-quaternary" />
                    )}
                  </div>
                  <div className="flex items-center space-x-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 text-destructive hover:text-destructive"
                      onClick={() => handleDeleteSkill(skill.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{skill.category}</Badge>
                    <Badge variant={levelBadge.variant as any}>{levelBadge.label}</Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Proficiency</span>
                      <span className={`text-sm font-bold ${getLevelColor(skill.level)}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>

                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">Experience:</span> {skill.experience}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredSkills.length === 0 && (
          <Card className="shadow-soft border-0 text-center py-12">
            <CardContent>
              <div className="text-muted-foreground mb-4">
                <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg">No skills found</p>
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

export default Skills;