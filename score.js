export default {
  props: {
    scores: Object,
  },
  template: `
    <div class="score">
      <div>
        <strong>Player O:</strong> {{ scores.O }} wins
      </div>
      <div>
        <strong>Player X:</strong> {{ scores.X }} wins
      </div>
    </div>
  `,
};
