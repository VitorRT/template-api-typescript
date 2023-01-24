/** Default Template for API's - Typescript */
import express, { Errback, NextFunction, Request, Response } from 'express';
import chalk from 'chalk';
import cors from 'cors';
import sequelize from './db/connection';
import routes from './api/routes';
import dbInit from './db/init';

export default class App {
    private app: express.Application;
    private host: string;
    private port: string | number;
    private api_url: string;

    constructor() {
        this.app = express();
        this.host = "localhost";
        this.port = process.env.PORT || 3000;
        this.api_url = `http://${this.host}:${this.port}`;
        this.getApplication();
        this.onMiddlewares();
        this.onReady();
        this.welcomeApi();
        dbInit();
        routes(this.app);
    }

    public getApplication(): express.Application {
        return this.app;
    }

    private onReady(): void {
        sequelize.authenticate().then(() => {
            console.log(`\n[ ${chalk.blueBright("Connected")} ] - DB was connected!`);
        }).then((() => {
            this.app.listen(Number(this.port), this.host, () => {
                console.log(`[ ${chalk.greenBright('ON')} ] - Server is ready!\nRunning on [ ${chalk.yellowBright(this.api_url)} ]`);
            })
        })).catch((err) => {
            console.error(err);
        })
    }

    private onMiddlewares(): void {
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use((error: any, req: Request, res: Response, next: NextFunction) => {
            res.status(error.statusCode).json({
                status: error.statusCode,
                message: error.message
            })
        })
    }
    
    private welcomeApi(){
        this.app.get("/", (req: Request, res: Response) => {
            return res.status(200).json({
                welcome: "Welcome to my API test! 👋",
                author: "VitorRT 💌",
                github: "https://github.com/VitorRT",
                vitor: "https://linktr.ee/VitorRT"
            })
        })
    }
}