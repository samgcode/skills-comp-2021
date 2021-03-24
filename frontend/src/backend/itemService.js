class ItemService {
    constructor(serviceLocator) {
        this._collection = serviceLocator.collections.itemsCollection
        this._reviewService = serviceLocator.services.reviewService
    }

    async getItems() {
        const items = await this._collection.find().toArray()
        const itemsRatingAverage = await this._reviewService._getItemsRatingAverage(items)

        const convertedItems = items.map((item) => {
            const itemId = item._id.toString()
            const ratingAverage = itemsRatingAverage.find((itemRatingAverage) => {
                return itemRatingAverage.id === itemId
            })
            const convertedItem = this._convertItem(item, ratingAverage)
            return convertedItem
        })
        console.log('items', convertedItems)
        return convertedItems
    }

    _convertItem(item, average) {
        const convertedItem = {
            imagename: item.image,
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