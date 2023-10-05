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
    const getMonInNo = date.getMonth() + 1;
    const getYear = date.getFullYear();
    const mmmyyyy = getMonth + " " + getYear;
    const ddmmyyyy = getDay + "/" + getMonInNo + "/" + getYear;
    const mmddyyyy = getMonInNo + "/" + getDay + "/" + getYear;
    const ddmm = getDay + " " + getMonth;
    const yyyymmdd = getYear + "-" + getMonInNo + "-" + getDay;

    switch (isFormat) {
        case "mmmyyyy": return mmmyyyy;
        case "ddmmyyyy": return ddmmyyyy;
        case "mmddyyyy": return mmddyyyy;
        case "ddmm": return ddmm;
        case "yyyymmdd": return yyyymmdd;
        default: return ddmm;
    }
};