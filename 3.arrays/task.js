const compareArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);


function getUsersNamesInAgeRange(users, gender) {
  const arr = [...users];
  let result = arr.filter(user => user.gender === gender).map(user => user.age).reduce((acc, item, index, array) => {
    acc += item;
    if(index === array.length - 1) {
      return acc / array.length;
    }
    return acc;
  }, 0).toFixed(1);
  return parseFloat(result);
}