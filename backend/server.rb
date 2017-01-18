require 'json'
require 'sinatra'

options '/users' do
  headers['Allow'] = 'HEAD,GET,PUT,POST,DELETE,OPTIONS'
  headers['Access-Control-Allow-Headers'] = 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Cache-Control, Accept'
  headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
  headers['Access-Control-Max-Age'] = '1728000'

  200
end

get '/users' do
  headers['Content-Type'] = 'application/json; charset=utf-8'
  headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
  {
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
  }.to_json
end
