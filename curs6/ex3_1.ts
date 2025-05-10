class StudentNou {
    public studCode: number;
    private studName: string;

    constructor(code: number, name: string) {
        this.studCode = code;
        this.studName = name;
    }
    public display(){
        return `my code is ${this.studCode} and my name is ${this.studName}`;
    }
    }
    let studentnou: StudentNou = new StudentNou(123, "John Doe");
    studentnou.studCode = 3;
    //studentnou.studName = 'adi';
    console.log(studentnou.display());