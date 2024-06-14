import { Router } from "express";

const userRouter = Router();

const createUser = (req, res) => {
    // Logic to create a user
    res.send('User created');
};

userRouter.post("/", createUser);

export default userRouter;
