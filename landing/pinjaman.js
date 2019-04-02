import { Selector } from 'testcafe';
import Page from './model';
import config from './config';


const page = new Page();

fixture `Halaman Pinjaman`
    .page `${config.baseUrl}`;

    test('Akses Halaman Pinjaman', async t => {
        await t
        .maximizeWindow()
        .setTestSpeed(0.1)
        .expect(Selector('h2').textContent).contains('Menghubungkan Pendana dengan Peminjam')
        .click(page.menuPinjaman)
        .navigateTo('https://www.modalrakyat.id/borrow')
        .expect(Selector('.display-6').textContent).contains('Mengapa meminjam di Modal Rakyat?')
        
      });

      test('FQA', async t => {
        await t
              .navigateTo('https://www.modalrakyat.id/borrow')
              .click(page.clickPertanyaan)
              .click(page.clickJawaban)

    });

      
