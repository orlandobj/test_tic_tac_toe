export default {
  props: {
    currentPlayer: String,
    winner: String,
    gameOver: Boolean,
  },
  template: `
    <div class="message">
      <p v-if="!gameOver">It's {{ currentPlayer }}'s turn</p>
      <p v-if="gameOver && winner">Player {{ winner }} wins!</p>
      <p v-if="gameOver && !winner">It's a draw!</p>
    </div>
  `,
};
