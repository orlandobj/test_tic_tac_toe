const { ref } = Vue;

export default function useGameSetup() {
  const currentPlayer = ref(Math.random() < 0.5 ? 'O' : 'X');

  const board = ref(Array(9).fill(null));
  const gameOver = ref(false);
  const winner = ref(null);
  const scores = ref({ O: 0, X: 0 });

  const switchTurn = () => {
    currentPlayer.value = currentPlayer.value === 'O' ? 'X' : 'O';
  };

  const checkWin = () => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (board.value[a] && board.value[a] === board.value[b] && board.value[a] === board.value[c]) {
        winner.value = board.value[a];
        scores.value[winner.value]++;
        gameOver.value = true;
        return;
      }
    }

    if (board.value.every((tile) => tile)) {
      gameOver.value = true;
    }
  };

  const makeMove = (index) => {
    if (!board.value[index] && !gameOver.value) {
      board.value[index] = currentPlayer.value;
      checkWin();
      if (!gameOver.value) switchTurn();
    }
  };

  const resetGame = () => {
    board.value = Array(9).fill(null);
    gameOver.value = false;
    winner.value = null;
    currentPlayer.value = Math.random() < 0.5 ? 'O' : 'X';
  };

  return { currentPlayer, board, gameOver, winner, scores, makeMove, resetGame };
}
