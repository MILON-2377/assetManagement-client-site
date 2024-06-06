
const unAffiliatedUserArr = [];

const affiliatedUsers = (name) => {
    if(name){
        unAffiliatedUserArr.length = 0;
        unAffiliatedUserArr.push(name);
    }

    return unAffiliatedUserArr[0];
}

export default affiliatedUsers;