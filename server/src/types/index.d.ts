import { Request, Response as ExpressResponse } from "express"
import {User} from "@models/user";

export interface AuthInfoRequest extends Request {
    user?: User
}

export interface Response extends ExpressResponse{

}