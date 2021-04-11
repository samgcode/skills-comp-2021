const fs = require('file-system')

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

function base64_encode(file) {
    // read binary data
    var bitmap = file
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

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

    async getImage(id) {
        const response = await this._collection.find().asArray()
        let image
        response.forEach(element => {
            if(element._id.toString() === id) {
                image = element
            }
        })
        if(image) {
            return image.file
        } else {
            return ''
        }
    }
    
}

export default ImageService