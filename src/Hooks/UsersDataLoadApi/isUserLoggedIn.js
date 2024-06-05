const userArr = [];

const isUserLoggedIN = (user) => {
  // console.log(user);
  if (user) {
    userArr.length = 0;
    userArr.push(user.email);
  }

  return userArr[0];
};


export default isUserLoggedIN;
