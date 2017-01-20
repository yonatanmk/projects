let arrMaker = () => {
  let num = 9;
  let arr = [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]];
  for (let i = num; i > 0 ; i--) {
    arr[0][0] += 1;
    console.log(arr)
    console.log(arr[0])
    arr = shuffle(arr);

  }
  //prepare for edge case where row has all red
  console.log('########################################')
  for (let i = num - 1; i > 0 ; i--) {
    if (arr[0][0] + arr[0][1] < 5) {
      arr[0][1] += 1;
      console.log(arr)
      console.log(arr[0])
      arr = shuffle(arr);
    }
    else {
      i++
    }
  }
  // for (let i = 1; i > 0 ; i--) {
  //   if (arr[0][0] + arr[0][1] < 5) {
  //     arr[0][2] += 1;
  //     arr = shuffle(arr);
  //   }
  //   else {
  //     i++
  //   }
  // }
  return arr
  // .map((row) => {
  //   return [row[0], row[1], row[2], 5 - row[0] - row[1] - row[2]]
  // });
};

function shuffle(a) {
    let j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a;
}

let a = [1,2,3,4,5,6];

arrMaker();
