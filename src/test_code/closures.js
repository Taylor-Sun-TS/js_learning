
function funCreator(init) {
    let sum = init;
    return function (num) {
        sum = sum + num;
        return sum;
    }
}

const fun = funCreator(0);
fun(1); // 1
fun(2); // 3
fun(3); // 6
fun(4); // 10
fun(5); // 15