import { Selector } from 'testcafe';
import Page from './ajukanmodel';
import config from './config';

const page = new Page();

fixture `P2P Peminjam`
    .page `${config.baseUrl}`

    .httpAuth({
        username: 'morak',
        password: 'morak123',

        
    });

    test('auth', async t => {});         

    test('Ajukan Modal Invoice', async t => {
        const tenorSelect = Selector('#tenor');
        const tenorOption = tenorSelect.find('option');

        await t
            .maximizeWindow()
            //.setTestSpeed(0.1)
            .typeText(page.emailInput,'fariskur001@mailinator.com')
            .typeText(page.passwordInput,'</script1>')
            .pressKey('enter')
            .expect(Selector('h5').textContent).contains('Peminjam')

            //ajukan pinjaman
            .click(page.buttonAjukanPinjaman)
            .expect(Selector('h1').textContent).contains('Pilih Jenis Pinjaman')
            .click(page.buttonAjukanSekarang)

            //Nominal & Jangka Waktu

            .typeText(page.nomimalRequestInput, '100000000')
            .click(page.typePengembalian)
            .click(tenorSelect)
            .click(tenorOption.withText('90 Hari'))
            .typeText(page.tujuanLoan, 'Pinjaman untuk kebutuhan rumah tangga')

            //input Data Customer
            .typeText(page.payorName, 'Bagas Wara')
            .typeText(page.payorAddress, 'Jl. Raya Pasar Minggu')
            .typeText(page.payorPic,'Faris Test')
            .typeText(page.payorNumber, '081309080907')
            .typeText(page.emailInput, 'fariskur001@mailinator.com')

            //upload bukti invoice
            .setFilesToUpload('#invoice_photo-dropzone > input[type="file"]', [
                
                './1.png'
            ])
            .click(page.uploadInv)

            //input data Informasi Keuangan Perusahaan

            .typeText(page.monthlyRevenue, '5000000')
            .typeText(page.monthlyProfit, '5000000')
            .click(page.pinjamanLain)

            //upload Mutasi Rekening 3 Bulan Terakhir
            .setFilesToUpload('#saving_book_photo-dropzone > input[type="file"]', [
                
                './1.png'
            ])
            .click(page.uploadSaving)

            //upload Mutasi Rekening 3 Bulan Terakhir
            .setFilesToUpload('#financial_report-dropzone > input[type="file"]', [
                
                './1.png'
            ])
            .click(page.uploadFinancial)
            .click('.submit-invoice-financing')
            .click('.custom-btn.btn.small.btn-primary')
            .expect(Selector('h1').textContent).contains('Pengajuan Pinjaman Selesai')

    });

    
    

    

