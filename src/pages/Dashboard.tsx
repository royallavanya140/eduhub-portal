import { motion } from "framer-motion";
import { School, UserCog, Users, GraduationCap } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { mockSchools, mockAdmins } from "@/data/mockData";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const totalStudents = mockSchools.reduce((acc, school) => acc + school.studentsCount, 0);
  const totalTeachers = mockSchools.reduce((acc, school) => acc + school.teachersCount, 0);
  const activeSchools = mockSchools.filter((s) => s.status === "active").length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-3xl font-display font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Welcome back! Here's an overview of your school management system.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Schools"
          value={mockSchools.length}
          icon={School}
          trend={{ value: 12, isPositive: true }}
          delay={0.1}
        />
        <StatCard
          title="School Admins"
          value={mockAdmins.length}
          icon={UserCog}
          trend={{ value: 8, isPositive: true }}
          delay={0.2}
        />
        <StatCard
          title="Total Students"
          value={totalStudents.toLocaleString()}
          icon={GraduationCap}
          trend={{ value: 15, isPositive: true }}
          delay={0.3}
        />
        <StatCard
          title="Total Teachers"
          value={totalTeachers}
          icon={Users}
          trend={{ value: 5, isPositive: true }}
          delay={0.4}
        />
      </div>

      {/* Recent Schools */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="bg-card rounded-2xl border border-border shadow-soft overflow-hidden"
      >
        <div className="p-6 border-b border-border flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-foreground">Recent Schools</h2>
            <p className="text-sm text-muted-foreground">Latest registered schools</p>
          </div>
          <Link to="/dashboard/schools">
            <Button variant="outline" size="sm">View All</Button>
          </Link>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>School Name</TableHead>
              <TableHead>City</TableHead>
              <TableHead>Students</TableHead>
              <TableHead>Teachers</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockSchools.slice(0, 4).map((school, index) => (
              <motion.tr
                key={school.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                className="border-b transition-colors hover:bg-muted/50"
              >
                <TableCell className="font-medium">{school.name}</TableCell>
                <TableCell>{school.city}</TableCell>
                <TableCell>{school.studentsCount}</TableCell>
                <TableCell>{school.teachersCount}</TableCell>
                <TableCell>
                  <Badge variant={school.status === "active" ? "default" : "secondary"}>
                    {school.status}
                  </Badge>
                </TableCell>
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </motion.div>

      {/* Recent Admins */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.7 }}
        className="bg-card rounded-2xl border border-border shadow-soft overflow-hidden"
      >
        <div className="p-6 border-b border-border flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-foreground">Recent Admins</h2>
            <p className="text-sm text-muted-foreground">Latest registered school administrators</p>
          </div>
          <Link to="/dashboard/admins">
            <Button variant="outline" size="sm">View All</Button>
          </Link>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>School</TableHead>
              <TableHead>Last Login</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockAdmins.slice(0, 4).map((admin, index) => (
              <motion.tr
                key={admin.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                className="border-b transition-colors hover:bg-muted/50"
              >
                <TableCell className="font-medium">{admin.name}</TableCell>
                <TableCell>{admin.email}</TableCell>
                <TableCell>{admin.schoolName}</TableCell>
                <TableCell className="text-muted-foreground">{admin.lastLogin}</TableCell>
                <TableCell>
                  <Badge variant={admin.status === "active" ? "default" : "secondary"}>
                    {admin.status}
                  </Badge>
                </TableCell>
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </motion.div>
    </div>
  );
};

export default Dashboard;
