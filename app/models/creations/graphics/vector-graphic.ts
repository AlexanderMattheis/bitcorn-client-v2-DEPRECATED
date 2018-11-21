import DS from 'ember-data';

export default class CreationsGraphicsVectorGraphic extends DS.Model.extend({
    author: DS.attr('string'),
    date: DS.attr('string'),
    description: DS.attr('string'),
    image: DS.attr('string'),
    licence: DS.attr('string'),
    path: DS.attr('string'),
    tags: DS.attr('array'),
    title: DS.attr('string')
}) {
  // normal class body definition here
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'creations/graphics/vector-graphic': CreationsGraphicsVectorGraphic;
  }
}
