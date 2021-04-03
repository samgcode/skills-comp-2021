import db from './setupStitchDB'
import ItemService from './ItemService'
import ReviewService from './ReviewService'
import ImageService from './ImageService'

const serviceLocator = {
    collections: {},
    services: {},
}

serviceLocator.collections['reviewCollection'] = db.collection('reviews')
serviceLocator.collections['imageCollection'] = db.collection('images')
serviceLocator.collections['itemsCollection'] = db.collection('items')

serviceLocator.services['reviewService'] = new ReviewService(serviceLocator)
serviceLocator.services['imageService'] = new ImageService(serviceLocator)
serviceLocator.services['itemService'] = new ItemService(serviceLocator)

export default serviceLocator