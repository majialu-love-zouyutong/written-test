var arr = [1, 2, 5, 7, 8];
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr.length; j++) {
    if (arr[i] + arr[j] == 12) {
      console.log(i, j);
    }
  }
}
