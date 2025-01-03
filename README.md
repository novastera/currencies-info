# @novastera/currencies-info

A comprehensive currency data library providing accurate currency information for global business applications. Includes up-to-date currency codes, symbols, decimal places, and country associations.

## Features

- **Complete Currency Coverage**
  - All ISO 4217 currency codes
  - Cryptocurrency support (BTC, ETH, etc.)
  - Accurate decimal places for each currency
  - Official currency symbols
  - Country-to-currency mappings

- **Business Ready**
  - Perfect for invoicing systems
  - Ideal for ERP and CRM implementations
  - Multi-currency support for financial applications
  - Accurate decimal handling for calculations

## Installation

```bash
npm install @novastera-oss/currencies-info
# or
yarn add @novastera-oss/currencies-info
```

## Usage

```typescript
import { CURRENCIES } from '@novastera-oss/currencies-info';

// Get all currencies
console.log(CURRENCIES.list);
// ["USD", "EUR", "GBP", ...]

// Get currency details
console.log(CURRENCIES.currency["USD"]);
// { s: "$", d: 2 }  // s: symbol, d: decimal places

// Get currency options (useful for dropdowns)
console.log(CURRENCIES.options);
// [{ id: "USD", l: "United States Dollar (USD)" }, ...]

// Get currencies used in a country
console.log(CURRENCIES.country["FR"]);
// ["EUR"]
```

## Types

```typescript
interface CurrencyInfo {
  s: string;  // Currency symbol
  d: number;  // Number of decimal places
}

interface OptionType {
  id: string;  // Currency code
  l: string;   // Display label
}

interface Currencies {
  list: string[];                        // All available currency codes
  options: OptionType[];                 // Formatted options for dropdowns
  currency: Record<string, CurrencyInfo>;// Currency details by code
  country: Record<string, string[]>;     // Country to currency mappings
}
```

## Use Cases

- Financial software requiring accurate currency formatting
- International e-commerce platforms
- ERP systems with multi-currency support
- CRM systems handling international clients
- Invoicing systems requiring currency precision
- Financial calculators and converters

## About

Part of [Novastera](https://novastera.com)'s suite of business management solutions, this package ensures accurate currency handling across all your business applications. Visit our [website](https://novastera.com) to learn more about our comprehensive solutions.

## License

MIT © [Novastera](https://novastera.com)