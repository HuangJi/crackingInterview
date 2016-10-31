var text = 'ababcabc';
var pattern = 'abcdabd';

function stringMatch(text, pattern) {
	for (var i = 0; i < text.length; i++) {
		if (i + pattern.length > text.length) {
			break;
		}
		var match = true;
		for (var j = 0; j < pattern.length; j++) {
			if (text[i + j] != pattern[j]) {
				match = false;
				break;
			}
		}
		if (match) {
			console.log('Found match in index ' + i);
		}
	}
}

function createFailureFunction(pattern) {
	m = pattern.length;
	var pi = new Array(m+1);
	var k = 0;
	pi[1] = 0;
	pi[0] = 0;
	for (var q = 2; q <= m; q++) {
		while(k > 0 && pattern[k + 1] != pattern[q]) {
			k = pi[k];
		}
		if (pattern[k + 1] == pattern[q]) {
			k++;
		}
		pi[q] = k;
	}
	return pi;
}

stringMatch(text, pattern);
console.log(createFailureFunction(pattern));