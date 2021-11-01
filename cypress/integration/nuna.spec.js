import Nuna from './PageObjects/nuna';
Cypress.on('uncaught:exception', (err, runnable) => false );

describe('Google Translate tests', () => {
    const translate = new Nuna();
    const data = require('../fixtures/translate.json');

    before( () => {
        cy.viewport( 1920, 1080 );
        Cypress.config( 'viewportWidth', 1920 );
        Cypress.config( 'viewportHeight', 1080 );
    });

    beforeEach( () => {
        cy.visit( '/' );
        cy.title().should( 'eq', data.title );
        translate.chooseLanguages( data.words.sourceLang, data.words.transLang );
        translate.typeText( data.words.sourceWord );
    });

    it('Translates fron German to Spanish', () => {
        translate.outputArea( data.words.transWord ).should( 'be.visible' );
    });

    it('Swaps the Languages', () => {
        cy.wait( 500 );
        translate.swapLangBtn().click();
        cy.wait( 500 );
        translate.outputArea( data.words.sourceWord ).should( 'be.visible' );
    });

    it('Using screen keyboard', () => {
        translate.swapLangBtn().click();
        translate.inputArea().clear();
        translate.virtKeyboardBtn().click();
        translate.virtKeyboardKeyClick( data.words.keyboardWordCodes );
        cy.wait( 1000 ); // to solve the error
        translate.outputArea( data.words.keyboardWord ).should( 'be.visible' );
    });
});