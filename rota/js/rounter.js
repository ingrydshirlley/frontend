'use strict'

const routes = {
    '/favorites' :       './pages/favorites.html',
    '/all-dogs' :   './pages/all-dogs.html'
}

const route = async () => {
    window.event.preventDefault()
    window.history.pushState({}, "",window.event.target.href)

    const path = window.location.pathname
    const route = routes[path]

    const response = await fetch(route)
    const html = await response.text()

    document.getElementById('root').innerHTML= html
}

window.route = route