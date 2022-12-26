<route lang="yaml">
name: gcl-books-back
meta:
    menu:
        for: jokes
        key: gcl-books-back
        icon: bookmark
        parent:
            key: gcl-books
            icon: book
            parent:
                key: gcl
</route>

<script lang="ts" setup>
import { NH1, NBlockquote, NCollapse, NCollapseItem } from 'naive-ui'
</script>

<template>
    <NH1>{{ $texta.get(['menus', 'jokes', 'gcl-books-back']) }}</NH1>
    <NBlockquote>
        <NCollapse default-expanded-names="1">
            <NCollapseItem title="原文" name="1">
                <u>gladys — 2022/07/11</u>
                <br />
                ini yashb n liuqian bukan buat percobaan lagi,
                <br />
                pantas aja y di bully,
                <br />
                dia aja bully kita
                <br />
                percuma aja ajak mereka balik temenan gausah lagi temenan ama mereka,
                <br />
                i cape susah banget
                <br />
                mau lepas dari mereka kek i butuh mereka banget banget tapi mereka lakuin kek gitu
                kita udah
                <br />
                dibuat mereka bungkam berkali kali selalu buat kejutan yang bisa sakitin hati orang
                tai dia
                <br />
                keluar bodoamat
                <br />
                <u>vallen — 2022/07/11</u>
                <br />
                yo bro i just woke up that's not fair ngapain si ngomong make bahasa sendiri?
                <br />
                make bahasa
                <br />
                sendiri suruh translate kek kontol itu KEK SERIUS TIAP GW TRANSLATE AD PESAN BARU
                ITU KAN
                <br />
                KEK ANJ bro serius foto kemaren no gw pikir itu gw yng ss tapi seingat gw yang gw ss
                pose lu
                <br />
                itu megang hp terus tangan lu keliatan semua ad dua kemungkinan atau gw kekirim foto
                itu
                <br />
                terus buat drama baru dia edit jdi g tau itu kapan pdhal gw tadi malem ga bisa tdr
                mau tanya
                <br />
                dia pertanyaan banyak kek wtf bro ga ngaca ?
                <br />
                <u>vallen — 2022/07/11</u>
                <br />
                walaupun itu bukan dia pas liatin cam still ini ga
                <br />
                <u>gladys — 2022/07/11</u>
                <br />
                oh bisa juga
            </NCollapseItem>
            <NCollapseItem title="译文"
                ><u> gladys-2022年7月11日 </u>

                <br />

                这个yashb n liuqian不再是一个实验,

                <br />

                快y在欺负,

                <br />

                他在欺负我们。

                <br />

                把他们免费带回他们父亲的朋友那里，

                <br />

                我太累了。

                <br />

                我非常需要他们，但他们做到了。 我们完成了。

                <br />

                让它们一次又一次地裹起来。 听他说。

                <br />

                出去吧，笨蛋。

                <br />

                <u> vallen-2022年7月11日 </u>

                <br />

                兄弟，我刚睡醒，这不公平，你为什么要用自己的语言？
                <br />

                制造语言
                <br />

                告诉他翻译控制蛋糕。 这是正确的。
                <br />
                我以为是格温，但记得格温 姿态lu

                <br />

                太好了。举起你的手。你举起所有的广告。 那个
                <br />
                继续制作一部新剧。他剪辑了它。你知道的。 想问吗？
                <br />
                他要了很多蛋糕，兄弟。
                <br />
                <u> vallen-2022年7月11日</u>
                <br />
                即使不是这样，他也没有看这个静止的摄像头。
                <br />
                <u>gladys-2022年7月11日</u>
                <br />
                哦，是的。
            </NCollapseItem>
        </NCollapse>
    </NBlockquote>
    <NH1>狭义乐子说</NH1>
    <NBlockquote>
        <NCollapse default-expanded-names="1">
            <NCollapseItem title="原文" name="1">
                do you know that <br />
                you're the only boy that i talk to that freely <br />
                i have a boy friend, but he gone just abt 1 month. <br />
                idk the reason why is he left tho <br />
                in my class, i talk to anyone including the boys but i never had a really close "boy
                friend" it seems weird <br />
                ill tell you <br />
                that i liked someone <br />
                everyone knows that <br />
                he likes me back too <br />
                but we never talk <br />
                i don't know to act infront of him <br />
                we have talk to each other <br />
                few times <br />
                but that's on a call. <br />
                its feels like im changing topic but, the topic goes there <br />
                i should just text them in whatsapp <br />
                it becomes weird <br />
                ah and also i need to learn <br />
                friday i have a final exam
            </NCollapseItem>
            <NCollapseItem title="译文"
                >你知道吗<br />

                你是我唯一一个可以自由交谈的男孩<br />

                我有一个男朋友，但他一个月前就走了<br />

                我知道他离开的原因<br />

                在我的课堂上，我和任何人都交谈，包括男孩，但我从来没有一个真正亲密的男孩
                朋友“看起来很奇怪<br />

                我告诉你<br />

                我喜欢某人<br />

                每个人都知道<br />

                他也喜欢我<br />

                但我们从不交谈<br />

                我不知道在他面前怎么做<br />

                我们彼此交谈<br />

                几次<br />

                但这是随叫随到的<br />

                这感觉就像我改变了话题，但是，话题就在那里<br />

                我应该用whatsapp给他们发短信<br />

                变得很奇怪<br />

                啊，我也需要学习<br />

                星期五我有期末考试</NCollapseItem
            >
        </NCollapse>
    </NBlockquote>
</template>
