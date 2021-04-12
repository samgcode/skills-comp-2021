const files = [
    { name: 'plastic_bottles_2' },
    { name: 'plastic_bottle' },
    { name: 'glass_bottles_line_5' },
    { name: 'two_bottles_2' },
    { name: 'glass_bottles_line' },
    { name: 'five_plastic_bottles' },
    { name: 'glass_bottles_line_2' },
    { name: 'three_glass_bottles_2' },
    { name: 'three_glass_bottles' },
    { name: 'red_bottles_3' },
    { name: 'red_bottle' },
    { name: 'red_bottles_2' },
]

class ImageService {
    constructor(serviceLocator) {
        this._collection = serviceLocator.collections.imageCollection
        this.uploadImages()
    }

    async uploadImages() {
        const images = await this._collection.find().toArray()
        if(images.length <= 0) {
            files.forEach(async (image) => {
                const file = require(`./itemImages/${image.name}.jpg`)
                await this._collection.insertOne({
                    name: image.name,
                    file: file
                }) 
            })
        }
    }

    async getImage(name) {
        const response = await this._collection.find({ name: name }).asArray()
        if(response[0]) {
            return response[0]
        } else {
            return {
                name: '',
                file: ''
            }
        }
    }
    
}

export default ImageService