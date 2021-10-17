'use strict';

const contract = (fn, ...types) => (...args) => {
    for(let i=0; i<args.length;i++){
        const arg = args[i];
        const tip = types[i];
        const name1 = tip.name.toLowerCase();
        if (name1 !== typeof arg) {
            throw new TypeError(`Argument type ${name1} expected`);
        }; 
    };
    const res = fn(...args);
    const typ = types[args.length];
    const name2 = typ.name.toLowerCase();
    if (name2 !== typeof res){ 
        throw new TypeError(`Result type ${name2} expected`);
    };
    return res;
};

module.exports = { contract };
