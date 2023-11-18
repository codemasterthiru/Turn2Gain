export const oneDayDataCalc = (data) => {
    let count = 0;
    let result = data?.filter((i, idx) => {
        if (count < 2) {
          count += 1;
          return i;
        }
    });
    return result?.reverse();
};

export const oneWeekDataCalc = (data) => {
  let count = 0;
  let result = data?.filter((i, idx) => {
      if (count < 7) {
        count += 1;
        return i;
      }
  });
  return result?.reverse();
};

export const oneMonthDataCalc = (data) => {
    let result = data?.filter((i, idx) => {
      if (i?.date) {
        const split = i.date.split("-");
        const format = split[1] + "/" + split[0] + "/" + split[2];
        let dataDate = new Date(format), sysDate = new Date();
        if ((dataDate.getFullYear() === sysDate.getFullYear()) &&
            (dataDate.getMonth() === sysDate.getMonth())) {
          return i;
        }
      }
    });
  return result?.reverse();
};

export const threeMonthDataCalc = (data) => {
    let result = data?.filter((i, idx) => {
      if (i?.date) {
        const split = i.date.split("-");
        const format = split[1] + "/" + split[0] + "/" + split[2];
        let dataDate = new Date(format), sysDate = new Date();
        if ((dataDate.getFullYear() === sysDate.getFullYear()) &&
            ((dataDate.getMonth() === sysDate.getMonth()) ||
            (dataDate.getMonth() === sysDate?.getMonth() - 1) ||
            (dataDate.getMonth() === sysDate?.getMonth() - 2))) {
          return i;
        }
      }
    });
  return result?.reverse();
};

export const sixMonthDataCalc = (data) => {
    let result = data?.filter((i, idx) => {
      if (i?.date) {
        const split = i.date.split("-");
        const format = split[1] + "/" + split[0] + "/" + split[2];
        let dataDate = new Date(format), sysDate = new Date();
        if ((dataDate.getFullYear() === sysDate.getFullYear()) &&
                ((dataDate.getMonth() === sysDate.getMonth()) ||
                (dataDate.getMonth() === sysDate?.getMonth() - 1) ||
                (dataDate.getMonth() === sysDate?.getMonth() - 2) ||
                (dataDate.getMonth() === sysDate?.getMonth() - 3) ||
                (dataDate.getMonth() === sysDate?.getMonth() - 4) ||
                (dataDate.getMonth() === sysDate?.getMonth() - 5))) {
          return i;
        }
      }
    });
  return result?.reverse();
};

export const oneYearDataCalc = (data) => {
    let result = data?.filter((i, idx) => {
      if (i?.date) {
        const split = i.date.split("-");
        const format = split[1] + "/" + split[0] + "/" + split[2];
        let dataDate = new Date(format), sysDate = new Date();
        if (dataDate.getFullYear() === sysDate.getFullYear()) {
          return i;
        }
      }
    });
  return result?.reverse();
};

export const threeYearsDataCalc = (data) => {
    let result = data?.filter((i, idx) => {
      if (i?.date) {
        const split = i.date.split("-");
        const format = split[1] + "/" + split[0] + "/" + split[2];
        let dataDate = new Date(format), sysDate = new Date();
          if ((dataDate.getFullYear() === sysDate.getFullYear()) ||
              (dataDate.getFullYear() === (sysDate.getFullYear() - 1)) ||
              (dataDate.getFullYear() === (sysDate.getFullYear() - 2))) {
          return i;
        }
      }
    });
  return result?.reverse();
};

export const fiveYearsDataCalc = (data) => {
    let result = data?.filter((i, idx) => {
      if (i?.date) {
        const split = i.date.split("-");
        const format = split[1] + "/" + split[0] + "/" + split[2];
        let dataDate = new Date(format), sysDate = new Date();
          if ((dataDate.getFullYear() === sysDate.getFullYear()) ||
              (dataDate.getFullYear() === (sysDate.getFullYear() - 1)) ||
              (dataDate.getFullYear() === (sysDate.getFullYear() - 2)) ||
              (dataDate.getFullYear() === (sysDate.getFullYear() - 3)) ||
              (dataDate.getFullYear() === (sysDate.getFullYear() - 4))) {
          return i;
        }
      }
    });
  return result?.reverse();
};

export const tenYearsDataCalc = (data) => {
    let result = data?.filter((i, idx) => {
      if (i?.date) {
        const split = i.date.split("-");
        const format = split[1] + "/" + split[0] + "/" + split[2];
        let dataDate = new Date(format), sysDate = new Date();
          if ((dataDate.getFullYear() === sysDate.getFullYear()) ||
              (dataDate.getFullYear() === (sysDate.getFullYear() - 1)) ||
              (dataDate.getFullYear() === (sysDate.getFullYear() - 2)) ||
              (dataDate.getFullYear() === (sysDate.getFullYear() - 3)) ||
              (dataDate.getFullYear() === (sysDate.getFullYear() - 4)) ||
              (dataDate.getFullYear() === (sysDate.getFullYear() - 5)) ||
              (dataDate.getFullYear() === (sysDate.getFullYear() - 6)) ||
              (dataDate.getFullYear() === (sysDate.getFullYear() - 7)) ||
              (dataDate.getFullYear() === (sysDate.getFullYear() - 8)) ||
              (dataDate.getFullYear() === (sysDate.getFullYear() - 9))) {
          return i;
        }
      }
    });
  return result?.reverse();
};