/**
 * OptionType interface - Useful for dropdowns and autocomplete
 * @interface OptionType
 * @property {string} id - The unique identifier for the option.
 * @property {string} l - The label for the option.
 */
export interface OptionType {
  id: string;
  l: string;
}

/**
 * CurrencyInfo interface - Useful for currency data
 * @interface CurrencyInfo
 * @property {string} s - The symbol for the currency.
 * @property {number} d - The decimal precision for the currency.
 */
export interface CurrencyInfo {
  s: string; // Symbol
  d: number; // Number of decimal for the current currencies
}

/**
 * Currencies interface - Give all the informations about the currencies and their countries
 * @interface Currencies
 * @property {string[]} list - The list of currency codes.
 * @property {OptionType[]} options - The options for the currency.
 * @property {Record<string, CurrencyInfo>} currency - The currency data.
 * @property {Record<string, string[]>} country - The country data.
 */
export interface Currencies {
  list: string[];
  options: OptionType[];
  currency: Record<string, CurrencyInfo>;
  country: Record<string, string[]>;
}
