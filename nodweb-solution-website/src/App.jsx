import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <div className="fixed inset-0 w-screen h-screen flex flex-col items-center justify-center px-4 bg-white dark:bg-gray-900">
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-8"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white drop-shadow-lg text-center">
          NODWEB-SOLUTION-PROJECT
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-600 dark:text-gray-300 text-center max-w-2xl">
          A modern web solution starter using React, Vite, Tailwind CSS, and
          Framer Motion.
        </p>
      </motion.div>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        className="flex flex-col md:flex-row gap-6 items-center justify-center"
      >
        <a
          href="https://github.com/Prajwal270/NODWEB-SOLUTION-PROJECT"
          target="_blank"
          rel="noopener noreferrer"
          className=" dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl px-8 py-4 text-gray-900 dark:text-white font-semibold text-xl shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          View on GitHub
        </a>
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="dark:bg-gray-800  border border-blue-700 rounded-xl px-8 py-4 text-white font-semibold text-xl shadow-lg hover:bg-blue-700 transition"
        >
          Learn Tailwind CSS
        </a>
      </motion.div>
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        className="mt-16 text-center"
      >
        <p className="text-gray-400 text-lg">
          Start building your awesome project!
        </p>
      </motion.div>
    </div>
  );
}

export default App;
