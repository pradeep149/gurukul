import React, { useState, useEffect, useRef } from "react";

const FULL_DICTIONARY = [
  "CAT",
  "DOG",
  "LAW",
  "COURT",
  "ATTORNEY",
  "JUDGE",
  "BBA",
  "BUSINESS",
  "ADMIN",
  "FELINE",
  "KITTEN",
  "LEGAL",
  "TRIAL",
  "STATUTE",
  "CLIENT",
  "MARKETING",
  "FINANCE",
  "ACCOUNT",
  "POLICY",
  "FUR",
  "WHISKERS",
  "LAWSUIT",
  "JURY",
  "CLAUSE",
  "LEGISLATION",
  "OFFENSE",
  "DEFENSE",
  "TORT",
  "BREACH",
  "BREED",
  "LITTER",
  "PURR",
  "MEOW",
  "PROFIT",
  "ENTREPRENEUR",
  "STRATEGY",
  "LITIGATION",
  "CONTRACT",
  "AGREEMENT",
  "COMPLAINT",
  "SUMMONS",
  "VERDICT",
  "SENTENCE",
  "APPEAL",
  "MISDEMEANOR",
  "FELONY",
  "INJUNCTION",
  "EQUITY",
  "BINDING",
  "OPTION",
  "BACHELOR",
  "BUSINESSLAW",
  "ECONOMICS",
  "STATISTICS",
  "EVIDENCE",
  "WITNESS",
  "TRUST",
  "ESCROW",
  "LEASH",
  "GRADUATE",
  "SCHOLAR",
  "COLLEGE",
  "SUBPOENA",
  "CODE",
  "ARTICLE",
  "GUARDIAN",
  "NOTARY",
  "PATENT",
  "COPYRIGHT",
  "TRADEMARK",
  "RIGHTS",
  "ADVOCATE",
  "SOLICITOR",
  "PLAINTIFF",
  "DEFENDANT",
  "JURIS",
  "MAJESTY",
  "GAVEL",
  "LAWYER",
  "COUNSEL",
  "BAR",
  "ASSOCIATION",
  "PROSECUTOR",
  "PUBLIC",
  "ORDER",
  "CLAIM",
  "HEARING",
  "MOTION",
  "BILL",
  "PROJECT",
  "MODULE",
  "LECTURE",
  "NETWORK",
  "THEORY",
  "PRESENTATION",
  "GROUP",
  "PROPOSAL",
  "MANAGEMENT",
  "EXAM",
  "CERTIFICATE",
  "SUBJECT",
  "FACULTY",
];

