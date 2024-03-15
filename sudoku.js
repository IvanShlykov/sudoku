const { match } = require('assert');

function read() {
  const fs = require('fs');
  const puzzles = fs.readFileSync('./puzzles.txt', 'utf-8');
  return puzzles;
}

function solve() {
  const { EOL } = require('os');
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
  console.log(arrBoard);
  const first = arrBoard[0];
  console.table(first);



  const matches = []
  const matchRow = [];
  const matchColumn = [];
  const matchCub = [];
  const reg = /-/g

  for (let i = 0; i < first.length; i += 1) {
    matches.push(first[i].join('').match(reg).length);
  }
  console.log(matches);
  const iMin = matches.indexOf(Math.min(...matches))
  console.log(iMin);

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
