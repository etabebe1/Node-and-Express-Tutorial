/* npm --> worlds biggest code store */

const _ = require("lodash");


const items = [2, [3, [4]]];

const newItems = _.flattenDeep(items);
// the flattenDeep() --> method we are using is from lodash
// It's accessible as we install the lodash dependency||method||package
console.log(newItems);

// remember you didn't installed the lodash dependency
//That's why the error come from ---> install and try again
