<script setup lang="ts">
import {
    Level2Color,
    Class2Color,
    Disruption2Color,
    Risk2Color,
    Level2Extra,
    Class2Text,
    Disruption2Text,
    Risk2Text,
    Class2Icon,
    Disruption2Icon,
    Risk2Icon,
    Disruption2Extra,
    Risk2Extra,
} from '../../lib/functions/acs'
import { computed, watch, ref } from 'vue'
import { useMain } from '../../store'
import { Themes } from '../../lib'
import type { ACSLevel, ACSClass, ACSSecondaryClass, ACSDisruption, ACSRisk } from '../../lib/types'

const store = useMain()
const props = defineProps<{
    level: ACSLevel
    category: ACSClass
    secondaryCategory?: ACSSecondaryClass
    disruption: ACSDisruption
    risk: ACSRisk
}>()

const levelColor = computed(() => Level2Color[props.level]),
    classColor = computed(() => Class2Color[props.category]),
    secondaryColor = computed(() => Class2Color[props.secondaryCategory!] ?? '属性值无效'),
    disruptColor = computed(() => Disruption2Color[props.disruption]),
    riskColor = computed(() => Risk2Color[props.risk]),
    secondaryVisible = computed(() => (props.secondaryCategory ? 'visible' : 'hidden')),
    colorOpacity = ref(store.theme === Themes.dark ? 0.8 : 0.3)
watch(
    () => store.theme,
    val => (colorOpacity.value = val === Themes.dark ? 0.8 : 0.3)
)
</script>

<template>
    <div class="acs-bar">
        <div class="acs-item">
            <span>
                <strong>项目编号：</strong>
                <slot name="project-number"></slot>
            </span>
        </div>
        <div class="acs-clear">
            <strong>
                <span>许可等级</span>
                <span style="white-space: pre-wrap"> </span>
                {{ props.level }}：
            </strong>
            <div class="level-text">{{ Level2Extra[props.level] }}</div>
        </div>
        <div class="acs-contain-container">
            <div class="acs-contain">
                <div class="acs-text">
                    <span>
                        <strong>
                            <span> 收容等级： </span>
                        </strong>
                    </span>
                    <span>{{ Class2Text[props.category] }}</span>
                </div>
                <div class="acs-icon">
                    <div
                        class="acs-icon-img animation-fade"
                        :style="{
                            backgroundImage: `url('${Class2Icon[props.category]}')`,
                            backgroundColor: 'rgba(var(--class-color), var(--color-opacity))',
                        }"
                    ></div>
                </div>
            </div>
        </div>
        <div class="acs-disrupt">
            <div class="acs-text">
                <strong>扰动等级：</strong>
                <span class="disruption-class">
                    {{ Disruption2Extra[props.disruption] }}/{{ Disruption2Text[props.disruption] }}
                </span>
            </div>
            <div class="acs-icon acs-small-icon">
                <div
                    class="acs-icon-img animation-fade"
                    :style="{
                        backgroundImage: `url('${Disruption2Icon[props.disruption]}')`,
                        backgroundColor: 'rgba(var(--disrupt-color), var(--color-opacity))',
                    }"
                ></div>
            </div>
        </div>
        <div class="acs-risk">
            <div class="acs-text">
                <strong>风险等级：</strong>
                <span class="disruption-class">
                    {{ Risk2Extra[props.risk] }}/{{ Risk2Text[props.risk] }}
                </span>
            </div>
            <div class="acs-icon acs-small-icon animation-fade">
                <div
                    class="acs-icon-img"
                    :style="{
                        backgroundImage: `url('${Risk2Icon[props.risk]}')`,
                        backgroundColor: 'rgba(var(--risk-color), var(--color-opacity))',
                    }"
                ></div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
* {
    --bar-color: v-bind(levelColor);
    --class-color: v-bind(classColor);
    --secondary-color: v-bind(secondaryColor);
    --disrupt-color: v-bind(disruptColor);
    --risk-color: v-bind(riskColor);
    --secondary-visible: v-bind(secondaryVisible);
    --color-opacity: v-bind(colorOpacity);
}

