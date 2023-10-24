import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Restaurant} from './restaurant.model';
import {Table} from './table.model';

@model()
export class Reservation extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'date',
    required: true,
  })
  expectedAt: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  phone: string;

  @property({
    type: 'number',
    default: 1,
  })
  status?: number;

  @property({
    type: 'string',
  })
  remark?: string;

  @property({
    type: 'date',
    required: true,
  })
  updatedAt: string;

  @property({
    type: 'date',
    required: true,
  })
  createdAt: string;

  @belongsTo(() => Table)
  tableId: string;

  @belongsTo(() => Restaurant)
  restaurantId: string;

  constructor(data?: Partial<Reservation>) {
    super(data);
  }
}

export interface ReservationRelations {
  // describe navigational properties here
}

export type ReservationWithRelations = Reservation & ReservationRelations;
