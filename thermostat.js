class Thermostat {
  constructor() {
    this.temperature = 20;
    this.PSM = true;
  }

  getTemperature() {
    return this.temperature
  }

  up() {
    this.temperature ++
  }

  down() {
    if (this.temperature > 10) {
      this.temperature --
    } else {
      return "It's freezing mate..."
    }
  }

  setPowerSavingMode(status) {
    if (status === true) {
      this.PSM = true;
    } else if (status === false) {
      this.PSM = false;
    } else {
      return "not valid"
    }
  }
}

module.exports = Thermostat;
