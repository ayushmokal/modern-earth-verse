import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { VideoGallery } from '@/components/VideoGallery';
import { ClientLogos } from '@/components/ClientLogos';
import { Footer } from '@/components/Footer';
import { ArrowRight, Sparkles, Boxes } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/50 overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] animate-pulse delay-700" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        </div>

        {/* Hexagon Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-opacity='0.1' fill='%238B5CF6' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              <Boxes className="text-primary/50" />
            </motion.div>
          ))}
        </div>

        <div className="relative z-20 h-full flex items-center justify-center text-center pt-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="mb-8 inline-flex items-center px-6 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary backdrop-blur-lg"
              >
                <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                <span>Next Generation Web3 Agency</span>
              </motion.div>

              <motion.h1 
                className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500 animate-gradient">
                  Building the Future
                </span>
                <br />
                <motion.span 
                  className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-primary"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  of Web3
                </motion.span>
              </motion.h1>

              <motion.p 
                className="text-xl md:text-2xl text-muted-foreground mb-12 relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <span className="relative">
                  Empowering the next wave of decentralized innovation
                  <motion.div
                    className="absolute -inset-1 bg-primary/20 rounded-lg blur"
                    animate={{ 
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.2, 1] 
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse" 
                    }}
                  />
                </span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="space-x-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-primary rounded-lg text-white font-medium flex items-center justify-center space-x-2 hover:bg-primary/90 transition-colors"
                >
                  <span>Launch dApp</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>

              {/* Stats Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
              >
                {[
                  { label: "Total Value Locked", value: "$1.2B+" },
                  { label: "Active Users", value: "2M+" },
                  { label: "Transactions", value: "50M+" },
                  { label: "Countries", value: "180+" },
                ].map((stat, index) => (
                  <div key={stat.label} className="glass-panel p-4 rounded-xl">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1.3 + index * 0.1 }}
                      className="text-2xl font-bold text-primary mb-2"
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <VideoGallery />
      <ClientLogos />
      <Footer />
    </div>
  );
};

export default Index;