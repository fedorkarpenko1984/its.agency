<template>
    <header class="header">
        <h1 class="logo">COLORS</h1>
        <div class="navigation-wrap">
            <Navigation />
        </div>
        <a class="phone-block" href="tel:+74952217769">
            <h4 class="fw500 lh100">+7 (495) 221-77-69</h4>
            <h5 class="phone-text lh100">Заказать звонок</h5>
        </a>
    </header>
</template>

<script>
import Navigation from './Navigation.vue';

    export default {
        components: { Navigation }
    }
</script>

<style lang="scss" scoped>
.header {
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
    }

    .navigation-wrap {
        position: absolute;
        left: 19.11vw;
    }
    .phone-block {
        position: absolute;
        right: 25.36vw;

        .phone-text {
            opacity: 0.3;
            margin-top: 2px;
        }
    }
}


@media (max-width: 1200px) {
    .header {
        height: 70px;
    }
}
</style>