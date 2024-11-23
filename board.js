export default {
  props: {
    board: Array,
    makeMove: Function,
  },
  template: `
    <div class="board">
      <button
        v-for="(tile, index) in board"
        :key="index"
        class="tile"
        @click="makeMove(index)"
      >
        {{ tile }}
      </button>
    </div>
  `,
};
