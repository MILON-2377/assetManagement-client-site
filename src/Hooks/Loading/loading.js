
const loadingArr = [];
const isLoading = (name) => {
    if(name){
        loadingArr.length = 0;
        loadingArr.push(name);
    }

    return loadingArr[0];
}

export default isLoading;