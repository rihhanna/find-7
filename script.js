// Good Luck 💪🏾
function findSeven(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].toString().includes('7')) {
        return 'Found!';
      }
    }
    return 'there is no 7 in the array';
  }
  