/**
 * input: 3 cạnh tam giác
 * 
 * process:
 *  1. Lấy input var edgeA, edgeB, edgeC gán giá trị là chiều dài cạnh tam giác
 *  2. Tạo hàm function đặt tên classification()
 *  3. Tạo biến lấy id của từng cạnh
 *  4. Tạo biến resultTriangle gán giá trị loại tam giác
 *  5. Thêm câu lệnh điều kiện
 *      Nếu edgeA === edgeB && edgeB === edgeC
 *          Thì resultTriangle gán giá trị Tam giác đều
 *      Nếu edgeA === edgeB || edgeA === edgeC || edgeC === edgeB
 *          Thì resultTriangle gán giá trị Tam giác cân
 *      Nếu edgeA * edgeA === edgeB * edgeB + edgeC *   edgeC || edgeB * edgeB === edgeA * edgeA + edgeC * edgeC || edgeC * edgeC === edgeA * edgeA + edgeB * edgeB
 *          Thì resultTriangle gán giá trị tam giác vuông
 *      Trường hợp khác resultTriangle gán giá trị "1 tam giác nào khác"
 *  6. Thêm thuộc tính onclick vào button với giá trị là tên hàm
 *      onclick="classification()"
 * 
 * output: Xếp loại tam giác khi nhập chiều dài cạnh
 */

function classification() {
    var edgeA = +document.getElementById("edgeA").value;
    var edgeB = +document.getElementById("edgeB").value;
    var edgeC = +document.getElementById("edgeC").value;
    var resultTriangle = document.getElementById("resultTriangle");
    resultTriangle.style.display = "block";

    if(edgeA === edgeB && edgeB === edgeC) {
        resultTriangle.innerHTML = "Tam giác đều";
    } else if(edgeA === edgeB || edgeA === edgeC || edgeB === edgeC) {
        resultTriangle.innerHTML = "Tam giác cấn";
    } else if(edgeA * edgeA === edgeB * edgeB + edgeC * edgeC || edgeB * edgeB === edgeA * edgeA + edgeC * edgeC || edgeC * edgeC === edgeA * edgeA + edgeB * edgeB) {
        resultTriangle.innerHTML = "Tam giác vuông";
    } else {
        resultTriangle.innerHTML = "1 tam giác nào khác";
    }
}