import React from 'react';
import Button from '../../atoms/button';
import PropTypes from 'prop-types';

const Buttons = ({
  onClick,
  values,
  type,
  classType = '',
  selected = false,
  disabled = false,
}) => {
  if (!values) return <p>OOO</p>;

  return (
    <div>
      <span>
        {type}: {classType !== '' ? classType : ''}
      </span>
      {values &&
        values.map(value =>
          <Button
            key={value}
            value={value}
            type={type}
            isSelected={selected === value}
            isDisabled={
              !!disabled &&
              (!disabled || disabled.filter(obj => obj === value).length > 0)
            }
            onClick={onClick}
          >
            {type === 'size' ? value : ''}
          </Button>,
        )}
    </div>
  );
};

Buttons.propTypes = {
  type: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  classType: PropTypes.string,
  selected: PropTypes.boolean,
  disabled: PropTypes.boolean,
};

export default Buttons;
