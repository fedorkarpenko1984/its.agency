<template>
    <div class="slider">
        <div class="photo-wrap">
            <img :src="sliderPhotos[0]" class="slider-photos" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        
        computed: {

            sliderPhotos() {
                return this.$store.state.sliderPhotos
            }

        }


    }
</script>

<style lang="scss" scoped>
.slider {
    position: relative;
    width: 100%;
    height: 29.16vw;
    overflow: hidden;
    border: 1px solid grey;
}

.photo-wrap {
    position: absolute;
    width: 100%;
    height: 100%;
}

.slider-photos {
    position: absolute;
    width: 100%;
    height: 100%;
}
</style>