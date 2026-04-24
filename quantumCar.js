class Engine {
    constructor(engineType) {
        this.engineType = engineType;
        this.engineSpeed = 0;
    }
    increase() {
        this.engineSpeed++;
        console.log(`Engine speed increased to ${this.engineSpeed}`);
    }
    decrease() {
        if (this.engineSpeed > 0) {
            this.engineSpeed--;
            console.log(`Engine speed decreased to ${this.engineSpeed}`);
        }
        else {
            console.log("Engine is already at speed 0");
        }
    }
    notifySpeedChange(carSpeed) {
        console.log(`Engine Notification: Car speed is now ${carSpeed}`);
    }
}
class GasEngine extends Engine {
    constructor() {
        super("Gas");
    }
}
class ElectricEngine extends Engine {
    constructor() {
        super("Electric");
    }
}
class HybridEngine extends Engine {
    constructor() {
        super("Hybrid");
        this.gasEngine = new GasEngine();
        this.electricEngine = new ElectricEngine();
        this.currentEngine = this.electricEngine;
    }
    notifySpeedChange(carSpeed) {
        if (carSpeed >= 50) {
            this.currentEngine = this.gasEngine;
        }
        else {
            this.currentEngine = this.electricEngine;
        }
        console.log(`Engine Notification: Hybrid Engine switched to ${this.currentEngine.engineType} Engine at speed ${carSpeed}`);
    }
}

class Car {
    constructor(engine) {
        this.engine = engine;
        this.carSpeed = 0;
    }
    replaceEngine(engine) {
        this.engine = engine;
        console.log(`Car Engine is replaced successfully to ${this.engine.engineType}`);
    }
    start() {
        console.log("Car started");
    }
    stop() {
        console.log("Car stopped");
    }
    accelerate() {
        if (this.carSpeed < 200) {
            this.carSpeed += 20;
            if (this.carSpeed > 200) {
                this.carSpeed = 200;
            }
        }
        console.log(`Car speed is now ${this.carSpeed}`);
        this.engine.notifySpeedChange(this.carSpeed);
    }
    brake() {
        if (this.carSpeed > 0) {
            this.carSpeed -= 20;
            if (this.carSpeed < 0) {
                this.carSpeed = 0;
            }
        }
        console.log(`Car speed is now ${this.carSpeed}`);
        this.engine.notifySpeedChange(this.carSpeed);
    }
}

class CarFactory {
    createCar(engineType) {
        return new Car(this.chooseEngine(engineType));
    }
    replaceEngine(car, engineType) {
        car.replaceEngine(this.chooseEngine(engineType));
    }
    chooseEngine(engineType) {
        switch (engineType) {
            case "Gas":
                return new GasEngine();
            case "Electric":
                return new ElectricEngine();
            case "Hybrid":
                return new HybridEngine();
            default:
                throw new Error("Invalid engine type");
        }
    }
}

//----------------------------
const carFactory = new CarFactory();

const car1 = carFactory.createCar("Gas");
car1.start();
//car1.accelerate();
//car1.accelerate();
//car1.brake();
//carFactory.replaceEngine(car1, "Electric");
//car1.accelerate();
//car1.brake();
carFactory.replaceEngine(car1, "Hybrid");
car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.brake();
car1.stop();