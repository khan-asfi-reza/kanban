import {Router} from "express";
import auth from "@routes/auth";
import board from "@routes/board";
import section from "@routes/section";
import task from "@routes/task";

const router = Router()

router.use('/auth', auth)
router.use('/boards', board)
router.use('/boards/:boardId/sections', section)
router.use('/boards/:boardId/tasks', task)

export default router;
