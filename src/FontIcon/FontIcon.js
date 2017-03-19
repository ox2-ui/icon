import React, { PropTypes } from 'react';
import classNames from 'classnames';

/**
 * FontIcon Component
 */
const FontIcon = props => {
  const {
    className: classNameProp,
    icon,
    size,
    color,
    style,
    ...other
  } = props;

  const className = classNames(`icon-${icon}`, classNameProp);

  const mergedStyles = {
    ...{ fontSize: size, color: color },
    ...style,
  };

  return <span className={className} style={mergedStyles} {...other} />;
};

FontIcon.propTypes = {
  /**
   * The css class name of the root element.
   */
  className: PropTypes.string,
  /**
   * Font icon color
   */
  color: PropTypes.string,
  /**
   * FontIcon name
   */
  icon: PropTypes.string,
  /**
   * FontIcon size
   */
  size: PropTypes.string,
  /**
   * Override the inline-styles of the root element.
   */
  style: PropTypes.object,
};

export default FontIcon;
