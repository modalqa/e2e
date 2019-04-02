import { Selector } from 'testcafe';
import Page from './model';
import config from './config';


const page = new Page();

fixture `halaman Karir `
    .page `${config.baseUrl}`;

    test('Cek Ketersediaan Karir', async t => {
        await t

        .maximizeWindow()
        .setTestSpeed(0.1)
        .click(page.menuKarir)
        .expect(Selector('h1').textContent).contains('Family starts here.')
        .click(page.techKategori)
        .click(page.buttonBE)
        .click(page.buttonFE);
        

    });