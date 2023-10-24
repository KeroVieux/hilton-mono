import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Restaurant} from './restaurant.model';

@model()
export class User extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

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
  password: string;

  @property({
    type: 'string',
    default: 'staff',
  })
  role?: string;

  @property({
    type: 'string',
  })
  remark?: string;

  @property({
    type: 'number',
    default: 1,
  })
  status?: number;

  @property({
    type: 'string',
  })
  managerId?: string;

  @belongsTo(() => Restaurant)
  restaurantId: string;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
