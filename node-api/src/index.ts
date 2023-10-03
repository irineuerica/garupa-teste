import 'express-async-errors'
import express from 'express'
import { AppDataSource } from './config/db.config'
import { errorMiddleware } from './middleware/error.middleware'
import routes from './routes'
import cors from 'cors';

AppDataSource.initialize().then(() => {
	const app = express()

	app.use(cors());
	app.use(express.json())

	app.use(routes)

	app.use(errorMiddleware)


	return app.listen(3013, () => {
		console.log(
			`🚀 Server started on port 3013! `,
		)
	})
})