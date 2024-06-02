
const assetNames = [];
const searhTextUpdate = (name) => {
    if(name !== undefined){
        assetNames.length = 0;
        assetNames.push(name);
    }
    // {assetName: assetNames[0]}
    return assetNames;
}

export default searhTextUpdate;