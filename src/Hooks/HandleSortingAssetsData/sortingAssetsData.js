const sortingArr = [];
const sortingAssetsDataStore = (name) => {
  if (name) {
    if (name === 1) {
      sortingArr.length = 0;
    } else {
      sortingArr.length = 0;
      sortingArr.push(name);
    }
  }

  return sortingArr[0];
};

export default sortingAssetsDataStore;
