export const artificialRandomDelay = async () => {
    const random = Math.random() * 4000;
    // console.log('random number is ', random);
    return new Promise((resolve) => {
        setTimeout(resolve, random);
    });
};
//# sourceMappingURL=delay.util.js.map