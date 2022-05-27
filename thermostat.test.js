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
});
