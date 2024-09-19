// db/schema/index.ts
import { vendors } from './vendor';
import { parts } from './part';
import { spends } from './spend';
import { risk } from './risk';

export const schema = {
  vendors,
  parts,
  spends,
  risk
};

export * from './vendor';
export * from './part';
export * from './spend';
export * from './risk';
