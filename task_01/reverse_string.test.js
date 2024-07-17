const reverseString = require('./task_01');

test(
    'Проверяем реверс строки',
    () => {
        expect(reverseString('hello www')).toBe('www olleh');
    }
);
test(
    'Проверяем реверс строки',
    () => {
        expect(reverseString('test2')).toBe('2tset');
    }
);