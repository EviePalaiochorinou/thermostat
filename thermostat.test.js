import { Thermostat } from './thermostat.js';

describe('Thermostat', () => {
    it('has a default temperature', () => {
        const thermostat = new Thermostat();
        expect(thermostat.getTemperature()).toEqual(20);
    });
})