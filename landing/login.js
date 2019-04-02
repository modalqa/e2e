import { Selector } from 'testcafe';
import Page from './model';
import config from './config';

const page = new Page();


fixture `Halaman Login`
    .page `${config.devUrl}`
    .httpAuth({
        username: 'morak',
        password: 'morak123',

        
    });


    test('Pendana', async t => {
        await t
            .maximizeWindow()
            //.setTestSpeed(0.1)
            .typeText(page.inputEmail,'harryanto250@mailinator.com')
            .typeText(page.passwordInput,'morak123')
            .pressKey('enter')
            
            //logout
            .click(Selector('span').withText('harryanto'))
            .click(page.buttonLogout);


    });

    test('Peminjam', async t => {
        await t
            .maximizeWindow()
            //.setTestSpeed(0.1)
            .typeText(page.inputEmail,'fariskur001@mailinator.com')
            .typeText(page.passwordInput,'</script1>')
            .pressKey('enter')
            
            //logout
            .click(Selector('span').withText('Faris'))
            .click(page.buttonLogout);


    });