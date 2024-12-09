import { log } from "console";
import Sudoku from "../utils/suduku.js";


//save rhe game ans in db for fast retrieval 

export const generateSuduku = async (req, res) => {
  try {
    var defaultDiff = 45;
    const { difficulty } = req.body;
    let uid = Date.now().toString() + ((difficulty)?difficulty:defaultDiff).toString() 
    let sudoku = new Sudoku((difficulty)? difficulty: defaultDiff);
    sudoku.fillValues();
    const ans = soduku.TojsonString();
    soduku.removeKDigits();
    const grid = soduku.TojsonString();
    res.status(200).json({ grid: grid, message: "Suduku generated successfully", difficulty: difficulty });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

