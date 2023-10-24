import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Restaurant} from './restaurant.model';

@model()
export class Table extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  min: number;

  @property({
    type: 'number',
    required: true,
  })
  max: number;

  @property({
    type: 'string',
  })
  remark?: string;

  @belongsTo(() => Restaurant)
  restaurantId: string;

  constructor(data?: Partial<Table>) {
    super(data);
  }
}

export interface TableRelations {
  // describe navigational properties here
}

export type TableWithRelations = Table & TableRelations;
