import { motion } from "framer-motion";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="container mx-auto px-4 py-6">
        <div className="backdrop-blur-xl bg-background/30 rounded-full border border-white/5 px-6 py-4 flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400"
          >
            CLYPTO
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {["Services", "Work", "About", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.05 }}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <Button 
            variant="outline" 
            className="relative group overflow-hidden rounded-full border-primary/20 hover:border-primary/40"
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};