import React from 'react';
import classnames from 'classnames';

import TextField from './TextField';

let Input = ({
  className,
  labelText,
  type = 'text',
  ...props
}) => {
  const childrenProps = {
    className: 'Input__field',
    type,
    ...props,
  }

  const renderInputField = () => {
    switch (type) {
      default:
        return <TextField {...childrenProps} />
    }
  }

  return (
    <div
      className={classnames(
        'Input',
        className,
      )}
    >
      {labelText && (
        <label
          className='Input__Label'
        >
          {labelText}
        </label>
      )}
      <div
        className={classnames(
          'Input__field--wrapper',
          type,
        )}
      >
        {renderInputField()}
      </div>
    </div>
  )
}

export default Input
