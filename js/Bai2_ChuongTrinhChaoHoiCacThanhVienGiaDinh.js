/**
 * input: các thánh viên trong gia đinh: bố, mẹ, anh trai, em gái
 * 
 * process:
 *  1. Tạo hàm function đặt tên greeting
 *  2. Tạo biến member gán giá trị các thành viên
 *  3. Tạo biến hiPeople gán giá trị chào hỏi thành viên được chọn
 *  4. Thêm câu lệnh điều kiện
 *      Nếu member == dad
 *          Thì hiPeople gán giá trị Xin chào bố!
 *      Nếu member == mom
 *          Thì hiPeople gán giá trị Xin chào mẹ!
 *      Nếu member == brother
 *          Thì hiPeople gán giá trị Xin chào anh trai!
 *      Nếu member == sister
 *          Thì hiPeople gán giá trị Xin chào em gái!
 *      Trường hợp khác
 *          Thì hiPeople gán giá trị Who?
 *  5. Thêm thuộc tính onclick cho thẻ button với giá trị là tên hàm
 *      onclick="greeting()"
 * 
 * output: Gửi lời chào đến người được chọn
 */

function greeting() {
    var member = document.getElementById("familyPeople").value;
    var hiPeople = document.getElementById("hiPeople");
    hiPeople.style.display = "block"
    // hiPeople.innerHTML = member;

    if(member == "dad") {
        hiPeople.innerHTML = "Xin Chào Bố!";
    } else if(member == "mom") {
        hiPeople.innerHTML = "Xin Chào Mẹ!";
    } else if(member == "brother") {
        hiPeople.innerHTML = "Xin Chào Anh Trai!";
    } else if(member == "sister") {
        hiPeople.innerHTML = "Xin Chào Em Gái!";
    } else {
        hiPeople.innerHTML = "Who?";
    }
}