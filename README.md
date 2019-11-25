# Getting started

Pre-req:
- You have [nodenv](https://github.com/nodenv/nodenv) installed

Check the .node-version file in the root to see if you have the required version.

If you don't have the correct version, install it with:
`nodenv install [version]`

Check system requirements [here](https://adonisjs.com/docs/4.1/installation#_system_requirements).

Install Adonis globally:
`npm i -g @adonisjs/cli`

Run the db migration:

`adonis migration:run`

Create a .env file with the following env vars:
```
HOST=127.0.0.1
PORT=3333
NODE_ENV=development
APP_URL=http://${HOST}:${PORT}
CACHE_VIEWS=false
APP_KEY=
DB_CONNECTION=sqlite
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_DATABASE=adonis
SESSION_DRIVER=cookie
HASH_DRIVER=bcrypt
```

Generate an APP_KEY. This will populate `APP_KEY=` in your .env:
`adonis key:generate`

Run the application
`npm start`

Visit http://127.0.0.1:3333/login

# Adonis fullstack application

This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
