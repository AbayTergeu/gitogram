import progress from './progress.vue'
export default {
  title: 'progress',
  component: { progress }
}
const template = () => ({
  components: { progress },
  template: '<progress hover-text="Unfollow">Following</progress>'
})
export const Default = template.bind({})