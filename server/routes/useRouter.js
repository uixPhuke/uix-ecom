const userCtrl = require('../controllers/userCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

const router = require('express').Router()

router.post('/register',userCtrl.register)
router.post('/login',userCtrl.login)
router.get('/logout',userCtrl.logout)
router.get('/refresh_token',userCtrl.refreshtoken)
router.get('/infor',auth,userCtrl.getUser)
//router.get('/users',auth,authAdmin,userCtrl.getAllUser)
// router.post('/edituser',auth,authAdmin,userCtrl.updateUsers)


module.exports=router