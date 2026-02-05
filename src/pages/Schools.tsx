import { useState } from "react";
import { motion } from "framer-motion";
import {
  School,
  Plus,
  Search,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  Users,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

interface School {
  id: number;
  name: string;
  address: string;
  admins: number;
  students: number;
  teachers: number;
  status: "Active" | "Pending" | "Inactive";
  createdAt: string;
}

const initialSchools: School[] = [
  {
    id: 1,
    name: "Springfield High School",
    address: "123 Main Street, Springfield",
    admins: 5,
    students: 1200,
    teachers: 85,
    status: "Active",
    createdAt: "2024-01-15",
  },
  {
    id: 2,
    name: "Riverside Academy",
    address: "456 River Road, Riverside",
    admins: 3,
    students: 850,
    teachers: 62,
    status: "Active",
    createdAt: "2024-02-20",
  },
  {
    id: 3,
    name: "Oak Valley School",
    address: "789 Oak Lane, Valley View",
    admins: 4,
    students: 620,
    teachers: 45,
    status: "Pending",
    createdAt: "2024-03-10",
  },
  {
    id: 4,
    name: "Maple Grove Institute",
    address: "321 Maple Avenue, Grove City",
    admins: 6,
    students: 1450,
    teachers: 98,
    status: "Active",
    createdAt: "2024-01-05",
  },
  {
    id: 5,
    name: "Sunrise Elementary",
    address: "555 Sunrise Blvd, Sun City",
    admins: 2,
    students: 380,
    teachers: 28,
    status: "Active",
    createdAt: "2024-04-01",
  },
  {
    id: 6,
    name: "Mountain View High",
    address: "777 Mountain Road, Hillside",
    admins: 4,
    students: 980,
    teachers: 72,
    status: "Inactive",
    createdAt: "2023-12-01",
  },
];

const Schools = () => {
  const { toast } = useToast();
  const [schools, setSchools] = useState<School[]>(initialSchools);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newSchool, setNewSchool] = useState({ name: "", address: "" });

  const filteredSchools = schools.filter(
    (school) =>
      school.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      school.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddSchool = () => {
    if (!newSchool.name || !newSchool.address) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    const school: School = {
      id: schools.length + 1,
      name: newSchool.name,
      address: newSchool.address,
      admins: 0,
      students: 0,
      teachers: 0,
      status: "Pending",
      createdAt: new Date().toISOString().split("T")[0],
    };

    setSchools([...schools, school]);
    setNewSchool({ name: "", address: "" });
    setIsDialogOpen(false);

    toast({
      title: "School Added",
      description: `${school.name} has been added successfully.`,
    });
  };

  const handleDeleteSchool = (id: number) => {
    setSchools(schools.filter((s) => s.id !== id));
    toast({
      title: "School Deleted",
      description: "The school has been removed.",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-500/10 text-green-500";
      case "Pending":
        return "bg-yellow-500/10 text-yellow-500";
      case "Inactive":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-3xl font-bold text-foreground"
            >
              Schools
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground mt-1"
            >
              Manage all schools in your system
            </motion.p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="hero" className="gap-2">
                <Plus className="h-4 w-4" />
                Add School
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Add New School</DialogTitle>
                <DialogDescription>
                  Enter the details of the new school to add it to the system.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name">School Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter school name"
                    value={newSchool.name}
                    onChange={(e) =>
                      setNewSchool({ ...newSchool, name: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    placeholder="Enter school address"
                    value={newSchool.address}
                    onChange={(e) =>
                      setNewSchool({ ...newSchool, address: e.target.value })
                    }
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button variant="hero" onClick={handleAddSchool}>
                  Add School
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 sm:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="border-border/50 bg-card shadow-card">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Schools
                </CardTitle>
                <School className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">
                  {schools.length}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="border-border/50 bg-card shadow-card">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Students
                </CardTitle>
                <GraduationCap className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">
                  {schools.reduce((acc, s) => acc + s.students, 0).toLocaleString()}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border-border/50 bg-card shadow-card">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Teachers
                </CardTitle>
                <Users className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">
                  {schools.reduce((acc, s) => acc + s.teachers, 0).toLocaleString()}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Search and Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="border-border/50 bg-card shadow-card">
            <CardHeader>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <CardTitle>All Schools</CardTitle>
                <div className="relative w-full sm:w-72">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search schools..."
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-xl border border-border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50 hover:bg-muted/50">
                      <TableHead>School</TableHead>
                      <TableHead>Admins</TableHead>
                      <TableHead>Students</TableHead>
                      <TableHead>Teachers</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredSchools.map((school) => (
                      <TableRow key={school.id} className="hover:bg-muted/30">
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary shrink-0">
                              <School className="h-5 w-5 text-primary-foreground" />
                            </div>
                            <div>
                              <p className="font-medium text-foreground">
                                {school.name}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {school.address}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{school.admins}</TableCell>
                        <TableCell>{school.students.toLocaleString()}</TableCell>
                        <TableCell>{school.teachers}</TableCell>
                        <TableCell>
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(
                              school.status
                            )}`}
                          >
                            {school.status}
                          </span>
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {new Date(school.createdAt).toLocaleDateString()}
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem className="gap-2">
                                <Eye className="h-4 w-4" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem className="gap-2">
                                <Edit className="h-4 w-4" />
                                Edit School
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                className="gap-2 text-destructive focus:text-destructive"
                                onClick={() => handleDeleteSchool(school.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                                Delete School
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Schools;
