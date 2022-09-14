function goldenRatio(a, b) {
    let x = a + b;
    if (a >= b) {
        let y = x / a;
        console.log(y)
        let z = a / b;
        console.log(z)
        if (y == z) {
            console.log(`${a} and ${b} are in goldenratio`);
        } else {
            console.log(`${a} and ${b} are not in goldenratio`);
        }
    }
    if (a <= b) {
        let y = x / b;
        let z = a / b;
        if (y == z) {
            console.log(`${a} and ${b} are in goldenratio`);
        } else {
            console.log(`${a} and ${b} are not in goldenratio`);

        }
    }
}
goldenRatio(1, 0.618);