import CustomError from "@/services/@erros/CustomError";
import { FastifyReply, FastifyRequest } from "fastify";
import jwt, { JwtPayload } from "jsonwebtoken";

interface DecodedToken extends JwtPayload {
  userId: string;
  email: string;
}

export async function authenticate(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { token } = request.cookies;

  if (!token) {
    throw new CustomError("Not authenticated", 401);
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken;
    request.user = { userId: decoded.userId, email: decoded.email };
  } catch (err) {
    throw new CustomError("Invalid token", 401);
  }
}
