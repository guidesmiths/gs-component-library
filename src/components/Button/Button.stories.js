import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './';

storiesOf('Buttons', module)
  .add('Simple Button', () => {
    const component = <Button type="simple" text="Download" />;
    return component;
  })
  .add('Download Button', () => {
    const component = <Button type="download" text="Download" />;
    return component;
  });
