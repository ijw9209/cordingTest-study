const specificStrRemove = require('./specificStrRemove');

test('특정 문자 제거하기 CASE 1', () => {
  expect(specificStrRemove("abcdef", "f")).toBe("abcde");
});

test('특정 문자 제거하기 CASE 2', () => {
    expect(specificStrRemove("BCBdbe", "B")).toBe("Cdbe");
});