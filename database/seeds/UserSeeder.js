'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Hash = use('Hash')

class UserSeeder {
  async run () {
    await Factory.model('App/Models/User').create({ 
        email: 'test@gmail.com', 
        password: Hash.make('testing'),
    })

    await Factory.model('App/Models/User').createMany(4);
  }
}

module.exports = UserSeeder
