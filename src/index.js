exports.min = function min(array) {

    if (Array.isArray(array) === false || array.length === 0) {
        return 0;
    } else {
        for (let i = 0; i < array.length; i++) {
            let wasSwap = false;

            for (let j = i; j < array.length; j++) {
                if (array[i] > array[j]) {
                    const swap = array[i];
                    array[i] = array[j];
                    array[j] = swap;
                    wasSwap = true;
                }
            }

            if (!wasSwap) break;
        }
        return array[0];
    }
}

exports.max = function max(array) {

    if (Array.isArray(array) === false || array.length === 0) {
        return 0;
    } else {
        for (let i = 0; i < array.length; i++) {
            let wasSwap = false;

            for (let j = i; j < array.length; j++) {
                if (array[i] < array[j]) {
                    const swap = array[i];
                    array[i] = array[j];
                    array[j] = swap;
                    wasSwap = true;
                }
            }

            if (!wasSwap) break;
        }
        return array[0];
    }
}

exports.avg = function avg(array) {

    if (Array.isArray(array) === false || array.length === 0) {
        return 0;
    } else {
        let accum = 0;

        for (let i = 0; i < array.length; i++) {
            accum += array[i];
        }
        return accum / array.length;
    }
}
