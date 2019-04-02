import { Selector } from 'testcafe';
import Page from './model';
import config from './config';


const page = new Page();

fixture `Halaman Pendanaan`
    .page `${config.baseUrl}`;

    test('Akses Halaman Pendanaan', async t => {
        await t
        .maximizeWindow()
        .setTestSpeed(0.1)
        .expect(Selector('h2').textContent).contains('Menghubungkan Pendana dengan Peminjam')
        .click(page.menuPendanaan)
        .expect(Selector('h5').textContent).contains('Diawasi Oleh OJK')
        
        
      });

      test('FQA', async t => {
          await t
                .navigateTo('https://www.modalrakyat.id/funding')
                .click(page.clickPertanyaan)
                .click(page.clickJawaban)

      });

      