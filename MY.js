class Cauhoi {
    constructor(noi_dung, tra_loi, _dung) {
        this.noidung = noi_dung;
        this.traloi = tra_loi;
        this.dung = _dung;
    }

    checkTraloi(traloi) {
        return traloi === this.Dung
    }
}
class Game{
    constructor(so_luong) {

    }
}




let cauhoi1 = new Cauhoi("Câu hỏi 1: ai là người béo nhất lớp C1020G2 ?", ["A. Hoàn", "B. Hiếu", "C. Mừng", "D. Dũng"], "A. Hoàn");
let cauhoi2 = new Cauhoi("Câu hỏi 2: CLB nào vô địch 3 năm liên  tiếp cup C1 ?", ["A. Liverpool", "B. Real Madrid", "C. AC Milan", "D. Juventus"], "B. Real Madrid");
let cauhoi3 = new Cauhoi("Câu hỏi 3: Cầu thủ nào được mệnh danh là người 3 phổi ?", ["A. W.Rooney", "B. Frank Lampard", "C. Michael Carrick", "D. Park Ji-sung"], "D. Park Ji-sung");
let cauhoi4 = new Cauhoi("Câu hỏi 4: Cầu thủ đoạt giải á quân cuộc thi kĩ thuật Pepsi World Challenge 2001 ?", ["A. David Beckham", "B. Ronaldinho", "C. Didier Drogba", "D. Hồng sơn"], "D. Hồng sơn");
let cauhoi5 = new Cauhoi("Câu hỏi 5: Ông vua sân đất nện là ai ?", ["A. A.Murray", "B. Novak Djokovic", "C. Rafael Nadal", "D. Roger Federer"], "C. Rafael Nadal");
let cauhoi6 = new Cauhoi("Câu hỏi 6: Tỉnh nào nhỏ nhất nước ta ?", ["A. Hà Nam", "B. Bắc Ninh", "C. Vĩnh Phúc", "D. Hòa Bình"], "B. Bắc Ninh");
let CauHoi = [cauhoi1, cauhoi2, cauhoi3, cauhoi4, cauhoi5, cauhoi6];
for (let i = 0; i < CauHoi.length; i++) {
    switch (i) {
        case 0:
            document.getElementById("cauhoi").innerHTML = CauHoi[0].noidung;
            document.getElementById("traloi_1").innerHTML = CauHoi[0].traloi[0];
            document.getElementById("traloi_2").innerHTML = CauHoi[0].traloi[1];
            document.getElementById("traloi_3").innerHTML = CauHoi[0].traloi[2];
            document.getElementById("traloi_4").innerHTML = CauHoi[0].traloi[3];
            break;
        case 1:
            document.getElementById("cauhoi").innerHTML = CauHoi[1].noidung;
            document.getElementById("traloi_1").innerHTML = CauHoi[1].traloi[0];
            document.getElementById("traloi_2").innerHTML = CauHoi[1].traloi[1];
            document.getElementById("traloi_3").innerHTML = CauHoi[1].traloi[2];
            document.getElementById("traloi_4").innerHTML = CauHoi[1].traloi[3];
            break;
        case 2:
            document.getElementById("cauhoi").innerHTML = CauHoi[2].noidung;
            document.getElementById("traloi_1").innerHTML = CauHoi[2].traloi[0];
            document.getElementById("traloi_2").innerHTML = CauHoi[2].traloi[1];
            document.getElementById("traloi_3").innerHTML = CauHoi[2].traloi[2];
            document.getElementById("traloi_4").innerHTML = CauHoi[2].traloi[3];
            break;
        case 3:
            document.getElementById("cauhoi").innerHTML = CauHoi[3].noidung;
            document.getElementById("traloi_1").innerHTML = CauHoi[3].traloi[0];
            document.getElementById("traloi_2").innerHTML = CauHoi[3].traloi[1];
            document.getElementById("traloi_3").innerHTML = CauHoi[3].traloi[2];
            document.getElementById("traloi_4").innerHTML = CauHoi[3].traloi[3];
            break;
        case 4:
            document.getElementById("cauhoi").innerHTML = CauHoi[4].noidung
            document.getElementById("traloi_1").innerHTML = CauHoi[4].traloi[0];
            document.getElementById("traloi_2").innerHTML = CauHoi[4].traloi[1];
            document.getElementById("traloi_3").innerHTML = CauHoi[4].traloi[2];
            document.getElementById("traloi_4").innerHTML = CauHoi[4].traloi[3];
            break;
        case 5:
            document.getElementById("cauhoi").innerHTML = CauHoi[5].noidung;
            document.getElementById("traloi_1").innerHTML = CauHoi[5].traloi[i];
            document.getElementById("traloi_2").innerHTML = CauHoi[5].traloi[i];
            document.getElementById("traloi_3").innerHTML = CauHoi[5].traloi[i];
            document.getElementById("traloi_4").innerHTML = CauHoi[5].traloi[i];
            break;
        case 6:
            document.getElementById("cauhoi").innerHTML = CauHoi[6].noidung;
            document.getElementById("traloi_1").innerHTML = CauHoi[6].traloi[i];
            document.getElementById("traloi_2").innerHTML = CauHoi[6].traloi[i];
            document.getElementById("traloi_3").innerHTML = CauHoi[6].traloi[i];
            document.getElementById("traloi_4").innerHTML = CauHoi[6].traloi[i];
            break;
    }

}










