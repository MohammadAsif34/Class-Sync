import React from "react";
import { motion } from "framer-motion";
import Header2 from "../components/component/Header2";
import { useParams } from "react-router-dom";

const PdfViewer = () => {
  const { id } = useParams();
  const pdfUrl = `https://res.cloudinary.com/dzgy0hfu1/image/upload/v1753912924/Class-Sync/Notes_media/${id}`;
  return (
    <>
      <div className=" mx-auto min-w-xs max-w-md  h-screen bg-[#FDFCFA] overflow-hidden relative">
        {/* header  */}
        <div className="w-full pt-10 bg-emerald-500 ">
          <Header2 />
        </div>
        {/* content  */}
        {/* <div className="w-full h-screen border bg-gradient-to-br from-white to-emerald-50 flex flex-col items-center justify-center max-sm:px-4"> */}
        <motion.div
          className="max-sm:w-full h-[calc(100vh-90px)]  "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* <motion.h2
            className="text-center text-2xl font-bold text-emerald-600 mb-4 max-sm:text-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            {/* 📄 PDF Viewer 
          </motion.h2> */}

          <motion.div
            className="w-full h-full overflow-hidden bg-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <iframe
              src={pdfUrl}
              title="PDF Preview"
              className="w-full h-full "
            />
          </motion.div>
        </motion.div>
        {/* </div> */}
      </div>
    </>
  );
};

export default PdfViewer;
