/*  Aqui da pra ver como se implementa alguns conceitos de POO em
    Javascrip. Não vou entrar em detalhes sobre POO porque eu já estudei
    esse assunto em Java mas vou deixar esse código aqui pra mostrar como
    se cria objetos no JavaScript. */


// Declarando uma classe
class Book {
    // Criando um construtor
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    // Crando um método
    read(){
        return `Lendo livro ${this.title}`
    }
}

// Implementando herança
class LivrosTerror extends Book{
    constructor(title, author, pages, genre){
        super(title, author, pages);
        this.genre = genre;
    }
}

// Instanciando o objeto
let book = new Book("Duna", "Frank Herbert", "muitas");

// Acessando o objeto
console.log(book);

// Acessando um método do objeto
console.log(book.read());

// Instanciando classe com herança
let book2 = new LivrosTerror("Livro assustador", "Hepaminondas", "muitas", "Receitas macabras");
console.log(book2);


// Encapsulamento

class Person {
    constructor(name){  // No js o encapsulamente começa usando o '_' no construtor
        this._name = name;
    }

// Esse '_' não me impede de acessar a variável '_name' sem ter os métodos get e set
// implementados. É só pra fingir que sim.

    get name(){
        return this._name;
    }
    set name (value){
        this._name = value;
    }
}

let person = new Person("nome");
person.name = "Rodolfo"; // Aqui da pra ver que pra acessar o método get, eu 
console.log(person.name);// posso usar só o .name