import { motion } from "framer-motion";

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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Video Campaigns</h2>
          <p className="text-muted-foreground">Crafting stories that resonate</p>
        </motion.div>

        <div className="flex overflow-x-auto space-x-6 pb-6">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              whileHover={{ scale: 1.02 }}
              className="flex-none w-80"
            >
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-sm font-medium">{video.duration}</p>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-medium">{video.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};