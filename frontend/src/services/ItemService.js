class ItemService {
    constructor(serviceLocator) {
        this._collection = serviceLocator.collections.itemsCollection
        this._reviewService = serviceLocator.services.reviewService
        this._imageService = serviceLocator.services.imageService
    }

    async getItems() {
        const items = await this._collection.find().toArray()
        const itemsRatingAverage = await this._reviewService._getItemsRatingAverage(items)

        const convertedItems = await Promise.all(items.map(async (item) => {
            const itemId = item._id.toString()
            const ratingAverage = itemsRatingAverage.find((itemRatingAverage) => {
                return itemRatingAverage.id === itemId
            })
            item.imageFile = await this._imageService.getImage(item.image)
            const convertedItem = this._convertItem(item, ratingAverage)
            return convertedItem
        }))
        return convertedItems
    }

    _convertItem(item, average) {
        const convertedItem = {
            image: item.imageFile,
            name: item.name,
            onSale: item.onSale,
            price: item.price,
            salePrice: item.salePrice,
            average: average.average,
            id: item._id.toString(),
        }
        return convertedItem
    }
}

export default ItemService

/*
{
    name: str
    price: int
    price xtra text: str
    hr/sqft/: str
    comercial: true/false
}

*/