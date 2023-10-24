import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Table,
  Restaurant,
} from '../models';
import {TableRepository} from '../repositories';

export class TableRestaurantController {
  constructor(
    @repository(TableRepository)
    public tableRepository: TableRepository,
  ) { }

  @get('/tables/{id}/restaurant', {
    responses: {
      '200': {
        description: 'Restaurant belonging to Table',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Restaurant),
          },
        },
      },
    },
  })
  async getRestaurant(
    @param.path.string('id') id: typeof Table.prototype._id,
  ): Promise<Restaurant> {
    return this.tableRepository.restaurant(id);
  }
}
