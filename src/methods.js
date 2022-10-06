export function scrollTo (refName) {
    const target = this.$refs[refName]

    if (target) {
        target.$el.scrollIntoView({ behavior: 'smooth' })
    }
}

export function timeStampToDate (timestamp) {
    if (timestamp) {
        return new Date(timestamp * 1000)
    }
}
