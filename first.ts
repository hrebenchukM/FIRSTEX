

class Student {
    
    private _name: string;// модификатор доступа private - указывает что данное поле закрытое и не доступно за пределами класса
    private _birthDate: string;
    private _contactPhone: string;
    private _city: string;
    private _country: string;
    private _company: string;
    private _groupNumber: string;


    constructor(_name: string, _birthDate: string,_contactPhone: string,_city: string,_country: string,_company: string,_groupNumber: string) {
        this._name = _name;
        this._birthDate = _birthDate;
        this._contactPhone = _contactPhone;
        this._city = _city;
        this._country = _country;
        this._company =_company;
        this._groupNumber = _groupNumber;
    }

    // accessors - механизм, который позволяет перехватить обращение к члену объекта на запись или чтение.

    // getter 
    get name(): string {
        return this._name;
    }
    get birthDate(): string {
        return this._company;
    }
    get contactPhone(): string {
        return this._company;
    }
    get city(): string {
        return this._company;
    }
    get country(): string {
        return this._company;
    }
    get company(): string {
        return this._company;
    }
    get groupNumber(): string {
        return this._groupNumber;
    }






    // setter
    set name(value: string) {
        this._name = value;
    }
    set birthDate(value: string) {
        this._company = value;
    }
    set contactPhone(value: string) {
        this._company = value;
    }
    set city(value: string) {
        this._company = value;
    }
    set country(value: string) {
        this._company = value;
    }
    set company(value: string) {
        this._company = value;
    }
    set groupNumber(value: string) {
        this._groupNumber = value;
    }


    printToConsole() {
        console.log(`Student ${this._name}, birthDate - ${this._birthDate}, contactPhone - ${this._contactPhone},
        city - ${this._city}, country - ${this._country}, company - ${this._company}, groupNumber - ${this._groupNumber}`);
    }

    printToTable(): void {
        let table = document.getElementById('studentTable');
        if (table !== null) {// TypeScript не знает, что table= HTML-элемент,ибо getElementById может вернуть null.?
            let row = document.createElement('tr');
            row.innerHTML = `
                <td>${this._name}</td>
                <td>${this._birthDate}</td> 
                <td>${this._contactPhone}</td>
                <td>${this._city}</td>
                <td>${this._country}</td>
                <td>${this._company}</td>
                <td>${this._groupNumber}</td>
            `;
            table.appendChild(row);
        } 
    }
    
    
}

let students: Student[] = [
    new Student("Mary Hrebenchuk", "2004-12-10", "+380972860462", "Odesa", "Ukraine", "Step", "P222"),
    new Student("Harry Potter", "1980-07-31", "+380995410272", "Odesa", "Ukraine", "Step", "P223")
];


students.forEach(student => {
    student.printToTable();
});
