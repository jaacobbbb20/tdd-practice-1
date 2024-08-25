function wordFilter(words) {
    const result = [];
    for (const word of words) {
      if (!word.endsWith('er')) {
        result.push(word);
      }
    }
    return result;
  }
  
  module.exports = wordFilter;
  