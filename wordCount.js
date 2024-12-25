function wordCount(text) {
    const words = text.split(/\s+/);
    const wordCounts = {};

    // Hitung jumlah kemunculan setiap kata
    words.forEach(word => {
        if (wordCounts[word]) {
            wordCounts[word]++;
        } else {
            wordCounts[word] = 1;
        }
    });

    return wordCounts;
}
module.exports = wordCount;