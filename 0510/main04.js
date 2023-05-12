// 取得預設輸出資料
import x from './lib04.js';
console.log(x);
// 取得非預設輸出資料
import { obj, arr } from './lib04.js';
console.log(`obj=>${obj.x},${obj.y}`);
console.log(`arr=>${arr[0]},${arr[1]},${arr[2]}`);
console.log(obj);
