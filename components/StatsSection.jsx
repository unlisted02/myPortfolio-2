"use client";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const StatsSection = () => {
  const stats = [
    { label: "Projects Completed", value: 15, suffix: "+" },
    { label: "Users Served", value: 500, suffix: "+" },
    { label: "Years Experience", value: 3, suffix: "+" },
    { label: "Technologies Mastered", value: 20, suffix: "+" },
  ];

  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 px-10 bg-gray-50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
            <AnimatedCounter end={stat.value} />
            {stat.suffix}
          </div>
          <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StatsSection;
