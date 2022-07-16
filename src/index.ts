function add(n1: number, n2: number, show: boolean , pharse: string){
    if(show){
        console.log(pharse + (n1 + n2))
    }
    return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;
const show = true;
const pharse = 'test ts:';

add(number1, number2, show, pharse); 