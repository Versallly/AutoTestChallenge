import Nuna from './PageObjects/nuna';
Cypress.on('uncaught:exception', (err, runnable) => false );

describe('Google Translate tests', function(){
    const translate = new Nuna();

    beforeEach(function () {
        cy.fixture( 'translate.json' ).as( 'data' );
        cy.visit( '/' );
    })

    it('Translates fron German to Spanish', function(){
        cy.title().should( 'eq', this.data.title );
        translate.chooseLanguages( this.data.words.sourceLang, this.data.words.transLang );
        translate.typeText( this.data.words.sourceWord );
        translate.outputArea( this.data.words.transWord ).should( 'be.visible' );
        
    })
    it('Swaps the Languages', function(){
        cy.title().should( 'eq', this.data.title );
        translate.chooseLanguages( this.data.words.sourceLang, this.data.words.transLang );
        translate.typeText( this.data.words.sourceWord );
        cy.wait( 500 );
        translate.swapLangBtn().click();
        cy.wait( 500 );
        translate.outputArea( this.data.words.sourceWord ).should( 'be.visible' );
    })
    it('Using screen keyboard', function(){
        cy.title().should( 'eq', this.data.title );
        translate.chooseLanguages( this.data.words.sourceLang, this.data.words.transLang );
        translate.typeText( this.data.words.sourceWord );
        translate.swapLangBtn().click();
        translate.inputArea().clear();
        translate.virtKeyboardBtn().click();
        translate.virtKeyboardKeyClick( this.data.words.keyboardWordCodes );
        cy.wait( 500 );
        translate.outputArea( this.data.words.keyboardWord ).should( 'be.visible' );
    })
});