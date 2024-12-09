import React, { useState } from "react";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";
import { FaPuzzlePiece, FaFontAwesomeFlag } from "react-icons/fa";
import Modal from "react-modal";

Modal.setAppElement("#root");

const GamesHub = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const games = [
    {
      id: 1,
      title: "Sudoku Solver",
      description: "Solve Sudoku puzzles with ease using our advanced solver.",
      image: assets.sudoku,
      link: "/sudoku",
      icon: <FaPuzzlePiece className="text-teal-500 text-3xl" />,
      rules: `
        <h2 style="color: #0d9488; font-size: 24px; font-weight: bold; margin-bottom: 8px;">Sudoku Rules</h2>
        <ul style="color: #334155; font-size: 16px; line-height: 1.6;">
          <li>The puzzle consists of a 9x9 grid divided into 9 smaller 3x3 grids.</li>
          <li>Each row, column, and 3x3 grid must contain numbers 1 through 9 without repetition.</li>
          <li>To solve, enter numbers into the blank cells while following the rules above.</li>
          <li>Click on the cell to type in your answer. Double-check your inputs before submitting!</li>
        </ul>
      `,
    },
    {
      id: 2,
      title: "Word Maze",
      description:
        "Find your way through a maze of words and improve your vocabulary.",
      image: assets.wordgame,
      link: "/word-maze",
      icon: <FaFontAwesomeFlag className="text-blue-500 text-3xl" />,
      rules: `
        <h2 style="color: #2563eb; font-size: 24px; font-weight: bold; margin-bottom: 8px;">Word Maze Rules</h2>
        <ul style="color: #334155; font-size: 16px; line-height: 1.6;">
          <li>Find and highlight the hidden words in the maze.</li>
          <li>Words can be arranged horizontally, vertically, or diagonally.</li>
          <li>Click and drag over the letters to highlight words.</li>
          <li>Finish the maze to see your score and compete with friends!</li>
        </ul>
      `,
    },
  ];

  const openModal = (game) => {
    setSelectedGame(game);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedGame(null);
  };

  const handleStartGame = () => {
    if (selectedGame) {
      console.log(selectedGame.link);
      window.location.href = "/games" + selectedGame.link;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-100 via-indigo-100 to-cyan-100 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1
          className="text-5xl font-extrabold text-gray-800"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Games Hub
        </h1>
        <p
          className="text-lg text-gray-600 mt-4"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Choose a game and start having fun!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {games.map((game, index) => (
          <motion.div
            key={game.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Game Image */}
            <div className="h-60 relative">
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-full object-cover"
              />
              {/* Icon Overlay */}
              <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-md">
                {game.icon}
              </div>
            </div>

            {/* Game Content */}
            <div className="p-6">
              <h2
                className="text-2xl font-bold text-gray-800 mb-3"
                style={{ fontFamily: "'Roboto Slab', serif" }}
              >
                {game.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{game.description}</p>
              <motion.button
                onClick={() => openModal(game)}
                className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-lg font-medium text-lg shadow-md hover:scale-105 transform transition-transform duration-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Play Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for Game Rules */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: "600px",
            padding: "30px",
            borderRadius: "20px",
            background: "#ffffff",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
          },
        }}
      >
        {selectedGame && (
          <div>
            <h2
              className="text-3xl font-bold text-gray-800 mb-4"
              style={{ fontFamily: "'Playfair Display', serif'" }}
            >
              {selectedGame.title}
            </h2>
            <div
              dangerouslySetInnerHTML={{ __html: selectedGame.rules }}
              className="text-gray-700 text-base leading-relaxed"
            />
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={closeModal}
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
              >
                Close
              </button>
              <button
                onClick={handleStartGame}
                className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
              >
                Start
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default GamesHub;
