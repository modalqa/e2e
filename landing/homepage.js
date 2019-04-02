import { Selector } from 'testcafe';
import Page from './model';
import config from './config';


const page = new Page();

fixture `Home Page`
    .page `${config.baseUrl}`;

    test('Akses Modal Rakyat Website', async t => {
      await t
      .maximizeWindow()
      .setTestSpeed(0.1)
      .expect(Selector('span').textContent).contains('Daftar Sekarang');
    });

    test('See Tutorial', async t => {
      await t
      .click(page.seeTutorial)
      .expect(Selector('h4').textContent).contains('1. Daftar');
    });

    test('See About Modal Rakyat', async t => {
      await t
      .click(page.seeTentang)
      .expect(Selector('h2').textContent).contains('Menghubungkan Pendana dengan Peminjam');
    });


    test('See why funding', async t => {
      await t
      .click(page.seeWhyFunding)
      .expect(Selector('h5').textContent).contains('Aman');
    });


    test('See Prestasi', async t => {
      await t
      .navigateTo (`${config.baseUrl}`)
      .click(page.seePrestasi)
      .click(page.seeAward);

    });

    test('See Mitra & Asosiasi', async t => {
      await t
      .click(page.seeMitra);

    });

    test('Pendanaan Saat Ini', async t => {
      await t
      .click(page.seePendanaan)
      .click(page.buttonSeeAll)
      .navigateTo (`${config.baseUrl}`);
    });

    test('Cerita Pengguna', async t => {
      await t 
      .click(page.seeTestimoni);
    });

    test('Liputan Media', async t => {
      await t
      .click(page.seeLiputan);
    });


    test('FAQ', async t => {
      await t
      .click(page.seeFaq)
      .click(page.buttonNav)
      .click(page.buttonSelengkapnya)
      .navigateTo(`${config.baseUrl}`);
    });


    