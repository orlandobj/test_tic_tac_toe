import Board from './board.js';
import Message from './message.js';
import PlayAgain from './playAgain.js';
import Score from './score.js';
import useGameSetup from './gameSetup.js';

const App = {
  components: { Board, Message, PlayAgain, Score },
  setup() {
    const { currentPlayer, board, gameOver, winner, scores, makeMove, resetGame } = useGameSetup();

    return { currentPlayer, board, gameOver, winner, scores, makeMove, resetGame };
  },
  template: `
    <div class="game">
      <Score :scores="scores" />
      <Board :board="board" :makeMove="makeMove" />
      <Message :currentPlayer="currentPlayer" :winner="winner" :gameOver="gameOver" />
      <PlayAgain :gameOver="gameOver" :resetGame="resetGame" />
    </div>
  `,
};

Vue.createApp(App).mount('#app');
