
const searchTextNameArr = [];
const searchTextNameHook = (name) => {
    if(name){
        searchTextNameArr.length = 0;
        searchTextNameArr.push(name);
    }


    return searchTextNameArr[0];
}

export default searchTextNameHook;