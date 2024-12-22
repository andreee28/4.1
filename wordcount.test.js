
const wordCount = require('./wordcount');

test('5 kata', () => {
    const result = wordCount('  Nama   Saya Andre      Johann Jonnius');
    expect(result).toBe(5); 
});

test('0 kata', () => {
    const result = wordCount('');
    expect(result).toBe(0);
});

test('3 Kata"', () => {
    const result = wordCount('Andre Johann   Jonnius');
    expect(result).toBe(3); 
});
