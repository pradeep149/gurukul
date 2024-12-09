import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Modal from "react-modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

Modal.setAppElement("#root");

const wordList = [
  "APPLE",
  "ORANGE",
  "BANANA",
  "MANGO",
  "PEACH",
  "PEAR",
  "PLUM",
  "BERRY",
  "GRAPE",
  "CHERRY",
  "LEMON",
  "KIWI",
  "FIG",
  "DATES",
  "GUAVA",
  "LIME",
  "MELON",
  "OLIVE",
];

const generateRandomLetter = () =>
  String.fromCharCode(65 + Math.floor(Math.random() * 26));

const generateWordMaze = () => {
  const grid = Array(10)
    .fill(null)
    .map(() => Array(10).fill(null).map(generateRandomLetter));
  const selectedWords = [];

  while (selectedWords.length < 10) {
    const word = wordList[Math.floor(Math.random() * wordList.length)];
    if (!selectedWords.includes(word)) {
      selectedWords.push(word);
    }
  }

  selectedWords.forEach((word) => {
    const direction = Math.floor(Math.random() * 3); // 0: Horizontal, 1: Vertical, 2: Diagonal
    const wordLength = word.length;

    let row, col, fits;

    do {
      fits = true;
      row = Math.floor(Math.random() * 10);
      col = Math.floor(Math.random() * 10);

      if (direction === 0 && col + wordLength <= 10) {
        for (let i = 0; i < wordLength; i++) {
          if (grid[row][col + i] !== word[i] && grid[row][col + i] !== null) {
            fits = false;
            break;
          }
        }
        if (fits) {
          for (let i = 0; i < wordLength; i++) {
            grid[row][col + i] = word[i];
          }
        }
      } else if (direction === 1 && row + wordLength <= 10) {
        for (let i = 0; i < wordLength; i++) {
          if (grid[row + i][col] !== word[i] && grid[row + i][col] !== null) {
            fits = false;
            break;
          }
        }
        if (fits) {
          for (let i = 0; i < wordLength; i++) {
            grid[row + i][col] = word[i];
          }
        }
      } else if (
        direction === 2 &&
        row + wordLength <= 10 &&
        col + wordLength <= 10
      ) {
        for (let i = 0; i < wordLength; i++) {
          if (
            grid[row + i][col + i] !== word[i] &&
            grid[row + i][col + i] !== null
          ) {
            fits = false;
            break;
          }
        }
        if (fits) {
          for (let i = 0; i < wordLength; i++) {
            grid[row + i][col + i] = word[i];
          }
        }
      }
    } while (!fits);
  });

  return { grid, selectedWords };
};

const WordMazeGame = () => {
  const [grid, setGrid] = useState([]);
  const [selectedWords, setSelectedWords] = useState([]);
  const [userWords, setUserWords] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes

  useEffect(() => {
    const { grid, selectedWords } = generateWordMaze();
    setGrid(grid);
    setSelectedWords(selectedWords);
    setUserWords([]);
    setTimeLeft(180);
  }, []);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setModalContent("⏰ Time's up! You failed to find all the words.");
      setIsModalOpen(true);
    }
  }, [timeLeft]);

  const handleWordSubmit = (word) => {
    if (selectedWords.includes(word) && !userWords.includes(word)) {
      setUserWords((prev) => [...prev, word]);
      if (userWords.length + 1 === selectedWords.length) {
        setModalContent("🎉 Congratulations! You found all the words.");
        setIsModalOpen(true);
      }
    } else {
      toast.error("Invalid word or already submitted!");
    }
  };

  const handleCellSelect = (row, col) => {
    const selectedCell = `${row}-${col}`;
    // Implement logic to track selected letters and form words
    // TODO: Extend this functionality
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-100 via-indigo-100 to-cyan-100 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1
          className="text-5xl font-extrabold text-gray-800"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Word Maze
        </h1>
        <p
          className="text-lg text-gray-600 mt-4"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Find all 10 hidden words in the maze before the time runs out!
        </p>
        <p className="text-red-500 font-semibold mt-2">
          Time Left: {timeLeft}s
        </p>
      </div>
      <div className="grid grid-cols-10 gap-1 max-w-2xl mx-auto bg-white p-4 rounded-lg shadow-lg">
        {grid.map((row, rowIndex) =>
          row.map((letter, colIndex) => (
            <motion.div
              key={`${rowIndex}-${colIndex}`}
              className="flex items-center justify-center w-10 h-10 bg-indigo-100 text-gray-800 font-semibold text-lg rounded shadow-md cursor-pointer hover:bg-indigo-300"
              onClick={() => handleCellSelect(rowIndex, colIndex)}
              whileHover={{ scale: 1.1 }}
            >
              {letter}
            </motion.div>
          ))
        )}
      </div>

      <div className="mt-6 text-center">
        <h3 className="text-lg font-bold mb-4">Your Words</h3>
        <div className="flex justify-center gap-2 flex-wrap">
          {userWords.map((word, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-green-200 text-green-800 rounded-lg shadow-md"
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: "400px",
            padding: "20px",
            borderRadius: "20px",
            background: "#ffffff",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {modalContent}
        </h2>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Restart
        </button>
      </Modal>
    </div>
  );
};

export default WordMazeGame;
