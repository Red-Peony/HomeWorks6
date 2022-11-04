function parseCount(quantityOfGoods) {
    if (isNaN(parseInt(quantityOfGoods, 10))) {
        console.log("выбросили");
        throw new Error("Невалидное значение");
        
    }
    console.log("вернули " + parseInt(quantityOfGoods, 10)); 
    return parseInt(quantityOfGoods, 10);
        
}

function validateCount(quantityOfGoods) {
    try {
        console.log("вызвали"); 
        return parseCount(quantityOfGoods);
    } catch (error) {
        console.log("перехватили");
        return error;
        
    }
    
}

validateCount(125);
validateCount('123');
validateCount('kl');
    