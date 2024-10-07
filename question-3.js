// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(userPassword) {
  if (userPassword.length < 6) {
    return "Weak";
  } else if (userPassword.length > 10) {
    return "Strong";
  } else {
    return "Medium";
  }
}
console.log(checkPasswordStrength("ssswnalWadqQ"));
console.log(checkPasswordStrength("TechUp"));
console.log(checkPasswordStrength("abcde"));
