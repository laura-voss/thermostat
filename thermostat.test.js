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

  it(`it won't decrese temperature below 10 degrees`, () => {
    const thermostat = new Thermostat();
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.down();
    }
    expect(thermostat.down()).toEqual("It's freezing mate...")
  });
});
