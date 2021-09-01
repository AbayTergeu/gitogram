<template>
    <button class="c-story-user-item" @click="$emit('onPress')">
        <div class="avatar">
            <img :src="avatar" class ="img" alt="user name">
        </div>
        <div class="username">
            {{ username }}
        </div>
    </button>
</template>

<script>
export default {
    props: {
        avatar: {
            type: String,
            requierd: true
        },
        username: {
            type: String,
            requierd: true
        },
        id: {
            type: String,
            requierd: true
        }        
    },
    data () {
        return {
            publicPath: process.env.BASE_URL
        }
    }
}
</script>

<style lang="scss" src="./storyUserItem.scss" scoped></style>