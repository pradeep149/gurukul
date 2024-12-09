import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "react-modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  generateSudoku,
  isSolutionCorrect,
  solveSudoku,
} from "../../utilities/sudokuUtils";

Modal.setAppElement("#root");

const SudokuGame = () => {
  const [originalPuzzle, setOriginalPuzzle] = useState(generateSudoku());
  const [currentPuzzle, setCurrentPuzzle] = useState(
    JSON.parse(JSON.stringify(originalPuzzle))
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [isSolutionCorrectFlag, setIsSolutionCorrectFlag] = useState(true);

  const handleCellChange = (row, col, value) => {
    if (originalPuzzle[row][col] !== 0) return;
    if (value === "" || /^[1-9]$/.test(value)) {
      const updatedPuzzle = JSON.parse(JSON.stringify(currentPuzzle));
      updatedPuzzle[row][col] = value === "" ? 0 : parseInt(value, 10);
      setCurrentPuzzle(updatedPuzzle);
    } else {
      toast.error("Please enter a valid number between 1 and 9!");
    }
  };

  const checkSolution = () => {
    const allFilled = currentPuzzle.every((row) =>
      row.every((cell) => cell !== 0)
    );

    if (!allFilled) {
      toast.error("Please fill all the cells before checking the solution!");
      return;
    }

    const correct = isSolutionCorrect(currentPuzzle);
    setIsSolutionCorrectFlag(correct);
    setModalContent(
      correct
        ? "🎉 Congratulations! You solved the Sudoku correctly!"
        : "❌ Oops! The solution is incorrect. Keep trying!"
    );
    setIsModalOpen(true);
  };

  const viewSolution = () => {
    const solvedGrid = solveSudoku([...originalPuzzle]);
    if (solvedGrid) setCurrentPuzzle(solvedGrid);
  };

  const resetPuzzle = () => {
    setCurrentPuzzle(JSON.parse(JSON.stringify(originalPuzzle)));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-100 via-indigo-100 to-cyan-100 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1
          className="text-5xl font-extrabold text-gray-800"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Sudoku Solver
        </h1>
        <p
          className="text-lg text-gray-600 mt-4"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Solve the puzzle, validate your answer, or view the solution.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div
          className="grid grid-cols-9"
          style={{
            width: "min(90vw, 500px)",
            aspectRatio: "1",
            border: "4px solid #6366f1",
            background: "#ffffff",
          }}
        >
          {currentPuzzle.map((row, rowIndex) =>
            row.map((value, colIndex) => (
              <motion.input
                key={`${rowIndex}-${colIndex}`}
                type="text"
                maxLength={1}
                value={value === 0 ? "" : value}
                onChange={(e) =>
                  handleCellChange(rowIndex, colIndex, e.target.value)
                }
                className={`w-full h-full text-center font-semibold text-lg rounded-md shadow-md ${
                  originalPuzzle[rowIndex][colIndex] !== 0
                    ? "bg-gray-300 text-gray-700"
                    : "bg-indigo-50 text-indigo-700"
                }`}
                style={{
                  outline: "none",
                  borderTop:
                    rowIndex % 3 === 0
                      ? "2px solid #6366f1"
                      : "1px solid #e2e8f0",
                  borderLeft:
                    colIndex % 3 === 0
                      ? "2px solid #6366f1"
                      : "1px solid #e2e8f0",
                  borderRight:
                    colIndex === 8
                      ? "2px solid #6366f1"
                      : colIndex % 3 === 2
                      ? "2px solid #6366f1"
                      : "1px solid #e2e8f0",
                  borderBottom:
                    rowIndex === 8
                      ? "2px solid #6366f1"
                      : rowIndex % 3 === 2
                      ? "2px solid #6366f1"
                      : "1px solid #e2e8f0",
                }}
              />
            ))
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-10 flex justify-center gap-6">
        <motion.button
          onClick={checkSolution}
          className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Check Solution
        </motion.button>
        <motion.button
          onClick={viewSolution}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
        >
          View Solution
        </motion.button>
        <motion.button
          onClick={resetPuzzle}
          className="px-6 py-3 bg-gray-500 text-white rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Reset Puzzle
        </motion.button>
      </div>

      {/* Modal for Feedback */}
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
            background: isSolutionCorrectFlag ? "#d4f5d4" : "#fdd4d4",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <h2
          className={`text-2xl font-bold ${
            isSolutionCorrectFlag ? "text-green-800" : "text-red-800"
          } mb-4`}
        >
          {modalContent}
        </h2>
        <button
          onClick={() => setIsModalOpen(false)}
          className={`px-4 py-2 ${
            isSolutionCorrectFlag ? "bg-green-500" : "bg-red-500"
          } text-white rounded-lg hover:scale-105 transform transition-transform duration-300`}
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default SudokuGame;
