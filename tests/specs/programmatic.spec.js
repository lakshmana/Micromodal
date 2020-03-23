/* eslint-disable */

describe('Programmatic toggling of Modal', function () {

  const openModal = () => {
    cy.get('#open-trigger').click()
  }

  const closeModal = () => {
    cy.get('#close-trigger').click()
  }

  it('should sucessfully load', () => {
    cy.visit('/programmatic.html')
  })

  it('should see toggle button', () => {
    cy.get('#open-trigger')
  })

  it('should not see the modal by default', () => {
    cy.get('#modal-1').and('not.be.visible')
    cy.get('#modal-1 .modal__overlay').and('not.be.visible')
  })

  /**
   * Checking overlay because the height of
   * .modal is zero and cypress treats that
   * as hidden
   */
  it('should open modal programmaticaly', () => {
    openModal()
    cy.get('#modal-1 .modal__overlay').and('be.visible')
    closeModal()
  })

  it('should open modal programmaticaly', () => {
    openModal()
    closeModal()
    cy.get('#modal-1 .modal__overlay').and('not.be.visible')
  })

  it('should close modal on close button click', () => {
    openModal()
    cy.get('.modal__close').click()
    cy.get('modal__close').and('not.be.visible')
  })

  it('should close modal on overlay click', () => {
    openModal()
    cy.get('.modal__overlay').click('top')
    cy.get('modal__overlay').and('not.be.visible')
    // modal closed here
  })


  it('should close modal on escape button press', () => {
    openModal()
    cy.get('body').type('{esc}')
    cy.get('#modal-1 .modal__overlay').and('not.be.visible')
    // modal closed here
  })


  it('should toggle aria-hidden class', () => {
    cy.get('#modal-1').should('have.attr', 'aria-hidden', 'true')
    openModal()
    cy.get('#modal-1').should('have.attr', 'aria-hidden', 'false')
    closeModal()
    cy.get('#modal-1').should('have.attr', 'aria-hidden', 'true')
  })


})
