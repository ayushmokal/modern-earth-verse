import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "WhatsApp 'Good Mornings'",
    duration: "01:20",
    thumbnail: "/video-thumb-1.jpg"
  },
  {
    id: 2,
    title: "Kitchen Organisation",
    duration: "00:21",
    thumbnail: "/video-thumb-2.jpg"
  },
  {
    id: 3,
    title: "3Soul: True To You",
    duration: "02:42",
    thumbnail: "/video-thumb-3.jpg"
  }
];

export const VideoGallery = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
            Video Campaigns
          </h2>
          <p className="text-xl text-muted-foreground">Crafting stories that resonate</p>
        </motion.div>

        <div className="flex overflow-x-auto space-x-8 pb-8 px-4">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              whileHover={{ scale: 1.02 }}
              className="flex-none w-80"
            >
              <div className="relative rounded-2xl overflow-hidden group">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                      <Play className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-sm font-medium text-white/80">{video.duration}</p>
                  </div>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-medium">{video.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};