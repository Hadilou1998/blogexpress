/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import LoginController from '#controllers/login_controller'
import LogoutController from '#controllers/logout_controller'
import RegisterController from '#controllers/register_controller'
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

router.group(() => {
    // Registration
    router.get('/register', [RegisterController, 'show']).as('register.show')
    router.post('/register', [RegisterController, 'store']).as('register.store')

    // Login
    router.get('/login', [LoginController, 'show']).as('login.show')
    router.post('/login', [LoginController, 'store']).as('login.store')

    // Logout
    router.get('/logout', [LogoutController, 'getOut']).as('logout.getOut')
}).as('auth')
