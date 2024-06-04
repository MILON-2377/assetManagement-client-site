
const userRegisterArr = [];

const handleUserRegisterData = (data) => {
    if(data){
        userRegisterArr.length = 0;
        userRegisterArr.push(data);
    }


    return userRegisterArr[0];
}

export default handleUserRegisterData;