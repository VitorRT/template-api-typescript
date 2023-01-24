"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomEmployee = exports.randomPwd = exports.randomOldYear = exports.randomEmail = exports.randomBirthDayWithOldYear = exports.randomDate = exports.randomNameWithEmail = exports.randomName = void 0;
const fetch = __importStar(require("../func/Fetch"));
const crypto_1 = __importDefault(require("crypto"));
/** utils function */
async function fetchNames(type) {
    const res = await fetch.fetchSomething(`https://www.randomlists.com/data/names-${type}.json`);
    return res.response.data;
}
function AleatoryDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
function randomNumber(n1, n2) {
    const min = Math.ceil(n1);
    const max = Math.floor(n2);
    return Math.floor(Math.random() * (max - min)) + min;
}
function randomPassword(length) {
    return crypto_1.default.randomBytes(length).toString('hex');
}
function randomIndex(list) {
    return Math.floor(Math.random() * list.length);
}
function pickRandom(list) {
    return list[randomIndex(list)];
}
/** utils function */
/** Exports */
const randomName = async () => {
    const randomTypes = pickRandom(["male", "female"]);
    const list_names = await fetchNames("male");
    return list_names[randomIndex(list_names)];
};
exports.randomName = randomName;
const randomNameWithEmail = async () => {
    const random_name = await (0, exports.randomName)();
    return {
        name: random_name,
        email: `${random_name}${randomNumber(10, 500)}@gmail.com`
    };
};
exports.randomNameWithEmail = randomNameWithEmail;
const randomDate = (start, end) => {
    return AleatoryDate(start, end);
};
exports.randomDate = randomDate;
const randomBirthDayWithOldYear = () => {
    const random_date = AleatoryDate(new Date(1960, 0, 1), new Date(2004, 0, 1));
    const atual_year = new Date();
    const employee_old_year = atual_year.getFullYear() - random_date.getFullYear();
    const employee_birth_date = `${random_date.getDay()}/${random_date.getMonth()}/${random_date.getFullYear()}`;
    return {
        birth_date: employee_birth_date,
        oldyear: employee_old_year
    };
};
exports.randomBirthDayWithOldYear = randomBirthDayWithOldYear;
/** Essa função retorna um email randômico. O retorno dessa funcção é uma Promise<String>, ou seja, uma promessa de uma string. Por ser uma função assíncrona, antes de chamar essa função você precisa específicar o "await", assim você espera a promessa se cumprir e a função irá retornar uma string como prometido. */
const randomEmail = async () => {
    const random_name = await (0, exports.randomName)();
    return `${random_name}@gmail.com`;
};
exports.randomEmail = randomEmail;
/** Essa função retorna uma idade (número) aleatória. Você pode utilizar essa função quando não quiser se preocupar com a coerência da idade com a data de aniversário. Se você quiser obter uma idade coerente com a data de aniversário, você pode utilizar a função 'randomBirthDayWithOldYear', que retorna um objeto com uma data de aniversário randomica coerente com a idade.*/
const randomOldYear = () => {
    return randomNumber(18, 60);
};
exports.randomOldYear = randomOldYear;
/** Essa função gera uma senha aleatória com base no formato hash. Para gerar a senha, essa função utiliza funções do módulo 'crypto' do node. Você precisa passar como parâmetro o tamanho da senha. Ex: 12 (A senha terá um tamanho de 12 caracteres.). */
const randomPwd = (length) => {
    return randomPassword(length);
};
exports.randomPwd = randomPwd;
/** Essa função cria um novo bbjeto Employee, você pode utiliza-la para inserir um objeto employee como payload para inserção no banco de dados, ou para testes de integração. Essa função é assíncrona, então ela retorna uma Promise<Object>, ou seja, uma promessa de um objeto. Não se esqueça de colocar o 'await' antes de chamar a função, assim o compilador espera até a promessa ser cumprida e retornar um objeto como prometido. Os dados do employee são gerados randomicamente, então não se preocupe e apenas rode essa função, aproveite! 💜 */
const randomEmployee = async () => {
    const { name, email } = await (0, exports.randomNameWithEmail)(); //object
    const { oldyear, birth_date } = (0, exports.randomBirthDayWithOldYear)(); //object
    const password = (0, exports.randomPwd)(12); // string
    const slug = `/${name.replace(" ", '-')}`; // string
    const createdAt = new Date(); // date
    const updatedAt = new Date(); // date
    const employee = {
        name,
        oldyear,
        email,
        password,
        birth_date,
        slug,
        createdAt,
        updatedAt
    };
    console.log(employee);
    return employee;
};
exports.randomEmployee = randomEmployee;
/** Exports */