.acs-bar {
    box-sizing: border-box;
    display: grid;
    grid-template-areas:
        'item    item    clear'
        'contain disrupt disrupt'
        'contain risk    risk';
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 53% 1fr 1fr;
    width: 100%;
    background-color: transparent;
    position: relative;
    text-transform: capitalize;
    overflow: hidden;
    font-weight: 800;

    @media (max-width: 1000px) {
        grid-template-areas:
            'item    item    item    item    item    item    clear   clear   clear   clear   clear   clear'
            'contain contain contain contain contain contain contain contain contain contain contain contain'
            'disrupt disrupt disrupt disrupt disrupt disrupt risk    risk    risk    risk    risk    risk';
        grid-template-columns: repeat(12, calc(100% / 12));
        gap: 0;
        line-height: 1.1;
    }

    * {
        box-sizing: border-box;
        user-select: none;
    }

    strong {
        font-weight: 400;
    }

    div {
        display: flex;
    }

    > .acs-item {
        grid-area: item;
        font-size: 1.75em;
        align-items: flex-end;
        -webkit-box-align: end;
        padding: 0 0 0.15rem 0;
        border-bottom: 0.125rem solid;

        @media (max-width: 1000px) {
            border: none;
            padding: 0;
            align-items: center;
        }

        > span {
            padding-left: 0.75rem;

            @media (max-width: 1000px) {
                padding-left: 0;
            }
        }
    }

    > .acs-clear {
        grid-area: clear;
        box-shadow: inset 0.25rem 0 0 0 rgb(var(--bar-color));
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-direction: row;
        flex-wrap: wrap;
        font-size: 1rem;
        line-height: 1;
        border-left: 0.125rem solid;
        border-bottom: 0.125rem solid;
        -webkit-box-align: end;
        align-items: flex-end;
        padding: 0.15rem;
        padding-left: 0.5em;

        @media (max-width: 1000px) {
            border: none;
            box-shadow: none;
            border-bottom: 0.25rem solid rgb(var(--bar-color));
            padding-left: 0.25em;
            padding-bottom: 0.25em;
        }

        > * {
            width: 100%;
        }

        > .level-text {
            position: relative;
            display: block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 1;
        }
    }

    > .acs-contain-container {
        grid-area: contain;
        font-size: 1.25em;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: row;
        -webkit-box-align: start;
        align-items: flex-start;
        padding: 0;
        margin: 0;
        position: relative;
        border-right: 0.125rem solid;

        @media (max-width: 1000px) {
            border: none;
        }

        > .acs-contain {
            box-shadow: inset 0.5rem 0 0 0 rgb(var(--class-color));
            padding: 0.25rem 0.25rem 0.25rem 0.75em;
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: space-between;

            @media (max-width: 1000px) {
                width: 100%;
                padding: 0.25rem;
                border-bottom: 0.25rem solid rgb(var(--class-color));
                box-shadow: none;
            }

            > .acs-text {
                flex-wrap: wrap;
                -webkit-box-align: center;
                align-items: center;
                line-height: 1;
            }
        }
    }

    > .acs-disrupt {
        grid-area: disrupt;
        box-shadow: inset 0.25rem 0 0 0 rgb(var(--disrupt-color));
        padding: 0.25rem;
        padding-left: 0.75em;
        -webkit-box-align: center;
        align-items: center;
        width: 100%;
        display: flex;
        justify-content: space-between;

        @media (max-width: 1000px) {
            box-shadow: none;
            border-bottom: 0.25rem solid rgb(var(--disrupt-color));
        }

        > .acs-text {
            display: flex;

            @media (max-width: 500px) {
                flex-direction: column;
                justify-items: flex-start;
                align-items: flex-start;
            }
        }
    }

    > .acs-risk {
        grid-area: risk;
        box-shadow: inset 0.25rem 0 0 0 rgb(var(--risk-color));
        padding: 0.25rem;
        padding-left: 0.75em;
        -webkit-box-align: center;
        align-items: center;
        width: 100%;
        display: flex;
        justify-content: space-between;

        @media (max-width: 1000px) {
            box-shadow: none;
            border-bottom: 0.25rem solid rgb(var(--risk-color));
        }

        > .acs-text {
            display: flex;

            @media (max-width: 500px) {
                flex-direction: column;
                justify-items: flex-start;
                align-items: flex-start;
            }
        }
    }

    .acs-icon {
        display: flex;
        height: 3.5rem;
        width: 3.5rem;
        -webkit-box-pack: center;
        align-self: center;
        justify-self: center;
        margin-left: 0.25rem;
        margin-right: 0.5rem;

        > .acs-icon-img {
            align-self: center;
            justify-self: center;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
        }
    }
    .acs-small-icon {
        height: 1.5rem;
        width: 1.5rem;
        min-height: 1.5rem;
        min-width: 1.5rem;

        > .acs-icon-img {
            @media (max-width: 1000px) {
                height: 0;
                width: 0;
            }
        }

        @media (max-width: 1000px) {
            min-height: 0;
            min-width: 0;
            height: 0;
            width: 0;
        }
    }
}

.animation-fade {
    animation-name: FadeIn;
    animation-duration: 0.5s;
    animation-delay: 0.25s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: both;
    animation-play-state: running;
    animation-iteration-count: 1;
}
</style>
