const tailwind = require('../tailwind.config')

class Colors {
    constructor() {
        this.primary = tailwind.theme.extend.colors.primary.DEFAULT
        this.secondary = tailwind.theme.extend.colors.secondary.DEFAULT
    }
}

export default Colors