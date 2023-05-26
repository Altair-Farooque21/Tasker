const getCreateDate = () =>{
    let dateObj =  Date().split(' ');
    let date = dateObj[2]
    let day = dateObj[0]
    let mon = dateObj[1]
    let cd = date+" "+day+", "+mon;
    return cd
}

module.exports = { getCreateDate };