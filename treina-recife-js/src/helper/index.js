export const formatDate = (date, symbol) => {
    let fullDate = new Date(date);

    let year = fullDate.getFullYear();
    let month = fullDate.getMonth() + 1;
    let day = fullDate.getDate();

    if (day < 10) {
        day = "0" + day;
    }
    if (month < 10) {
        month = "0" + month;
    }

    if (symbol === "/") {
        return day + "/" + month + "/" + year;
    } else {
        return String(date).split("T")[0];
    }
};