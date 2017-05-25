import expect from 'expect'

import { loginUser, signUpUser, logoutUser } from '../../src/adapters/userAdapter'


describe('User Adapter', () => {

  xit('signUpUser returns user object', () => {
    let credentials = {
      email: 'test@email.com',
      password: '1234'
    }

    let response = signUpUser( credentials )
    expect( response.type ).toEqual( action.type )
  })

  xit('loginUser returns user object', () => {
    let credentials = {
      email: 'test@email.com',
      password: '1234'
    }

    let response = loginUser( credentials )
    expect( response.type ).toEqual( action.type )
  })

})
