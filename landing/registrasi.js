import { Selector } from 'testcafe';

fixture `Registrasi `
    .page `https://www.modalrakyat.id/`;

    Test('Pendana', async t => {
        await t
            .maximizeWindow();
      });

      Test('Peminjam', async t => {
        await t
            .maximizeWindow();
      });