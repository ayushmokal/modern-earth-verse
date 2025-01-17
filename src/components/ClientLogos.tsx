import { motion } from "framer-motion";

const clients = [
  { name: "IKEA", logo: "/client-1.png" },
  { name: "HyperX", logo: "/client-2.png" },
  { name: "Titan", logo: "/client-3.png" },
  { name: "Licious", logo: "/client-4.png" }
];

export const ClientLogos = () => {
  return (
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Our Visionary Clients
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {clients.map((client) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center"
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};