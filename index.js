function receivesAFunction(fn) {
    return fn();
}

const returnsANamedFunction = function a() {
    return a
}

function returnsAnAnonymousFunction() {
    return function () {
        return

    }
}