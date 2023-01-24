import * as fetch from '../func/Fetch';
import crypto from 'crypto';
import EmployeesAttributes from '../../types/Employees/EmpolyeesAttributes';

/** utils function */
async function fetchNames(type: string): Promise<String[]> {
   const res = await fetch.fetchSomething(`https://www.randomlists.com/data/names-${type}.json`);
   return res.response.data;
}

function AleatoryDate(start: Date, end: Date): Date {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function randomNumber(n1:number,n2: number): number {
    const min = Math.ceil(n1);
    const max = Math.floor(n2)
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomPassword(length: number) {
    return crypto.randomBytes(length).toString('hex');
}

function randomIndex(list: Array<any>): number {
    return Math.floor(Math.random() * list.length);
}

function pickRandom(list: Array<any>): any {
    return list[randomIndex(list)];
}
/** utils function */


/** Exports */
export const randomName = async (): Promise<String> => {
    const randomTypes = pickRandom(["male","female"])
    const list_names: String[] = await fetchNames("male");
    return list_names[randomIndex(list_names)];
};
export const randomNameWithEmail = async() => {
    const random_name = await randomName();
    return {
        name: random_name,
        email: `${random_name}${randomNumber(10,500)}@gmail.com`
    };
}

export const randomDate = (start: Date, end: Date): Date => {
    return AleatoryDate(start, end);
}

export const randomBirthDayWithOldYear = () => {
    const random_date: Date = AleatoryDate(new Date(1960, 0, 1), new Date(2004, 0, 1));
    const atual_year: Date = new Date();
    const employee_old_year: number =  atual_year.getFullYear() - random_date.getFullYear();
    const employee_birth_date = `${random_date.getDay()}/${random_date.getMonth()}/${random_date.getFullYear()}`;

    return {
        birth_date: employee_birth_date,
        oldyear: employee_old_year
    };
}

/** Essa função retorna um email randômico. O retorno dessa funcção é uma Promise<String>, ou seja, uma promessa de uma string. Por ser uma função assíncrona, antes de chamar essa função você precisa específicar o "await", assim você espera a promessa se cumprir e a função irá retornar uma string como prometido. */
export const randomEmail = async (): Promise<String> => {
    const random_name = await randomName();
    return `${random_name}@gmail.com`;
}

/** Essa função retorna uma idade (número) aleatória. Você pode utilizar essa função quando não quiser se preocupar com a coerência da idade com a data de aniversário. Se você quiser obter uma idade coerente com a data de aniversário, você pode utilizar a função 'randomBirthDayWithOldYear', que retorna um objeto com uma data de aniversário randomica coerente com a idade.*/
export const randomOldYear = (): number => {
    return randomNumber(18, 60);
} 

/** Essa função gera uma senha aleatória com base no formato hash. Para gerar a senha, essa função utiliza funções do módulo 'crypto' do node. Você precisa passar como parâmetro o tamanho da senha. Ex: 12 (A senha terá um tamanho de 12 caracteres.). */
export const randomPwd = (length: number) => {
    return randomPassword(length);
} 


/** Essa função cria um novo bbjeto Employee, você pode utiliza-la para inserir um objeto employee como payload para inserção no banco de dados, ou para testes de integração. Essa função é assíncrona, então ela retorna uma Promise<Object>, ou seja, uma promessa de um objeto. Não se esqueça de colocar o 'await' antes de chamar a função, assim o compilador espera até a promessa ser cumprida e retornar um objeto como prometido. Os dados do employee são gerados randomicamente, então não se preocupe e apenas rode essa função, aproveite! 💜 */
export const randomEmployee = async (): Promise<Object> => {
    const { name,email } = await randomNameWithEmail(); //object
    const { oldyear, birth_date } = randomBirthDayWithOldYear(); //object
    const password = randomPwd(12); // string
    const slug = `/${name.replace(" ", '-')}` // string
    const createdAt = new Date(); // date
    const updatedAt = new Date() // date

    const employee = {
        name,
        oldyear,
        email,
        password,
        birth_date,
        slug,
        createdAt,
        updatedAt
    }

    console.log(employee);
    return employee;
    
}
/** Exports */
