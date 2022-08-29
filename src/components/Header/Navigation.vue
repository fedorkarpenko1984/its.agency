<template>
    <nav class="navigation">
        <button class="nav-button" click="navButtonHandler()">продукты</button>
        <button class="nav-button" click="navButtonHandler()">Цвета</button>
        <button class="nav-button" click="navButtonHandler()">Вдохновение</button>
        <button class="nav-button" click="navButtonHandler()">Советы</button>
        <button class="nav-button" click="navButtonHandler()"></button>
    </nav>
</template>

<script>
    export default {
        methods: {
            navButtonHandler() {
                //логика кнопок меню навигации
            }
        }
    }
</script>

<style lang="scss" scoped>
.navigation {
    display: flex;
    left: 19.11vw;

    .nav-button {
        outline: none;
        border: none;
        background-color: white;
        margin-right: 1.25vw;
        text-transform: uppercase;
        font-weight: 400;
    }
}
</style>