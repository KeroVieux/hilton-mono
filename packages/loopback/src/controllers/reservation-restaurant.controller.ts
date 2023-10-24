import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Reservation,
  Restaurant,
} from '../models';
import {ReservationRepository} from '../repositories';

export class ReservationRestaurantController {
  constructor(
    @repository(ReservationRepository)
    public reservationRepository: ReservationRepository,
  ) { }

  @get('/reservations/{id}/restaurant', {
    responses: {
      '200': {
        description: 'Restaurant belonging to Reservation',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Restaurant),
          },
        },
      },
    },
  })
  async getRestaurant(
    @param.path.string('id') id: typeof Reservation.prototype._id,
  ): Promise<Restaurant> {
    return this.reservationRepository.restaurant(id);
  }
}
