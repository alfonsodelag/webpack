export default class Number {
    constructor(num){
        this.EvenOdd = this.getEvenOrOdd(num);
        this.Prime = this.isPrime(num);

    }

    // //Checks if number is Odd or Even
    getEvenOrOdd(num){
        (num%2 == 0) ? `${num} is an even number` : `${num} is an odd number`;
        // if(num%2 == 0){
        //     return `${num} is an even number`;
        // }else{
        //     return `${num} is an odd number`;
        // }
    }

    // //Checks if number is prime
    isPrime(num){
        for(let i = 2; i < num; i++)
        if(num % i === 0) return `${num} is not a prime number`;
        return `${num} is a prime number`;
    }

}