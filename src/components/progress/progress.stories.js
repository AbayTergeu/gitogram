import progress  from './progress.vue'


export default{
    title: "progress",
    component: { progress }
}

export const defaultView = () => ({
    template: `
        <h1>Hello progress</h1>
    `
})