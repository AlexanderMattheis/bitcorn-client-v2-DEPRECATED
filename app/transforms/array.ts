import DS from 'ember-data';
import Strings from '../system/strings';

const Array = DS.Transform.extend({
  deserialize(serialized: []): string {
      return serialized.join(Strings.COMMA_SEPARATOR);
  },

  serialize(deserialized: string): string[] {
      return deserialized.split(Strings.COMMA_SEPARATOR);
  }
});

declare module 'ember-data/types/registries/transform' {
  export default interface TransformRegistry {
    'array': Array<string>;
  }
}

export default Array;
