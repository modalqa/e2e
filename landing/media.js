import { Selector } from 'testcafe';
import Page from './model';
import config from './config';


const page = new Page();

fixture `Halaman Media`
    .page `${config.baseUrl}`;

    test('Akses Halaman Media', async t => {
        await t
        .maximizeWindow()
        .setTestSpeed(0.1)
        .expect(Selector('span').textContent).contains('Daftar Sekarang')
        .click(page.menuMedia);
        
      });

      test('Click Pagination', async t => {
        await t
        .maximizeWindow()
        .setTestSpeed(0.1)
        .navigateTo('https://modalrakyat.id/media')
        .click(page.pagination);
  
      });

      