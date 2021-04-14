const files = [
    { name: '32' },
    { name: '42' },
    { name: 'wet' },
    { name: 'laying_tiles_2' },
    { name: 'planting_plants' },
    { name: 'backyard_fireplace' },
    { name: 'laying_sod' },
    { name: 'laying_sod_2' },
    { name: 'mowing_lawn' },
    { name: 'mowing_lawn_2' },
    { name: 'mowing_lawn_3' },
    { name: 'pruning_tree' },
    { name: 'pruning_tree_2' },
    { name: 'pruning_tree_3' },
    { name: 'nice_backyard' },
    { name: 'nice_backyard_2' },
    { name: 'nice_backyard_3' },
]

class ImageService {
    constructor(serviceLocator) {
        this._collection = serviceLocator.collections.imageCollection
        // this.uploadImages()
    }

    // async uploadImages() {
    //     const images = await this._collection.find().toArray()
    //     if(images.length <= 0) {
    //         files.forEach(async (image) => {
    //             const file = require(`C:/Users/JCSSkills/web/skills-comp-2021/frontend/src/services/itemimages/${image.name}.jpg`)
    //             await this._collection.insertOne({
    //                 name: image.name,
    //                 file: file
    //             }) 
    //         })
    //     }
    // }

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