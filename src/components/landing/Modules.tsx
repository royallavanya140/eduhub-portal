import { motion } from "framer-motion";
import { Check } from "lucide-react";

const modules = [
  {
    category: "People Management",
    items: ["Students", "Teachers", "Staff", "Parents", "Users"],
  },
  {
    category: "Academics",
    items: ["Academic Year", "Sections", "Classes", "Classrooms", "Subjects"],
  },
  {
    category: "Operations",
    items: ["Timetable", "Attendance", "Marks", "Events", "Library", "Transport"],
  },
  {
    category: "Finance & HR",
    items: ["Incomes", "Expenses", "Payroll", "HR Management"],
  },
  {
    category: "Reports",
    items: [
      "Student Reports",
      "Teacher Reports",
      "Attendance Reports",
      "Financial Reports",
      "Class Lists",
      "Visitor Log",
      "Phone Call Log",
    ],
  },
  {
    category: "Administration",
    items: ["User Roles", "Access Control", "System Settings"],
  },
];

export const Modules = () => {
  return (
    <section id="modules" className="py-20 lg:py-32 gradient-hero">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Modules
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Complete <span className="text-gradient">School Ecosystem</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Every module you need to run a modern educational institution efficiently.
          </p>
        </motion.div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={module.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 rounded-2xl bg-card border border-border shadow-card"
            >
              <h3 className="font-display font-semibold text-xl text-foreground mb-4 pb-4 border-b border-border">
                {module.category}
              </h3>
              <ul className="space-y-3">
                {module.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};