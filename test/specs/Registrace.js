describe('Registration and login', () => {
    it('registration new user', () => {
        browser.url('http://czechitas-datestovani-hackathon.cz/en');
        browser.pause(1000);
        browser.maximizeWindow()
        browser.pause(1000);
        browser.$(".hide_xs").click()
        browser.pause(1000);
        
        let useremail = ('franta.liska+'+ Math.floor(Math.random()*100000)+1 +'@gmail.com')

        browser.$('#email_create').setValue(useremail) 
        browser.pause(1000);
        console.log(useremail)
        browser.$('.icon-user').click()
        browser.pause(1000);

        let firstname = 'Franta'
        let lastname = "Liška"
        let password = 'hackathon'

        browser.$('#customer_firstname').setValue(firstname) 
        browser.$('#customer_lastname').setValue(lastname) 
        browser.$('#passwd').setValue(password)
        browser.$('#submitAccount').scrollIntoView()
        console.log(password)
        browser.$('#submitAccount').click()
        browser.pause(1000);
       
        expect($('h1=My account')).toBeDisplayedInViewport()
    });

    // it('registration new user', () => {
    //     browser.url('http://czechitas-datestovani-hackathon.cz/en');
    //     browser.pause(1000);
    //     browser.maximizeWindow()
    //     browser.pause(1000);
    //     browser.$(".hide_xs").click()
    //     browser.pause(1000);
        
    //     let useremail = ('franta.liska+'+ Math.floor(Math.random()*100000)+1 +'@gmail.com')

    //     browser.$('#email_create').setValue(useremail) 
    //     browser.pause(1000);
    //     console.log(useremail)
    //     browser.$('.icon-user').click()
    //     browser.pause(1000);

    //     let firstname = 'Franta'
    //     let lastname = "Liška"
    //     let password = 'hackathon'

    //     browser.$('#customer_firstname').setValue(firstname) 
    //     browser.$('#customer_lastname').setValue(lastname) 
    //     browser.$('#passwd').setValue(password)
    //     browser.$('#submitAccount').scrollIntoView()
    //     console.log(password)
    //     browser.$('#submitAccount').click()
    //     browser.pause(1000);
        
    //     expect($('h1=My account')).toBeDisplayedInViewport()
    // // it('login with new created user data', () => {
    // //     let username = 'czechitas'
    // //     let password = 'D4Ostr4v42020'
 
    // //     // KROKY PRO OVERENI 
    //     browser.url('https://automation.cervik.repl.co/login.html');
    //     $('#login-username').setValue(username) // VYPLNIM JMENO
    //     $('#login-password').setValue(password) // VYPLNIM HESLO
    //     $('#login-submit').click()              // KLIKNU NA TLACITKO "LOG IN!"
 
    //     $('p*=LOGGED!').waitForDisplayed()
 
    //     // OVERENI - ASSERTION
    //     expect($('h1=LOGGED!')).toBeDisplayedInViewport()
    // });
});
