import lodash from 'lodash';

const names = ["mahi", "vikky", "naresh"];

const capitalizeNames = lodash.map(names, lodash.capitalize);

console.log(capitalizeNames)

const floatingNumberArray = [2.56, 3.17, 6.98, 11, 98.1];

console.log(lodash.map(floatingNumberArray, num => lodash.ceil(num)))