import { motion } from "framer-motion";

const clients = [
  { name: "IKEA", logo: "/client-1.png" },
  { name: "HyperX", logo: "/client-2.png" },
  { name: "Titan", logo: "/client-3.png" },
  { name: "Licious", logo: "/client-4.png" }
];

export const ClientLogos = () => {
  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-500/5 to-background" />
      
      <div className="container mx-auto px-4 relative">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400"
        >
          Our Visionary Clients
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="relative h-12 object-contain opacity-70 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};