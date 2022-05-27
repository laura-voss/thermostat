const Thermostat = require('./thermostat')

describe('Thermostat', () => {
  it('is created with initial temperature of 20 degrees', () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toBe(20);
  });
});
