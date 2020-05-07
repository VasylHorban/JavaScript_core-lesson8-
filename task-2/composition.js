function Car(model, type, person, color, centimeters) {
    this.model = model;

    let body = new Body(type, person, color);
    let wheels = new Wheel();
    let stiringWheel = new SteeringWheel(centimeters);

    this.changeBodyType = function (type) {
        body.setType(type);
    }
    this.changeBodyCapacity = function (person) {
        body.setCapacity(person);
    }
    this.changeBodyColor = function (color) {
        body.setColor(color);
    }
    this.changeWinterTire = function () {
        wheels.setWinterTire()
    }
    this.changeDisk = function () {
        wheels.setDisc()
    }
    this.changeHelmSize = function (centimeters) {
        stiringWheel.setDiameter(centimeters);
    }
    this.getCarInfo = function () {
        let info = {
            "Car model": this.model,
            "body type": body.getType(),
            "car capacity": body.getCapacity(),
            "color": body.getColor(),
            "helm diameter": stiringWheel.getDiameter(),
            "winter tire": wheels.getWinterTire(),
            "discs": wheels.getDisc()
        }
        return info;
    }
}

function Body(type, person, color) {
    this.type = type;
    this.capacity = person;
    this.color = color;
    this.setType = function (type) {
        this.type = type;
    }
    this.getType = function () {
        return this.type;
    }
    this.setColor = function (color) {
        this.color = color;
    }
    this.getColor = function () {
        return this.color;
    }
    this.setCapacity = function (num) {
        this.capacity = num;
    }
    this.getCapacity = function () {
        return this.capacity;
    }
}

function Wheel() {
    this.winterTire = false;
    this.disc = false;
    this.setWinterTire = function () {
        if (this.winterTire) {
            this.winterTire = false;
        } else {
            this.winterTire = true;
        }

    }
    this.getWinterTire = function () {
        if (this.disc) {
            return 'yes';
        } else {
            return 'no'
        }
    }
    this.setDisc = function () {
        if (this.disc) {
            this.disc = false;
        } else {
            this.disc = true;
        }
    }
    this.getDisc = function () {
        if (this.disc) {
            return 'yes';
        } else {
            return 'no'
        }

    }
}

function SteeringWheel(centimeters) {
    this.diameter = centimeters;
    this.setDiameter = function (centimeters) {
        this.diameter = centimeters;

    }
    this.getDiameter = function () {
        return this.diameter;
    }
}

let ford = new Car('ford', 'jeep', 6, 'red', 40);

ford.changeBodyColor('black');
ford.changeDisk();
ford.changeBodyCapacity(7)
ford.changeDisk();
ford.changeWinterTire();

let toyota = new Car('toyota', 'jeep', 5, 'green', 35);

toyota.changeWinterTire();
toyota.changeBodyType('sedan');
toyota.changeDisk();
toyota.changeHelmSize(30);
toyota.changeWinterTire();

let cars = [ford, toyota];


for (let i = 0; i < cars.length; i++) {
    let out = '';
    let obj = cars[i].getCarInfo();
    for (let key in obj) {
        out += `${key} : ${obj[key]}, `;
    }
    console.log(out);
}
