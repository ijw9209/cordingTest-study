const minRectangle = require('./minRectangle');

test('최소직사각형 1번 Case ', () => {
  expect(minRectangle([[60, 50], [30, 70], [60, 30], [80, 40]])).toBe(4000);
});


test('최소직사각형 2번 Case ', () => {
  expect(minRectangle([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]])).toBe(120);
});
test('최소직사각형 3번 Case ', () => {
  expect(minRectangle([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]])).toBe(133);
});


