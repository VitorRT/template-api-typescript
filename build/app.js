"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Default Template for API's - Typescript */
const express_1 = __importDefault(require("express"));
const chalk_1 = __importDefault(require("chalk"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("./db/connection"));
const routes_1 = __importDefault(require("./api/routes"));
const init_1 = __importDefault(require("./db/init"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.host = "localhost";
        this.port = process.env.PORT || 3000;
        this.api_url = `http://${this.host}:${this.port}`;
        this.getApplication();
        this.onMiddlewares();
        this.onReady();
        this.welcomeApi();
        (0, init_1.default)();
        (0, routes_1.default)(this.app);
    }
    getApplication() {
        return this.app;
    }
    onReady() {
        connection_1.default.authenticate().then(() => {
            console.log(`\n[ ${chalk_1.default.blueBright("Connected")} ] - DB was connected!`);
        }).then((() => {
            this.app.listen(Number(this.port), this.host, () => {
                console.log(`[ ${chalk_1.default.greenBright('ON')} ] - Server is ready!\nRunning on [ ${chalk_1.default.yellowBright(this.api_url)} ]`);
            });
        })).catch((err) => {
            console.error(err);
        });
    }
    onMiddlewares() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    welcomeApi() {
        this.app.get("/", (req, res) => {
            return res.status(200).json({
                welcome: "Welcome to my API test! 👋",
                author: "VitorRT 💌",
                github: "https://github.com/VitorRT",
                vitor: "https://linktr.ee/VitorRT"
            });
        });
    }
}
exports.default = App;
