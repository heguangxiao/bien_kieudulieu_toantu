function showbtap1() {
    let inputVatly;
    let inputHoahoc;
    let inputSinhhoc;

    inputVatly = prompt('Nhap diem Vat Ly : ');
    inputHoahoc = prompt('Nhap diem Hoa Hoc : ');
    inputSinhhoc = prompt('Nhap diem Sinh Hoc : ');

    let vatly = parseInt(inputVatly);
    let hoahoc = parseInt(inputHoahoc);
    let sinhhoc = parseInt(inputSinhhoc);

    let tong = vatly+hoahoc+sinhhoc;
    let trungbinh = tong/3;

    document.write('Tong diem 3 mon Vat Ly , Hoa Hoc , Sinh Hoc la : ' + tong);
    document.write('</br>');
    document.write('Diem trung binh 3 mon la : ' + trungbinh);
}

function showbtap2() {
    let inputCelsius;

    inputCelsius = prompt('Nhap nhiet do can doi : ');

    let celsius = parseInt(inputCelsius);

    let fahrenheit = (9*celsius)/5 + 32;

    document.write('nhiet do sau khi chuyen sang F la : '+fahrenheit);
}

function showbtap3() {
    let inputR;

    inputR = prompt('Nhap ban kinh hinh tron : ');

    let r = parseInt(inputR);

    let s = r*r*3.14;

    document.write('Dien tich hinh tron co ban kinh bang '+r+' la : ' + s);
}

function showbtap4() {
    let inputR;

    inputR = prompt('Nhap ban kinh hinh tron : ');

    let r = parseInt(inputR);

    let s = r*2*3.14;

    document.write('Chu vi hinh tron co ban kinh bang '+r+' la : ' + s);
}