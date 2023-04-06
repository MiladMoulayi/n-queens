/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other


// I - n where n is an integer representing dimensions of board n x n
// O - a solution to the board as an array of arrays
// C - None
// E - Nothing will provide a solution

// Strategy
// Place a starting piece at row 0 column 0
// place a piece next to it
// check for conflicts
// if there are no conflicts, place another piece next to that
// check for conflicts
// repeat n times until solution is found


// toggle at row:0, column:0
// toggle at row:0, column:1
// check for conflicts
// if there is a conflict, place second piece at row:0, column:2
// check for conflicts
// repeat until no conflict
// then follow same pattern for third piece
// repeat
// follow same pattern for n pieces
// push solution


window.findNRooksSolution = function(n) {
  var solutions = null;
  // initialize a new board
  var myBoard = new Board({n: n})
  var count = 0;
  var rows = myBoard.rows();
  console.log('n: ', n, 'myBoard: ', myBoard, 'myBoard.rows(): ', myBoard.rows());

  var addPieces = function (myBoard, i = 0, j = 0) {

    console.log('myBoard: ', myBoard, 'rows: ', rows);

    if (count === n) {
      console.log('myBoard.rows in conditional: ', myBoard.rows());
      solutions = (myBoard.rows());
      count = 0;
      return;
    }

    for (i = i || 0; i < rows.length; i++) {
      var currRow = rows[i];
      for (j = j || 0; j < currRow.length; j++) {
        myBoard.togglePiece(i, j);
        console.log('i: ', i, 'j: ', j)
        if ((myBoard.hasAnyRowConflicts() || myBoard.hasAnyColConflicts())) {
          return;
        }
        addPieces(myBoard, i, j + 1);
      }
    }

    for (var k = 0; k < rows.length; k++) {
      for (var l = 0; l < rows[k].length; l++) {
        console.log('k: ', k, 'l: ', l, 'rows[k][l]: ', rows[k][l]);
        if (rows[k][l] === 1) {
          count++;
          console.log('count: ', count)
        }
      }
    }

  }

  addPieces(myBoard);
  console.log('solutions at end: ', solutions);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solutions));
  return solutions;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
