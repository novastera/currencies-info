import { FIAT_CURRENCIES } from './data/fiat-currencies';
import { CRYPTO_CURRENCIES } from './data/crypto-currencies';
import { COUNTRY_MAPPINGS } from './data/country-mappings';
import type { Currencies } from './interfaces/Currency';

const generateList = (options: Array<{ id: string }>) => 
  options.map(option => option.id);

export const CURRENCIES: Currencies = {
  list: [
    ...generateList(FIAT_CURRENCIES.options),
    ...generateList(CRYPTO_CURRENCIES.options)
  ],
  options: [...FIAT_CURRENCIES.options, ...CRYPTO_CURRENCIES.options],
  currency: {
    ...FIAT_CURRENCIES.currency,
    ...CRYPTO_CURRENCIES.currency
  },
  country: COUNTRY_MAPPINGS
};
