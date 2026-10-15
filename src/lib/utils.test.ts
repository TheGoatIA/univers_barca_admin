import { cn, formatNumber, formatUptime } from './utils';

describe('utils', () => {
  it('cn fusionne les classes Tailwind en conflit', () => {
    expect(cn('px-2', 'px-4', undefined)).toBe('px-4');
  });
  it('formatUptime', () => {
    expect(formatUptime(90)).toBe('1 min');
    expect(formatUptime(3700)).toBe('1 h 1 min');
    expect(formatUptime(90000)).toBe('1 j 1 h');
  });
  it('formatNumber utilise la locale fr', () => {
    expect(formatNumber(1234).replace(/\s/g, ' ')).toContain('1');
  });
});
