import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { notes } from "../../assets/notes"; // your notes data
import { Navigate, useNavigate } from "react-router-dom";

const Notes = () => {
  const navigate = useNavigate();
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

const NotesCard = ({ note, idx = 0 }) => {
  const url =
    "https://res.cloudinary.com/dzgy0hfu1/image/upload/fl_attachment/v1753918246/Class-Sync/Notes_media/thdbgdpkr3jgx3mtytmj.pdf";
  return (
    <>
      <motion.li
        whileHover={{ scale: 1.01 }}
        className="px-2 py-1 border-b border-gray-300 flex justify-between items-center hover:shadow-md transition"
      >
        {/* Title */}
        <div className="text-sm text-gray-500">
          <span className="mr-2">{idx + 1}.</span>
          <span>{note.title}</span>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          {/* View Button (opens in same tab) */}
          <a
            href={url}
            className="px-2 py-1 text-blue-500 hover:bg-blue-50 rounded-md transition"
            title="View"
          >
            <i className="fa-solid fa-eye"></i>
          </a>

          {/* Download Button */}
          <a
            href={url}
            download
            className="px-2 py-1 text-emerald-500 hover:bg-emerald-50 rounded-md transition"
            title="Download"
          >
            <i className="fa-solid fa-download"></i>
          </a>
        </div>
      </motion.li>
    </>
  );
};
