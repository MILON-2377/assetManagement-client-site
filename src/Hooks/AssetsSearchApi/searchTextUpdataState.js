const assetNames = [];
const searhTextUpdate = (name) => {
  if (name) {
    if (name === 1) {
      assetNames.length = 0;
    } else {
      assetNames.length = 0;
      assetNames.push(name);
    }
  }

  // console.log(assetNames);
  return assetNames[0];
};

export default searhTextUpdate;
