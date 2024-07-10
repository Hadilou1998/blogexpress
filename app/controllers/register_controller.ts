import type { HttpContext } from '@adonisjs/core/http'

export default class RegisterController {
  
  async show({}: HttpContext) {
    return view.render('pages/auth/register')
  }
  
  async store({}: HttpContext) {}
  
}