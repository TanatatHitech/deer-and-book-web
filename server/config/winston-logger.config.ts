import * as winston from 'winston'
import * as fs from 'fs'
import * as path from 'path'

const isProduction = process.env.NODE_ENV === 'production'
function getLogFilePath(filename: string) {
	const date = new Date()
	const dateString = date.toISOString().split('T')[0].replace(/-/g, '') // e.g., '20240827'
	const logDir = path.join('logs', dateString)

	// Create directory if it doesn't exist
	if (!fs.existsSync(logDir)) {
		fs.mkdirSync(logDir, { recursive: true })
	}

	return path.join(logDir, filename)
}

export const winstonLoggerConfig = {
	transports: [
		new winston.transports.Console({
			format: winston.format.combine(
				!isProduction ? winston.format.colorize() : winston.format.uncolorize(),
				winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
				winston.format.printf(({ timestamp, level, message, stack }) => {
					return `${timestamp} [${level}] ${message}${stack ? `\nStack: ${stack}` : ''}`
				}),
			),
		}),
		// new winston.transports.File({
		// 	filename: getLogFilePath('error.log'),
		// 	level: 'error',
		// 	format: winston.format.combine(
		// 		winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
		// 		winston.format.errors({ stack: true }), // Capture the stack trace
		// 		winston.format.printf(({ timestamp, level, message, stack }) => {
		// 			return `${timestamp} [${level}] ${message}${stack ? `\nStack: ${stack}` : ''}`
		// 		}),
		// 	),
		// }),
		// new winston.transports.File({
		// 	filename: getLogFilePath('combined.log'),
		// 	format: winston.format.combine(
		// 		winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
		// 		winston.format.errors({ stack: true }), // Capture the stack trace
		// 		winston.format.printf(({ timestamp, level, message, stack }) => {
		// 			return `${timestamp} [${level}] ${message}${stack ? `\nStack: ${stack}` : ''}`
		// 		}),
		// 	),
		// }),
		// new winston.transports.File({
		// 	filename: getLogFilePath('grow-up.log'),
		// 	format: winston.format.combine(
		// 		winston.format((info: any) => {
		// 			return info.context === 'GrowUpService' ? info : false
		// 		})(),
		// 		winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
		// 		winston.format.errors({ stack: true }), // Capture the stack trace
		// 		winston.format.printf(({ timestamp, level, message, context, stack, ...meta }) => {
		// 			return JSON.stringify({
		// 				level: level,
		// 				message: message,
		// 				timestamp: timestamp,
		// 				context: context,
		// 				stack: stack,
		// 				...meta,
		// 			})
		// 		}),
		// 	),
		// }),
	],
}
