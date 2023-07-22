import Realm from 'realm';
import {createRealmContext} from '@realm/react';

export class Todo extends Realm.Object<Todo> {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  title!: string;
  description?: string;
  completed!: boolean;
  createdAt!: Date;

  static schema = {
    name: 'Todo',
    properties: {
      _id: 'objectId',
      title: 'string',
      description: 'string',
      completed: {type: 'bool', default: false},
      createdAt: 'date',
    },
  };
}

export const todoContext = createRealmContext({
  schema: [Todo],
});
