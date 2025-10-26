import Handlebars from 'handlebars';

export default {
    sum(a: number, b: number) {
        return a + b;
    },
    sortable(
        field: string,
        sort: {
            type: 'default' | 'asc' | 'desc';
            enable: boolean;
            column?: string;
        },
    ) {
        interface Icon {
            default: string;
            asc: string;
            desc: string;
        }

        const checkType = field === sort.column ? sort.type : 'default';

        const icon: Icon = {
            default: 'bi bi-stack',
            asc: 'bi bi-sort-alpha-up',
            desc: 'bi bi-sort-alpha-down',
        };

        const type = {
            default: 'desc',
            asc: 'desc',
            desc: 'asc',
        };

        const types = type[checkType];
        const icons = icon[checkType];

        const href = Handlebars.escapeExpression(
            `?_sort&column=${field}&type=${types}`,
        );
        const result = `<a href="${href}">
                    <i class="${icons}"></i>
                </a>`;
        return new Handlebars.SafeString(result);
    },
};
