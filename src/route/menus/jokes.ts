import type { MenuOption as MO } from 'naive-ui/lib'
import { Icons } from '../../lib/utils/icon'

const fuzeMOs: MO[] = [
    {
        link: '/jokes/fuze/fuzeinfo',
        key: 'fuze',
        iconType: Icons['person'],
    },
    {
        key: 'fuze-sayings',
        iconType: Icons['book'],
        children: [
            {
                link: '/jokes/fuze/sayings/original',
                key: 'fuze-sayings-original',
                iconType: Icons['bookmark'],
            },
            {
                link: '/jokes/fuze/sayings/translated',
                key: 'fuze-sayings-translated',
                iconType: Icons['bookmark'],
            },
        ],
    },
    {
        link: '/jokes/fuze/sounds',
        key: 'fuze-sounds',
        iconType: Icons['volume'],
    },
    {
        link: '/jokes/fuze/images',
        key: 'fuze-images',
        iconType: Icons['image'],
    },
    {
        link: '/jokes/fuze/videos',
        key: 'fuze-videos',
        iconType: Icons['video'],
    },
]
const gclMOs: MO[] = [
    {
        link: '/jokes/gcl/gclinfo',
        key: 'gcl',
        iconType: Icons['person'],
    },
    {
        key: 'gcl-books',
        iconType: Icons['book'],
        children: [
            {
                link: '/jokes/gcl/books/depression',
                key: 'gcl-books-depression',
                iconType: Icons['bookmark'],
            },
            {
                link: '/jokes/gcl/books/indonesian',
                key: 'gcl-books-indonesian',
                iconType: Icons['bookmark'],
            },
            {
                link: '/jokes/gcl/books/yandere',
                key: 'gcl-books-yandere',
                iconType: Icons['bookmark'],
            },
            {
                link: '/jokes/gcl/books/bangsat',
                key: 'gcl-books-bangsat',
                iconType: Icons['bookmark'],
            },
            {
                link: '/jokes/gcl/books/back',
                key: 'gcl-books-back',
                iconType: Icons['bookmark'],
            },
        ],
    },
    {
        link: '/jokes/gcl/images',
        key: 'gcl-images',
        iconType: Icons['image'],
    },
]
const zangMOs: MO[] = [
    {
        link: '/jokes/zang/zanginfo',
        key: 'zang',
        iconType: Icons['person'],
    },
    {
        link: '/jokes/zang/images',
        key: 'zang-images',
        iconType: Icons['image'],
    },
    {
        link: '/jokes/zang/sounds',
        key: 'zang-sounds',
        iconType: Icons['volume'],
    },
    {
        link: '/jokes/zang/videos',
        key: 'zang-videos',
        iconType: Icons['video'],
    },
]
const nanMOs: MO[] = [
    {
        link: '/jokes/nan/naninfo',
        key: 'nan',
        iconType: Icons['person'],
    },
    {
        link: '/jokes/nan/medias',
        key: 'nan-medias',
        iconType: Icons['chatboxE'],
    },
]

export const jokeMOs: MO[] = [
    {
        key: 'fuze',
        iconType: Icons['person'],
        children: fuzeMOs,
    },
    {
        key: 'gcl',
        iconType: Icons['person'],
        children: gclMOs,
    },
    {
        key: 'ayaya',
        link: '/jokes/ayaya',
        iconType: Icons['person'],
    },
    {
        key: 'zang',
        iconType: Icons['person'],
        children: zangMOs,
    },
    {
        key: 'nan',
        iconType: Icons['person'],
        children: nanMOs,
    },
]

export default function getMenuOptions() {
    const headerMOs: MO[] = [
        {
            link: '/jokes',
            key: 'joke-home',
            iconType: Icons['home'],
        },
        { type: 'divider' },
        {
            link: '/jokes/fuzeblockisnotagame',
            key: 'fuzeblockisnotagame',
            iconType: Icons['squareFull'],
        },

        {
            link: {
                to: '/jokes/lastdaysofeurope',
            },
            key: 'lastdaysofeurope',
            iconType: Icons['chatbox'],
        },
    ]
    const footerMOs: MO[] = [
        {
            link: {
                to: '/update',
            },
            key: 'update',
            iconType: Icons['markdown'],
        },
    ]

    const MOs: MO[] = [
        ...headerMOs,
        { type: 'divider' },
        {
            type: 'group',
            label: 'O B J E C T S',
            key: 'joke-group',
            children: [...jokeMOs],
        },
        /*{
            type: 'group',
            label: 'E X T R A',
            key: 'extra-group',
            children: [
                {
                    link: '/jokes/document',
                    key: 'document',
                    iconType: Icons['book'],
                },
                {
                    link: '/main',
                    key: 'back-main',
                    iconType: Icons['notice'],
                },
            ],
        },*/
        { type: 'divider' },
        ...footerMOs,
    ]

    return MOs
}
