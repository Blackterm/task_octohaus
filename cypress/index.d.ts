declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Sisteme kullanıcı girişi
     * @example
     * cy.login()
     */
    login(
      name: string = "",
      email: string = "",
      pass: string = ""
    ): Chainable<any>;

    /**
     * Data test sorgulamalarını kısaltması
     * @example
     * cy.getByDataTest("page-header")
     */
    getByDataTest(value: string): Chainable<any>;

    /**
     * Alanı çizer ve ekran görüntüsü alır.
     * @example
     * cy.borderAndShot("page-header")
     */
    borderAndShot(value: string, intoView: boolean = true): Chainable<any>;

    /**
     * Alanı çizer.
     * @example
     * cy.borderAndShot("page-header")
     */
    redBorder(value: string, intoView: boolean = true): Chainable<any>;

    /**
     * Test için yetkilere göre kullanıcı oluşturur.
     * @example
     * cy.borderAndShot("page-header")
     */
    createTestUser(code: int, permissions: Array<String>): Chainable<any>;

    /**
     * Sayfayı ziyaret eder ve yükleme barının bitmesini bekler
     * @example
     * cy.borderAndShot("/yetkiler")
     */
    visitAndWaitLoading(path): Chainable<any>;
  }
}
