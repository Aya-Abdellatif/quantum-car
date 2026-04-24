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
        this.engineSpeed--;
        console.log(`Engine speed decreased to ${this.engineSpeed}`);
    }
    notifySpeedChange(carSpeed) {
        console.log(`Car speed is now ${carSpeed}`);
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
        this.electricEngine = new GasEngine();
        this.currrentEngine = this.electricEngine;
    }
    notifySpeedChange(carSpeed) {
        if (carSpeed >= 50) {
            this.currrentEngine = this.gasEngine;
        }
        else {
            this.currrentEngine = this.electricEngine;
        }
        console.log(`Hybrid Engine switched to ${this.currrentEngine.engineType} Engine at speed ${carSpeed}`);
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
        switch (engineType) {
            case "Gas":
                return new Car(new GasEngine());
            case "Electric":
                return new Car(new ElectricEngine());
            case "Hybrid":
                return new Car(new HybridEngine());
            default:
                throw new Error("Invalid engine type");
        }
    }
    replaceEngine(car, engineType) {
        switch (engineType) {
            case "Gas":
                car.replaceEngine(new GasEngine());
                break;
            case "Electric":
                car.replaceEngine(new ElectricEngine());
                break;
            case "Hybrid":
                car.replaceEngine(new HybridEngine());
                break;
            default:
                throw new Error("Invalid engine type");
        }
    }
}

//----------------------------
const carFactory = new CarFactory();

const car1 = carFactory.createCar("Gas");
//car1.start();
car1.accelerate();
car1.accelerate();
car1.brake();
//car1.stop();