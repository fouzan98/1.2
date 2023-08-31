document.addEventListener('DOMContentLoaded', function () {
    // String methods
    const originalString = '   Hey, JavaScript Concepts for you!   ';
    const trimmedString = originalString.trim();
    const upperCaseString = originalString.toUpperCase();
    const lowerCaseString = originalString.toLowerCase();
    const replacedString = originalString.replace('JavaScript', 'Web');
    const substring = originalString.substring(10, 25);

    // Number methods
    const randomNumber = Math.random() * 100;
    const roundedNumber = Math.round(randomNumber);
    const fixedDecimalNumber = randomNumber.toFixed(2);
    const parsedNumber = parseFloat(fixedDecimalNumber);
    const isNaNResult = isNaN(randomNumber);

    // Array methods
    const mixedArray = [1, 'two', 3, 'four', 5];
    const filteredArray = mixedArray.filter(item => typeof item === 'string');
    const joinedArray = mixedArray.join(', ');
    const slicedArray = mixedArray.slice(1, 4);
    const reversedArray = mixedArray.reverse();

    // Date methods
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const day = currentDate.getDate();
    const time = currentDate.toLocaleTimeString();

    // Function Methods
    function add(x, y) {
        return x + y;
    }
    function multiply(x, y) {
        return x * y;
    }

    // Display results on the webpage
    document.getElementById('stringMethodsResult').textContent =
        `Trimmed: "${trimmedString}",
        Uppercase: "${upperCaseString}",
        Lowercase: "${lowerCaseString}",
        Replaced: "${replacedString}",
        Substring: "${substring}"`;

    document.getElementById('numberMethodsResult').textContent =
        `Rounded: ${roundedNumber}, 
        Fixed Decimal: ${fixedDecimalNumber}, 
        Parsed: ${parsedNumber}, 
        isNaN: ${isNaNResult}`;

    document.getElementById('arrayMethodsResult').textContent =
        `Filtered Array: ${filteredArray.join(', ')}, 
        Joined Array: ${joinedArray}, 
        Sliced Array: ${slicedArray}, 
        Reversed Array: ${reversedArray.join(', ')}`;

    document.getElementById('dateMethodsResult').textContent =
        `Year: ${year}, 
        Month: ${month}, 
        Day: ${day}, 
        Time: ${time}`;

    document.getElementById('functionMethodsResult').textContent =
        `Add Result: ${add(5, 3)}, 
        Multiply Result: ${multiply(4, 6)}`;
});