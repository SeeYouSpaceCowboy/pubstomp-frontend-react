import React from 'react'
import TestUtils from 'react-dom/test-utils'
import { createRenderer } from 'react-test-renderer/shallow'
import expect from 'expect'
import expectJSX from 'expect-jsx'
expect.extend(expectJSX)

import UserOverlay from '../../src/containers/UserOverlay'
import { onSubmit, onChange } from '../../src/helpers/UserOverlay'

const renderer = createRenderer()

describe('UserOverlay Component', () => {

  var myPromise = new Promise( (resolve, reject) => {
    resolve(
      {
        action: 'LOGIN_USER',
        payload: { email: true },
      }
    );
  });

  let self = {
    setState: ( (obj) => {
      for ( let key in self.state ) {
        let objKey = Object.keys(obj)[0]

        if ( key === objKey ) {
          self.state = Object.assign( {}, self.state, { [objKey]: obj[objKey] })
        }
      }
    }),
    callers: {
      loginUserCalled: false,
      signUpCalled: false,
      logOutUserCalled: false
    },
    props: {
      actions: {
        loginUser: ( ( credentials ) => {
          self.callers.loginUserCalled = true;
          return myPromise
        }),
        signUpUser: ( ( credentials ) => {
          self.callers.signUpCalled = true;
          return myPromise
        }),
        logOutUser: ( () => {
          self.callers.logOutUserCalled = true;
        })
      }
    },
    state: {
      form: {
        email: '',
        password: ''
      }
    }
  }

  it('onChange function updates state with correct input value', () => {
    let event = {
      target: {
        name: 'email',
        value: 'e'
      }
    }
    onChange.call( self, event )
    const actual = self.state.form.email
    const expected = 'e'
    expect( actual ).toEqual( expected )
  })

  it('onSubmit function calls user action to login', () => {
    let event = {
      preventDefault: ( () => { 'i prevented failure by doing nothing'} )
    }
    onSubmit.call( self, event )
    const actual = self.callers.loginUserCalled
    const expected = true
    expect( actual ).toEqual( expected )
  })

  it('onSubmit function calls user action to sign up if cannot login', () => {
    let event = {
      preventDefault: ( () => { 'i prevented failure by doing nothing'} )
    }

    myPromise = new Promise( (resolve, reject) => {
      resolve({
        action: 'SIGN_UP_USER',
        payload: null,
      });
    });

    onSubmit.call( self, event )
    // async behaviour
    setTimeout( () => {
      const actual = self.callers.signUpCalled
      const expected = true
      expect( actual ).toEqual( expected )
    }, 20)
  })

  xit('onSubmit function creates error message if cannot sign up.', () => {
    let event = {
      preventDefault: ( () => { 'i prevented failure by doing nothing'} )
    }

    onSubmit.call( self, event )
    const actual = self.callers.logOutUserCalled
    const expected = true
    expect( actual ).toEqual( expected )
  })

  xit('onLogOut function calls user action to logout.', () => {
    let event = {
      preventDefault: ( () => { 'i prevented failure by doing nothing'} )
    }
    onSubmit.call( self, event )
    const actual = self.callers.logOutUserCalled
    const expected = true
    expect( actual ).toEqual( expected )
  })

})
