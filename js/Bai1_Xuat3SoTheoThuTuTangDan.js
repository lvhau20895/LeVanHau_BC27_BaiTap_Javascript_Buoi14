/**
 * input: 3 số nguyên
 * 
 * process:
 *  1. Tạo hàm function đặt tên arrange()
 *  2. Lấy input var int1, int2, int3 gán giá trị lần lượt 3 số nguyên
 *  3. Tạo biến alertInt gán giá trị 3 số xuất tăng dần
 *  4. Thêm câu lệnh điều kiện
 *      Nếu int1 < int2 và int1 < int 3
 *          Trường hợp int2 < int3
 *              Thi alertInt.innerHTML = int1 < int2 < int3
 *          Trường hợp int2 > int3
 *              Thì alertInt.innerHTML = int1 < int3 < int2
 *      Nếu int2 < int1 và int2 < int 3
 *          Trường hợp int1 < int3
 *              Thi alertInt.innerHTML = int2 < int1 < int3
 *          Trường hợp int1 > int3
 *              Thì alertInt.innerHTML = int2 < int3 < int1
 *      Nếu int3 < int2 và int3 < int 1
 *          Trường hợp int2 < int1
 *              Thi alertInt.innerHTML = int3 < int2 < int1
 *          Trường hợp int2 > int1
 *              Thì alertInt.innerHTML = int3 < int1 < int2
 *      Trường hợp khác
 *          Thì alertInt.innerHTML = "Vui lòng nhập số"
 *  5. Thêm thuộc tính onclick cho thẻ button với giá trị là tên hàm
 *      onclick="arrange()"
 * 
 * output: Xuất 3 số theo thứ tự tăng dần
 */

function arrange() {
    var int1 = +document.getElementById("int1").value;
    var int2 = +document.getElementById("int2").value;
    var int3 = +document.getElementById("int3").value;
    var alertInt = document.getElementById("alertInt");
    alertInt.style.display = "block";

    if(int1 < int2 && int1 < int3) {
        if(int2 < int3) {
            alertInt.innerHTML = int1 + " < " + int2 + " < " + int3;
        } else {
            alertInt.innerHTML = int1 + " < " + int3 + " < " + int2;
        }
    } else if(int2 < int1 && int2 < int3) {
        if(int1 < int3) {
            alertInt.innerHTML = int2 + " < " + int1 + " < " + int3;
        } else {
            alertInt.innerHTML = int2 + " < " + int3 + " < " + int1;
        }
    } else if(int3 < int1 && int3 < int2) {
        if(int1 < int2) {
            alertInt.innerHTML = int3 + " < " + int1 + " < " + int2;
        } else {
            alertInt.innerHTML = int3 + " < " + int2 + " < " + int1;
        }
    } else {
        alertInt.innerHTML = "Vui lòng nhập số";
    }
}