import { motion } from "framer-motion";
import { School, Users, TrendingUp, Activity, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

const stats = [
  {
    title: "Total Schools",
    value: "128",
    change: "+12%",
    trend: "up",
    icon: School,
    description: "from last month",
  },
  {
    title: "Total Admins",
    value: "342",
    change: "+8%",
    trend: "up",
    icon: Users,
    description: "from last month",
  },
  {
    title: "Active Users",
    value: "12.5K",
    change: "+23%",
    trend: "up",
    icon: Activity,
    description: "from last month",
  },
  {
    title: "Growth Rate",
    value: "18.2%",
    change: "-2%",
    trend: "down",
    icon: TrendingUp,
    description: "from last month",
  },
];

const recentSchools = [
  { name: "Springfield High School", admins: 5, students: 1200, status: "Active" },
  { name: "Riverside Academy", admins: 3, students: 850, status: "Active" },
  { name: "Oak Valley School", admins: 4, students: 620, status: "Pending" },
  { name: "Maple Grove Institute", admins: 6, students: 1450, status: "Active" },
  { name: "Sunrise Elementary", admins: 2, students: 380, status: "Active" },
];

const recentAdmins = [
  { name: "John Smith", email: "john@springfield.edu", school: "Springfield High", role: "Super Admin" },
  { name: "Sarah Johnson", email: "sarah@riverside.edu", school: "Riverside Academy", role: "Admin" },
  { name: "Mike Williams", email: "mike@oakvalley.edu", school: "Oak Valley School", role: "Admin" },
  { name: "Emily Brown", email: "emily@maple.edu", school: "Maple Grove Institute", role: "Super Admin" },
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-3xl font-bold text-foreground"
          >
            Dashboard
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mt-1"
          >
            Welcome back! Here's an overview of your school management system.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="relative overflow-hidden border-border/50 bg-card shadow-card hover:shadow-glow transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="flex items-center gap-1 mt-1">
                    {stat.trend === "up" ? (
                      <ArrowUpRight className="h-4 w-4 text-green-500" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-red-500" />
                    )}
                    <span
                      className={
                        stat.trend === "up" ? "text-green-500 text-sm" : "text-red-500 text-sm"
                      }
                    >
                      {stat.change}
                    </span>
                    <span className="text-muted-foreground text-sm">{stat.description}</span>
                  </div>
                </CardContent>
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/5" />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Recent Schools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="border-border/50 bg-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <School className="h-5 w-5 text-primary" />
                  Recent Schools
                </CardTitle>
                <CardDescription>Latest schools added to the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentSchools.map((school, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-xl bg-muted/50 p-3 transition-colors hover:bg-muted"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary">
                          <School className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{school.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {school.admins} admins • {school.students} students
                          </p>
                        </div>
                      </div>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          school.status === "Active"
                            ? "bg-green-500/10 text-green-500"
                            : "bg-yellow-500/10 text-yellow-500"
                        }`}
                      >
                        {school.status}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Admins */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="border-border/50 bg-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Recent Admins
                </CardTitle>
                <CardDescription>Latest administrators added</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAdmins.map((admin, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-xl bg-muted/50 p-3 transition-colors hover:bg-muted"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground font-semibold">
                          {admin.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{admin.name}</p>
                          <p className="text-sm text-muted-foreground">{admin.email}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-foreground">{admin.school}</p>
                        <p className="text-xs text-muted-foreground">{admin.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
