import DS from 'ember-data';
export default class CreationsGraphicsTexture extends DS.Model.extend({
    author: DS.attr('string'),
    date: DS.attr('string'),
    description: DS.attr('string'),
    image: DS.attr('string'),
    licence: DS.attr('string'),
    path: DS.attr('string'),
    tags: DS.attr('array'),
    title: DS.attr('string'),
    writing: DS.attr('string')
}) {
}
//# sourceMappingURL=texture.js.map