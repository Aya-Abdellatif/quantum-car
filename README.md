# Quantum Car

A JavaScript OOP project that simulates a car factory with replaceable engine types.

---

## Features

### Car Operations

Each car supports:

* `start()` → starts the car and resets speed to 0
* `stop()` → stops the car after reducing speed to 0
* `accelerate()` → increases speed by 20 km/h up to 200 km/h
* `brake()` → decreases speed by 20 km/h down to 0

---

### Engine Operations

Each engine supports:

* `increase()` → increases engine speed by 1
* `decrease()` → decreases engine speed by 1

The car also notifies the engine whenever the car speed changes.

---

## Project Structure

* `Engine` → Base engine class
* `GasEngine` → Gasoline engine
* `ElectricEngine` → Electric engine
* `HybridEngine` → Hybrid engine with automatic switching
* `Car` → Handles speed and car operations
* `CarFactory` → Creates cars and replaces engines

---

## Technologies Used

* JavaScript (ES6)
* Object-Oriented Programming (OOP)

---

## How to Run

Make sure you have Node.js installed.

Run the project using:

```bash
node quantumCar
```
