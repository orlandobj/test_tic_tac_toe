export default {
  props: {
    gameOver: Boolean,
    resetGame: Function,
  },
  template: `
    <div v-if="gameOver" class="play-again">
      <button @click="resetGame">Play Again</button>
    </div>
  `,
};
