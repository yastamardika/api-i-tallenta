'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {
    customer (){
        return this.hasOne('App/Models/User','userId', 'id')
    }
    status (){
        return this.hasOne('App/Models/OrderStatus','order_statusId', 'id')
    }
    sanggar (){
        return this.hasOne('App/Models/Sanggar','sanggarId', 'id')
    }
    venue(){
        return this.hasOne('App/Models/DetailVenue','venueId', 'id')
    }
    detail (){
        return this.hasOne('App/Models/OrderDetail','order_detailId', 'id')
    }
    package(){
        return this.hasOne('App/Models/DancePackage','packageId', 'id')
    }
    feedback(){
        return this.belongsTo('App/Models/Feedback', 'id', 'orderId')
    }
}

module.exports = Order
