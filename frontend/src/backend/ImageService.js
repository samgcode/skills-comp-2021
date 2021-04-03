const files = [
    { name: 'glass_bottle' },
]


class ImageService {
    constructor(serviceLocator) {
        this._collection = serviceLocator.collections.imageCollection
        this.uploadImages()
    }

    async getImages() {
        const images = await this._collection.find().toArray()
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

    async getImage(id) {
        const response = await this._collection.find({ _id: id }).asArray()
        return response
    }
    
}

export default ImageService