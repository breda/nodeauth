'use strict'

const { test, trait } = use('Test/Suite')('Login')

trait('Test/Browser', {
    headless: false,
})

// Simple browser test
test('Test login page', async ({ browser }) => {
    const page = await browser.visit('/login')
    await page.assertHas('Login')
}) 

