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
class GasEngine extends Engine {}
class ElectricEngine extends Engine {}
class HybridEngine extends Engine {}

class Car{}

class CarFactory{

}