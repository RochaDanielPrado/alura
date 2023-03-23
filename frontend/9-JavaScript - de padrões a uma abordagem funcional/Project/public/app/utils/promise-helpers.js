export const handleStatus = res =>
    res.ok ? res.json() : Promise.reject(res.handleStatus);

export const log = param => {
    console.log(param);
    return param;
};