<template>
    <header class="header">
        <div class="burger-menu" @click="burgerMenuOpener()"></div>

        <h1 class="logo">COLORS</h1>

        <div class="navigation-wrap" ref="navWrap">
            <Navigation />
        </div>

        <a class="phone-block" href="tel:+74952217769">
            <h4 class="fw500 lh100">+7 (495) 221-77-69</h4>
            <h5 class="phone-text lh100">Заказать звонок</h5>
        </a>

        <div class="control-panel">
             <img src="../assets/images/search-icon.svg" class="icon" alt="">
             <img src="../assets/images/account-icon.svg" class="icon" alt="">
             <img src="../assets/images/heart-icon.svg" class="icon" alt="">
             <button class="icon basket-icon">{{ basketCounter }}</button>
        </div>
    </header>
</template>

<script>
import Navigation from './Navigation.vue';

    export default {
        components: { Navigation },

        computed: {
            basketCounter() {
                return this.$store.state.basket.reduce((result, currentItem) => {
                    result + currentItem.amount
                }, 0)
            },

            isNavigationOpen() {
                return this.$store.state.NavigatonFlag
            }
        },
        methods: {

            burgerMenuOpener() {
                if (!this.isNavigationOpen) {
                    this.$refs.navWrap.style.left = '0px'
                } else {
                    this.$refs.navWrap.style.left = '-180px'
                }
                this.$store.commit('switchNavigatonFlag')
            }
        },

        mounted() {
            this.$store.commit('setRefToNaviatonDOMElement', this.$refs.navWrap)
        }
    }
</script>

<style lang="scss" scoped>
.header {
    position: relative;
    width: 100%;
    height: 104px;
    display: flex;
    align-items: center;

    .logo {
        left: 3.33vw;
        position: absolute;
        font-family: TTHoves;
        font-style: normal;
        font-size: 30px;
        line-height: 88%;
    }
    .logo::after {
        content: '';
        position: absolute;
        top: 2px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #1F2020;
    }

    .navigation-wrap {
        position: absolute;
        left: 19.11vw;
        transition: all 1s;
        z-index: 1000;
    }
    .phone-block {
        position: absolute;
        right: 25.36vw;

        .phone-text {
            opacity: 0.3;
            margin-top: 2px;
        }
    }
    .control-panel {
        position: absolute;
        right: 3.33vw;
        height: 24px;
        display: flex;
        justify-content: space-between;

        .icon {
            width: 24px;
            height: 24px;
            margin-right: 1.35vw;
            margin-right: 24px;
        }
        .basket-icon {
            background-color: #7BB899;
            border-radius: 50%;
            font-size: 12px;
            margin: 0;  
        }
    }
}


@media (max-width: 1200px) {
    .header {
        height: 72px;

        .burger-menu {
            position: absolute;
            width: 24px;
            height: 2px;
            left: 24px;
            background-color: #1F2020;
            cursor: pointer;
        }
        .burger-menu::before {
            content: '';
            position: absolute;
            width: 24px;
            height: 2px;
            top: 6px;
            background-color: #1F2020;
        }
        .burger-menu::after {
            content: '';
            position: absolute;
            width: 24px;
            height: 2px;            
            top: -6px;
            background-color: #1F2020;
        }

        .logo {
            left: 72px;
        }
        .navigation-wrap {
            top: 74px;
            left: -180px;
            border-bottom-right-radius: 5px;
            overflow: hidden;
        }
        .phone-block {
            left: 50%;
            transform: translate(-50%);
        }
        .control-panel {
            right: 24px;
        }
    }
}

@media (max-width: 768px) {
    .phone-block {
        h4 {
            font-size: 14px;
        }
        h5 {
            font-size: 12px;
        }
    }
}

@media (max-width: 576px) {
    
    .logo {
        font-size: 22px !important;
        left: 50% !important;
        transform: translateX(-50%);
    }
    .phone-block {
        display: none;
    }
    .icon {
        display: none;
    }
    .basket-icon {
        display:block;
    }
}

</style>