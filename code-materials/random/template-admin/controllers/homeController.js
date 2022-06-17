const indexView = (req, res, next) =>{
    res.render('home',{
        title:'Halaman HOME',
    });
}
const iconsView = (req, res, next) =>{
    res.render('icon',{
        title:'Halaman icon',
    });
}
const userView = (req, res, next) =>{
    res.render('user',{
        title:'Halaman User',
    });
}

module.exports ={
    indexView,
    iconsView,
    userView,
}