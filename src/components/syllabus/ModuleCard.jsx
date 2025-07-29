import { motion } from "framer-motion";

const ModuleCard = ({ item, idx }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: idx * 0.1 }}
      className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-300"
    >
      <div className="mb-2">
        <p className="text-xs text-emerald-500 font-semibold uppercase tracking-wide">
          {item?.a}
        </p>
        <h2 className="text-lg font-bold text-gray-500">{item?.b}</h2>
      </div>
      <p className="text-sm text-gray-500 leading-relaxed">{item?.c}</p>
    </motion.div>
  );
};

export default ModuleCard;
