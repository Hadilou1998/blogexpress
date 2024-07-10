/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

router.group(() => {
    // Registration
    router.get('/register', 'AuthController.showRegistrationForm').as('register')
    router.post('/register', 'AuthController.register')

    // Login
    router.get('/login', 'AuthController.showLoginForm').as('login')
    router.post('/login', 'AuthController.login')

    // Logout
    router.get('/logout', 'LogoutController.getOut').as('logout')
})
