import registerUser from '../controllers/register.controller.js'
import loginUser from '../controllers/login.controller.js'
import logoutUser from '../controllers/logout.controller.js'
import renewAccessToken from '../controllers/renewAccessToken.js' 

import { Router } from 'express'
const router = Router()

router.post("/register", registerUser)
router.post("/login", loginUser)
router.post("/logout", logoutUser)
router.post("/newAccessToken", renewAccessToken)
// router.post("/req-reset-pass", resetPassReq)
// router.post("/reset-pass/:token", setNewPass)
// router.post("/send-verification-email", sendEmailVerification)
// router.get("/verify-email/:token", verifyEmail)
// router.get("/checkAccessToken", isAccessTokenValid)

export default router