import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [turnColor, setTurnColor] = useState(1);
  // prettier-ignore
  const [board,setBoard]=useState([
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,1,2,0,0,0],
[0,0,0,2,1,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],


]);
  const count_stone = (color: number) => {
    let count = 0;
    for (const row of board) {
      for (const cell of row) {
        if (color === cell) {
          count++;
        }
      }
    }
    return count;
  };
  const clickCell = (x: number, y: number) => {
    const newBoard: number[][] = JSON.parse(JSON.stringify(board));
    const directions = [
      [-1, 0], // 上
      [-1, 1], // 右上
      [0, 1], // 右
      [1, 1], // 右下
      [1, 0], // 下
      [1, -1], // 左下
      [0, -1], // 左
      [-1, -1], // 左上
    ];

    for (const direction of directions) {
      const dy = direction[0];
      const dx = direction[1];
      if (
        board[y + dy] !== undefined &&
        board[y + dy][x + dx] !== undefined &&
        board[y + dy][x + dx] !== 0 &&
        board[y + dy][x + dx] !== turnColor &&
        board[y][x] === 0
      ) {
        for (
          let i = 1;
          y + i * dy >= 0 &&
          y + i * dy < board.length &&
          x + i * dx >= 0 &&
          x + i * dx < board.length;
          i++
        ) {
          if (board[y + i * dy][x + i * dx] === turnColor) {
            newBoard[y][x] = turnColor;
            for (let j = 1; j < i; j++) {
              newBoard[y + j * dy][x + j * dx] = turnColor;
            }
            setTurnColor(3 - turnColor);
            break;
          }
        }
        for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
          for (let cellIndex = 0; cellIndex < board[rowIndex].length; cellIndex++) {
            if (
              board[rowIndex + dy] !== undefined &&
              board[rowIndex + dy][cellIndex + dx] !== undefined &&
              board[rowIndex + dy][cellIndex + dx] !== 0 &&
              board[rowIndex + dy][cellIndex + dx] !== turnColor &&
              board[rowIndex][cellIndex] === 0
            ) {
              newBoard[rowIndex][cellIndex] = -1;
            }
          }
        }
      }
    }
    setBoard(newBoard);
  };

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div className={styles.sell} key={`${x}-${y}`} onClick={() => clickCell(x, y)}>
              {color !== 0 && (
                <div
                  className={styles.stone}
                  style={{ background: color === 1 ? '#000' : color === 2 ? '#fff' : '#ff0' }}
                />
              )}
            </div>
          ))
        )}
      </div>
      <div>{turnColor === 1 ? '黒のターン' : '白のターン'}</div>
      <div>
        黒{count_stone(1)} 白{count_stone(2)}
      </div>
    </div>
  );
};

export default Home;
