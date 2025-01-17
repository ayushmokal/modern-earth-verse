import { motion } from "framer-motion";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-panel"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold"
        >
          CLYPTO
        </motion.div>
        
        <div className="hidden md:flex items-center space-x-8">
          {["Services", "Work", "About", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.05 }}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>

        <Button variant="outline" className="glass-panel border-primary">
          Get Started
        </Button>
      </div>
    </motion.nav>
  );
};