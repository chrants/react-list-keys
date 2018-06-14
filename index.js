/**
 * Instances of ReactKeyGen will generate keys for each item that
 * does not naturally have unique keys. This can be useful to
 * naturally solve React Key errors as well as for identity
 * of objects over time and over property changes.
 */
export default class ReactKeyGen {
    keyNo = 1;
  
    /**
     * Generate a `_key` property on `item`
     * that can be used for React element list keys.
     *
     * Note that `{ ...item }._key` is `undefined`.
     * For copying items with keys, use `@copyItem`.
     */
    keyed = (item) => {
      // If item has a `_key`, it's good to go
      if (item._key) {
        return item;
      }
  
      // Generate a unique `_key` prop that cannot be enumerated.
      Object.defineProperty(item, '_key', {
        value: this.keyNo,
        enumerable: false,
      });
      this.keyNo += 1;
      return item;
    };
  
    /**
     * Shallow copy an item with its unenumerable key.
     */
    copy = (item) => {
      const newItem = { ...item };
      Object.defineProperty(item, '_key', {
        value: item._key,
        enumerable: false,
      });
      return newItem;
    };
  }
  