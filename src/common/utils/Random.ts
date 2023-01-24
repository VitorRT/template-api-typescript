import * as fetch from '../func/Fetch';
import EmployeesAttributes from '../../types/Employees/EmpolyeesAttributes';
import crypto from 'crypto';

/** Typescript functions interfaces/types */
type ObjectDate = {
    birth_date: String,
    oldyear: number
}
type ObjectMail = {
    name: String,
    email: String
}

/** utils function */
async function fetchNames(type: string): Promise<String[]> {
   const res = await fetch.fetchSomethingGet(`https://www.randomlists.com/data/names-${type}.json`);
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

function randomPassword(length: number): String {
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

/** Essa função retorna uma Promise<String>, ou seja, ela promete retornar uma string. Você pode utilizar a função `randomName` quando quiser gerar diversos nomes randômicos.
 * 
 * Como essa função é assíncrona e promete retornar algo, você precisa colocar o `await` antes de chamar a função:
 * 
 * Ex: `const name = await randomName();`
 * 
 * Dessa forma, se a promessa se cumprir, ela vai te retornar uma string e você poderá usar as funções e propriedades do Objeto String. 
 */
export const randomName = async (): Promise<String> => {
    const randomTypes = pickRandom(["male","female"])
    const list_names: String[] = await fetchNames("male");
    return list_names[randomIndex(list_names)];
};

/**
 * Essa função retorna uma Promise<ObjectMail>, que basicamente é um objeto com 2 atributos.
 * Você pode usar essa função quando quiser gerar um nome e um email coerente diversas vezes, e o nome é gerado de forma randômica. Então a única coisa que você precisa fazer é chamar esta função e extrair seus dados.
 * 
 * Como ela retorna uma Promise<ObjectMail>, ou seja, ela promete retornar um objeto, então você deve colocar o `await` na frente da instância:
 * 
 * `const person_email = await randomNameWithEmail();`
 * 
 * Para acessar os valores internos do retorno dessa função, você pode acessar como se estivesse acessando um objeto padrão javascript, por `.` ou desestruturando ele:
 * 
 * `const { name, email } = await randomNameWithEmail();`
 */
export const randomNameWithEmail = async(): Promise<ObjectMail> => {
    const random_name: String = await randomName();
    return {
        name: random_name,
        email: `${random_name}${randomNumber(10,500)}@gmail.com`
    };
}

/** Essa função retorna um Date, então você pode usar todas as propriedades do Objeto Date do Javascript com essa função. O objetivo dessa função é gerar uma data de forma randômica e para isso ela precisa de 2 parâmetros. 
 * 
 * 
 * 1 Parâmetro - Start: Date 
 * - Você precisa passar de quando você quer que a função gere uma data para você, e você fará isso passando um novo Objeto Date como parâmetro 'start'. 
 * 
 * 2 º Parâmetro - End: Date
 * - Você precisa passar até quando você quer que a função gere uma data para você, e você fará isso passando um novo Objeto Date como parâmetro 'end'
 * 
 * Ex: `randomDate(new Date(2000,0,1), new Date())`
 * 
 * Dessa forma a função irá retornar um ano aleatório de 2000 até o ano atual.
 */
export const randomDate = (start: Date, end: Date): Date => {
    return AleatoryDate(start, end);
}

/** Essa função retorna um ObjectDate, que basicamente é um objeto com uma data de aniversário e idade coerente, ambos são gerados de forma randômica. Você pode utilizar essa função se quiser gerar diversas vezes uma data de aniversário junto com a idade já calculada.
 * 
 * Para acessar os valores desse ObjectDate é perfeitamente igual a acessar a uma propriedade de um objeto javascript, você só precisa colocar o `.` na frente (Ex: `myDate.oldyear`) ou você pode desestruturar dessa forma: 
 * 
 * `const { birth_date, oldyear } = randomBirthDayWithOldYear();`
 */
export const randomBirthDayWithOldYear = (): ObjectDate => {
    const random_date: Date = randomDate(new Date(1960, 0, 1), new Date(2004, 0, 1));
    const atual_year: Date = new Date();
    const employee_old_year: number =  atual_year.getFullYear() - random_date.getFullYear();
    const employee_birth_date = `${random_date.getDay()}/${random_date.getMonth()}/${random_date.getFullYear()}`;

    return {
        birth_date: employee_birth_date,
        oldyear: employee_old_year
    };
}

/** Essa função retorna um email randômico. O retorno dessa funcção é uma Promise<String>, ou seja, uma promessa de uma string. 
 * 
 * Por ser uma função assíncrona, antes de chamar essa função você precisa específicar o `await`, assim você espera a promessa se cumprir e a função irá retornar uma string como prometido:
 * 
 * Ex: `const email = await randomEmail();`
 * 
 * Dessa forma, se a promessa se cumprir, ela vai te retornar uma string e você poderá usar as funções e propriedades do Objeto String.
 * */
export const randomEmail = async (): Promise<String> => {
    const random_name = await randomName();
    return `${random_name}@gmail.com`;
}

/** Essa função retorna uma idade (número) aleatória. Você pode utilizar essa função quando não quiser se preocupar com a coerência da idade com a data de aniversário. 
 * 
 * Se você quiser obter uma idade coerente com a data de aniversário, você pode utilizar a função `randomBirthDayWithOldYear`, que retorna um objeto com uma data de aniversário randomica coerente com a idade.*/
export const randomOldYear = (): number => {
    return randomNumber(18, 60);
} 

/** Essa função gera uma senha aleatória com base no formato `hash`. 
 * 
 * Para gerar a senha, essa função utiliza funções do módulo `crypto` do node. Você precisa passar como parâmetro o tamanho da senha. 
 * 
 * Ex: `const pwd = randomPwd(12). //(A senha terá um tamanho de 12 caracteres.)` */
export const randomPwd = (length: number) => {
    return randomPassword(length);
} 


/** Essa função retorna uma Promise<EmployeesAttributes>, ou seja, uma promessa de um Objeto Employee. você pode utiliza-la para inserir um objeto employee como payload para inserção no banco de dados, ou para testes de integração.
 * 
 * Como essa função é assíncrona e retorna uma promessa, não se esqueça de colocar o `await` antes de chamar a função, assim o compilador espera até a promessa ser cumprida e retornar um objeto como prometido.:
 * 
 * Ex: `const employee = await randomEmployee();`
 * 
 * Os dados do employee são gerados randomicamente, então não se preocupe e apenas rode essa função, aproveite! 💜 */
export const randomEmployee = async (): Promise<EmployeesAttributes> => {
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
