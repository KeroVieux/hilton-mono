import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  User,
  Restaurant,
} from '../models';
import {UserRepository} from '../repositories';

export class UserRestaurantController {
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
  ) { }

  @get('/users/{id}/restaurant', {
    responses: {
      '200': {
        description: 'Restaurant belonging to User',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Restaurant),
          },
        },
      },
    },
  })
  async getRestaurant(
    @param.path.string('id') id: typeof User.prototype._id,
  ): Promise<Restaurant> {
    return this.userRepository.restaurant(id);
  }
}
