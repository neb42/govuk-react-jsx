import React from 'react';
import { storiesOf } from '@storybook/react';
import { InsetText } from '.';
import examples from './examples';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('inset-text', module);

for (const example of Object.values(processExampleData(examples.examples))) {
  stories.add(example.name, () => <InsetText {...example.data} />);
}
