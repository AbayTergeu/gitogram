<template>
    <div class="x-container"></div>
</template>

<!--
<template>
    <div class="topline">
        <topline>
            <template #headline>
                <div class="icon">
                    <icon name="home"/>                    
                </div>
                <div class="iconend">
                    <icon name="end"/>
                </div>
            </template>
            <template #content>
                <ul class="stories">
                    <li class="stories-item" v-for="story in stories" :key="story.id">
                        
                        <story-user-item 
                            :id="story.id"
                            :avatar="story.avatar"
                            :username="story.username"
                            @onPress="hanlePress(story.id)"
                        />
                    </li>                    
                </ul>
            </template>
        </topline>
    </div>
    <div class="c-feed">        
        <toggler @onToggle="toggle"/>
        <div class="comments" v-if="shown">
            <ul class="comments-list">
                <li class="comments-item" v-for="n in 5" :key="n">
                    <comment text="Some text" username="John Doe"/>
                </li>
            </ul>
        </div>
    </div>
</template>
-->

<script>
/*import { topline } from '../../components/topline'
import { icon } from '../../icons'
import { storyUserItem } from '../../components/storyUserItem'
import stories from './data.json'
import { toggler } from '../../components/toggler'
import { comment } from '../../components/comment'

import Comment from '../../components/comment/comment.vue'*/
import * as api from '../../api'

export default {
    name: 'feeds',
    created(){
        api.trendings.getTrendings()
    }/*,
    components: {
        topline,
        icon,
        storyUserItem,
        toggler,
        comment
    },
    data(){  
        return{
            stories,
            shown: false
        }
    },
    methods: {
        toggle(isOpened){
            this.shown = isOpened
        }
    }*/
}
</script>
<style lang="scss" scoped src="./feeds.scss"></style>
