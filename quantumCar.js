class Engine{
    constructor(engineType){
        this.engineType = engineType;
        this.engineSpeed = 0;
    }
    increase(){
        this.engineSpeed++;
        console.log(`Engine speed increased to ${this.engineSpeed}`);
    }
    decrease(){
        this.engineSpeed--;
        console.log(`Engine speed decreased to ${this.engineSpeed}`);
    }
    notifySpeedChange(carSpeed){
        console.log(`Car speed is now ${carSpeed}`);
    }
}
class GasEngine extends Engine {
    constructor(){
        super("Gas");
    }
}
class ElectricEngine extends Engine {
    constructor(){
        super("Electric");
    }
}
class HybridEngine extends Engine {
    constructor(){
        super("Hybrid");
        this.gasEngine = new GasEngine();
        this.electricEngine = new GasEngine();
        this.currrentEngine = this.electricEngine;
    }
    notifySpeedChange(carSpeed){
        if(carSpeed>=50){
            this.currrentEngine = this.gasEngine;
        }
        else{
            this.currrentEngine = this.electricEngine;
        }
        console.log(`Hybrid Engine switched to ${this.currrentEngine.engineType} Engine at speed ${carSpeed}`);
    }
}

class Car{}

class CarFactory{

}