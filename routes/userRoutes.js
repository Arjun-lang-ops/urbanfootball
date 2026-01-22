import {renderLoginPage,renderRegister} from "../controllers/userController.js";

import express from 'express';
const router=express.Router();


router.get('/register',renderRegister);
router.get('/login',renderLoginPage)

export default router;