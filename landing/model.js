import { Selector } from 'testcafe';

export default class Page {
    constructor () {

        //Home Page
        this.seeTutorial = Selector('h4').withText('1. Daftar');
        this.seeTentang = Selector('h2').withText('Menghubungkan Pendana dengan Peminjam');
        this.seeWhyFunding = Selector('h2').withText('Mengapa Mendanai Melalui Modal Rakyat');
        this.seePrestasi = Selector('h2').withText('Prestasi Modal Rakyat');
        this.seeAward = Selector('.award-card');
        this.seeMitra = Selector('h2').withText('Mitra dan Asosiasi');
        this.seePendanaan = Selector('h2').withText('Pendanaan Saat Ini');
        this.buttonSeeAll = Selector('a').withText('Lihat Semua');
        this.seeTestimoni = Selector('h2').withText('Cerita Pengguna');
        this.seeLiputan = Selector('h2').withText('Liputan Media');
        this.seeFaq = Selector('h5').withText('Apakah Data Saya Aman?');
        this.buttonNav = Selector('.carousel-nav');
        this.buttonSelengkapnya = Selector('a').withText('Baca Selengkapnya');
        this.clickPertanyaan = Selector('.list-faq ');
        this.clickJawaban = Selector('.answer-text');
        
        //Buku Tamu
        
        this.buttonHubingi = Selector('a').withText('Hubungi Kami');
        this.inputName = Selector('#name');
        this.inputEmail = Selector('#email');
        this.inputSubject = Selector('#subject');
        this.inputPertanyaan = Selector('#question');
        this.buttonKirim = Selector('.btn-secondary');

        //Karir
         
        this.techKategori = Selector('#tech');
        this.buttonBE = Selector('Button').withText('Back End Engineer'); 
        this.buttonFE = Selector('Button').withText('Front End Engineer'); 

        //Login & Logout
        this.passwordInput = Selector('#password'); 
        this.buttonLogout = Selector('div').withText('Logout'); 

        //Media
        
        this.pagination = Selector('li').withText("2"); 

        //Navigation
        this.menuPendanaan = Selector('a').withText('Pendanaan'); 
        this.menuMedia = Selector('a').withText('Media');
        this.menuKarir = Selector('a').withText('Karir');
        this.menuPinjaman = Selector('a').withText('Pinjaman');
        this.menuJejak = Selector('a').withText('Jejak Kami');
        this.menuBlog = Selector('a').withText('Blog');
        this.menuHome = Selector('a').withText('Home');
        

        this.menuSyarat = Selector('a').withText('Syarat & Ketentuan');
        this.menuKebijakan = Selector('a').withText('Kebijakan Privasi');
        this.menuCookie = Selector('a').withText('Kebijakan Cookie');
        this.menuAbout = Selector('a').withText('Tentang Kami');
        this.menuHubungi = Selector('a').withText('Hubungi Kami');
        this.menuFAQ = Selector('a').withText('FAQ');
        this.menuTeam = Selector('a').withText('Tim Kami');

       


    }
}