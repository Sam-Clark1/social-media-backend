const dateFormat = require('../utils/dateFormat');

test('checks to see if date formatter produces correct date in correct format.', () => {
    expect(dateFormat(1652141872135)).toBe('05/09/2022 8:17 PM')
}
);