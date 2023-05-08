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
    console.log(1);
    if (board[y + 1] !== undefined && board[y + 1][x] !== 0 && board[y + 1][x] !== turnColor) {
      newBoard[y][x] = turnColor;

      console.log(2);
      for (let i = 0; i < 8; i++) {
        newBoard[y + i][x] = turnColor;
        console.log(3);
      }
      console.log(4);
      setTurnColor(3 - turnColor);
    }
    console.log(5);
    setBoard(newBoard);
    console.log(turnColor);
  };

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div className={styles.sell} key={`${x}-${y}`} onClick={() => clickCell(x, y)}>
              {color != 0 && (
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
