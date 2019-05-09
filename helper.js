async function getTargetingMap() {
    const script = `return gptLayer.slots.map((e) => {return e.getTargetingMap()})`;
    return browser.wait(() => browser.executeScript(script), 20000).then(() => browser.executeScript(script));
};

async function getPageInfo() {
    const script = `return gptLayer.kv`;
    return browser.wait(() => browser.executeScript(script), 20000).then(() => browser.executeScript(script));

};

async function getSize() {
    const script = `return gptLayer.slots.map((e) => {return e.getSizes()})`
    let sizes = await browser.wait(() => browser.executeScript(script), 20000).then(() => browser.executeScript(script));
    return sizes.map((arr, i) => {
        return arr.map((obj, i) => {
            if (typeof obj === "object") {
                return [obj.j, obj.l]
            } else {
                return obj
            }
        });
    });
};

async function getIu_parts() {
    const script = `return gptLayer.slots.map((e) => {return e.getAdUnitPath()})`
    return browser.wait(() => browser.executeScript(script), 20000).then(() => browser.executeScript(script));
};

module.exports = {
    getTargetingMap,
    getSize,
    getIu_parts,
    getPageInfo
};
