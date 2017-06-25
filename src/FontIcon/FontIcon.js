import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

/**
 * FontIcon Component
 */
const FontIcon = props => {
  const {
    className: classNameProp,
    color,
    group,
    icon,
    size,
    style,
    ...other
  } = props;

  const className = classNames(
    `icon-${group}\:${icon}`,
    classNameProp,
  );

  const mergedStyles = {
    ...{ fontSize: size, color: color },
    ...style,
  };

  return (
    <span
      className={className}
      style={mergedStyles}
      {...other}
    />
  );
};

FontIcon.propTypes = {
  /**
   * The css class name of the root element.
   */
  className: PropTypes.string,
  /**
   * Color
   */
  color: PropTypes.string,
  /**
   * Icon group
   */
  group: PropTypes.string.isRequired,
  /**
   * Icon name
   */
  icon: PropTypes.string.isRequired,
  /**
   * Size
   */
  size: PropTypes.string,
  /**
   * Override the inline-styles of the root element.
   */
  style: PropTypes.object,
};

export default FontIcon;
