import expect from 'expect'

import userReducer from '../../src/reducers/userReducer'

describe('User Reducer', () => {

  it('returns user object when it receives an action of LOGIN_USER', () => {
    let user = {
      email: 'test@gmail.com'
    }

    let action = {
      type: 'LOGIN_USER',
      payload: user
    }

    function stateBefore() {
      return []
    }
    let actual = userReducer( stateBefore(), action )
    expect( actual.email ).toEqual( user.email )
  })

  it('returns empty array when it receives an action of LOGOUT_USER', () => {
    let action = {
      type: 'LOGOUT_USER',
      payload: null
    }

    function stateBefore() {
      return {
        email: 'test@gmail.com'
      }
    }

    let actual = userReducer( stateBefore(), action )
    expect( actual ).toEqual( 0 )
  })

})
