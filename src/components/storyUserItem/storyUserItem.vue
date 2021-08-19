<template>
    <button class="c-story-user-item" @click="$emit('onPress')">
        <div class="avatar">
            <img :src= "avatar" class="img" alt="user avatar"/>
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
    }
}
</script>

<style lang="scss" src="./storyUserItem.scss" scoped></style>