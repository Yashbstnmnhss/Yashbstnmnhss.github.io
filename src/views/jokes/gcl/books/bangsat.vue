<route lang="yaml">
name: gcl-books-bangsat
meta:
    menu:
        for: jokes
        key: gcl-books-bangsat
        icon: bookmark
        parent:
            key: gcl-books
            icon: book
            parent:
                key: gcl
</route>

<script setup lang="ts">
import { NH1, NTabs, NTabPane, NBlockquote, NCollapse, NCollapseItem } from 'naive-ui'
import { randomRepeat } from '../../../../lib/utils/'

const sheeps = randomRepeat('🐑', 1, 20)
</script>

<template>
    <NH1>{{ $texta.get(['menus', 'jokes', 'gcl-books-bangsat']) }}</NH1>
    <NTabs animated size="large" pane-class="tab-pane-style">
        <NTabPane name="2022/04/16">
            <NBlockquote>
                <NCollapse default-expanded-names="1">
                    <NCollapseItem title="原文" name="1">
                        gila mereka udah
                        <br />
                        didiemin nyolot
                        <br />
                        diajak bicara mereka juga cuman ketawa
                        <br />
                        maunya apa sih?
                        <br />
                        xiao si wole xiao si wole
                        <br />
                        gajelas
                        <br />
                        situasi serius aja dia gak ngerti
                        <br />
                        mereka bahkan masih bisa ngejek
                        <br />
                        kirim foto kita ke orang lain
                        <br />
                        lain kali, kita ketawa aja kalo mereka ngomong apapun
                        <br />
                        bangsat emang
                        <br />
                    </NCollapseItem>
                    <NCollapseItem title="译文">
                        他们疯了。<br />

                        二角尼龙<br />

                        他们在说话，只是在笑。<br />

                        你到底想要什么？<br />

                        如果你想要的话<br />

                        清楚的<br />

                        她不明白。<br />

                        他们甚至会笑<br />

                        将我们的照片发送给其他人<br />

                        下次，如果他们说什么，我们会笑。<br />

                        你这个狗娘养的。
                    </NCollapseItem>
                </NCollapse>
            </NBlockquote>
        </NTabPane>
        <NTabPane name="2022/04/19">
            <NBlockquote>
                <NCollapse default-expanded-names="1">
                    <NCollapseItem title="原文" name="1">
                        bang
                        <br />
                        lama lama kita kayak hilang di grup sana
                        <br />
                        bagus deh
                        <br />
                        mereka ga bully lagi
                        <br />
                        {{ sheeps }}
                        <br />
                        kemaren sih masih
                        <br />
                        tapi gatau kalo kedepannya
                        <br />
                        sy harap ngga.
                        <br />
                    </NCollapseItem>
                    <NCollapseItem title="译文">
                        猛敲<br />

                        我们已经很久没有在那群人中迷路了。

                        <br />

                        好的

                        <br />

                        他们不再欺负人了。

                        <br />

                        {{ sheeps }}

                        <br />

                        那是昨天。

                        <br />

                        但痒感正在袭来

                        <br />

                        我希望不会。
                    </NCollapseItem>
                </NCollapse>
            </NBlockquote>
        </NTabPane>
        <NTabPane name="2022/04/26">
            <NBlockquote>
                <NCollapse default-expanded-names="1">
                    <NCollapseItem title="原文" name="1">
                        <strong title="Clea Lukito">
                            <u title="Clea Lukito">@vallen</u>
                        </strong>
                        bang
                        <br />
                        mereka
                        <br />
                        nanya dia siapa?
                        <br />
                        TOLOL, ITU TEMEN KITA MEREKA
                        <br />
                        NGGA KENAL ..
                        <br />
                        shit
                        <br />
                        <strong title="Clea Lukito">
                            <u title="Clea Lukito">@vallen</u>
                        </strong>
                        chat sy kalo udh on dimana aja
                        <br />
                        tobat kalian pls
                        <br />
                        jangan kek begini
                        <br />
                        emosi sy
                    </NCollapseItem>

                    <NCollapseItem title="译文">
                        <strong title="Clea Lukito">
                            <u title="Clea Lukito">@vallen</u>
                        </strong>

                        猛敲

                        <br />

                        他们

                        <br />

                        她是谁？

                        <br />

                        笨蛋, 那是他们的新朋友

                        <br />

                        不是。。

                        <br />

                        倒霉

                        <br />

                        <strong title="Clea Lukito">
                            <u title="Clea Lukito">@vallen</u>
                        </strong>

                        聊天sy kalo udh在哪里aja

                        <br />

                        很抱歉

                        <br />

                        不要这样做蛋糕。

                        <br />

                        眼部情绪
                    </NCollapseItem>
                </NCollapse>
            </NBlockquote>
        </NTabPane>
    </NTabs>
</template>
