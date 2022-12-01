import { Component, h } from 'vue'
import { RouterLink } from 'vue-router'
import { NIcon, NEllipsis } from 'naive-ui'

export function renderLink(link: any, label: any) {
    return () =>
        h(
            RouterLink,
            typeof link === 'string'
                ? {
                      to: link as string,
                  }
                : link,
            {
                default: () =>
                    h(NEllipsis, null, {
                        default: () => label,
                    }),
            }
        )
}
export function renderIcon(icon: Component) {
    return () =>
        h(NIcon, null, {
            default: () => h(icon),
        })
}
import {
    PersonOutline as PersonIcon,
    BookOutline as BookIcon,
    BookmarkOutline as BookmarkIcon,
    VolumeHighOutline as VolumeIcon,
    ImageOutline as ImageIcon,
    HomeOutline as HomeIcon,
    TextOutline as TextIcon,
    VideocamOutline as VideoIcon,
    LogoMarkdown as MarkdownIcon,
    ChatboxOutline as ChatboxIcon,
    SquareOutline as SquareIcon,
    Square as SquareFullIcon,
    ChatboxEllipsesOutline as ChatboxEIcon,
    ArrowBackOutline as ArrowBackIcon,
    NotificationsOutline as NoticeIcon,
    InformationOutline as InfoIcon,
} from '@vicons/ionicons5'

export const Icons = {
    person: PersonIcon,
    book: BookIcon,
    bookmark: BookmarkIcon,
    volume: VolumeIcon,
    image: ImageIcon,
    home: HomeIcon,
    text: TextIcon,
    video: VideoIcon,
    markdown: MarkdownIcon,
    chatbox: ChatboxIcon,
    chatboxE: ChatboxEIcon,
    square: SquareIcon,
    squareFull: SquareFullIcon,
    arrowBack: ArrowBackIcon,
    notice: NoticeIcon,
    info: InfoIcon,
}
