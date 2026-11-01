import { CURRENCIES } from '../index';
import { FIAT_CURRENCIES } from '../data/fiat-currencies';

const ZERO_DECIMAL_CURRENCIES = [
  'BIF', 'CLP', 'DJF', 'GNF', 'ISK', 'JPY', 'KMF', 'KRW',
  'PYG', 'RWF', 'UGX', 'VND', 'VUV', 'XAF', 'XOF', 'XPF'
];

const THREE_DECIMAL_CURRENCIES = [
  'BHD', 'IQD', 'JOD', 'KWD', 'LYD', 'OMR', 'TND'
];

const TWO_DECIMAL_SPOT_CHECKS = [
  'CNY', 'KHR', 'MGA', 'MOP', 'TWD', 'USD', 'EUR', 'GBP', 'BYN', 'SLE', 'XCG', 'ZWG'
];

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

  it('should use ISO 4217 zero-decimal minor units', () => {
    ZERO_DECIMAL_CURRENCIES.forEach(code => {
      expect(CURRENCIES.currency[code].d).toBe(0);
    });
  });

  it('should use ISO 4217 three-decimal minor units', () => {
    THREE_DECIMAL_CURRENCIES.forEach(code => {
      expect(CURRENCIES.currency[code].d).toBe(3);
    });
  });

  it('should use two decimals for standard currencies and never one for fiat', () => {
    TWO_DECIMAL_SPOT_CHECKS.forEach(code => {
      expect(CURRENCIES.currency[code].d).toBe(2);
    });

    Object.keys(FIAT_CURRENCIES.currency).forEach(code => {
      expect(CURRENCIES.currency[code].d).not.toBe(1);
    });
  });

  it('should have non-empty trimmed currency symbols', () => {
    Object.entries(CURRENCIES.currency).forEach(([code, info]) => {
      expect(info.s.length).toBeGreaterThan(0);
      expect(info.s).toBe(info.s.trim());
      expect(info.s).not.toMatch(/\sor\s/i);
    });
  });

  it('should have well-formed option labels', () => {
    CURRENCIES.options.forEach(option => {
      expect(option.l).toMatch(new RegExp(`\\(${option.id}\\)$`));
      expect(option.l.charAt(0)).toMatch(/[A-ZÀ-ÖØ-Þ]/);
    });
  });

  it('should map countries to current ISO 4217 currencies', () => {
    expect(CURRENCIES.country.HR).toEqual(['EUR']);
    expect(CURRENCIES.country.BG).toEqual(['EUR']);
    expect(CURRENCIES.country.BY).toEqual(['BYN']);
    expect(CURRENCIES.country.CW).toEqual(['XCG']);
    expect(CURRENCIES.country.SX).toEqual(['XCG']);
    expect(CURRENCIES.country.SL).toEqual(['SLE']);
    expect(CURRENCIES.country.ZW).toContain('ZWG');
    expect(CURRENCIES.country.SH).toContain('SHP');
    expect(CURRENCIES.country.FM).toEqual(['USD']);
    expect(CURRENCIES.country.BV).toEqual(['NOK']);
    expect(CURRENCIES.country.HM).toEqual(['AUD']);
    expect(CURRENCIES.country.GS).toEqual(['GBP']);
  });

  it('should include migrated and added crypto currencies', () => {
    expect(CURRENCIES.currency.POL).toEqual({ s: 'POL', d: 18 });
    expect(CURRENCIES.currency.MATIC).toBeUndefined();
    expect(CURRENCIES.currency.SOL).toEqual({ s: 'SOL', d: 9 });
    expect(CURRENCIES.currency.AVAX).toEqual({ s: 'AVAX', d: 18 });
    expect(CURRENCIES.currency.TRX).toEqual({ s: 'TRX', d: 6 });
    expect(CURRENCIES.currency.DAI).toEqual({ s: 'DAI', d: 18 });
  });
});
