const fs = require('fs');
const { EOL } = require('os');

function read() {
  const puzzles = fs.readFileSync('./puzzles.txt', 'utf-8');
  return puzzles;
}

function solve() {
  const txt = read().trim();
  const arrT = txt.split(EOL);
  const arrBoard = [];

  for (let k = 0; k < 15; k += 1) {
    const board = [];
    let j = 0;
    for (let i = 0; i < 9; i += 1) {
      board[i] = arrT[k].slice(j, j + 9).split('');
      j += 9;
    }
    arrBoard[k] = board;
  }
  console.table(arrBoard);
  const first = arrBoard[0];
  console.table(first);

  for (let q = 0; q < 50; q += 1) {
    const reg = /-/g;
    const matches = [];

    for (let i = 0; i < first.length; i += 1) {
      matches.push((first[i].join('').match(reg) || []).length);
    }
    for (let i = 0; i < 9; i += 1) {
      if (matches[i] === 0) matches[i] = 10;
    }
    console.log(matches);
    const iMin = matches.indexOf(Math.min(...matches));

    for (let j = 0; j < 9; j += 1) {
      const matchRow = [];
      const matchColumn = [];
      const matchCub = [];

      if (!isNaN(+first[iMin][j])) continue;
      for (let i = 1; i <= 9; i += 1) {
        if (!first[iMin].join('').includes(i)) matchRow.push(i);
      }
      // console.log(matchRow);

      const column = [];
      for (let i = 0; i < 9; i += 1) {
        if (isNaN(+first[iMin][j])) column.push(first[i][j]);
      }
      // console.log(column);
      for (let i = 1; i <= 9; i += 1) {
        if (!column.join('').includes(i)) matchColumn.push(i);
      }
      // console.log(matchColumn);
      const temp = [];
      for (let i = 0; i < 9; i += 1) {
        if (matchColumn.includes(i) && matchRow.includes(i)) {
          temp.push(i);
        }
      }
      if (temp.length === 1) {
        first[iMin][j] = temp[0].toString();
        j = 0;
      }
    }
  }

  console.table(first);
}

solve();

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
