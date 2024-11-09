import type { Preview } from '@storybook/vue3';
import { StyleDecorator } from './decorators/style.decorator';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [StyleDecorator]
};

export default preview;
