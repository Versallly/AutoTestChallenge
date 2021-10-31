class Nuna{
    sourceLangBtn(){
        return cy.get( 'button[aria-label="More source languages"]' ).eq( 0 );
    }
    
    targetLangBtn(){
        return cy.get( 'button[aria-label="More target languages"]' ).eq( 0 );
    }
    
    chooseLanguages( source, target ){
        this.sourceLangBtn().should( 'be.visible' ).click();
        cy.wait( 500 );
        this.srcLang( source ).click();
        this.inputArea().should( 'be.visible' );
        cy.wait( 500 );
        this.targetLangBtn().should( 'be.visible' ).click({force: true});
        cy.wait( 500 );
        this.targetLang( target ).click();
    }
    
    typeText( text ){
        this.inputArea()
            .should( 'be.visible' )
            .clear()
            .type( text );
    }

    swapLangBtn(){
        return cy.get( 'button[aria-label="Swap languages (Ctrl+Shift+S)"]' ).eq( 0 );
    }

    virtKeyboardBtn(){
        return cy.get( 'a.ita-kd-icon-button' ).eq( 0 );
    }

    virtKeyboardKeyClick( keyIDs ){
        keyIDs.forEach( ( id ) => cy.get( id ).click());
    }

    srcLang( lang = 'English' ){
        return cy.get( '.Llmcnf' ).contains( lang ).scrollIntoView();
    }

    targetLang( lang = 'English' ){
        return cy.get( 'div.ykTHSe' ).find( '.Llmcnf' ).contains( lang );
    }

    inputArea(){
        return cy.get( 'textarea[aria-label="Source text"]' );
    }

    outputArea( output = '' ){
        return cy.get( 'div.eyKpYb' ).contains( output );
    }

}

export default Nuna;