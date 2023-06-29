import { getInteger } from "./number.ts";

const numberConfig = { min: 0, max: 99 };

export function getIPv4() {
  return `${getInteger({ min: 100, max: 199 })}.${getInteger(numberConfig)}.${
    getInteger(numberConfig)
  }.${getInteger(numberConfig)}`;
}
