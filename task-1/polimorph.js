// main Class Employee
function Employee() {
    let name;
    let vacancy;
    this.setName = function (name) {
        this.name = name.trim();
    }
    this.getName = function () {
        return this.name;
    }
    this.setVacancy = function (vacancys) {
        this.vacancy = vacancys.trim();
    }
    this.getVacancy = function () {
        return this.vacancy;
    }

}
PerHourSalary.prototype = new Employee();
PerHourSalary.prototype.setYearSalary = function () {
    return this.hourMoney * this.weekWorkingHours * 52;
}
PerHourSalary.prototype.getYearSalary = function () {
    return `${this.getName()} receives ${this.setYearSalary()} uah a year as a ${this.getVacancy()}.`;
}
//Creating employee with hourly wage
function PerHourSalary(money, hours) {
    this.hourMoney = money;
    this.weekWorkingHours = hours;
}

MonthSalary.prototype = new Employee();
MonthSalary.prototype.setYearSalary = function () {
    return this.monthSalary * this.month;
}

MonthSalary.prototype.getYearSalary = function () {
    return `${this.getName()} receives ${this.setYearSalary()} uah a year as a ${this.getVacancy()}.`
}
//Creating employee with monthly fixed salary
function MonthSalary(salary, month) {
    this.monthSalary = salary;
    this.month = month;
}

let tute = new PerHourSalary(100, 26);

tute.setName('Ivan');
tute.setVacancy('tute');


let teacher = new MonthSalary(9300, 11);

teacher.setName('Oksana');
teacher.setVacancy('teacher');

let workers = [teacher, tute];

for (let i = 0; i < workers.length; i++) {
    console.log(workers[i].getYearSalary());
}
