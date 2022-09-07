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

Route.group(() => {
  Route.get('/', async ({ view }) => { return view.render('examples/alpine/index') }).as('alpine.index')
  Route.get('/accordion', async ({ view }) => { return view.render('examples/alpine/accordion') }).as('alpine.accordion')
  Route.get('/navbar', async ({ view }) => { return view.render('examples/alpine/navbar') }).as('alpine.navbar')
  Route.get('/sidebar', async ({ view }) => { return view.render('examples/alpine/sidebar') }).as('alpine.sidebar')
  Route.get('/timeline', async ({ view }) => { return view.render('examples/alpine/timeline') }).as('alpine.timeline')
  Route.get('/modal', async ({ view }) => { return view.render('examples/alpine/modal') }).as('alpine.modal')
  Route.get('/dashboard', async ({ view }) => { return view.render('examples/alpine/dashboard') }).as('alpine.dashboard')
  Route.get('/post', async ({ view }) => { return view.render('examples/alpine/post') }).as('alpine.post')
}).prefix('/alpine')

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
  Route.get('/chips', async ({ view }) => { return view.render('examples/tailwind/chips') }).as('tws.chips')
  Route.get('/collapse', async ({ view }) => { return view.render('examples/tailwind/collapse') }).as('tws.collapse')
  Route.get('/drawer', async ({ view }) => { return view.render('examples/tailwind/drawer') }).as('tws.drawer')
  Route.get('/dropdown', async ({ view }) => { return view.render('examples/tailwind/dropdown') }).as('tws.dropdown')
  Route.get('/gallery', async ({ view }) => { return view.render('examples/tailwind/gallery') }).as('tws.gallery')
  Route.get('/headers', async ({ view }) => { return view.render('examples/tailwind/headers') }).as('tws.headers')
  Route.get('/heading', async ({ view }) => { return view.render('examples/tailwind/heading') }).as('tws.heading')
  Route.get('/hover-effect', async ({ view }) => { return view.render('examples/tailwind/hover-effect') }).as('tws.hover.effect')
  Route.get('/icons', async ({ view }) => { return view.render('examples/tailwind/icons') }).as('tws.icons')
  Route.get('/images', async ({ view }) => { return view.render('examples/tailwind/images') }).as('tws.images')
  Route.get('/jumbotron', async ({ view }) => { return view.render('examples/tailwind/jumbotron') }).as('tws.jumbotron')
  Route.get('/inputs', async ({ view }) => { return view.render('examples/tailwind/inputs') }).as('tws.inputs')
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

