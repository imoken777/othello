import { useState } from 'react';
import styles from './index.module.css';
//オセロを作っています

const Home = () => {
  const [turnColor, setTurnColor] = useState(1);
  // prettier-ignore
  const [board,setBoard]=useState([
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,3,0,0,0,0],
[0,0,3,2,1,0,0,0],
[0,0,0,1,2,3,0,0],
[0,0,0,0,3,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
]);
  const countStone = (color: number) => {
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

  const threeToZero = (newBoard: number[][]) => {
    newBoard.map((row, y) =>
      row.map((cell, x) => {
        if (cell === 3) {
          newBoard[y][x] = 0;
        }
      })
    );
    return newBoard;
  };

  const check = (board: number[][], x: number, y: number, turnColor: number) => {
    const newBoard: number[][] = JSON.parse(JSON.stringify(board));
    for (const row of newBoard) {
      for (const cell of row) {
        if (cell === 3) {
          newBoard[y][x] = 0;
        }
      }
    }
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

    const isValidMove = (
      board: number[][],
      x: number,
      y: number,
      dx: number,
      dy: number,
      turnColor: number
    ): boolean => {
      return (
        board[y + dy] !== undefined &&
        board[y + dy][x + dx] !== undefined &&
        board[y + dy][x + dx] !== 0 &&
        board[y + dy][x + dx] !== turnColor &&
        board[y][x] === 0
      );
    };

    const findLengthToTurnColor = (
      board: number[][],
      x: number,
      y: number,
      dx: number,
      dy: number,
      turnColor: number
    ): number => {
      let length = 1;
      for (
        let i = 1;
        y + i * dy >= 0 &&
        y + i * dy < board.length &&
        x + i * dx >= 0 &&
        x + i * dx < board.length;
        i++
      ) {
        if (board[y + i * dy][x + i * dx] === 0 || board[y + i * dy][x + i * dx] === 3) {
          return -1; // 空のセルがある場合は-1を返す
        }
        if (board[y + i * dy][x + i * dx] === turnColor) {
          console.log(length);
          return length;
        }
        length++;
      }
      return -1;
    };

    const checkValidMoves = (turnColor: number) => {
      for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[y].length; x++) {
          if (newBoard[y][x] === 0) {
            for (const [dy, dx] of directions) {
              if (isValidMove(board, x, y, dx, dy, turnColor)) {
                const length = findLengthToTurnColor(board, x, y, dx, dy, turnColor);
                if (length > 0) {
                  newBoard[y][x] = 3; // 石を置ける場所は3とする
                  break;
                }
              }
            }
          }
        }
      }
    };
    checkValidMoves(3 - turnColor);
    setBoard(newBoard);
  };
  const clickCell = (x: number, y: number) => {
    const newBoard: number[][] = JSON.parse(JSON.stringify(board));
    threeToZero(newBoard);
    if (board[y][x] !== 3) {
      // 石を置ける場所でなければ何もしない
      return;
    }
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

    const isValidMove = (
      board: number[][],
      x: number,
      y: number,
      dx: number,
      dy: number,
      turnColor: number
    ): boolean => {
      return (
        (board[y + dy] !== undefined &&
          board[y + dy][x + dx] !== undefined &&
          board[y + dy][x + dx] !== 0 &&
          board[y + dy][x + dx] !== turnColor &&
          board[y][x] === 0) ||
        board[y][x] === 3
      );
    };

    const findLengthToTurnColor = (
      board: number[][],
      x: number,
      y: number,
      dx: number,
      dy: number,
      turnColor: number
    ): number => {
      let length = 1;
      for (
        let i = 1;
        y + i * dy >= 0 &&
        y + i * dy < board.length &&
        x + i * dx >= 0 &&
        x + i * dx < board.length;
        i++
      ) {
        if (board[y + i * dy][x + i * dx] === 0 || board[y + i * dy][x + i * dx] === 3) {
          return -1; // 空のセルがある場合は-1を返す
        }
        if (board[y + i * dy][x + i * dx] === turnColor) {
          console.log(length);
          return length;
        }
        length++;
      }
      return -1;
    };

    const flipDisks = (
      board: number[][],
      x: number,
      y: number,
      dx: number,
      dy: number,
      length: number,
      turnColor: number
    ) => {
      for (let j = 1; j < length; j++) {
        newBoard[y + j * dy][x + j * dx] = turnColor;
      }
    };

    let isMoveMade = false;
    for (const [dy, dx] of directions) {
      if (isValidMove(board, x, y, dx, dy, turnColor)) {
        const length = findLengthToTurnColor(board, x, y, dx, dy, turnColor);
        if (length > 0) {
          isMoveMade = true;
          flipDisks(board, x, y, dx, dy, length, turnColor);
        }
      }
    }
    if (isMoveMade) {
      newBoard[y][x] = turnColor;
      setTurnColor(3 - turnColor); // すべての石が裏返された後にターンを切り替え
    }
    setBoard(newBoard);
    check(newBoard, x, y, turnColor);
    console.table(newBoard);
  };

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div className={styles.cell} key={`${x}-${y}`} onClick={() => clickCell(x, y)}>
              {color !== 0 && (
                <div
                  className={styles.stone}
                  style={{
                    background: color === 1 ? '#000' : color === 2 ? '#fff' : '#ff0',
                    width: color === 3 ? '30px' : '70px',
                    height: color === 3 ? '30px' : '70px',
                  }}
                />
              )}
            </div>
          ))
        )}
      </div>
      <div>{turnColor === 1 ? '黒のターン' : '白のターン'}</div>
      <div>
        黒{countStone(1)} 白{countStone(2)}
      </div>
    </div>
  );
};

export default Home;
