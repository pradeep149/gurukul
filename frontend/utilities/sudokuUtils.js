/**
 * Generates a new random Sudoku puzzle with a unique solution.
 */
export const generateSudoku = () => {
  const solvedSudoku = generateSolvedSudoku();
  const puzzle = removeRandomCells([...solvedSudoku]);
  return puzzle;
};

/**
 * Validates whether the given Sudoku grid is solved correctly.
 */
export const isSolutionCorrect = (grid) => {
  for (let row = 0; row < 9; row++) {
    if (!isValidRow(grid, row) || !isValidColumn(grid, row)) return false;
  }
  return isValidSubgrids(grid);
};

/**
 * Solves the Sudoku puzzle using backtracking.
 */
export const solveSudoku = (grid) => {
  const solvedGrid = [...grid.map((row) => [...row])];
  if (solve(solvedGrid)) return solvedGrid;
  return null; // If no solution exists
};

/**
 * Generates a solved Sudoku grid using backtracking.
 */
const generateSolvedSudoku = () => {
  const grid = Array(9)
    .fill(0)
    .map(() => Array(9).fill(0));
  solve(grid);
  return grid;
};

/**
 * Removes random cells from a solved Sudoku to create a puzzle.
 */
const removeRandomCells = (grid) => {
  const puzzle = [...grid.map((row) => [...row])];
  let cellsToRemove = 40; // Number of cells to remove for a medium difficulty level

  while (cellsToRemove > 0) {
    const row = Math.floor(Math.random() * 9);
    const col = Math.floor(Math.random() * 9);

    if (puzzle[row][col] !== 0) {
      puzzle[row][col] = 0;
      cellsToRemove--;
    }
  }

  return puzzle;
};

/**
 * Checks whether a row is valid.
 */
const isValidRow = (grid, row) => {
  const seen = new Set();
  for (let col = 0; col < 9; col++) {
    const value = grid[row][col];
    if (value === 0) continue; // Skip empty cells
    if (seen.has(value)) return false;
    seen.add(value);
  }
  return true;
};

/**
 * Checks whether a column is valid.
 */
const isValidColumn = (grid, col) => {
  const seen = new Set();
  for (let row = 0; row < 9; row++) {
    const value = grid[row][col];
    if (value === 0) continue; // Skip empty cells
    if (seen.has(value)) return false;
    seen.add(value);
  }
  return true;
};

/**
 * Checks whether all 3x3 subgrids are valid.
 */
const isValidSubgrids = (grid) => {
  for (let row = 0; row < 9; row += 3) {
    for (let col = 0; col < 9; col += 3) {
      if (!isValidSubgrid(grid, row, col)) return false;
    }
  }
  return true;
};

/**
 * Checks whether a specific 3x3 subgrid is valid.
 */
const isValidSubgrid = (grid, startRow, startCol) => {
  const seen = new Set();
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const value = grid[startRow + row][startCol + col];
      if (value === 0) continue; // Skip empty cells
      if (seen.has(value)) return false;
      seen.add(value);
    }
  }
  return true;
};

/**
 * Solves the Sudoku using backtracking.
 */
const solve = (grid) => {
  const emptyCell = findEmptyCell(grid);
  if (!emptyCell) return true; // No empty cells, solution found

  const [row, col] = emptyCell;

  for (let num = 1; num <= 9; num++) {
    if (isValidPlacement(grid, row, col, num)) {
      grid[row][col] = num;

      if (solve(grid)) return true;

      grid[row][col] = 0; // Backtrack
    }
  }

  return false;
};

/**
 * Finds the next empty cell in the grid.
 */
const findEmptyCell = (grid) => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (grid[row][col] === 0) return [row, col];
    }
  }
  return null;
};

/**
 * Checks whether placing a number is valid.
 */
const isValidPlacement = (grid, row, col, num) => {
  return (
    isValidRowPlacement(grid, row, num) &&
    isValidColPlacement(grid, col, num) &&
    isValidSubgridPlacement(grid, row, col, num)
  );
};

/**
 * Validates row placement.
 */
const isValidRowPlacement = (grid, row, num) => {
  return !grid[row].includes(num);
};

/**
 * Validates column placement.
 */
const isValidColPlacement = (grid, col, num) => {
  return !grid.some((row) => row[col] === num);
};

/**
 * Validates 3x3 subgrid placement.
 */
const isValidSubgridPlacement = (grid, row, col, num) => {
  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;

  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      if (grid[startRow + r][startCol + c] === num) return false;
    }
  }
  return true;
};
