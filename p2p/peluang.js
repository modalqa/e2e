import { Selector } from 'testcafe';
import Page from './peluangmodel';
import config from './config';

const page = new Page();

fixture `P2P Pendanaan`
    .page `${config.baseUrl}`

    .httpAuth({
        username: 'morak',
        password: 'morak123',

        
    });

    test('auth', async t => {});

    test('Mulai Mendanai', async t => {
        await t
            .maximizeWindow()
            .setTestSpeed(0.1)
            //login
            .typeText(page.emailInput,'harryanto250@mailinator.com')
            .typeText(page.passwordInput,'morak123')
            .pressKey('enter')

            //verify berhasil login
            .expect(Selector('h5').textContent).contains('Pendana')

            //mulai mendanai
            .click(page.buttonMendanai)
            .click(page.lihatDetail)
            .typeText(page.fundingInput, '50000')
            .wait(2000)
            .click(page.clickMendanai)
            .expect(Selector('h3').textContent).contains('Konfirmasi Pendanaan')
            .click(page.agreement)
            .click(page.bKonfirmasiPendanaan)
            .expect(Selector('h5').textContent).contains('Portofolio Anda')
            
            


    });