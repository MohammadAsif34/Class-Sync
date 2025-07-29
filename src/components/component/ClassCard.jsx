import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ClassCard = ({ idx = 0, item = {} }) => {
  const navigate = useNavigate();

  const handleSyllabus = (id) => {
    if (!id) {
      toast.error("No Syllabus found!");
      return;
    }
    navigate(`syllabus/${id}`);
  };

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: idx * 0.1 }}
      className="group cursor-pointer mb-3 rounded-2xl border-l-4 border-emerald-400 bg-white px-4 py-3 shadow-md hover:shadow-lg transition-all"
      onClick={() => handleSyllabus(item?.subjectCode)}
    >
      <div className="flex justify-between text-xs text-gray-400">
        <p>
          {item?.subjectCode}
          {item?.credit && (
            <span className="ml-1 text-gray-300">• Credit: {item?.credit}</span>
          )}
        </p>
        <p>{item?.time}</p>
      </div>

      <div className="py-2">
        <p className="text-lg font-semibold text-gray-800 group-hover:text-emerald-500 transition-colors">
          {item?.subject}
        </p>
        <p className="text-center text-sm text-gray-500">{item?.instructor}</p>
      </div>
    </motion.li>
  );
};

export default ClassCard;
