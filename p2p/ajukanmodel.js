import { Selector } from 'testcafe';

export default class Page {
    constructor () {

        //login pendana & peminjam 
        this.emailInput = Selector('#email');
        this.passwordInput = Selector('#password');

        
        //meminjam
        this.buttonAjukanPinjaman = Selector('span').withText('Ajukan Pinjaman');
        this.buttonAjukanSekarang = Selector('.submit');
        this.nomimalRequestInput = Selector('#nominal_request');
        this.typePengembalian = Selector('span').withText('Akhir Tenor');
        this.tujuanLoan = Selector('#loan_purpose');

        this.payorName = Selector('#invoice_payor_name');
        this.payorAddress = Selector('#invoice_payor_address');
        this.payorPic = Selector('#invoice_payor_pic');
        this.payorNumber = Selector('#phone_number');

        this.monthlyRevenue = Selector('#borrower_monthly_revenue');
        this.monthlyProfit = Selector('#borrower_monthly_profit');
        this.pinjamanLain = Selector('span').withText('Tidak');

        this.uploadInv = Selector('#invoice_photo');
        this.uploadSaving = Selector('#saving_book_photo');
        this.uploadFinancial = Selector('#financial_report');
        
        
        
    }
}