<script setup lang="ts">
import Diamond from '../assets/images/jokes/diamond.svg'
import Caution from '../assets/images/jokes/caution-icon.svg'
import Euclid from '../assets/images/jokes/euclid-icon.svg'
import Vlam from '../assets/images/jokes/vlam-icon.svg'
import '../assets/styles/acs.css'
import { useAchiever } from '../composables/achievements'

const achiever = useAchiever()
</script>

<template>
    <div class="acs-container">
        <div class="number">
            <span class="text">
                {{ $t('components.ACSBar.number') }}
            </span>
            <span class="num">
                277353
            </span>
        </div>
        <div class="bar">
            <div class="animamted-bar" />
            <div class="animamted-bar" />
            <div class="animamted-bar" />
        </div>
        <div class="level">
            <span class="lvl">
                {{ $t('components.ACSBar.level') }}
            </span>
            <span class="clearance">
                {{ $t('components.ACSBar.clearance') }}
            </span>
        </div>
        <div class="divider">
            <div />
        </div>
        <div class="class">
            <div class="container">
                <div class="contain-class">
                    <div class="class-category">
                        {{ $t('components.ACSBar.class-category') }}
                    </div>
                    <div class="class-text">
                        {{ $t('components.ACSBar.class-text') }}
                    </div>
                </div>
                <div class="class-icon">
                    <div class="acs-icon" :style="'background: url(' + Euclid + ')'" />
                </div>
            </div>
        </div>
        <div class="disrupt">
            <div class="container">
                <div class="contain-disrupt">
                    <span class="disrupt-text">
                        <span class="disrupt-category">
                            {{ $t('components.ACSBar.disrupt-category') }}&ThickSpace;
                        </span>
                        {{ $t('components.ACSBar.disrupt-text') }}
                    </span>
                </div>
                <div class="disrupt-icon">
                    <div class="acs-icon" :style="'background: url(' + Caution + ')'" />
                </div>
            </div>
        </div>
        <div class="risk">
            <div class="container">
                <div class="contain-risk">
                    <span class="risk-text">
                        <span class="risk-category">
                            {{ $t('components.ACSBar.risk-category') }}&ThickSpace;
                        </span>
                        {{ $t('components.ACSBar.risk-text') }}
                    </span>
                </div>
                <div class="risk-icon">
                    <div class="acs-icon" :style="'background: url(' + Vlam + ')'" />
                </div>
            </div>
        </div>
        <div class="diamond">
            <div class="container">
                <div class="diamond-icon" @dblclick="achiever.achieve('SCP')"
                    :style="'background: url(' + Diamond + ')'" />
            </div>
        </div>
    </div>
</template>