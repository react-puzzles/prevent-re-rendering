const wait = (ms: number) => {
    const start = Date.now();
    let now = start;

    while (now - start < ms) now = Date.now();
};

export const VerySlowComponent = () => {
    wait(1500);
    return null;
};

export const AnotherVerySlowComponent = () => {
    wait(1500);
    return null;
};
