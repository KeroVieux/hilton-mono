import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Table, TableRelations, Restaurant} from '../models';
import {RestaurantRepository} from './restaurant.repository';

export class TableRepository extends DefaultCrudRepository<
  Table,
  typeof Table.prototype._id,
  TableRelations
> {

  public readonly restaurant: BelongsToAccessor<Restaurant, typeof Table.prototype._id>;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource, @repository.getter('RestaurantRepository') protected restaurantRepositoryGetter: Getter<RestaurantRepository>,
  ) {
    super(Table, dataSource);
    this.restaurant = this.createBelongsToAccessorFor('restaurant', restaurantRepositoryGetter,);
    this.registerInclusionResolver('restaurant', this.restaurant.inclusionResolver);
  }
}
