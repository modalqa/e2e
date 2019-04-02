import { Selector } from 'testcafe';
import Page from './model';
import config from './config';


const page = new Page();

fixture `Halaman Hubungi Kami `
    .page `${config.baseUrl}`;

    test('Buku Tamu', async t => {
        await t
            .maximizeWindow()
              .click(page.menuPendanaan)
              .click(page.buttonHubingi)
              .expect(Selector('h2').textContent).contains('Hubungi Kami')
              .typeText(page.inputName, 'Faris')
              .typeText(page.inputEmail, 'faris.ardi@modalrakyat.com')
              .typeText(page.inputSubject, 'Test')
              .typeText(page.inputPertanyaan, 'ini data testing')
              
              //Gagal Submit karena tidak bisa verifikasi captcha
              .click(page.buttonKirim);
  
  
      });