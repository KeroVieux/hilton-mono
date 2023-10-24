import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Reservation, ReservationRelations, Table, Restaurant} from '../models';
import {TableRepository} from './table.repository';
import {RestaurantRepository} from './restaurant.repository';

export class ReservationRepository extends DefaultCrudRepository<
  Reservation,
  typeof Reservation.prototype._id,
  ReservationRelations
> {

  public readonly table: BelongsToAccessor<Table, typeof Reservation.prototype._id>;

  public readonly restaurant: BelongsToAccessor<Restaurant, typeof Reservation.prototype._id>;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource, @repository.getter('TableRepository') protected tableRepositoryGetter: Getter<TableRepository>, @repository.getter('RestaurantRepository') protected restaurantRepositoryGetter: Getter<RestaurantRepository>,
  ) {
    super(Reservation, dataSource);
    this.restaurant = this.createBelongsToAccessorFor('restaurant', restaurantRepositoryGetter,);
    this.registerInclusionResolver('restaurant', this.restaurant.inclusionResolver);
    this.table = this.createBelongsToAccessorFor('table', tableRepositoryGetter,);
    this.registerInclusionResolver('table', this.table.inclusionResolver);
  }
}
