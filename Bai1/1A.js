function tichLonnhat(arr) {
  let TichLonnhat = 0;
  let Capcotichlonnhat = [];

  for (let i = 0; i < arr.length - 1; i++) {
    const tich = arr[i] * arr[i + 1];
    if (tich > TichLonnhat) {
      TichLonnhat = tich;
      Capcotichlonnhat = [arr[i], arr[i + 1]];
    }
  }

  const output = `${TichLonnhat}`;
  return output;
}

// Ví dụ sử dụng
const arr = [2, 3, -5, -2, 4];
const ketqua = tichLonnhat(arr);
console.log(ketqua);