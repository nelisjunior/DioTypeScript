// Types
// Interfaces

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquatico';
    domestico: boolean;

}

interface IFelino extends IAnimal {
    visaoNoturn: boolean;
}

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelino | ICanino;


const animal: IDomestico = {
    domestico: true,
    nome: 'Rex',
    porte: 'grande',
    tipo: 'terrestre',
    

}

