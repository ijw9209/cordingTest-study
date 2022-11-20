const ternaryReverse = require('./secretMap');

test('비밀지도 1번 Case ', () => {
  expect(secretMap(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])).toEqual(["#####","# # #", "### #", "# ##", "#####"]);
});

test('비밀지도 2번 Case ', () => {
  expect(secretMap(6, [46, 33, 33 ,22, 31, 50], [27 ,56, 19, 14, 14, 10])).toEqual(["######", "### #", "## ##", " #### ", " #####", "### # "]);
});



