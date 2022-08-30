<template>
    <div class="switch-button" :style="{ background: isSwitchedOn ? '#7BB899' : '#F2F2F2' }" @click="switchHandler()">

    </div>
</template>

<script>
    export default {
        props: {
            methodName: String
        },

        data: () => ({
            isSwitchedOn: false
        }),

        methods: {

            switchHandler() {
                this.isSwitchedOn = !this.isSwitchedOn
                this.$store.commit(this.methodName)
            }

        }
    }
</script>

<style scoped>
.switch-button {
    position: relative;
    width: 36px;
    height: 22px;
    border-radius: 36px;
    transition: background-сolor 0.5s;
}
</style>