export const toLineData = (data, vx = 1) => 
    (data.map(i => ({
        time: i.date,
        value: Number(i.close * vx)
        })).reverse());