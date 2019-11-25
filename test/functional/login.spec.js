'use strict'

const Hash = use('Hash')
const Factory = use('Factory')

const { test, trait } = use('Test/Suite')('login')

trait('Test/ApiClient')
trait('Auth/Client')
trait('Session/Client')
trait('DatabaseTransactions')

test('visit login page', async ({ client, assert }) => {
    const response = await client.get('/login').end()

    assert.equal(response.message, undefined)
    response.assertStatus(200)
})

test('successful login', async ({ client, assert }) => {
  const User = await Factory.model('App/Models/User')

  const user = await User.create({
    email: 'test2@test.com',
    password: 'password'
  })

  const response = await client.post('/login').send({
    email: 'test2@test.com',
    password: 'password'
  }).end()

  assert.equal(response.message, undefined)
  response.assertStatus(200)
})

test('failed login', async ({ client, assert }) => {
  const response = await client.post('/login').send({
    email: 'doesntexist@test.com',
    password: 'password'
  }).end()

  // this test fails because we're rendering a template rather than returning a response object.
  assert.equal(response.message, "E_USER_NOT_FOUND: Cannot find user with email as doesntexist@test.com");
  response.assertStatus(200)
})

test('logout')
