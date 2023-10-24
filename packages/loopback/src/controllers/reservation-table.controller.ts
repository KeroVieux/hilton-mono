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
  Table,
} from '../models';
import {ReservationRepository} from '../repositories';

export class ReservationTableController {
  constructor(
    @repository(ReservationRepository)
    public reservationRepository: ReservationRepository,
  ) { }

  @get('/reservations/{id}/table', {
    responses: {
      '200': {
        description: 'Table belonging to Reservation',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Table),
          },
        },
      },
    },
  })
  async getTable(
    @param.path.string('id') id: typeof Reservation.prototype._id,
  ): Promise<Table> {
    return this.reservationRepository.table(id);
  }
}
