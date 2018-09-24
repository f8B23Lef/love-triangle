module.exports = function getLoveTrianglesCount(preferences = []) {

  let count = 0;

  for(let i = 0, len = preferences.length; i < len; i++) {

    const a = preferences[i];
    const b = preferences[a-1];
    const c = preferences[b-1];

    const isTriangle = (c === i + 1 && a != b && a != c && b != c);
    
    if(isTriangle) {
      count++;
    }
  }

  return count/3;
};