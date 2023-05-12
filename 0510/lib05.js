let add = (n1, n2) => {
    console.log(n1 + n2);
}

let mul = (n1, n2) => {
    console.log(n1 * n2);
}
let x = 5;

let city = ['台北市','桃園市'];

let math = {
    add:add,
    mul:mul,
    city:city
};

export default math;

export {mul, x};