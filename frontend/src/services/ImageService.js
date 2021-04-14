class ImageService {
    constructor(serviceLocator) {
        this._collection = serviceLocator.collections.imageCollection
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