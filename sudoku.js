function read() {
  const fs = require('fs')
  const puzzles = fs.readFileSync('./puzzles.txt', 'utf-8')
  return puzzles


  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
}
 read()
function solve() {
  // const txt = read();
  const arrTxt = txt.split('\n');
  const p = 0;
}

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
