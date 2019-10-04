import {configure} from '@storybook/react';
import {setupCss} from "@crazyfactory/frontend-commons";

setupCss();
configure(require.context('../src', true, /\.stories\.tsx$/), module);
