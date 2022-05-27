class Thermostat {
  constructor() {
    this.temperature = 20;
    this.PSM = true;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    if ((this.PSM === true) && (this.temperature < 25)) {
      this.temperature ++;
    } else if ((this.PSM === true) && (this.temperature >= 25)) {
      return "It doesn't get warmer than this - Planet Saving Mode!!";
    } else if ((this.PSM === false) && (this.temperature < 35)) {
      this.temperature ++;
    } else if ((this.PSM === false) && (this.temperature >= 35)) {
      return "It doesn't get hotter than this...";
    }
  }

  down() {
    if (this.temperature > 10) {
      this.temperature --;
    } else {
      return "It's freezing mate...";
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
      return "Your energy usage is low - Yay for the planet";
    } else if ((this.temperature >= 18) && (this.temperature <= 25)) {
      return "Your energy usage is medium - Think about how you could reduce it...";
    } else if (this.temperature > 25) {
      return "You're nuts! - The planet is on fire!!!";
    }
  }

  reset() {
    this.temperature = 20;
  }
}

module.exports = Thermostat;
