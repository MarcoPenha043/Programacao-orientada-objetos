class Carro {
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    ligar(){
        console.log(`${this.marca} ${this.modelo} está ligado.`);
    }
}

class CarroEsportivo extends Carro {
    constructor(marca, modelo, ano, velocidadeMaxima){
        super(marca, modelo, ano);
        this.velocidadeMaxima = velocidadeMaxima;
    }
    acelerar() {
        console.log(`${this.marca} ${this.modelo} está acelerando a uma velocidade incrível! Velocidade máxima: ${this.velocidadeMaxima} km/h`);
    }
}

class CarroSUV extends Carro {
    constructor(marca, modelo, ano, capacidadeCarga) {
        super(marca, modelo, ano);
        this.capacidadeCarga = capacidadeCarga;
    }
    carregarBagagem(peso) {
        if (peso <= this.capacidadeCarga) {
            console.log(`${this.marca} ${this.modelo} está carregando ${peso} kg de bagagem.`);
        } else {
        console.log(`Carga excedida! ${this.marca} ${this.modelo} só suporta até ${this.capacidadeCarga} kg.`);
        }
    }
}

const carroEsportivo = new CarroEsportivo("Ferrari", "F8", 2023, 340);
const carroSUV1 = new CarroSUV("Jeep", "Compass", 2023, 500);
const carroSUV2 = new CarroSUV("Corolla", "Cross", 2024, 400);

carroEsportivo.ligar();
carroEsportivo.acelerar();

carroSUV1.ligar();
carroSUV1.carregarBagagem(450); 

carroSUV2.ligar();
carroSUV2.carregarBagagem(500);