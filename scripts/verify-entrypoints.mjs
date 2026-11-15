import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { CURRENCIES as fromImport } from '@novastera-oss/currencies-info';

const require = createRequire(import.meta.url);
const { CURRENCIES: fromRequire } = require('@novastera-oss/currencies-info');

const usd = { s: '$', d: 2 };

assert.deepEqual(fromImport.currency.USD, usd);
assert.deepEqual(fromRequire.currency.USD, usd);
