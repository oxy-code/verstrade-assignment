
// 2. Write a customized function named: 'sortDoodles(order, list)' that accepts an array of values of different data types. The purpose of the function is to return
// the list in a sorted format either ascending or descending. Supported data types are only numbers (integers and doubles), booleans and strings.
// Note that the general custom of this function is such that all boolean values are less than all numbers which in turn are less than all strings as denoted thus:
//   Boolean < Number < String.
// The function should expect two parameters viz;
//   - order: This tells the function whether to sort ascending or descending order. Possible values are 'ASC' or 'DESC'
//   - list: A list of the items to be sorted.

function sortDoodles(order, list) {
    if (!['ASC','DESC'].includes(order)) {
        console.error('Invalid order type, it should be either ASC or DESC');
        return [];
    }

    const output = {
        numbers: [],
        strings: [],
        booleans: []
    };
    const isAscendingOrder = 'ASC' === order;
    list.sort((x, y) => {
        if (isAscendingOrder) {
            return x > y ? 1 : -1
        }
        else {
            return x > y ? -1 : 1
        }
    }).forEach((item) => {
        switch (typeof(item)) {
            case 'number':
            case 'bigint':
                output.numbers.push(item);
                break;
            case 'boolean':
                output.booleans.push(item);
                break;
            case 'string':
                output.strings.push(item);
                break;
            default:
                console.log('unsupported data type: '+ typeof(item));
                break;
        }
    });

    if (isAscendingOrder) {
        return [...output.booleans, ...output.numbers.sort(), ...output.strings];
    }
    else {
        return [...output.strings, ...output.numbers.sort((x, y) => x > y ? -1 : 1), ...output.booleans];
    }
}

const inputArr = [1, 51, 'test', 745, 'abc', 'world', 'aaa', true, 'false', 'hello', false, 0, 3];
console.table({ASC: sortDoodles('ASC', inputArr), DESC: sortDoodles('DESC', inputArr)});
// Output
// ├─────────┼─────────┼────────┼─────────┼─────────┼───────┼───────┼─────┼───────┼───────┼─────────┼─────────┼────────┼─────────┤
// │   ASC   │  false  │  true  │    0    │    1    │   3   │  51   │ 745 │ 'aaa' │ 'abc' │ 'false' │ 'hello' │ 'test' │ 'world' │
// │  DESC   │ 'world' │ 'test' │ 'hello' │ 'false' │ 'abc' │ 'aaa' │ 745 │  51   │   3   │    1    │    0    │  true  │  false  │
// └─────────┴─────────┴────────┴─────────┴─────────┴───────┴───────┴─────┴───────┴───────┴─────────┴─────────┴────────┴─────────┘