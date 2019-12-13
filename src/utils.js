const deBounce = (func, delay = 1500) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(null, args);
            console.log(args[0].target.value); // equals 'event.target.value' - vvvv BELOW vvvv -
        }, delay);
    };
};
