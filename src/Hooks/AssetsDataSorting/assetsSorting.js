
const sortingArr = [];

const handleSortingArr = (name) => {
    if(name){
        sortingArr.length = 0;
        sortingArr.push(name);
    }


    return sortingArr[0];
};

export default handleSortingArr;