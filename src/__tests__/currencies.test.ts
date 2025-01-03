import { CURRENCIES } from '../index';

describe('Currencies', () => {
  it('should have matching IDs in list and options', () => {
    const optionIds = CURRENCIES.options.map(opt => opt.id);
    expect(CURRENCIES.list.sort()).toEqual(optionIds.sort());
  });

  it('should have currency info for each currency in the list', () => {
    CURRENCIES.list.forEach(code => {
      expect(CURRENCIES.currency[code]).toBeDefined();
      expect(CURRENCIES.currency[code].s).toBeDefined();
      expect(typeof CURRENCIES.currency[code].d).toBe('number');
    });
  });

  it('should have valid country mappings', () => {
    Object.values(CURRENCIES.country).flat().forEach(currencyCode => {
      if (currencyCode) {
        expect(CURRENCIES.list).toContain(currencyCode);
      }
    });
  });

  it('should have unique currency codes', () => {
    const uniqueList = [...new Set(CURRENCIES.list)];
    expect(CURRENCIES.list).toEqual(uniqueList);
  });
}); 