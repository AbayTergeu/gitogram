import button from './button.vue'
export default{
    title: 'button',
    component: { button },
    argTypes: {
        hoverText: {
            control: {type: 'text'}
        },
        onClick: {}
    }
}
const template = (args) => ({
      components: { xButton: button },
      setup(){
        return { args }
      },
      template: '<x-button v-bind="args">Following</x-button>'
  });
export const Default = template.bind({})
Default.args = {
    hoverText: "Unfollow"
} 