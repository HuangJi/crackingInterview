var list = [12, 9, 15, 3, 1, 19, 2, 83, 20];

function selectionSort(list) {
	for (var i = 0; i < list.length; i++) {
		for (var j = i + 1; j < list.length; j++) {
			if (list[j] < list[i]) {
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
		}
	}
	return list;
}

console.log(selectionSort(list));