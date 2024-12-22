
function wordCount(str) {
    
    const words = str.trim().split(/\s+/);

    return words[0] === '' ? 0 : words.length;
}

module.exports = wordCount; 
