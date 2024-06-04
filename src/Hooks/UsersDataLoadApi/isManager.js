const mangerArr = [];

const isManagerHandle = (manager) => {
  if (manager) {
    mangerArr.length = 0;
    mangerArr.push(manager);
  }

  return mangerArr[0];
};

export default isManagerHandle;
