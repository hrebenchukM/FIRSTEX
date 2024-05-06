var Student = /** @class */ (function () {
    function Student(_name, _birthDate, _contactPhone, _city, _country, _company, _groupNumber) {
        this._name = _name;
        this._birthDate = _birthDate;
        this._contactPhone = _contactPhone;
        this._city = _city;
        this._country = _country;
        this._company = _company;
        this._groupNumber = _groupNumber;
    }
    Object.defineProperty(Student.prototype, "name", {
        // accessors - механизм, который позволяет перехватить обращение к члену объекта на запись или чтение.
        // getter 
        get: function () {
            return this._name;
        },
        // setter
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "birthDate", {
        get: function () {
            return this._company;
        },
        set: function (value) {
            this._company = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "contactPhone", {
        get: function () {
            return this._company;
        },
        set: function (value) {
            this._company = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "city", {
        get: function () {
            return this._company;
        },
        set: function (value) {
            this._company = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "country", {
        get: function () {
            return this._company;
        },
        set: function (value) {
            this._company = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "company", {
        get: function () {
            return this._company;
        },
        set: function (value) {
            this._company = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "groupNumber", {
        get: function () {
            return this._groupNumber;
        },
        set: function (value) {
            this._groupNumber = value;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.printToConsole = function () {
        console.log("Student ".concat(this._name, ", birthDate - ").concat(this._birthDate, ", contactPhone - ").concat(this._contactPhone, ",\n        city - ").concat(this._city, ", country - ").concat(this._country, ", company - ").concat(this._company, ", groupNumber - ").concat(this._groupNumber));
    };
    Student.prototype.printToTable = function () {
        var table = document.getElementById('studentTable');
        if (table !== null) { // TypeScript не знает, что table= HTML-элемент,ибо getElementById может вернуть null.?
            var row = document.createElement('tr');
            row.innerHTML = "\n                <td>".concat(this._name, "</td>\n                <td>").concat(this._birthDate, "</td> \n                <td>").concat(this._contactPhone, "</td>\n                <td>").concat(this._city, "</td>\n                <td>").concat(this._country, "</td>\n                <td>").concat(this._company, "</td>\n                <td>").concat(this._groupNumber, "</td>\n            ");
            table.appendChild(row);
        }
    };
    return Student;
}());
var students = [
    new Student("Mary Hrebenchuk", "2004-12-10", "+380972860462", "Odesa", "Ukraine", "Step", "P222"),
    new Student("Harry Potter", "1980-07-31", "+380995410272", "Odesa", "Ukraine", "Step", "P223")
];
students.forEach(function (student) {
    student.printToTable();
});
