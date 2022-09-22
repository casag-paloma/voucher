import voucherService from "../../src/services/voucherService";
import { faker } from "@faker-js/faker"

const voucher = {
        code: faker.random.alphaNumeric(),
        discount: faker.finance.amount(0,100,0)
    }


describe('Teste unitário do voucher', ()=>{
    it('testa criação do voucher', ()=>{


        const result = voucherService.createVoucher(voucher.code, +voucher.discount);
        console.log(result)

    });
    it.todo('aplicação do voucher');

})