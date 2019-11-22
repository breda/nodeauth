'use strict'

class AuthController {

    /**
     * Get login page.
     * 
     * @return View
     */
    getLogin({ view }) {
        return view.render('login')
    }

    /**
     * Do login.
     * 
     * @return Redirect
     */
    async performLogin({ request, response, auth, session }) {
        const { email, password } = request.all()

        try {
            await auth.attempt(email, password)
            response.route('auth.get_login')
        } catch(error) {
            session.flash({ message: 'Incorrect email/password combination: ' + error.message })
            response.route('auth.get_login')
        }
    }

    /**
     * Logout.
     * 
     * @return Redirect
     */
    async performLogout({ auth, response, session }) {
        await auth.logout()
        session.flash({ message: 'You have been logged out.' })
        
        response.route('auth.get_login')
    }
}

module.exports = AuthController
