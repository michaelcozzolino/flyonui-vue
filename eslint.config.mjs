import { michaelcozzolino } from '@michaelcozzolino/eslint-config';

export default michaelcozzolino().append({
    files: ['**/*.md'],
    rules: {
        'markdown/heading-increment': 'off',
    },
});
