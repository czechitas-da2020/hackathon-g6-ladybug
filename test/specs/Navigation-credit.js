const templatePage = require('../pages/template.page')



describe('Navigation from my account to credit slips', () => {


    it('page my account is visible', () => {
        
        browser.url('http://czechitas-datestovani-hackathon.cz/en/')
        browser.maximizeWindow()
        $('.user_login').click()
        $('#email').setValue('jan.maly@gmail.com')
        $('#passwd').setValue('jan123')
        $('#SubmitLogin').click()

        expect($('.info-account')).toBeDisplayed()
        
    })

    it('navigation to my credit slips', () => {

        $('a[href="http://czechitas-datestovani-hackathon.cz/en/credit-slip"]').click()
             
        expect($('h1')).toHaveTextContaining('CREDIT SLIPS')
  
     })

      it('return to my account', () => {

        $('.footer_links a').click()
      
        expect($('h1')).toHaveTextContaining('MY ACCOUNT')
    })       
})