import { Selector } from 'testcafe';
import Page from './model';
import config from './config';


const page = new Page();

fixture `Navigation `
    .page `${config.baseUrl}`;

    test('Main Menu', async t => {
      await t
            .maximizeWindow()
            //Check link 
            .click(page.menuPendanaan)
            .click(page.menuPinjaman)
            .click(page.menuMedia)
            .click(page.menuJejak)
            .click(page.menuBlog)
            .click(page.menuHome);
            
    });

      test('Syarat & Ketentuan', async t => {
        await t
        .navigateTo(`${config.baseUrl}`)
        .click(page.menuSyarat)
      });

      test('Kebijakan Privasi', async t => {
        await t
        .navigateTo(`${config.baseUrl}`)
        .click(page.menuKebijakan)
        
      });

      test('Kebijakan Cookie', async t => {
        await t
        .navigateTo(`${config.baseUrl}`)
        .click(page.menuCookie)
      });

      test('Tentang Kami', async t => {
        await t
        .navigateTo(`${config.baseUrl}`)
        .click(page.menuAbout)
        .expect(Selector('h2').textContent).contains('Tentang Kami')
        
      });

      test('Hubungi Kami', async t => {
        await t
        .navigateTo(`${config.baseUrl}`)
        .click(page.menuHubungi)
        .expect(Selector('h2').textContent).contains('Hubungi Kami')
        
      });

      test('Karir', async t => {
        await t
        .navigateTo(`${config.baseUrl}`)
        .click(page.menuKarir)
        .expect(Selector('h1').textContent).contains('Family starts here.')
        
      });

      test('FAQ', async t => {
        await t
        .navigateTo(`${config.baseUrl}`)
        .click(page.menuFAQ)
        .expect(Selector('h2').textContent).contains('Pertanyaan Umum')

      });

      test('Team Kami', async t => {
        await t
        .navigateTo(`${config.baseUrl}`)
        .click(page.menuTeam)
        .expect(Selector('.title').textContent).contains('Leadership');

      });



      