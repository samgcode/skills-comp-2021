class ItemService {
    constructor(serviceLocator) {
        this._collection = serviceLocator.collections.itemsCollection
        this._reviewService = serviceLocator.services.reviewService
        this._imageService = serviceLocator.services.imageService
    }

    async getItems() {
        const items = await this._collection.find().toArray()

        const convertedItems = await Promise.all(items.map(async (item) => {
            item.imageFile = await this._imageService.getImage(item.image)
            const convertedItem = this._convertItem(item)
            return convertedItem
        }))
        return convertedItems
    }

    _convertItem(item) {
        const convertedItem = {
            image: item.imageFile,
            name: item.name,
            price: item.price,
            priceExtra: item.priceExtraText,
            per: item.per,
            commercial: item.commercial,
            id: item._id.toString(),
        }
        return convertedItem
    }
}

export default ItemService

/*
{
    name: str
    image: str
    price: int
    price xtra text: str
    per: str (hr/sqft/)
    comercial: true/false
}

*/