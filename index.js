class Heroi{
    constructor(name, age){
        this.name = name;
        this.age = age;   
        this.type = ["mago", "animago", "gigante", "dragão"];
        this.attack = ["expelliarmus", "estupefaço","Petrificus Totalus", "fogo" ];
    }

    listarTipos() {
        for (let tipo of this.type) {
            console.log(tipo);

        }
    }

    listarAtaques() {
        for (let ataque of this.attack) {
            console.log(ataque);
        }
    }

    listarTipoEAtaque(indice) {
        if (indice >= 0 && indice < this.type.length) {
            let tipo = this.type[indice];
            let ataque = this.attack[indice];
            console.log(`${this.name} é um ${tipo}, atacou usando: ${ataque}`);
        } else {
            console.log("Índice inválido.");
        }
    }
}

const harryPotter = new Heroi("Harry Potter", 17);
harryPotter.listarTipoEAtaque(0);


