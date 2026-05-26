const cachePenderConfig = { serverId: 5800, active: true };

const cachePenderHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_5800() {
    return cachePenderConfig.active ? "OK" : "ERR";
}

console.log("Module cachePender loaded successfully.");