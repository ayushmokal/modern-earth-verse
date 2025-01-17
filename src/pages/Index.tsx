import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { VideoGallery } from '@/components/VideoGallery';
import { ClientLogos } from '@/components/ClientLogos';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden">
        <div className="relative z-20 h-full flex items-center justify-center text-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                We Speak your Language,
                <br />
                We See your Importance
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Next-Gen Global Branding & Creative Content Agency
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-white rounded-full font-medium"
              >
                Start Your Journey
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      <VideoGallery />
      <ClientLogos />
    </div>
  );
};

export default Index;