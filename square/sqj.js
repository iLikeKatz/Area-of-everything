function navigate() {
    // ดึงค่าที่ถูกเลือก
    var selectedValue = document.getElementById("selectSomethi").value;
            
    // นำค่าที่ถูกเลือกไปยังหน้าใหม่
    window.location.href = selectedValue;
}