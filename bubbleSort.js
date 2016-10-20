'use strict'

var list = [12, 9, 15, 3, 1, 19, 2, 83, 20];

function bubbleSort(list) {
	for (var i = 0; i < list.length - 1; i++) {
		for (var j = 0; j < list.length - 1 - i; j++) {
			if (list[j] > list[j + 1]) {
				var temp = list[j];
				list[j] = list[j + 1];
				list[j + 1] = temp;
			}
		}
	}
	return list;
}

// console.log(bubbleSort(list));

const sort = (arr) => {
  const l = arr.length;
  for (let i = 0; i < l; i++) {
    for (let j = i; j < l; j++) {
      if (arr[j] > arr[j + 1]) {
        const t = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = t;
      }
    }
  }

  return arr;
};

console.log(sort(list));
