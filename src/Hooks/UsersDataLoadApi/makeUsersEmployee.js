
const makeUsersEmloyeeArr = [];

const makeUsersEmployee = (name) => {
    if(name){
        makeUsersEmloyeeArr.length = 0;
        makeUsersEmloyeeArr.push(name);
    }

    return makeUsersEmloyeeArr[0];
}

export default makeUsersEmployee;