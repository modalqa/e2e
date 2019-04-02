import { Selector } from 'testcafe';

export default class Page {
    constructor () {

        //login pendana & peminjam 
        this.emailInput = Selector('#email');
        this.passwordInput = Selector('#password');

        //mendanai
        this.fundingInput = Selector('#funding_amount');
        this.buttonMendanai = Selector('span').withText('Mulai Mendanai');
        this.lihatDetail = Selector('a').withText('Lihat Detil');
        this.clickMendanai = Selector('.btn-primary');
        this.agreement = Selector('.custom-control');
        this.bKonfirmasiPendanaan = Selector('.custom-btn');

        
        
        
    }
}