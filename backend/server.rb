require 'sinatra'
require 'sinatra/json'

get '/users' do
  json: {
    users: [{
      id: 1,
      name: 'Luke Skywalker',
      email: 'luke@rebellion.com',
    }, {
      id: 2,
      name: 'Princess Leia Organa',
      email: 'princess@rebellion.com',
    }, {
      id: 3,
      name: 'Han Solo',
      email: 'me@hansolo.com',
    }, {
      id: 4,
      name: 'Darth Vader',
      email: 'ani@deathstar.com',
    }, {
      id: 5,
      name: 'Obi-wan Kenobi',
      email: 'masterkenobi@jedi.com',
    }]
  }
end
