import {Router} from "express";
import {param, body} from "express-validator";
import * as taskController from "@controllers/task"
import {verifyToken} from "@handlers/tokenHandler";
import {isObjectId, validate} from "@handlers/validation";

const router = Router();

router.post(
  '/',
  param('boardId').custom((value: string) => {
    if (!isObjectId(value)) {
      return Promise.reject('invalid board id')
    } else return Promise.resolve()
  }),
  body('sectionId').custom((value: string) => {
    if (!isObjectId(value)) {
      return Promise.reject('invalid section id')
    } else return Promise.resolve()
  }),
  validate,
  verifyToken,
  taskController.createTask
)

router.put(
  '/updateTask-position',
  param('boardId').custom((value: string) => {
    if (!isObjectId(value)) {
      return Promise.reject('invalid board id')
    } else return Promise.resolve()
  }),
  validate,
  verifyToken,
  taskController.updatePosition
)

router.delete(
  '/:taskId',
  param('boardId').custom((value: string) => {
    if (!isObjectId(value)) {
      return Promise.reject('invalid board id')
    } else return Promise.resolve()
  }),
  param('taskId').custom((value: string) => {
    if (!isObjectId(value)) {
      return Promise.reject('invalid task id')
    } else return Promise.resolve()
  }),
  validate,
  verifyToken,
  taskController.deleteTask
)

router.put(
  '/:taskId',
  param('boardId').custom((value: string) => {
    if (!isObjectId(value)) {
      return Promise.reject('invalid board id')
    } else return Promise.resolve()
  }),
  param('taskId').custom((value: string) => {
    if (!isObjectId(value)) {
      return Promise.reject('invalid task id')
    } else return Promise.resolve()
  }),
  validate,
  verifyToken,
  taskController.updateTask
)

export default router;