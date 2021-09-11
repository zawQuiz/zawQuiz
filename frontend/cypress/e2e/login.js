import LoginPage from './../pages/LoginPage'

describe('Login', () => {
  it('Successful login', () => {
    const loginPage = new LoginPage()
    const loggedResult = loginPage.login({
      login: 'user@user.pl',
      password: 'ZAQ!2wsx',
    })

    assert.equal(loggedResult, true)
  })
})
