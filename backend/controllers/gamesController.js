import { log } from "console";
import Sudoku from "../utils/suduku.js";


export const generateSuduku = async (req, res) => {
  try {
    var defaultDiff = 45;
    const { difficulty } = req.body;
    let sudoku = new Sudoku((difficulty)? (difficulty<20)? defaultDiff: difficulty: defaultDiff);
    sudoku.fillValues();
    res.status(200).json({ grid: sudoku.TojsonString(), message: "Suduku generated successfully", difficulty: difficulty });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
