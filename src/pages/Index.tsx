import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { VideoGallery } from '@/components/VideoGallery';
import { ClientLogos } from '@/components/ClientLogos';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-background to-background" />
        
        {/* Animated circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-20 h-full flex items-center justify-center text-center pt-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <motion.h1 
                className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                We Speak your Language,
                <br />
                We See your Vision
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-muted-foreground mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                Next-Gen Global Branding & Creative Content Agency
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                <button className="group relative px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-medium text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
                  Start Your Journey
                  <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Decorative grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </section>

      <VideoGallery />
      <ClientLogos />
    </div>
  );
};

export default Index;