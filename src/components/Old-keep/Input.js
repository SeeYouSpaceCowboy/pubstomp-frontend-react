import React from 'react'

const Input = ( props ) => {

  let lineBreak = 'label' in props && 'lineBreak' in props.label && props.label.lineBreak ? <br></br> : <div className='hidden'></div>

  if ( !('label' in props) || props.label.text === '' || !props.label.text ) {
    return (
      <div>
        <input
          className={ props.input.class }
          name={ props.input.name }
          type={ props.input.type }
          onChange={ props.input.onChange }
          placeholder={ props.input.placeholder }
          value={ props.input.value }
        />
      </div>
    )
  }

  return (
    <div>
      <label className={ props.label.class } >
        { props.label.text }
        { lineBreak }
        <input
          className={ props.input.class }
          name={ props.input.name }
          type={ props.input.type }
          onChange={ props.input.onChange }
          placeholder={ props.input.placeholder }
          value={ props.input.value }
        />
      </label>
    </div>
  )
}

export default Input
