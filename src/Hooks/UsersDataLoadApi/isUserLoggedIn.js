const userArr = [];

const isUserLoggedIN = (user) => {
  if (user) {
    // console.log(user.email);
    userArr.length = 0;
    userArr.push(user.email);
  }

  return userArr[0];
};


export default isUserLoggedIN;
