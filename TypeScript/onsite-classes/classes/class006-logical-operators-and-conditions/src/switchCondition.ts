// switch example
let weekDayNumber: number = 5;

switch (weekDayNumber) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Invalid day');
        break;
}

// switch example with string
let fruit: string = 'Apple'; // changed foodItem to fruit

switch (fruit) {
    case 'Banana':
        console.log('I like bananas');
        break;
    case 'Apple':
        console.log('I enjoy apples'); // this code will execute if fruit is Apple
        break;
    case 'Orange':
        console.log('Oranges are refreshing');
        break;
    case 'Grapes':
        console.log('Grapes are delicious');
        break;
}
