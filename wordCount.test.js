const wordCount = require('./wordCount');

describe('wordCount', () => {
  test('should count words correctly', () => {
    expect(wordCount('Andre Johann')).toEqual({ Andre: 1, Johann: 1 });
  });

  test('should return { "": 1 } for empty string', () => {
    expect(wordCount('')).toEqual({ "": 1 });
  });
});
