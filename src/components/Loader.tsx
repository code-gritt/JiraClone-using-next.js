// components/Loader.tsx
import { motion } from "framer-motion"; // Optional: for animation (if using framer-motion)
import { FaSpinner } from "react-icons/fa"; // Optional: Spinner icon from react-icons

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full"
      >
        <FaSpinner className="w-full h-full text-blue-500 animate-spin" />
      </motion.div>
    </div>
  );
}
