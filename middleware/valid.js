function valid(number) {
    let regex = /^(?:\88|01)?\d{11}$/;
    return number.match(regex);
}
module.exports = { valid };
