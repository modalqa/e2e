import { Selector } from 'testcafe';
import Page from './model';
import config from './config';


const page = new Page();

fixture `Halaman Team Kami `
    .page `${config.baseUrl}`;

    test('Akses homepage modal rakyat', async t => {
        await t
            .maximizeWindow()
            .setTestSpeed(0.1)
            .expect(Selector('span').textContent).contains('Daftar Sekarang');
              
  
  
      });

      test('See Our Team', async t => {
        await t
        
        .click(page.menuTeam)
        .expect(Selector('.title').textContent).contains('Leadership');
  
      });