import Link from "next/link";

export const MainNav = [
    {
        icon: 'pe-7s-graph2',
        label: 'Home page',
        to: '/home',
    },
];
export const ListNav = [
    {
        icon: 'pe-7s-notebook',
        label: 'Категории',
        content: [
            {
                label: 'По новостройкам',
                to: '#/elements/buttons-standard',
            },
            {
                label: 'По объектам',
                to: '#/elements/dropdowns',

            },
            {
                label: 'Some ... category',
                to: '#/elements/icons',
            }
        ]
    }
];
export const HrNav = [
    {
        icon: 'pe-7s-users',
        label: 'Список кандидатов',
        to: '/candidates/all',
    },
    {
        icon: 'pe-7s-id',
        label: 'История сотрудников',
        to: '/employees/history',
    }
];

export const NewBuild = [
    {
        icon: 'pe-7s-home',
        label: 'Все новостройки',
        to: '#/charts/chartjs',
    },
    {
        icon: 'pe-7s-keypad',
        label: 'Застройщики',
        to: '#/charts/chartjs',
    },
    {
        icon: 'pe-7s-albums',
        label: 'Изображения',
        to: '/',
    },
];

export const SeoNav = [
    {
        icon: 'pe-7s-network',
        label: 'Список (meta) правил',
        to: '#/charts/chartjs',
    },
    {
        icon: 'pe-7s-news-paper',
        label: 'Список контента',
        to: '#/charts/chartjs',
    }
];

export const FeedbackNav = [
    {
        icon: 'pe-7s-mail',
        label: 'Все отзывы',
        to: '#/charts/chartjs',
    }
];