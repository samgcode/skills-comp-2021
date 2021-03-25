import db from './setupStitchDB'
import ItemService from './itemService'
import ReviewService from './reviewService'

const serviceLocator = {
    collections: {},
    services: {},
}

serviceLocator.collections['reviewCollection'] = db.collection('reviews')
serviceLocator.collections['itemsCollection'] = db.collection('items')

serviceLocator.services['reviewService'] = new ReviewService(serviceLocator)
serviceLocator.services['itemService'] = new ItemService(serviceLocator)

export default serviceLocator