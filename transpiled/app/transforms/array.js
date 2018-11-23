import DS from 'ember-data';
import Strings from '../system/strings';
const Array = DS.Transform.extend({
    deserialize(serialized) {
        return serialized.join(Strings.COMMA_SEPARATOR);
    },
    serialize(deserialized) {
        return deserialized.split(Strings.COMMA_SEPARATOR);
    }
});
export default Array;
//# sourceMappingURL=array.js.map