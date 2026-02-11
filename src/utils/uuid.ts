type V4Options = {
  random: number[];
  rng?: () => number[];
};

export function generateRandomUID(
  options?: V4Options | string,
  buf?: Array<number>,
  offset?: number,
) {
  // Deprecated - 'format' argument, as supported in v1.2
  let i = (buf && offset) || 0;

  // buf = new Array<number>(16);

  let rnds: number[] = rng();

  if (options && !(options instanceof String)) {
    if ((options as V4Options).random) {
      rnds = (options as V4Options).random;
    }
    if ((options as V4Options).rng) {
      rnds = (options as V4Options).rng!();
    }
  }

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ii++) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || unparse(rnds);
}

const min = 0;
const max = 256;
const RANDOM_LENGTH = 16;

const rng = () => {
  let result = new Array<number>(RANDOM_LENGTH);

  for (let j = 0; j < RANDOM_LENGTH; j++) {
    result[j] = 0xff & (Math.random() * (max - min) + min);
  }

  return result;
};

export const unparse = (buf: Array<number>, offset?: number) => {
  let i = offset || 0;
  let bth = byteToHex;

  return (
    bth[buf[i++]] +
    bth[buf[i++]] +
    bth[buf[i++]] +
    bth[buf[i++]] +
    '-' +
    bth[buf[i++]] +
    bth[buf[i++]] +
    '-' +
    bth[buf[i++]] +
    bth[buf[i++]] +
    '-' +
    bth[buf[i++]] +
    bth[buf[i++]] +
    '-' +
    bth[buf[i++]] +
    bth[buf[i++]] +
    bth[buf[i++]] +
    bth[buf[i++]] +
    bth[buf[i++]] +
    bth[buf[i++]]
  );
};

let _byteToHex: string[] = [];
let _hexToByte: { [key: string]: number } = {};

for (var i = 0; i < 256; i++) {
  _byteToHex[i] = (i + 0x100).toString(16).slice(1);
  _hexToByte[_byteToHex[i]] = i;
}

export const byteToHex = _byteToHex;
export const hexToByte = _hexToByte;
