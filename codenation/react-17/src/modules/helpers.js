export function getParams(path) {

  const regexp = /\/.*\/\w+/;
  
  if (typeof path === 'string' && !regexp.test(path))
    throw new Error(
      'The parameter should be a valid pathname string extracted from an url'
    );

  if (isNegZero(path)) throw new TypeError('The value is negative zero');
  if (isNaN(path)) throw new TypeError('The value is NaN');
  if (isNullOrUndef(path)) throw new TypeError('The value is null/undefined');

  const [params] = path.match(/[^/]+$/);
  return params;
}

export function isNaN(p) {
  // eslint-disable-next-line no-self-compare
  return p !== p;
}

export function isNegZero(p) {
  return p === 0 && 1 / p === -Infinity;
};

export function isNullOrUndef(p) {
  const test =
    (typeof p === 'undefined' && p == null) ||
    (typeof p === 'object' && p == undefined); // eslint-disable-line eqeqeq

  return test;
};