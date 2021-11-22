import startServer from "./server";
import startDatabase from "./database";
import dotenv from 'dotenv'

dotenv.config()
startDatabase()
startServer()