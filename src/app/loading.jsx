import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <motion.div
        className="w-12 h-12 border-4 border-t-transparent border-yellow-500 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </div>
  );
};

export default Loading;
