const compactDir = (dir) => {
    if (process.platform === "win32") {
        return dir.split("\\").join("/");
    }
    return dir;
}

module.exports = {
    compactDir
}