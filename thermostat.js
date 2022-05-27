class Thermostat {
  constructor() {
    this.temperature = 20;
    this.PSM = true;
  }

  getTemperature() {
    return this.temperature
  }

  up() {
    if ((this.PSM = true) && (this.temperature < 25)) {
      this.temperature ++
    } else if ((this.PSM = true) && (this.temperature >= 25)) {
      return "It doesn't get warmer than this - Planet Saving Mode!!"
    }
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
    }
  }

  currentEnergyUsage() {
    if (this.temperature < 18) {
      return "Your energy usage is low - Yay for the planet"
    }
  }
}

module.exports = Thermostat;
