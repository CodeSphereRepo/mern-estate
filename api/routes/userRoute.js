import express from 'express';
import { signUp } from "../controller/userController.js"

const router = express.Router();

// Route to sign up a new user
router.post('/signup', signUp);

// Additional routes for user-related operations can be added here

export default router;
