function msg(str1){
    console.log(str1);
}

function add(n1, n2){
    console.log(n1 + n2);
}

let box = (n3, n4) =>{
    console.log(n3 - n4);
}

//輸出
export default {
    msg: msg,
    add: add,
    box:box
};