
const pageArr = [];


const handlePaginationPage = (page) => {
    if(page >= 0){
        // console.log(page);
        pageArr.length = 0;
        pageArr.push(page);
    }
    return pageArr[0];
};



export default handlePaginationPage;