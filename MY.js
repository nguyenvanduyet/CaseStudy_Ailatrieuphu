class Question {
    constructor(quiz_, answer_, correc_) {
        this.quiz = quiz_;
        this.answer = answer_;
        this.correc = correc_;
    }
}

class Quanly {
    constructor(soluong_) {
        this.questinons = [];
        this.CHhientai = 0;
        this.soluong = soluong_;
    }

    checkAnswer(answer) {
        if (answer === this.questinons[this.CHhientai].correc) {
            return true;
        } else {
            return false;
        }

    }

    chooseAnswer(answer) {
        if (this.checkAnswer(answer)) {
            alert("chính xác")
        } else {
            alert("sai rồi")
        }
    }
    nextCH() {
        if (this.CHhientai < this.soluong) {
            this.CHhientai++;
        } else {
            alert("endgame");
            this.CHhientai = 0
        }
    }
    endGame(){
        this.CHhientai=0;
    }
    addCh(question) {
        this.questinons.push(question);
    }
}

let question1 = new Question("Câu hỏi 1: ai là người béo nhất lớp C1020G2 ?", ["A. Hoàn", "B. Hiếu", "C. Mừng", "D. Dũng"], "A. Hoàn");
let question2 = new Question("Câu hỏi 2: CLB nào vô địch 3 năm liên  tiếp cup C1 ?", ["A. Liverpool", "B. Real Madrid", "C. AC Milan", "D. Juventus"], "B. Real Madrid");
let question3 = new Question("Câu hỏi 3: Cầu thủ nào được mệnh danh là người 3 phổi ?", ["A. W.Rooney", "B. Frank Lampard", "C. Michael Carrick", "D. Park Ji-sung"], "D. Park Ji-sung");
let question4 = new Question("Câu hỏi 4: Cầu thủ đoạt giải á quân cuộc thi kĩ thuật Pepsi World Challenge 2001 ?", ["A. David Beckham", "B. Ronaldinho", "C. Didier Drogba", "D. Hồng sơn"], "D. Hồng sơn");
let question5 = new Question("Câu hỏi 5: Ông vua sân đất nện là ai ?", ["A. A.Murray", "B. Novak Djokovic", "C. Rafael Nadal", "D. Roger Federer"], "C. Rafael Nadal");
let question6 = new Question("Câu hỏi 6: Tỉnh nào nhỏ nhất nước ta ?", ["A. Hà Nam", "B. Bắc Ninh", "C. Vĩnh Phúc", "D. Hòa Bình"], "B. Bắc Ninh");
let QL = new Quanly(6);
QL.addCh(question1);
QL.addCh(question2);
QL.addCh(question3);
QL.addCh(question4);
QL.addCh(question5);
QL.addCh(question6);

function Hienthi(index) {
    document.getElementById("cauhoi").innerHTML = QL.questinons[index].quiz;
    document.getElementById("traloi_1").innerHTML = QL.questinons[index].answer[0];
    document.getElementById("traloi_2").innerHTML = QL.questinons[index].answer[1];
    document.getElementById("traloi_3").innerHTML = QL.questinons[index].answer[2];
    document.getElementById("traloi_4").innerHTML = QL.questinons[index].answer[3];
}

function nextCh() {
    QL.nextCH();
    Hienthi(QL.CHhientai);
}
function endGame(){
    QL.endGame(QL.CHhientai)
}

function chooseAnswer(id) {
    let Answer = document.getElementById(id).innerHTML;
    QL.chooseAnswer(Answer);
    if (QL.checkAnswer(Answer)) {
        nextCh();
    } else {
        endGame();
    }
}
Hienthi(0);






