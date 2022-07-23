import User from "@models/user";
import jsonwebtoken from "jsonwebtoken"


const tokenDecode = (req: any) => {
  const bearerHeader = req.headers['authorization']
  if (bearerHeader) {
    const bearer = bearerHeader.split(' ')[1]
    try {
      return jsonwebtoken.verify(
          bearer,
          process.env.TOKEN_SECRET_KEY
      )
    } catch {
      return false
    }
  } else {
    return false
  }
}

export const verifyToken = async (req: any, res: any, next: any) => {
  const tokenDecoded = tokenDecode(req)
  if (tokenDecoded && typeof tokenDecoded !== "string") {
    const user = await User.findById(tokenDecoded.id)
    if (!user) return res.status(401).json('Unathorized')
    req.user = user
    next()
  } else {
    res.status(401).json('Unathorized')
  }
}