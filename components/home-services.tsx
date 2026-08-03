"use client";

import { motion } from "framer-motion";
import { Activity, Brain, Baby, Heart, Users, Home, Zap } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Services() {
  const whatsappNumber = "923260341216"; // Your WhatsApp number with country code

  const services = [
    {
      icon: Activity,
      title: "Orthopedic Rehab",
      description:
        "Orthopedic rehabilitation focuses on restoring movement, strength, and function after injuries or surgery.",
    },
    {
      icon: Brain,
      title: "Neuro Rehabilitation",
      description:
        "Specialized therapy for neurological conditions to improve mobility, balance, and daily function.",
    },
    {
      icon: Baby,
      title: "Pediatric Rehab",
      description:
        "Helping children build strength, coordination, and independence through tailored rehab programs.",
    },
    {
      icon: Heart,
      title: "Women's Health Rehab",
      description:
        "Antenatal, postnatal, and pelvic health rehabilitation designed specifically for women.",
    },
    {
      icon: Users,
      title: "Geriatric Rehab",
      description:
        "Focused care to improve mobility, balance, and independence in older adults.",
    },
    {
      icon: Zap,
      title: "Post-Surgery Rehab",
      description:
        "Accelerated recovery plans to restore function and reduce complications after surgery.",
    },
    {
      icon: Home,
      title: "Home Rehabilitation",
      description:
        "Professional physiotherapy services delivered safely and comfortably at your home.",
    },
  ];

  const handleWhatsApp = (serviceTitle: string) => {
    const message = `Hello! I am interested in your ${serviceTitle} service.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="text-sm font-semibold tracking-widest uppercase opacity-90"
          >
            Treatments
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mt-4 mb-8"
          >
            Our Physiotherapy Services
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg leading-relaxed max-w-4xl opacity-95"
          >
            At MedAlign, we provide evidence-based physiotherapy services
            designed to restore movement, relieve pain, and improve quality of
            life. Every treatment plan is personalized to help you recover
            stronger, safer, and faster.
          </motion.p>
        </motion.div>

        {/* Top Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid md:grid-cols-4 gap-6 mb-6"
        >
          {services.slice(0, 4).map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="bg-white text-foreground p-8 shadow-md hover:shadow-xl transition"
              >
                <Icon
                  className="w-12 h-12 text-primary mb-6"
                  strokeWidth={1.5}
                />
                <h3 className="text-xl font-bold mb-4 text-primary">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <motion.button
                  whileHover={{ x: 6 }}
                  className="text-primary font-semibold text-sm hover:underline"
                  onClick={() => handleWhatsApp(service.title)}
                >
                  Explore More →
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-6"
        >
          {services.slice(4).map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="bg-white text-foreground p-8 shadow-md hover:shadow-xl transition"
              >
                <Icon
                  className="w-12 h-12 text-primary mb-6"
                  strokeWidth={1.5}
                />
                <h3 className="text-xl font-bold mb-4 text-primary">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <motion.button
                  whileHover={{ x: 6 }}
                  className="text-primary font-semibold text-sm hover:underline"
                  onClick={() => handleWhatsApp(service.title)}
                >
                  Explore More →
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
