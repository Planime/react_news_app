export function timeConvert(n) {
    let today = n ? new Date(n) : new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    return yyyy + '-' + mm + '-' + dd;
}

export function checkTime(d) {
    let minDate = new Date().getTime() - 2419200000;
    if (new Date(d).getTime() < minDate) {
        return timeConvert()
    } else {
        return timeConvert(new Date(d).getTime())
    }
}