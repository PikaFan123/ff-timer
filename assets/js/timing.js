function getNextFFTime()
{
    const baseTime = new Date(1602274500 * 1000)

    let nextFF = baseTime

    let now = Date.now()

    while (nextFF < now)
    {
        nextFF.setSeconds(nextFF.getSeconds() + 37200)
    }

    return nextFF
}