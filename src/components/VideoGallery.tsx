import { motion } from "framer-motion";
import { Play, ArrowRight, Sparkles } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "WhatsApp 'Good Mornings'",
    duration: "01:20",
    thumbnail: "/lovable-uploads/fbb2eccf-3d33-466b-8b2c-eb151d2ee6bd.png",
    category: "Social Media"
  },
  {
    id: 2,
    title: "Kitchen Organisation",
    duration: "00:21",
    thumbnail: "/video-thumb-2.jpg",
    category: "Brand Story"
  },
  {
    id: 3,
    title: "3Soul: True To You",
    duration: "02:42",
    thumbnail: "/video-thumb-3.jpg",
    category: "Web3 Campaign"
  }
];

export const VideoGallery = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-purple-900/10" />
      
      {/* Top marquee */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <div className="marquee relative flex whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <div key={`top-${i}`} className="flex items-center space-x-4 mx-4">
              <Sparkles className="w-8 h-8 text-purple-500/50 animate-pulse" />
              <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 opacity-80 glow">
                VIDEO CAMPAIGNS
              </span>
              <ArrowRight className="w-8 h-8 text-purple-500/50" />
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C5B4E3] to-[#A594D3] animate-gradient">
                Video Campaigns
              </span>
              <div className="absolute -inset-1 bg-primary/20 rounded-lg blur-xl animate-pulse" />
            </motion.h2>
            <p className="text-xl text-muted-foreground mt-4">
              Crafting Web3 Stories That Resonate
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden glass-panel">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Play className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary mb-2 backdrop-blur-sm">
                      {video.category}
                    </span>
                    <p className="text-sm font-medium text-white/80">{video.duration}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-xl font-medium group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom marquee - moving in opposite direction with alternating text */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
        <div className="marquee relative flex whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <div key={`bottom-${i}`} className="flex items-center space-x-4 mx-4 rotate-180">
              <Sparkles className="w-8 h-8 text-purple-500/50 animate-pulse" />
              {i % 2 === 0 ? (
                <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-400 opacity-80 glow">
                  WEB3 AGENCY
                </span>
              ) : (
                <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-400 opacity-80 glow">
                  DIGITAL INNOVATION
                </span>
              )}
              <ArrowRight className="w-8 h-8 text-purple-500/50" />
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced decorative elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/30 rounded-full"
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
