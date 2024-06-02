const idArr = [];

const reqIdUpdate = (id) => {
  if (id) {
    idArr.length = 0;
    idArr.push(id);
  }

  return {_id:idArr[0]};
};
export default reqIdUpdate;
