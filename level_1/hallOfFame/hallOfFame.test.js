const hallOfFame = require('./hallOfFame');

test('명예의 전당 1번 Case ', () => {
  expect(hallOfFame(3,[10, 100, 20, 150, 1, 100, 200])).toBe([10, 10, 10, 20, 20, 100, 100]);
});


test('명예의 전당 2번 Case ', () => {
  expect(hallOfFame(4,[0, 300, 40, 300, 20, 70, 150, 50, 500, 1000])).toBe([0, 0, 0, 0, 20, 40, 70, 70, 150, 300]);
});

