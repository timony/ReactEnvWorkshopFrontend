import {sum, homeLabel} from './functions.js';

describe('Function sum', () => {
  it('should return sum', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe('Function label', () => {
  it('should return default label', () => {
    expect(homeLabel()).toBe('Welcome, visitor');
  });
  it('should return label', () => {
    expect(homeLabel('Tomas')).toBe('Welcome, Tomas');
  });
});
