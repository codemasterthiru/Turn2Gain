const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

export const dateToString = (dat, isFormat) => {
    if (!dat) return;
    const split = dat?.split("-");
    const format = split[ 1 ] + "/" + split[ 0 ] + "/" + split[ 2 ];
    const date = new Date(format);
    const getDay = date?.getDate()
    const getMonth = month[ date.getMonth() ];
    const getYear = date.getFullYear();
    const mmmyyyy = getMonth + " " + getYear;
    const ddmmyyyy = getDay + "/" + getMonth + "/" + getYear;
    const ddmm = getDay + " " + getMonth;
    return isFormat === "mmmyyyy" ? mmmyyyy : (isFormat === "ddmmyyyy" ? ddmmyyyy : ddmm);
};