'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/login', 'AuthController.getLogin').as('auth.get_login');
Route.post('/login', 'AuthController.performLogin').as('auth.do_login');
Route.get('/logout', 'AuthController.performLogout').as('auth.do_logout');
