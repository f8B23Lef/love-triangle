/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

  	var loveTrianglesArr = [];

    for(var i = 0; i < preferences.length; i++) {

		var a = preferences[i];
		if(a > preferences.length) continue;

		var b = preferences[a-1];
		if(b > preferences.length) continue;

		var c = preferences[b-1];
		if(c > preferences.length) continue;

		var isTriangle = (a == preferences[c-1] && a != b && a != c && b != c);

		if(isTriangle) {

			var curLoveTriangleArr = [a, b, c].sort(function(a, b) {
				return a - b
			});
	
			if(loveTrianglesArr.length == 0) {
				loveTrianglesArr.push(curLoveTriangleArr);
			} else {
				if(!containsArray(loveTrianglesArr, curLoveTriangleArr)) {
					loveTrianglesArr.push(curLoveTriangleArr);
				}
			}	
		}
	}
  return loveTrianglesArr.length;
};

function containsArray(bigArr, targetArr) {

	for(var i = 0; i < bigArr.length; i++) {
		var equal = true;
		for(var j = 0; j < targetArr.length; j++) {
			if (bigArr[i][j] != targetArr[j]) {
				equal = false;
				break;
			}
		}
		
		if(equal) {
			return true;
		}
	}
	return false;
}