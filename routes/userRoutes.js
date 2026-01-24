import { loginRender,registerRender } from '../controllers/userController.js';

import express from 'express';
const router=express.Router();


router.get('/register',registerRender);

router.get('/login',loginRender)

export default router;