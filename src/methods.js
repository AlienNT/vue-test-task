export function scrollTo (refName) {
    const target = this.$refs[refName]

    if (target) {
        target.$el.scrollIntoView({ behavior: 'smooth' })
    }
}
