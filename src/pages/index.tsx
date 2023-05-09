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
  const clickCell = (x: number, y: number) => {
    console.log(x, y);
    const newBoard: number[][] = JSON.parse(JSON.stringify(board));

    if (
      board[y + 1] !== undefined &&
      board[y + 1][x] !== 0 &&
      board[y + 1][x] !== turnColor &&
      board[y][x] === 0
    ) {
      for (let i = y + 1; i < board.length; i++) {
        if (board[i][x] === turnColor) {
          newBoard[y][x] = turnColor;
          for (let j = y + 1; j < i; j++) {
            newBoard[j][x] = turnColor;
          }
          setTurnColor(3 - turnColor);
        }
      }
    }

    if (
      board[y - 1] !== undefined &&
      board[y - 1][x] !== 0 &&
      board[y - 1][x] !== turnColor &&
      board[y][x] === 0
    ) {
      for (let i = y - 1; i >= 0 && i < board.length; i = i - 1) {
        if (board[i][x] === turnColor) {
          newBoard[y][x] = turnColor;
          for (let j = y - 1; j > i; j = j - 1) {
            newBoard[j][x] = turnColor;
          }
          setTurnColor(3 - turnColor);
        }
      }
    }
    console.log(turnColor);
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
                  style={{ background: color === 1 ? '#000' : '#fff' }}
                />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
