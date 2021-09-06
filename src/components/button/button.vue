<template>
    <button :class="[
                'c-button', `theme-green`, 
                {'hover-text' : withHoverText}
            ]" 
            :data-hover-text = "hoverText"
            @click="onClick"
    >
        <span class="btn-text">
            <slot></slot>
        </span>
    </button>
</template>

<script>
    import { reactive, computed } from 'vue';
    export default {
        name: 'x-button',
        props: {
            hoverText: {
                type: String
            }
        },
        computed: {
            withHoverText(){
                return this.hoverText?.length
            }
        },

        emits: ['click'],

        setup(props, { emit }) {
            props = reactive(props);
            return {
            classes: computed(() => ({
                'storybook-button': true,
                'storybook-button--primary': props.primary,
                'storybook-button--secondary': !props.primary,
                [`storybook-button--${props.size || 'medium'}`]: true,
            })),
            style: computed(() => ({
                backgroundColor: props.backgroundColor,
            })),
            onClick() {
                emit('click');
            }
            }
        }
    }
</script>

<style lang="scss" scoped src="./button.scss"></style>
