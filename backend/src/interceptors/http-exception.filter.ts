import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
	constructor() { }

	catch(exception: HttpException, host: ArgumentsHost) {
		const ctx = host.switchToHttp();
		const response = ctx.getResponse<Response>();
		const request = ctx.getRequest<Request>();
		const status = exception.getStatus();
		// const message = exception.getResponse()["message"] || exception.message;
		const responseData = exception.getResponse()

		let message = ''
		let data = {}

		if (typeof responseData === "string") {

			message = responseData;

		} else if (typeof responseData === "object") {

			//@ts-ignore
			({ message, ...data } = responseData);

		}

		response
			.status(status)
			.json({
				code: 'FAILED REQUEST',
				message,
				data: {
					...data,
					message,
					statusCode: status,
					timestamp: new Date().toISOString(),
					path: request.url,
				}
			});
	}
}