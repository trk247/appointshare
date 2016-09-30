## React Native Checkbox Field

React Native Checkbox Field is a configurable, stateless React Native component which works on both iOS and Android with minimal dependencies.

- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)
- [Props](#props)
- [Credits](#credits)

### Installation
`npm install --save react-native-checkbox-field`

### Usage
```javascript
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CheckboxField, Checkbox } from 'react-native-checkbox-field';

class CheckboxForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: false,
            fieldLabel: 'Field A'
        };

        this.selectCheckbox = this.selectCheckbox.bind(this);
    }

    selectCheckbox() {
        this.setState({
            selected: !this.state.selected
        });
    }

    render() {
        const defaultColor = '#fff';

        // Only onSelect prop is required
        return (
            <CheckboxField
                label={this.state.fieldLabel}
                onSelect={this.selectCheckbox}
                selected={this.state.selected}
                defaultColor={defaultColor}
                selectedColor="#247fd2"
                containerStyle={styles.containerStyle}
                labelStyle={styles.labelStyle}
                checkboxStyle={styles.checkboxStyle}
                labelSide="left">
                <Text style={{ color: defaultColor }}>Y</Text>
            </CheckboxField>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center'
    },
    labelStyle: {
        flex: 1
    },
    checkboxStyle: {
        width: 26,
        height: 26,
        borderWidth: 2,
        borderColor: '#ddd',
        borderRadius: 5
    }
});
```

### Example
Example project can be found for both Android and iOS in /examples

![React Native Checkbox Field](example.png?raw=true)

### Props
#### CheckboxField
- `label` (String) `null` - The label positioned next to the checkbox
- `labelStyle` (Object) - The style of the text label
```
{
    flex: 1
}
```
- `containerStyle` (Object) - The style of the container surrounding the label and checkbox
```
{
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center'
}
```
- `labelSide` (enum('left', 'right')) `left` - The side the label will be positioned with the checkbox.

#### Checkbox
- `onSelect` (Function) `null` - The function that is run when the checkbox is selected
- `selected` (Boolean) `false` - The value representing the selected state
- `children` (React.Component) `null` - The component within the checkbox
- `defaultColor` (String) `#fff` - The default color of the checkbox background
- `selectedColor` (String) `#247fd2` - The selected color of the checkbox background
- `checkboxStyle` (Object)
```
{
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 5
}
```

### Credits
- [Vincent Lo](http://www.vincentsylo.com/)
- [Tquila ANZ](http://www.tquilaanz.com/)
