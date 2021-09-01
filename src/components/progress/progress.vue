<template>
    <div :class={active} class="c-progress">
        <div class="indicator"></div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                active: false
            }
        },
        mounted(){
            this.active = true
        }
    }
</script>

<style lang="scss" scopped src="./progress.scss"></style>
