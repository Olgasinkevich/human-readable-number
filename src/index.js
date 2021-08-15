module.exports = function toReadable(number) {
    if (!number) return 'zero';

    const value = {
        hundred: Math.floor(number / 100),
        decade: Math.floor(number % 100 / 10),
        unit: number % 10,
    };

    const numberToText = (num, dec, text = '') => {
        if (!num || dec === 1) return '';
        const map = {
            '1': 'one',
            '2': 'two',
            '3': 'three',
            '4': 'four',
            '5': 'five',
            '6': 'six',
            '7': 'seven',
            '8': 'eight',
            '9': 'nine',
        }
        return map[num.toString()] + ` ${text} `;
    }

    const hundredToText = (hundred) => numberToText(hundred, 0, 'hundred');

    const decadeToText = (dec, num) => {
        if (!dec) return '';

        if (dec === 1) {
            const mapWithTeen = {
                '0': 'ten',
                '1': 'eleven',
                '2': 'twelve',
                '3': 'thirteen',
                '4': 'fourteen',
                '5': 'fifteen',
                '6': 'sixteen',
                '7': 'seventeen',
                '8': 'eighteen',
                '9': 'nineteen',
            }
            return mapWithTeen[num.toString()];
        }

        const mapWithTy = {
            '2': 'twenty',
            '3': 'thirty',
            '4': 'forty',
            '5': 'fifty',
            '6': 'sixty',
            '7': 'seventy',
            '8': 'eighty',
            '9': 'ninety',
        };
        return mapWithTy[dec.toString()] + ' ';
    }
    const result = hundredToText(value.hundred) + decadeToText(value.decade, value.unit) + numberToText(value.unit, value.decade);
    return result.trim();
};
