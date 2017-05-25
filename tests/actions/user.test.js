import expect from 'expect'

import { loginUser, signUpUser, logoutUser } from '../../src/actions/userActions'


describe('User Actions', () => {

  it('signUpUser returns correct type', () => {
    let credentials = {
      email: 'test@email.com',
      password: '1234'
    }

    let action = {
      type: 'LOGIN_USER',
      payload: null
    }

    let response = signUpUser( credentials )
    expect( response.type ).toEqual( action.type )
  })

  it('loginUser returns correct type', () => {
    let credentials = {
      email: 'test@email.com',
      password: '1234'
    }

    let action = {
      type: 'LOGIN_USER',
      payload: null
    }

    let response = loginUser( credentials )
    expect( response.type ).toEqual( action.type )
  })
  
  it('logoutUser returns correct type', () => {
    let credentials = {
      email: 'test@email.com',
      password: '1234'
    }

    let action = {
      type: 'LOGOUT_USER',
      payload: null
    }

    let response = logoutUser( credentials )
    expect( response.type ).toEqual( action.type )
  })

})