function WordMage() {
  const [grid, setGrid] = useState([]);
  const [selectedWords, setSelectedWords] = useState([]);
  const [foundWords, setFoundWords] = useState([]);
  const [startCell, setStartCell] = useState(null);
  const [endCell, setEndCell] = useState(null);
  const [showFailPopup, setShowFailPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [timeLeft, setTimeLeft] = useState(180);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [placedWordsData, setPlacedWordsData] = useState([]);
  const [toastMessage, setToastMessage] = useState("");
  const failPopupRef = useRef(null);
  const successPopupRef = useRef(null);

  useEffect(() => {
    const storedExpiration = localStorage.getItem("wordMageExpiration");
    const storedPuzzle = localStorage.getItem("wordMagePuzzle");
    if (storedExpiration) {
      const expiration = parseInt(storedExpiration, 10);
      const now = Math.floor(Date.now() / 1000);
      const remaining = expiration - now;
      if (remaining > 0 && storedPuzzle) {
        const parsedPuzzle = JSON.parse(storedPuzzle);
        setGrid(parsedPuzzle.grid);
        setPlacedWordsData(parsedPuzzle.placedWordsData);
        setFoundWords(parsedPuzzle.foundWords);
        setSelectedWords(parsedPuzzle.selectedWords || []);
        setGameStarted(parsedPuzzle.gameStarted);
        setGameFinished(parsedPuzzle.gameFinished);
        setTimeLeft(parsedPuzzle.timeLeft);
      } else if (remaining > 0) {
        setTimeLeft(remaining);
        setGameStarted(true);
      } else {
        setTimeLeft(0);
        setGameFinished(true);
        setShowFailPopup(true);
      }
    }
  }, []);

  useEffect(() => {
    let timerInterval;
    if (gameStarted && !gameFinished && timeLeft > 0) {
      timerInterval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerInterval);
            handleTimeUp();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerInterval);
  }, [gameStarted, gameFinished, timeLeft]);

  useEffect(() => {
    if (gameStarted && timeLeft > 0 && !gameFinished) {
      const now = Math.floor(Date.now() / 1000);
      const expiration = now + timeLeft;
      localStorage.setItem("wordMageExpiration", expiration.toString());
      const puzzleState = {
        grid,
        placedWordsData,
        foundWords,
        selectedWords,
        gameStarted,
        gameFinished,
        timeLeft,
      };
      localStorage.setItem("wordMagePuzzle", JSON.stringify(puzzleState));
    }
    if (gameFinished) {
      localStorage.removeItem("wordMagePuzzle");
    }
  }, [
    grid,
    placedWordsData,
    foundWords,
    selectedWords,
    gameStarted,
    gameFinished,
    timeLeft,
  ]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        showFailPopup &&
        failPopupRef.current &&
        !failPopupRef.current.contains(e.target)
      ) {
        setShowFailPopup(false);
      }
      if (
        showSuccessPopup &&
        successPopupRef.current &&
        !successPopupRef.current.contains(e.target)
      ) {
        setShowSuccessPopup(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showFailPopup, showSuccessPopup]);

  function generateNewGrid() {
    const chosenWords = pickRandomWords(FULL_DICTIONARY, 10);
    setSelectedWords(chosenWords);
    let newGrid = Array.from({ length: 10 }, () =>
      Array.from({ length: 10 }, () => "")
    );
    const wordDataList = [];
    for (let word of chosenWords) placeWordInGrid(newGrid, word, wordDataList);
    for (let r = 0; r < 10; r++) {
      for (let c = 0; c < 10; c++) {
        if (newGrid[r][c] === "") newGrid[r][c] = getRandomLetter();
      }
    }
    setPlacedWordsData(wordDataList);
    setGrid(newGrid);
    setFoundWords([]);
  }

  function pickRandomWords(dict, count) {
    let shuffled = [...dict].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count).map((w) => w.toUpperCase());
  }

  function getRandomLetter() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return letters[Math.floor(Math.random() * letters.length)];
  }

  function placeWordInGrid(grid, word, wordDataList) {
    const size = 10;
    const wordLength = word.length;
    for (let attempt = 0; attempt < 200; attempt++) {
      const startRow = Math.floor(Math.random() * size);
      const startCol = Math.floor(Math.random() * size);
      const directions = [
        { dr: 0, dc: 1 },
        { dr: 0, dc: -1 },
        { dr: 1, dc: 0 },
        { dr: -1, dc: 0 },
        { dr: 1, dc: 1 },
        { dr: -1, dc: -1 },
        { dr: 1, dc: -1 },
        { dr: -1, dc: 1 },
      ];
      const dir = directions[Math.floor(Math.random() * directions.length)];
      const endRow = startRow + dir.dr * (wordLength - 1);
      const endCol = startCol + dir.dc * (wordLength - 1);
      if (endRow < 0 || endRow >= size || endCol < 0 || endCol >= size)
        continue;
      let canPlace = true;
      const path = [];
      for (let i = 0; i < wordLength; i++) {
        const checkRow = startRow + dir.dr * i;
        const checkCol = startCol + dir.dc * i;
        const existingChar = grid[checkRow][checkCol];
        path.push({ row: checkRow, col: checkCol });
        if (existingChar !== "" && existingChar !== word[i]) {
          canPlace = false;
          break;
        }
      }
      if (!canPlace) continue;
      for (let i = 0; i < wordLength; i++) {
        const placeRow = startRow + dir.dr * i;
        const placeCol = startCol + dir.dc * i;
        grid[placeRow][placeCol] = word[i];
      }
      wordDataList.push({ word, found: false, path });
      return;
    }
  }

  function handleCellClick(row, col) {
    if (!startCell) {
      setStartCell({ row, col });
      setEndCell(null);
    } else if (!endCell) {
      setEndCell({ row, col });
      validateSelection(startCell, { row, col });
    } else {
      setStartCell({ row, col });
      setEndCell(null);
    }
  }

  function validateSelection(start, end) {
    const { row: r1, col: c1 } = start;
    const { row: r2, col: c2 } = end;
    const dr = r2 - r1;
    const dc = c2 - c1;
    if (r1 !== r2 && c1 !== c2 && Math.abs(dr) !== Math.abs(dc)) {
      showToast("Not in the same line!");
      return;
    }
    const length = Math.max(Math.abs(dr), Math.abs(dc)) + 1;
    const stepR = dr === 0 ? 0 : dr / Math.abs(dr);
    const stepC = dc === 0 ? 0 : dc / Math.abs(dc);
    let builtString = "";
    let curRow = r1;
    let curCol = c1;
    for (let i = 0; i < length; i++) {
      builtString += grid[curRow][curCol];
      curRow += stepR;
      curCol += stepC;
    }
    const reversedString = builtString.split("").reverse().join("");
    const idx = placedWordsData.findIndex(
      (wd) =>
        !wd.found && (wd.word === builtString || wd.word === reversedString)
    );
    if (idx === -1) {
      showToast("No match!");
      return;
    }
    const newData = [...placedWordsData];
    newData[idx].found = true;
    setPlacedWordsData(newData);
    if (!foundWords.includes(newData[idx].word)) {
      setFoundWords([...foundWords, newData[idx].word]);
    }
    setStartCell(null);
    setEndCell(null);
    if (foundWords.length + 1 === 10) handleGameSuccess();
  }

  function showToast(message) {
    setToastMessage(message);
    setTimeout(() => setToastMessage(""), 2000);
  }

  function handleTimeUp() {
    setGameFinished(true);
    localStorage.removeItem("wordMageExpiration");
    const allRevealed = placedWordsData.map((w) => ({ ...w, found: true }));
    setPlacedWordsData(allRevealed);
    setFoundWords(selectedWords);
    setShowFailPopup(true);
  }

  function handleGameSuccess() {
    setGameFinished(true);
    localStorage.removeItem("wordMageExpiration");
    setShowSuccessPopup(true);
  }

  function startNewGame() {
    generateNewGrid();
    setTimeLeft(180);
    setShowFailPopup(false);
    setShowSuccessPopup(false);
    setGameStarted(true);
    setGameFinished(false);
    localStorage.removeItem("wordMageExpiration");
    localStorage.removeItem("wordMagePuzzle");
  }

  function goBack() {
    alert("Going back to the previous page...");
  }

  function handleStartGameClick() {
    startNewGame();
  }

  function formatTime(t) {
    const minutes = Math.floor(t / 60);
    const seconds = t % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }

  function isCellInFoundPath(row, col) {
    let inFoundPath = false;
    placedWordsData.forEach((wd) => {
      if (wd.found) {
        wd.path.forEach((p) => {
          if (p.row === row && p.col === col) inFoundPath = true;
        });
      }
    });
    return inFoundPath;
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-100 via-cyan-100 to-indigo-100 flex flex-col items-center justify-start px-2 py-6 font-sans relative">
      <h1 className="mt-4 text-3xl md:text-4xl font-bold text-gray-800">
        Word Mage
      </h1>
      {!gameStarted && (
        <button
          className="px-4 py-2 mt-4 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-800 transition"
          onClick={handleStartGameClick}
        >
          Start Game
        </button>
      )}
      {gameStarted && !gameFinished && (
        <div className="text-xl mt-4 font-bold text-purple-600">
          Time Left: {formatTime(timeLeft)}
        </div>
      )}
      {gameStarted && (
        <div className="inline-block my-4 max-w-full overflow-auto">
          {grid.map((rowArr, rowIndex) => (
            <div className="flex justify-center" key={rowIndex}>
              {rowArr.map((cellVal, colIndex) => {
                let isSelectedStart =
                  startCell &&
                  startCell.row === rowIndex &&
                  startCell.col === colIndex;
                let isSelectedEnd =
                  endCell &&
                  endCell.row === rowIndex &&
                  endCell.col === colIndex;
                let isFoundHighlight = isCellInFoundPath(rowIndex, colIndex);
                return (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className={
                      "md:w-12 md:h-12 w-9 h-9 border border-gray-400 flex items-center justify-center m-[1px] " +
                      "cursor-pointer select-none transition-transform hover:scale-105 " +
                      (isSelectedStart ? "bg-red-200 " : "") +
                      (isSelectedEnd ? "bg-green-200 " : "") +
                      (isFoundHighlight ? "bg-green-300 " : "bg-white ")
                    }
                    onClick={() => handleCellClick(rowIndex, colIndex)}
                  >
                    {cellVal}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      )}
      {gameStarted && (
        <div className="mb-6 text-center">
          <h2 className="text-xl font-semibold">
            Words Found ({foundWords.length}/10)
          </h2>
          <div className="flex flex-wrap justify-center mt-2 max-w-md mx-auto">
            {foundWords.map((w, idx) => (
              <div
                key={idx}
                className="bg-green-100 border-green-300 border m-1 px-2 py-1 rounded line-through"
              >
                {w}
              </div>
            ))}
          </div>
        </div>
      )}
      {showFailPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div
            ref={failPopupRef}
            className="bg-white p-6 rounded text-center relative w-80 animate-fadeIn"
          >
            <h2 className="text-2xl text-red-600 font-bold mb-4">Time’s Up!</h2>
            <img
              src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
              alt="Fail GIF"
              className="mx-auto mb-4 w-24"
            />
            <p className="mb-2">You couldn’t find all the words in time.</p>
            <h3 className="font-semibold mb-2">Correct Answers:</h3>
            <ul className="list-disc list-inside text-sm">
              {selectedWords.map((w, idx) => (
                <li key={idx}>{w}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {showSuccessPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div
            ref={successPopupRef}
            className="bg-white p-6 rounded text-center relative w-80 animate-fadeIn"
          >
            <h2 className="text-2xl text-green-600 font-bold mb-4">
              Congratulations!
            </h2>
            <img
              src="https://media.giphy.com/media/111ebonMs90YLu/giphy.gif"
              alt="Success GIF"
              className="mx-auto mb-4 w-24"
            />
            <p>You found all 10 words in time!</p>
          </div>
        </div>
      )}
      {gameFinished && (
        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          <button
            onClick={goBack}
            className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-800 transition"
          >
            Go Back
          </button>
          <button
            onClick={startNewGame}
            className="px-4 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-800 transition"
          >
            New Game
          </button>
        </div>
      )}
      {toastMessage && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white py-2 px-4 rounded animate-fadeInOut">
          {toastMessage}
        </div>
      )}
    </div>
  );
}

export default WordMage;
