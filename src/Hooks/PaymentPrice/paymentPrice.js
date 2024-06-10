
const priceArr = [];
const paymentPriceArr = (price) => {
    if(price){
        priceArr.length = 0;
        priceArr.push(price);
    }


    return priceArr[0];
}

export default paymentPriceArr;