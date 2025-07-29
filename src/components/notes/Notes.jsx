import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { notes } from "../../assets/notes"; // your notes data

const Notes = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto ">
        {notes?.map((subject, idx) => (
          <SubjectCard key={subject._id || idx} subject={subject} />
        ))}
      </div>
    </>
  );
};

export default Notes;
const SubjectCard = ({ subject }) => {
  const [openSubjectId, setOpenSubjectId] = useState(null);
  const handleToggle = (id) => {
    setOpenSubjectId(openSubjectId === id ? null : id);
  };
  return (
    <motion.div
      layout
      className="border border-gray-300 shadow-md overflow-hidden"
    >
      <button
        onClick={() => handleToggle(subject?._id)}
        className="w-full flex justify-between items-center px-5 py-2 border-b border-gray-300 bg-gray-50 text-emerald-700 font-semibold hover:bg-emerald-100 transition"
      >
        <span>{subject.name}</span>
        <i
          className={`fa-solid ${
            openSubjectId == subject?._id ? "fa-chevron-up" : "fa-chevron-down"
          }`}
        ></i>
      </button>

      <AnimatePresence>
        {openSubjectId && (
          <motion.div
            key="notes-list"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white   "
          >
            {subject.notes?.length > 0 ? (
              <ul className="">
                {subject.notes.map((note, idx) => (
                  <NotesCard key={idx} note={note} idx={idx} />
                ))}
              </ul>
            ) : (
              <p className="py-2 text-center text-sm text-gray-400 italic ">
                <i className="fa-solid fa-circle-exclamation text-yellow-500 mr-2"></i>
                Oops! No notes found.
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
const NotesCard = ({ note, idx = 0 }) => (
  <motion.li
    whileHover={{ scale: 1.01 }}
    className="px-2 py-1 border-b border-gray-300 flex justify-between items-center hover:shadow-md transition"
  >
    <div className="text-sm text-gray-500">
      <span className="mr-2">{idx+1}.</span>
      <span>{note.title}</span>
    </div>
    <a
      href={note.url}
      download
      className="px-1 text-emerald-400 rounded-lg hover:bg-gray-100"
    >
      <i className="fa-solid fa-download"></i>
    </a>
  </motion.li>
);
