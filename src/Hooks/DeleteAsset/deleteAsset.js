
const deleteId = [];
const deleteAsset = (id) => {
    if(id){
        deleteId.length = 0;
        deleteId.push(id);
    }

    return deleteId[0];
}

export default deleteAsset