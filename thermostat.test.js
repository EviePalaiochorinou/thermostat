import { Thermostat } from './thermostat.js';

describe('Thermostat', () => {
    it('has a default temperature', () => {
        const thermostat = new Thermostat();
        expect(thermostat.getTemperature()).toEqual(20);
    });
    it('increases the temperature by 1', () => {
        const thermostat = new Thermostat();
        thermostat.up();
        expect(thermostat.temperature).toEqual(21);
      });
      it('reduces the temperature by 1', () => {
        const thermostat = new Thermostat();
        thermostat.down();
        expect(thermostat.temperature).toEqual(19);
      });
      it('cannot be lower than 10', () => {
        const thermostat = new Thermostat();
        for (let i = 0 ; i < 11 ; i++) {
        thermostat.down();
        }
        expect(thermostat.temperature).toEqual(10);
      });
      it('turns the power saving mode off', () => {
          const thermostat = new Thermostat();
          thermostat.powerSavingToggle
          expect(thermostat.powerSaveMode).toEqual(false);
      });
      it('changes max temp to 25 if is on', () => {
        const thermostat = new Thermostat();
        thermostat.powerSavingToggle;
        expect(thermostat.maxTemp).toEqual(25);
      });
      it('resets the temperature', () => {
        const thermostat = new Thermostat();
        for (let i = 0 ; i < 5 ; i++) {
        thermostat.down();
        }
        thermostat.reset();
        expect(thermostat.temperature).toEqual(20);
      });
      it('returns energy usage is low', () => {
        const thermostat = new Thermostat();
        for (let i = 0 ; i < 5 ; i++) {
        thermostat.down();
        }
        expect(thermostat.getEnergyUsage()).toEqual('low-usage');
      });
      //mock the weather class
      //test the 'setCity' function
});