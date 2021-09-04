class Car implements Vehicle {
    //Class members: Properties, Constructor, Accessors and Methods
    // Properties
    private static numberOfCars: number = 0;  // New static property
    private _make: string;
    private _color: string;
    private _doors: number;
    // Constructor
    constructor(make: string, color: string, doors = 4) {
           this._make = make;
           this._color = color;
           this._doors = doors;
           Car.numberOfCars++; // Increments the value of the static property
    }
    // Accessors
    get make() {         
          return this._make;
    }
    set make(make) {
          this._make = make;
    }
    get color() {
          return 'The color of the car is ' + this._color;
    }
     set color(color) {
          this._color = color;
    }
    get doors() {
          return this._doors;
    }
    set doors(doors) {
          if ((doors % 2) === 0) {
                 this._doors = doors;
          } else {
                 throw new Error('Doors must be an even number');
          }
     }
     public static getNumberOfCars(): number {
       return Car.numberOfCars;
     }
    // Methods
    accelerate(speed: number): string {
           return `${this.worker()} is accelerating to ${speed} MPH.`
    }
    brake(): string {
           return `${this.worker()} is braking with the standard braking system.`
    }
    turn(direction: 'left' | 'right'): string {
           return `${this.worker()} is turning ${direction}`;
    }
    // This function performs work for the other method functions
    protected worker(): string {
           return this._make;
    }

}
    //Instanciando a classe Car:
    // Instantiate the Car object with all parameters
    let myCar1 = new Car('Cool Car Company', 'blue', 2);
    // Instantiates the Car object with all parameters
    let myCar2 = new Car('Galaxy Motors', 'blue', 2);
    // Returns 2 => myCar1 e myCar2
    console.log("Instanciamentos: ",Car.getNumberOfCars());


    class ElectricCar extends Car {
       // Properties unique to ElectricCar
       private _range: number;   
       // Constructor
       constructor(make: string, color: string, range: number, doors = 2) {
              super(make, color, doors);
              this._range = range;
       }  
       // Accessors
       get range() {
              return this._range;
          }
       set range(range) {
              this._range = range;
          }
   
       // Methods
       charge() {
              console.log(this.worker() + " is charging.");
       }
}
       let spark = new ElectricCar('Spark Motors','silver', 124, 2);
       let eCar = new ElectricCar('Electric Car Co.', 'black', 263);
       console.log(eCar.doors);         // returns the default, 2
       spark.charge();                  // returns "Spark Motors is charging"
       
       interface Vehicle {
              make: string;
              color: string;
              doors: number;
              accelerate(speed: number): string;
              brake(): string;
              turn(direction: 'left' | 'right'): string;
          }