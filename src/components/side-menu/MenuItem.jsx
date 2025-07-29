import { motion } from "framer-motion";

const MenuItem = ({ key, label, icon, onClick }) => {
  return (
    <>
      <motion.li
        key={key}
        className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-emerald-50 cursor-pointer transition-all text-sm"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
      >
        <i className={` ${icon} text-emerald-500`}></i>
        {label}
      </motion.li>
    </>
  );
};
export default MenuItem;
