
const serverContainUserSession = (req,res,next) =>{
    console.log('-----------------------------------')    
    console.log(req.session)
    console.log('-----------------------------------')    

        next()
    

}


module.exports = {
    serverContainUserSession
}