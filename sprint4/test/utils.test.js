import { formatDate, getRandomInt, deepClone, isEmptyString } from '../src/utils/utils';

test('formats date correctly', () => {
    const date = new Date('2023-10-27');
    expect(formatDate(date)).toBe('2023-10-27');
});

test('generates random integer within range', () => {
    const randomInt = getRandomInt(1, 10);
    expect(randomInt).toBeGreaterThanOrEqual(1);
    expect(randomInt).toBeLessThanOrEqual(10);
});

test('deep clones an object', () => {
    const original = { name: 'Test', nested: { key: 'value' } };
    const cloned = deepClone(original);
    expect(cloned).toEqual(original);
    expect(cloned.nested).not.toBe(original.nested); // 确保是深拷贝
});

test('checks if string is empty', () => {
    expect(isEmptyString('')).toBe(true);
    expect(isEmptyString(' ')).toBe(true);
    expect(isEmptyString('Hello')).toBe(false);
});
