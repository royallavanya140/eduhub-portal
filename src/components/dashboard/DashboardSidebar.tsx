import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  School,
  UserCog,
  LogOut,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Moon,
  Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: School, label: "Schools", path: "/dashboard/schools" },
  { icon: UserCog, label: "School Admins", path: "/dashboard/admins" },
];

interface DashboardSidebarProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  isCollapsed?: boolean;
  setIsCollapsed?: (value: boolean) => void;
  isMobile?: boolean;
  onNavigate?: () => void;
}

export const DashboardSidebar = ({ 
  isDark, 
  setIsDark, 
  isCollapsed: externalIsCollapsed, 
  setIsCollapsed: externalSetIsCollapsed,
  isMobile = false,
  onNavigate
}: DashboardSidebarProps) => {
  const [internalIsCollapsed, setInternalIsCollapsed] = useState(false);
  const isCollapsed = externalIsCollapsed ?? internalIsCollapsed;
  const setIsCollapsed = externalSetIsCollapsed ?? setInternalIsCollapsed;
  
  const location = useLocation();
  const { logout, user } = useAuth();

  const handleNavClick = () => {
    if (onNavigate) onNavigate();
  };

  const sidebarContent = (
    <>
      {/* Logo */}
      <div className="p-4 border-b border-border">
        <Link to="/dashboard" className="flex items-center gap-3" onClick={handleNavClick}>
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
            <GraduationCap className="w-6 h-6 text-primary-foreground" />
          </div>
          {(!isCollapsed || isMobile) && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="font-display font-bold text-lg text-foreground"
            >
              EduManage
            </motion.span>
          )}
        </Link>
      </div>

      {/* User Info */}
      {(!isCollapsed || isMobile) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-4 border-b border-border"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-semibold">
                {user?.name.charAt(0)}
              </span>
            </div>
            <div className="overflow-hidden">
              <p className="font-medium text-foreground truncate">{user?.name}</p>
              <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link key={item.path} to={item.path} onClick={handleNavClick}>
              <motion.div
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {(!isCollapsed || isMobile) && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="font-medium"
                  >
                    {item.label}
                  </motion.span>
                )}
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-border space-y-2">
        {/* Collapse Toggle - Desktop only */}
        {!isMobile && (
          <Button
            variant="ghost"
            size={isCollapsed ? "icon" : "default"}
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={cn("w-full", !isCollapsed && "justify-start")}
          >
            {isCollapsed ? (
              <ChevronRight className="w-5 h-5" />
            ) : (
              <>
                <ChevronLeft className="w-5 h-5" />
                <span className="ml-3">Collapse</span>
              </>
            )}
          </Button>
        )}

        <Button
          variant="ghost"
          size={isCollapsed && !isMobile ? "icon" : "default"}
          onClick={() => setIsDark(!isDark)}
          className={cn("w-full", (!isCollapsed || isMobile) && "justify-start")}
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          {(!isCollapsed || isMobile) && <span className="ml-3">{isDark ? "Light" : "Dark"}</span>}
        </Button>

        <Button
          variant="ghost"
          size={isCollapsed && !isMobile ? "icon" : "default"}
          onClick={logout}
          className={cn("w-full text-destructive hover:text-destructive hover:bg-destructive/10", (!isCollapsed || isMobile) && "justify-start")}
        >
          <LogOut className="w-5 h-5" />
          {(!isCollapsed || isMobile) && <span className="ml-3">Logout</span>}
        </Button>
      </div>
    </>
  );

  if (isMobile) {
    return (
      <div className="h-full flex flex-col bg-card">
        {sidebarContent}
      </div>
    );
  }

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? 80 : 280 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="h-screen sticky top-0 bg-card border-r border-border flex flex-col"
    >
      {sidebarContent}
    </motion.aside>
  );
};
