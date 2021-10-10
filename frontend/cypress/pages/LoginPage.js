const defaultLoginData = {
  login: 'admin@admin.pl',
  password: 'ZAQ!2wsx',
}

class LoginPage {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  login(loginData = defaultLoginData) {
    cy.visit('/')

    cy.findByLabelText('Login').type(loginData.login)
    cy.findByLabelText('Hasło').type(loginData.password)

    cy.findByRole('button', { name: 'Zaloguj' }).click()

    return false
  }
}

export default LoginPage
