import { motion } from "framer-motion";
import {
  Users,
  GraduationCap,
  Calendar,
  ClipboardCheck,
  BookOpen,
  Bus,
  BarChart3,
  Shield,
  DollarSign,
  Clock,
  Phone,
  Library,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "User Management",
    description: "Manage Students, Teachers, Staff, Parents and Users with comprehensive profiles and role-based access.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: GraduationCap,
    title: "Academic Management",
    description: "Handle Academic Years, Sections, Classes, Classrooms, and Subjects efficiently.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Calendar,
    title: "Timetable & Scheduling",
    description: "Create and manage class schedules, exam timetables, and event calendars seamlessly.",
    color: "bg-green-500/10 text-green-600 dark:text-green-400",
  },
  {
    icon: ClipboardCheck,
    title: "Attendance Tracking",
    description: "Track student and staff attendance with detailed reports and analytics.",
    color: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
  },
  {
    icon: BookOpen,
    title: "Marks & Grades",
    description: "Comprehensive gradebook with customizable grading systems and report cards.",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
  {
    icon: Bus,
    title: "Transport Management",
    description: "Manage school buses, routes, and student transportation with GPS tracking.",
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  },
  {
    icon: Library,
    title: "Library System",
    description: "Complete library management with book cataloging, issuing, and return tracking.",
    color: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
  },
  {
    icon: DollarSign,
    title: "Finance & HR",
    description: "Manage incomes, expenses, payroll, and complete HR functionality.",
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: BarChart3,
    title: "Comprehensive Reports",
    description: "Generate detailed reports for students, attendance, finances, and more.",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    icon: Shield,
    title: "Role-Based Access",
    description: "Secure user access control with customizable roles and permissions.",
    color: "bg-red-500/10 text-red-600 dark:text-red-400",
  },
  {
    icon: Clock,
    title: "Events Management",
    description: "Plan and organize school events, holidays, and important dates.",
    color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
  },
  {
    icon: Phone,
    title: "Communication Log",
    description: "Track visitor logs, phone calls, and parent communications.",
    color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const Features = () => {
  return (
    <section id="features" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything You Need to{" "}
            <span className="text-gradient">Manage Your School</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive suite of tools designed to streamline every aspect of
            educational institution management.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group p-6 rounded-2xl gradient-card border border-border shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-12 h-12 rounded-xl ${feature.color.split(" ")[0]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className={`w-6 h-6 ${feature.color.split(" ")[1]}`} />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};