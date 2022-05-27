const Thermostat = require('./thermostat')

describe('Thermostat', () => {
  it('is created with initial temperature of 20 degrees', () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toBe(20);
  });

  it('increases the temperature with an up method', () => {
    const thermostat = new Thermostat();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(21);
  });

  it('decreases the temperature with a down method', () => {
    const thermostat = new Thermostat();
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(19);
  });

  it(`it won't decrease temperature below 10 degrees`, () => {
    const thermostat = new Thermostat();
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.down();
    }
    expect(thermostat.down()).toEqual("It's freezing mate...");
  });
  
  describe('.setPowerSavingMode', () => {
    it('PowerSavingMode is on by default', () => {
      const thermostat = new Thermostat();
      expect(thermostat.PSM).toBe(true);
    });

    it('PowerSavingMode can be turned off', () => {
      const thermostat = new Thermostat();
      thermostat.setPowerSavingMode(false);
      expect(thermostat.PSM).toBe(false);
    });

    it('limits the maximum temperature to 25 degree if PSM is on', () => {
      const thermostat = new Thermostat();
      for (let i = 0 ; i < 5 ; i++) {
        thermostat.up();
      }
      expect(thermostat.up()).toEqual("It doesn't get warmer than this - Planet Saving Mode!!");
    });
  });

  describe('.currentEnergyUsage', () => {
    it(`let's the user know if energy usage is low`, () => {
      const thermostat = new Thermostat();
      for (let i = 0 ; i < 3 ; i++) {
        thermostat.down();
      }
      expect(thermostat.currentEnergyUsage()).toEqual("Your energy usage is low - Yay for the planet");
    });
  });
});
