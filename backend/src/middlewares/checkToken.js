const checkToken = (req, res, next) => {
    console.log('pasa por middle')


    next()
}
module.exports = { checkToken }