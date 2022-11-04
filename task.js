// Задача 1.
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
    
//Задача 2.
class Triangle {
    constructor(firstSide, secondSide, thirdSide) {
        if ( (firstSide + secondSide) < thirdSide || (secondSide + thirdSide) < firstSide || (firstSide + thirdSide) < secondSide) {
            throw new Error("Треугольник с такими сторонами не существует");
        }

        this.firstSide = firstSide;
        this.secondSide = secondSide;
        this.thirdSide = thirdSide;
    }

    getPerimeter() {
        return Math.round((this.firstSide + this.secondSide + this.thirdSide)*1000)/1000;
    }

    getArea() {
        let p = 1/2 * this.getPerimeter();
        return Math.round(Math.sqrt (p*(p-this.firstSide)*(p-this.secondSide)*(p-this.thirdSide))*1000)/1000;
    }
}

function getTriangle(firstSide, secondSide, thirdSide) {
    try {
        return new Triangle(firstSide, secondSide, thirdSide);
    } catch {
        return {
            getArea: () => "Ошибка! Треугольник не существует",
            getPerimeter: () => "Ошибка! Треугольник не существует",
        };
    }
}
