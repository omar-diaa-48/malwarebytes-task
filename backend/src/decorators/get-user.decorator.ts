import { createParamDecorator, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";
import * as jwt from "jsonwebtoken";
import { JwtPayload } from "src/modules/auth/dto/jwt-payload";

export const GetUser = createParamDecorator(
	(data: unknown, ctx: ExecutionContext) => {
		const request: Request = ctx.switchToHttp().getRequest();
		const jwttoken = request.headers["authorization"];

		if (!jwttoken) {
			throw new UnauthorizedException("User is not authorized to show the current resource")
		}

		const accessToken = jwttoken.split(' ')[1]

		const payload: JwtPayload = jwt.decode(accessToken) as JwtPayload;

		return payload;
	},
);