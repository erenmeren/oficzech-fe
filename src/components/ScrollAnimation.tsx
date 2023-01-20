import { motion } from "framer-motion";

const ScrollAnimation = ({ children }: any) => {
  const variants = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.8 }}
      variants={item}
    >
      <motion.div variants={variants}>{children}</motion.div>
    </motion.div>
  );
};

export default ScrollAnimation;
