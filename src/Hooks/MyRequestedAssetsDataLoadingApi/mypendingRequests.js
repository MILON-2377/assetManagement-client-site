const myPendingRequestArr = [];
const monthlyRequstArr = [];
const myPendingRequestHandle = (data) => {

    monthlyRequstArr.length = 0;
    myPendingRequestArr.length = 0;

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();

  if (data) {
    data.filter((item) => {
      if (item.requestStatus.toLowerCase() === "pending") {
        myPendingRequestArr.push(item);
      }

      const requestedDate = new Date(item.requestDate);
    //   console.log(currentMonth === requestedDate.getMonth());
      if(requestedDate.getMonth() === currentMonth  ){
        monthlyRequstArr.push(item);
      }
      
    });

    monthlyRequstArr.sort((a,b) => new Date(a.requestDate) - new Date(b.requestDate) )
  }


  return {myPendingRequestArr, monthlyRequstArr};
};

export default myPendingRequestHandle
