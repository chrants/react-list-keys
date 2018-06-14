# react-key-gen
A Natural Solution for React list Keys

```bash
npm install react-key-gen
```

```node
import ReactKeyGen from 'react-key-gen';

class MyComponent extends React.Component {
    state = {
        items: [],
        keyGen: new ReactKeyGen(),
    }

    addItemToList = (item) => {
        this.setState({
            items: [
                ...this.state.items,
                this.state.keyGen.keyedItem(item),
            ]
        });
    }

    render() {
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