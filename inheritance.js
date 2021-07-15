
class Parent{
    constructor()
    {
         this.fatherName = 'Amit';
         this.motherName = 'Protity';
    }
}
class Child extends Parent{
    constructor(name,age)
    {
        super();
        this.name = name;
        this.age = age;
    }
}

const baby = new Child('Sreeja Moni',7);
console.log(baby);