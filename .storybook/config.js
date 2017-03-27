import { configure } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';
import '@ox2/css-icons-hq-modules';
import '@ox2/css-icons-ui';
import DynamicThemeLoader from '@ox2/theming/DynamicThemeLoader';
import { default as theme } from '@tapfuse/theme-spark';

const req = require.context('../src/', true, /.story\.js$/);

function loadStories() {
  req.keys().forEach(req);
}

// Custom storybook options
setOptions({
  name: 'icon',
});

DynamicThemeLoader({ theme });

configure(loadStories, module);
