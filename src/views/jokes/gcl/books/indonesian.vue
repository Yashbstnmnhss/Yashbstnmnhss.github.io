<route lang="yaml">
name: gcl-books-indonesian
meta:
    menu:
        for: jokes
        key: gcl-books-indonesian
        icon: bookmark
        parent:
            key: gcl-books
            icon: book
            parent:
                key: gcl
</route>

<script setup lang="ts">
import { NH1, NCollapse, NCollapseItem, NBlockquote } from 'naive-ui'
</script>

<template>
    <NH1>{{ $texta.get(['menus', 'jokes', 'gcl-books-indonesian']) }}</NH1>
    <NBlockquote>
        <NCollapse default-expanded-names="1">
            <NCollapseItem title="原文" name="1">
                mereka ngerti ga sih kalo sebenar ny sy juga ada perasaan? <br />
                sy tau maksud mereka itu becanda. <br />
                tapi sy sakit loh? <br />
                emak sy tadi panggil saya "gendut" sy nih berusaha nurunin, <br />
                usha sy ga di anggap? <br />
                tau ga sih w sakit serius gw pen nanya ama mereka <br />
                sya sekarang w ngerti perasaan fuze, <br />
                mereka nganggep gw kek cwo gitu? <br />
                ga bakal baper? <br />
                karena suara gw? <br />
                w serius nangis sekarang. <br />
                ga tau sy anggap jokes juga tapi makin lama di pikirin makin sakit <br />
                sy tau sy mau ny di anggap cowo, <br />
                tapi jangan perlakuin gw kek sampah? <br />
                sy ini ga pernah di anggep/ <br />
                di cari loh <br />
                serius sy pen nanya, <br />
                tapi ntar akward, <br />
                di kira w baper ga bisa di ajak canda? <br
            /></NCollapseItem>
            <NCollapseItem title="译文"
                >他们甚至都不知道我是否有感觉？<br />
                我知道他们的意思。这是个笑话。<br />
                但我病了<br />

                我妈妈刚叫我胖，我想培养它。 乌沙·西加加加<br />

                我不知道。我是认真的。对不起。 她现在明白了引信的感觉，<br />

                他们叫我纸杯蛋糕吗<br />

                不会吧<br />

                因为gw的声音<br />

                我现在哭得很厉害。<br />
                我不知道我是否也在开玩笑，但它在我脑海中停留的时间越长，它就越痛。
                我知道我想成为一个男人，<br />

                但不要处理垃圾蛋糕<br />

                这从未被提及/<br />

                查找类型<br />

                认真地说，他的头，<br />

                但同时， 如果不能邀请w baper来开玩笑<br
            /></NCollapseItem>
        </NCollapse>
    </NBlockquote>
</template>
