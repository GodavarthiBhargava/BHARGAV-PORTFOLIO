import styles from "../style";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <motion.div
      id="loading"
      className={`w-[100vw] h-[100vh] flex ${styles.flexCenter} bg-primary`}
      initial={{ scale: 1.0, opacity: 0.25 }}
      animate={{ scale: 2.2, opacity: 0.75 }}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <div className="text-white text-6xl font-bold font-poppins">
        <span className="text-gradient">G Bhargava</span>
      </div>
    </motion.div>
  );
};

export default Loading;
