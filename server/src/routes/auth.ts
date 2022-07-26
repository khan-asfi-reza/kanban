import {Router} from "express";
import {login, register} from "@controllers/user";
import User, {User as UserType} from "@models/User"
import {body} from "express-validator";
import {validate} from "@handlers/validation";
import {verifyToken} from "@handlers/tokenHandler";
import {AuthInfoRequest, Response} from "@types";

const router = Router()

router.post(
  '/signup',
  body('username').isLength({ min: 8 }).withMessage(
    'username must be at least 8 characters'
  ),
  body('password').isLength({ min: 8 }).withMessage(
    'password must be at least 8 characters'
  ),
  body('confirmPassword').isLength({ min: 8 }).withMessage(
    'confirmPassword must be at least 8 characters'
  ),
  body('username').custom((value: string) => {
    return User.findOne({ username: value }).then((user?: UserType) => {
      if (user) {
        return Promise.reject('username already used')
      }
    })
  }),
  validate,
  register
)

router.post(
  '/login',
  body('username').isLength({ min: 8 }).withMessage(
    'username must be at least 8 characters'
  ),
  body('password').isLength({ min: 8 }).withMessage(
    'password must be at least 8 characters'
  ),
  validate,
  login
)

router.post(
  '/verify-token',
  verifyToken,
  (req:AuthInfoRequest, res: Response) => {
    res.status(200).json({ user: req.user })
  }
)
export default router;