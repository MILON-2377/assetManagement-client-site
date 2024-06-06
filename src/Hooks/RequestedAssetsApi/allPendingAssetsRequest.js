const pendingRequest = [];
const topMostRequestedAssets = [];

const pendingAssetsRequests = (name) => {
  if (name) {
    // console.log(name);
    pendingRequest.length = 0;
    topMostRequestedAssets.length = 0;
    name.filter((item) => {
      if (item.requestStatus === "pending") {
        pendingRequest.push(item);
      }
      
    });
  }

  return pendingRequest;
};


export default pendingAssetsRequests;
