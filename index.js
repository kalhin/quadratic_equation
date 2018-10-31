// Квадратне рівняння
// ax2+bx+c=0, 
// D=b2-4ac    якщо D>0
// x1=(-b-/D)/2a
//          якщо D=0
// х=-b/2a
//          якщо  D<0
// рівняння немає розв'язку

const a = parseInt(prompt('Enter number "a"'));
const b = parseInt(prompt('Enter number "b"'));
const c = parseInt(prompt('Enter number "c"'));

const discriminant = Math.pow(b, 2) - 4 * a * c;

function countQuadrat() {
    if (discriminant > 0) {
        const firstSolution = [];
        firstSolution.push((- b + Math.sqrt(discriminant)) / (2 * a));
        firstSolution.push((- b - Math.sqrt(discriminant)) / (2 * a));
        return('x1 = ' + firstSolution[0].toFixed(2) + '  x2 = ' + firstSolution[1].toFixed(2));
    } else if (discriminant === 0){
        return('x = ' + (- b / 2 * a).toFixed(2));
    } else {
        return('Has no solution');
    }
}

alert(countQuadrat());