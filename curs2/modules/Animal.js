class Animal{
    #familie; //proprietate privata 
    #mancare;
    #culoare;
    constructor(greutate){
        this.#familie = familie;
        this.#mancare = mancare;
        this.greutate = greutate;
        this.#culoare = culoare;
    }
    static nrPicioare = 4; //proprietate statica
    static nrOchi = 2; //proprietate statica

    get familie(){
        return this.#familie;
    }
    get mancare(){
        return this.#mancare;
    }
    get culoare(){
        return this.#culoare;
    }


mananca (cantiate){
    console.log(`Mananca ${cantitate} pe zi.`);
}
doarme(timp){
    console.log(`Doarme ${timp} ore pe zi`);
}
comunica(fraza){
    console.log(`Animalul comunica ${fraza}`);
}
}

class Pisica extends Animal {
    constructor(greutate, rasa){
        super(greutate); //apel constructor parinte
        this.rasa = rasa;
    }
    miauna(){
        console.log("Miauuuu!");
    }
    mananca(cantitate){
        console.log(`Pisica mananca ${cantitate} pe zi.`);
    }
}

class Caine extends Animal {
    constructor(greutate, rasa){
        super(greutate); //apel constructor parinte
        this.rasa = rasa;
    }
    latra(){
        console.log("Ham Ham!");
    }
    mananca(cantitate){
        console.log(`Cainele mananca ${cantitate} pe zi.`);
    }
}

export {Animal, Pisica, Caine};