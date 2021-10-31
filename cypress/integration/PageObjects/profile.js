class Profile{
    successMessage(){
        return cy.get( 'span.notice__text' )
        .contains( 'Settings saved successfully!' )
    }

    saveProfileDetails(){
        return cy.get( 'button[type="submit"]' )
    }

    firstName(){
        return cy.get( '#first_name' )
    }

    lastName(){
        return cy.get( '#last_name' )
    }

    displayName(){
        return cy.get( '#display_name' )
    }

    aboutMe(){
        return cy.get( '#description' )
    }

    toggleOff(){
        return cy.get( 'span[class="components-form-toggle"]' )
    }

    toggleOn(){
        return cy.get( 'span[class="components-form-toggle is-checked"]' )
    }

    dragAndDropZone(){
        return cy.get( 'div[class="drop-zone"]' )
    }

    changeMyPhoto(){
        return cy.get( 'button[class="button image-editor__buttons-button is-primary"]' )
    }
    
    profileLinksAdd(){
        return cy.get('button[class="button is-compact"]')
    }

    addWordPressSite(){
        return cy.get('button')
        .contains('Add WordPress Site')
    }

    addUrl(){
        return cy.get('button').contains('Add URL')
    }

    urlInput(){
        return cy.get( 'input[placeholder="Enter a URL"]' )
    }

    descriptionInput(){
        return cy.get( 'input[placeholder="Enter a description"]' )
    }

    siteDescr(){
        return cy.get('[class="profile-link__title"]')
    }

    siteUrl(){
        return cy.get('[class="profile-link__url"]')
    }

    wordPressSiteCheckbox(){
        return cy.get('[class="profile-links-add-wordpress__checkbox form-checkbox"]')
    }

    addSite(){
        return cy.get('button').contains('Add Site')
    }

    removeSite(){
        return cy.get('button[class="button profile-link__remove is-borderless"]')
    }
    




}

export default Profile;