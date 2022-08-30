<template>
    <nav class="navigation">
        <button class="nav-button fw400" @click="navButtonHandler()">продукты</button>
        <button class="nav-button fw400" @click="navButtonHandler()">Цвета</button>
        <button class="nav-button fw400" @click="navButtonHandler()">Вдохновение</button>
        <button class="nav-button fw400" @click="navButtonHandler()">Советы</button>
        <button class="nav-button fw400" @click="navButtonHandler()">найти магазин</button>
    </nav>
</template>

<script>
    export default {
        methods: {
            navButtonHandler() {
                //логика кнопок меню навигации


                this.navigationDOMElement.style.left = '-180px'
                this.$store.commit('switchNavigatonFlag')
            }
        }, 

        computed: {
            navigationDOMElement() {
                return this.$store.state.refToNaviatonDOMElement
            }
        }
    }
</script>

<style lang="scss" scoped>
.navigation {
    display: flex;

    .nav-button {
        background-color: white;
        margin-right: 1.25vw;
        text-transform: uppercase;
        font-weight: 400;
        cursor: pointer;
    }
}

@media (max-width: 1200px) {
    .navigation {
        flex-direction: column;
        width: 180px;
        border-top: 1px solid rgb(228, 228, 228);

        .nav-button {
            background-color: white;
            margin-right: 0px;
            height: 30px;
            text-transform: uppercase;
            border-bottom: 1px solid rgb(228, 228, 228);
            border-bottom-right-radius: 2px;
        }
    }
}

@media (max-width: 576px) {
    .navigation {
        width: 100%;
        border-top: 1px solid rgb(228, 228, 228);

        .nav-button {
            background-color: white;
            height: 40px;
            text-transform: uppercase;
            border-bottom: 1px solid rgb(228, 228, 228);
            border-bottom-right-radius: 2px;
        }
    }
}
</style>