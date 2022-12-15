export const dateUtil = (date) => {
    const [month, day, year] = [
        ("0" + (date.getMonth()+1)).slice(-2),
         ("0"+ date.getDate()).slice(-2),
        date.getFullYear(),
    ];
    return (`${year}-${month}-${day}`);
}