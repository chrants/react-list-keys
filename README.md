# react-list-keys

!["Build Status"](https://travis-ci.org/chrants/react-list-keys.svg?branch=master "Build status")

Predictable, Natural Solution for unique React list Keys

```bash
npm install react-list-keys
```

```node
import React from 'react';
import ReactKeyGen from 'react-list-keys';

class MyComponent extends React.Component {
  state = {
    items: [],
    keyGen: new ReactKeyGen(),
  }

  addItem = (item) => {
    this.setState({
      items: [
        ...this.state.items,
        this.state.keyGen.keyed(item),
      ]
    });
  }

  render() {
    this.addItem({ title: 'apple' });
    this.addItem({ title: 'banana' });

    return (
      <ul>
        {this.state.items.map(item => (
          <li key={item._key}>{item.title}</li>
        ))}
      </ul>
    );
  }
}
```

## How it works
`react-list-keys` adds an unenumerable prop `_key` to your objects.
This means that submitting this object via fetch, destructuring the object,
etc will not show the `_key` prop, yet it is there.

*Example:*

```node
const keyGen = new ReactKeyGen();
const a = keyGen.keyed({ apples: 1, oranges: 'are great', bananas: null });
a._key // 1

const b = { ...a }; // or Object.assign({}, a);
b._key // undefined
```

While this might seem like a weakness, it's actually very important so that it does not change the structure of your data upon submission or other things.

If you would like to do this object shallow copying, you can do it simply with the provided utility function. In the example above, this would be:

```node
const c = keyGen.copy(a);
c._key // 1
c === a // false
```

If your object already has some sort of unique value that could be used as a key for react, it is prefered to use that one. This library's intention is to supplement items without natural keys.
