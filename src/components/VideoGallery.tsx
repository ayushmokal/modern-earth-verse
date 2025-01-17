import { motion } from "framer-motion";
import { Play, ArrowRight, Sparkles, Code2, Laptop, Blocks } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Web3 Development",
    description: "Full-stack web3 development for smart contracts",
    duration: "01:20",
    thumbnail: "/lovable-uploads/fbb2eccf-3d33-466b-8b2c-eb151d2ee6bd.png",
    category: "Blockchain"
  },
  {
    id: 2,
    title: "DeFi Platform",
    description: "Decentralized finance platform with seamless UX",
    duration: "02:15",
    thumbnail: "/video-thumb-2.jpg",
    category: "DeFi"
  },
  {
    id: 3,
    title: "NFT Marketplace",
    description: "Custom NFT marketplace with advanced features",
    duration: "03:42",
    thumbnail: "/video-thumb-3.jpg",
    category: "NFT"
  },
  {
    id: 4,
    title: "Smart Contract Audit",
    description: "Security audit and optimization services",
    duration: "01:55",
    thumbnail: "/video-thumb-4.jpg",
    category: "Security"
  }
];

export const VideoGallery = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-black/90">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>
      
      {/* Top marquee */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <div className="marquee relative flex whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <div key={`top-${i}`} className="flex items-center space-x-4 mx-4">
              <Code2 className="w-8 h-8 text-orange-500/80 animate-pulse" />
              <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 opacity-90 glow">
                CRAFTING WEB3
              </span>
              <ArrowRight className="w-8 h-8 text-orange-500/80" />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <div className="inline-block">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-4 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600 animate-gradient">
                Selected Works
              </span>
              <div className="absolute -inset-1 bg-orange-500/20 rounded-lg blur-xl animate-pulse" />
            </motion.h2>
            <p className="text-xl text-gray-400 mt-4">
              Transforming ideas into digital reality
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <div className="relative rounded-xl overflow-hidden glass-panel border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-orange-500/20 text-orange-400 mb-3 backdrop-blur-sm">
                      {video.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {video.description}
                    </p>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Play className="w-4 h-4" />
                      <span className="text-sm">{video.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
        <div className="marquee relative flex whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <div key={`bottom-${i}`} className="flex items-center space-x-4 mx-4 rotate-180">
              <Blocks className="w-8 h-8 text-orange-500/80 animate-pulse" />
              <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 opacity-90 glow">
                DIGITAL THINGS
              </span>
              <ArrowRight className="w-8 h-8 text-orange-500/80" />
            </div>
          ))}
        </div>
      </div>

      {/* Floating elements */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-orange-500/30 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2 + i,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </section>
  );
};