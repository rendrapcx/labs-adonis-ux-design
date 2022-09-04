/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.get('/alpine', async ({ view }) => {
  return view.render('examples/alpine/alpine')
})

Route.group(() => {
  Route.get('/', async ({ view }) => { return view.render('examples/tailwind/index') }).as('tws.index')
  Route.get('/alert', async ({ view }) => { return view.render('examples/tailwind/alert') }).as('tws.alert')
  Route.get('/avatar', async ({ view }) => { return view.render('examples/tailwind/avatar') }).as('tws.avatar')
  Route.get('/badges', async ({ view }) => { return view.render('examples/tailwind/badges') }).as('tws.badges')
  Route.get('/button-group', async ({ view }) => { return view.render('examples/tailwind/button-group') }).as('tws.button.group')
  Route.get('/button', async ({ view }) => { return view.render('examples/tailwind/button') }).as('tws.button')
  Route.get('/card', async ({ view }) => { return view.render('examples/tailwind/card') }).as('tws.card')
  Route.get('/carousel', async ({ view }) => { return view.render('examples/tailwind/carousel') }).as('tws.carousel')
  Route.get('/chart', async ({ view }) => { return view.render('examples/tailwind/chart') }).as('tws.chart')
}).prefix('/tailwind')

Route.get('/hyperui', async ({ view }) => {
  return view.render('examples/hyperui/hyperui')
})

Route.group(() => {
  Route.get('/', async ({ view }) => {
    return view.render('examples/mix/index')
  })
}).prefix('/mix')

Route.group(() => {
  Route.get('/', async ({ view }) => {
    return view.render('examples/index')
  })
}).prefix('/examples')

