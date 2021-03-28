function fizzbuzz(num){
    let divisible = (divisor) => {return num % divisor == 0}
    if(num == 0)
        return "error, no se puede mandar un cero";
    if(divisible(3) && divisible(5))
        return "fizzbuzz"
    if(divisible(3))
        return "fizz";
    if(divisible(5))
        return "buzz";
    return num;
}

function print(numLimite, inicio = 0){
        console.log(`${inicio}:${fizzbuzz(inicio)}.`)
        if(inicio < numLimite)
            print(numLimite, ++inicio);
}

print(16);

module.exports = fizzbuzz;