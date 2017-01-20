import shuffle from './shuffle';

let arrMaker = () => {
  let num = 9;
  let arr = [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]];
  for (let i = num; i > 0 ; i--) {
    if (arr[0][0] < 5) {
      arr[0][0] += 1;
    }
    else {
      i++;
    }
    arr = shuffle(arr);
  }
  for (let i = num - 1; i > 0 ; i--) {
    if (arr[0][0] + arr[0][1] < 5) {
      arr[0][1] += 1;
    }
    else {
      i++;
    }
    arr = shuffle(arr);
  }
  for (let i = 1; i > 0 ; i--) {
    if (arr[0][0] + arr[0][1] < 5) {
      arr[0][2] += 1;
    }
    else {
      i++;
    }
    arr = shuffle(arr);
  }
  return arr
  .map((row) => {
    return [row[0], row[1], row[2], 5 - row[0] - row[1] - row[2]];
  });
};

export default arrMaker;
