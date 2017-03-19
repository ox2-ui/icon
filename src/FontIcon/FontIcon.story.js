import React from 'react';
import { storiesOf } from '@kadira/storybook';
import FontIcon from './FontIcon';

storiesOf('FontIcon', module)
  .add('default', () => <FontIcon icon="users2" />)
  .add('colored', () => <FontIcon color="#2CAF65" icon="users2" />)
  .add('colored & large', () => (
    <FontIcon color="#2CAF65" icon="users2" size="35px" />
  ))
  .add('style object', () => (
    <FontIcon
      color="#FFFFFF"
      icon="users2"
      size="35px"
      style={{ backgroundColor: 'mediumvioletred', padding: '10px' }}
    />
  ))
  .add('themed', () => (
    <FontIcon className="text-color:twitter" icon="users2" size="35px" />
  ));
