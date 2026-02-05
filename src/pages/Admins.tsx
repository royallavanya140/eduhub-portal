import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Plus,
  Search,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  Mail,
  Shield,
  ShieldCheck,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

interface Admin {
  id: number;
  name: string;
  email: string;
  school: string;
  role: "Super Admin" | "Admin" | "Moderator";
  status: "Active" | "Inactive";
  lastLogin: string;
  avatar: string;
}

const initialAdmins: Admin[] = [
  {
    id: 1,
    name: "John Smith",
    email: "john@springfield.edu",
    school: "Springfield High School",
    role: "Super Admin",
    status: "Active",
    lastLogin: "2024-01-20 09:30 AM",
    avatar: "JS",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@riverside.edu",
    school: "Riverside Academy",
    role: "Admin",
    status: "Active",
    lastLogin: "2024-01-19 02:15 PM",
    avatar: "SJ",
  },
  {
    id: 3,
    name: "Mike Williams",
    email: "mike@oakvalley.edu",
    school: "Oak Valley School",
    role: "Admin",
    status: "Inactive",
    lastLogin: "2024-01-10 11:00 AM",
    avatar: "MW",
  },
  {
    id: 4,
    name: "Emily Brown",
    email: "emily@maple.edu",
    school: "Maple Grove Institute",
    role: "Super Admin",
    status: "Active",
    lastLogin: "2024-01-20 08:45 AM",
    avatar: "EB",
  },
  {
    id: 5,
    name: "David Lee",
    email: "david@sunrise.edu",
    school: "Sunrise Elementary",
    role: "Moderator",
    status: "Active",
    lastLogin: "2024-01-18 04:30 PM",
    avatar: "DL",
  },
  {
    id: 6,
    name: "Lisa Chen",
    email: "lisa@mountain.edu",
    school: "Mountain View High",
    role: "Admin",
    status: "Active",
    lastLogin: "2024-01-19 10:00 AM",
    avatar: "LC",
  },
  {
    id: 7,
    name: "James Wilson",
    email: "james@springfield.edu",
    school: "Springfield High School",
    role: "Moderator",
    status: "Active",
    lastLogin: "2024-01-17 03:20 PM",
    avatar: "JW",
  },
  {
    id: 8,
    name: "Amanda Davis",
    email: "amanda@riverside.edu",
    school: "Riverside Academy",
    role: "Admin",
    status: "Inactive",
    lastLogin: "2024-01-05 09:00 AM",
    avatar: "AD",
  },
];

const Admins = () => {
  const { toast } = useToast();
  const [admins, setAdmins] = useState<Admin[]>(initialAdmins);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newAdmin, setNewAdmin] = useState({
    name: "",
    email: "",
    school: "",
    role: "Admin" as Admin["role"],
  });

  const filteredAdmins = admins.filter(
    (admin) =>
      admin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      admin.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      admin.school.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddAdmin = () => {
    if (!newAdmin.name || !newAdmin.email || !newAdmin.school) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    const admin: Admin = {
      id: admins.length + 1,
      name: newAdmin.name,
      email: newAdmin.email,
      school: newAdmin.school,
      role: newAdmin.role,
      status: "Active",
      lastLogin: "Never",
      avatar: newAdmin.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase(),
    };

    setAdmins([...admins, admin]);
    setNewAdmin({ name: "", email: "", school: "", role: "Admin" });
    setIsDialogOpen(false);

    toast({
      title: "Admin Added",
      description: `${admin.name} has been added successfully.`,
    });
  };

  const handleDeleteAdmin = (id: number) => {
    setAdmins(admins.filter((a) => a.id !== id));
    toast({
      title: "Admin Deleted",
      description: "The admin has been removed.",
    });
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Super Admin":
        return "bg-purple-500/10 text-purple-500";
      case "Admin":
        return "bg-blue-500/10 text-blue-500";
      case "Moderator":
        return "bg-orange-500/10 text-orange-500";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "Super Admin":
        return <ShieldCheck className="h-3 w-3" />;
      case "Admin":
        return <Shield className="h-3 w-3" />;
      default:
        return null;
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
              Admins
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground mt-1"
            >
              Manage administrator accounts across all schools
            </motion.p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="hero" className="gap-2">
                <Plus className="h-4 w-4" />
                Add Admin
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Admin</DialogTitle>
                <DialogDescription>
                  Create a new administrator account for a school.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter full name"
                    value={newAdmin.name}
                    onChange={(e) =>
                      setNewAdmin({ ...newAdmin, name: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter email address"
                    value={newAdmin.email}
                    onChange={(e) =>
                      setNewAdmin({ ...newAdmin, email: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="school">School</Label>
                  <Input
                    id="school"
                    placeholder="Enter school name"
                    value={newAdmin.school}
                    onChange={(e) =>
                      setNewAdmin({ ...newAdmin, school: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Select
                    value={newAdmin.role}
                    onValueChange={(value: Admin["role"]) =>
                      setNewAdmin({ ...newAdmin, role: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Super Admin">Super Admin</SelectItem>
                      <SelectItem value="Admin">Admin</SelectItem>
                      <SelectItem value="Moderator">Moderator</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button variant="hero" onClick={handleAddAdmin}>
                  Add Admin
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
                  Total Admins
                </CardTitle>
                <Users className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">
                  {admins.length}
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
                  Active Admins
                </CardTitle>
                <ShieldCheck className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">
                  {admins.filter((a) => a.status === "Active").length}
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
                  Super Admins
                </CardTitle>
                <Shield className="h-4 w-4 text-purple-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">
                  {admins.filter((a) => a.role === "Super Admin").length}
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
                <CardTitle>All Admins</CardTitle>
                <div className="relative w-full sm:w-72">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search admins..."
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
                      <TableHead>Admin</TableHead>
                      <TableHead>School</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Login</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredAdmins.map((admin) => (
                      <TableRow key={admin.id} className="hover:bg-muted/30">
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground font-semibold shrink-0">
                              {admin.avatar}
                            </div>
                            <div>
                              <p className="font-medium text-foreground">
                                {admin.name}
                              </p>
                              <p className="text-sm text-muted-foreground flex items-center gap-1">
                                <Mail className="h-3 w-3" />
                                {admin.email}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {admin.school}
                        </TableCell>
                        <TableCell>
                          <span
                            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${getRoleColor(
                              admin.role
                            )}`}
                          >
                            {getRoleIcon(admin.role)}
                            {admin.role}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              admin.status === "Active"
                                ? "bg-green-500/10 text-green-500"
                                : "bg-red-500/10 text-red-500"
                            }`}
                          >
                            {admin.status}
                          </span>
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          {admin.lastLogin}
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
                                View Profile
                              </DropdownMenuItem>
                              <DropdownMenuItem className="gap-2">
                                <Edit className="h-4 w-4" />
                                Edit Admin
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                className="gap-2 text-destructive focus:text-destructive"
                                onClick={() => handleDeleteAdmin(admin.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                                Delete Admin
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

export default Admins;
