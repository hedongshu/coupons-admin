/**
 * @param {string} url
 * @returns {Object}
 */
function param2Obj(url) {
    const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
    if (!search) {
        return {}
    }
    const obj = {}
    const searchArr = search.split('&')
    searchArr.forEach(v => {
        const index = v.indexOf('=')
        if (index !== -1) {
            const name = v.substring(0, index)
            const val = v.substring(index + 1, v.length)
            obj[name] = val
        }
    })
    return obj
}


function randomDate(startDate, endDate) {
    startDate = new Date(startDate)
    endDate = new Date(endDate)
    let date = new Date(+startDate + Math.random() * (endDate - startDate));
    let hour = 0 + Math.random() * (23 - 0) | 0;
    let minute = 0 + Math.random() * (59 - 0) | 0;
    let second = 0 + Math.random() * (59 - 0) | 0;

    date.setHours(hour);
    date.setMinutes(minute);
    date.setSeconds(second);
    return date;
};


module.exports = {
    param2Obj,
    randomDate
}
