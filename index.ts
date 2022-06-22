// Types
// Interfaces

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquatico';
    executarRugido(alturaEmDecibeis: number): void;
}

interface IFelino extends IAnimal {
    visaoNoturn: boolean;
}

const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}

animal.executarRugido('s');

const felino: IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturn: true,
}