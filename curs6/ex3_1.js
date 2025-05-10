var StudentNou = /** @class */ (function () {
    function StudentNou(code, name) {
        this.studCode = code;
        this.studName = name;
    }
    StudentNou.prototype.display = function () {
        return "my code is ".concat(this.studCode, " and my name is ").concat(this.studName);
    };
    return StudentNou;
}());
var studentnou = new StudentNou(123, "John Doe");
studentnou.studCode = 3;
//studentnou.studName = 'adi';
console.log(studentnou.display());
