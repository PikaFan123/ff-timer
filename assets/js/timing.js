// https://stackoverflow.com/a/11888430
Date.prototype.stdTimezoneOffset = function () {
    var jan = new Date(this.getFullYear(), 0, 1);
    var jul = new Date(this.getFullYear(), 6, 1);
    return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
}

Date.prototype.isDstObserved = function () {
    return this.getTimezoneOffset() < this.stdTimezoneOffset();
}

function getNextFFTime()
{
    ttrem = 3600
    if (new Date().isDstObserved())
    {
        ttrem = 0
    }

    const baseTime = new Date((1602274500 - ttrem) * 1000)

    let nextFF = baseTime

    let now = Date.now()

    while (nextFF < now)
    {
        nextFF.setSeconds(nextFF.getSeconds() + 37200)
    }

    return nextFF
}
