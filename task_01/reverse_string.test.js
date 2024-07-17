const reverseString = require('./task_01');

// test(
//    'Проверяем реверс строки',
//    () => {
//        expect(reverseString('hello www')).toBe('www olleh');
//    }
//);
//test(
//    'Проверяем реверс строки',
//    () => {
//        expect(reverseString('test2')).toBe('2tset');
//    }
//);

describe(
    "Examination",
    () => {
    const testCase = [
        {
            inString: 'hello',
            expected: 'olleh'
        },
        {
            inString: 'test2',
            expected: '2tset'
        },
        {
            inString: '123456',
            expected: '654321'
        }
    ];
    testCase.forEach(test =>{
        it (
            `Входящая строка: ${test.inString} ожидаю: ${test.expected}`,
            () => {
                const res = reverseString(test.inString);
                expect(res).toBe(test.expected);
            }
        );
    });
   } 
); 