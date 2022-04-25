/**
 * input: 3 số nguyên
 * 
 * process:
 *  1. Lấy input var num1, num1, num3 gán giá trị là 3 số nguyên tương ứng
 *  2. Tạo hàm function đặt tên countInt()
 *  3. Tạo biến var num1, num2, num3 lấy id của từng số nguyên
 *  3. Tạo biến reusltInt gán giá trị số lượng số chẵn lẻ
 *  4. Thêm câu lệnh điều kiện
 *      Nếu num1 % 2 === 0 && num2 % 2 === 0 && num3 % 2 === 0
 *          Thì resultInt gán giá trị 3 số chẵn - 0 số lẻ
 * 
 *      Nếu num1 % 2 === 0 && num2 % 2 === 0 && num3 % 2 !== 0
 *          Thì resultInt gán giá trị 2 số chẵn - 1 số lẻ
 *      Nếu num1 % 2 === 0 && num2 % 2 !== 0 && num3 % 2 === 0
 *          Thì resultInt gán giá trị 2 số chẵn - 1 số lẻ
 *      Nếu num1 % 2 !== 0 && num2 % 2 === 0 && num3 % 2 === 0
 *          Thì resultInt gán giá trị 2 số chẵn - 1 số lẻ
 * 
 *      Nếu num1 % 2 !== 0 && num2 % 2 !== 0 && num3 % 2 === 0
 *          Thì resultInt gán giá trị 1 số chẵn - 2 số lẻ
 *      Nếu num1 % 2 !== 0 && num2 % 2 === 0 && num3 % 2 !== 0
 *          Thì resultInt gán giá trị 1 số chẵn - 2 số lẻ
 *      Nếu num1 % 2 === 0 && num2 % 2 !== 0 && num3 % 2 !== 0
 *          Thì resultInt gán giá trị 1 số chẵn - 2 số lẻ
 * 
 *      Nếu num1 % 2 !== 0 && num2 % 2 !== 0 && num3 % 2 !== 0
 *          Thì resultInt gán giá trị 0 số chẵn - 3 số lẻ
 *      Trường hợp khác
 *          resultInt gán gía trị "vui lòng nhập số"
 *  5. Thêm thuộc tính onclick với giá trị là tên hàm
 *      onclick="countInt()"
 * 
 * output: Xuất ra số lượng số chẵn và số lẻ
 */

function countInt() {
    var num1 = +document.getElementById("num1").value;
    var num2 = +document.getElementById("num2").value;
    var num3 = +document.getElementById("num3").value;
    var resultInt = document.getElementById("resultInt");
    resultInt.style.display = "block";
    
    if(num1 % 2 === 0 && num2 % 2 === 0 && num3 % 2 === 0) {
        resultInt.innerHTML = "3 số chẵn - 0 số lẻ";
    } else if(num1 % 2 !== 0 && num2 % 2 === 0 && num3 % 2 === 0) {
        resultInt.innerHTML = "2 số chẵn - 1 số lẻ";
    } else if(num1 % 2 === 0 && num2 % 2 !== 0 && num3 % 2 === 0) {
        resultInt.innerHTML = "2 số chẵn - 1 số lẻ";
    } else if(num1 % 2 === 0 && num2 % 2 === 0 && num3 % 2 !== 0) {
        resultInt.innerHTML = "2 số chẵn - 1 số lẻ";
    } else if(num1 % 2 !== 0 && num2 % 2 !== 0 && num3 % 2 === 0) {
        resultInt.innerHTML = "1 số chẵn - 2 số lẻ";
    } else if(num1 % 2 !== 0 && num2 % 2 === 0 && num3 % 2 !== 0) {
        resultInt.innerHTML = "1 số chẵn - 2 số lẻ";
    } else if(num1 % 2 === 0 && num2 % 2 !== 0 && num3 % 2 !== 0) {
        resultInt.innerHTML = "1 số chẵn - 2 số lẻ";
    } else if(num1 % 2 !== 0 && num2 % 2 !== 0 && num3 % 2 !== 0) {
        resultInt.innerHTML = "0 số chẵn - 3 số lẻ";
    } else {
        resultInt.innerHTML = "Vui lòng nhập số";
    }
}