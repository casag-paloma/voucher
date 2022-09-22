import { faker } from "@faker-js/faker"

export const voucher = ()=>{
    return{
        code: faker.random.alphaNumeric(),
        discount: faker.finance.amount(0,100,0)
    }
}