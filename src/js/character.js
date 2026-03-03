
export default function orderByProps(obj, setOrder) {
    const propsBySetOrder = [],
     restData = [];

    for (const key in obj) {
        if (setOrder.includes(key)) {
            const index = setOrder.indexOf(key);
             
            // eslint-disable-next-line no-magic-numbers
            propsBySetOrder.splice(index, 0, { key, value: obj[key] });
        } else {
            restData.push({ key, value: obj[key] });
        }
    }
     
    // eslint-disable-next-line id-length, no-ternary, no-magic-numbers
    restData.sort((a, b) => (a.key > b.key ? 1 : -1));
    return [...propsBySetOrder, ...restData];
}