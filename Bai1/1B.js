function ChiaCanNangHaiDoi(arr) {
    let TongCanNangNhom1 = 0;
    let TongCanNangNhom2 = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        // Nếu là người thứ chẵn thì thêm vào đội 1
        TongCanNangNhom1 += arr[i];
      } else {
        // Ngược lại thì thêm vào đội 2
        TongCanNangNhom2 += arr[i];
      }
    }
  
    return [TongCanNangNhom1,TongCanNangNhom2];
  }
  
  // Ví dụ
  const CanNang = [60, 40, 55, 75, 64]
  const SapXepLai = ChiaCanNangHaiDoi(CanNang);
  console.log(`[${SapXepLai}]`);