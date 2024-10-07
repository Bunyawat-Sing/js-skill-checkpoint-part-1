// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
//เนื่องจากโจทย์ไม่ได้กำหนดให้สร้าง fuction จึงดำเนินการตาม code ด้านล่าง
let minQuantity = inventory[0];
for (let i=0; i<inventory.length; i++){
  if (inventory[i].quantity < minQuantity.quantity){
    minQuantity = inventory[i];
  } 

}
console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minQuantity.name} ซึ่งมี ${minQuantity.quantity} ชิ้น`)

//หรือสร้างเป็น function ดังนี้ 
//function lowestQuanlity(inventory){
//  let minQuantity = inventory[0];
//  for (let i=0; i<inventory.length; i++){
//    if (inventory[i].quantity < minQuantity.quantity){
//      minQuantity = inventory[i];
//    } 
//  }
//  return `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minQuantity.name} ซึ่งมี ${minQuantity.quantity} ชิ้น`
//}
//console.log(lowestQuanlity(inventory))