
# Custom Checkbox React Native

It's a React Native checkbox that can be customize. Works for both Android and iOS.

![demo](https://raw.githubusercontent.com/caroaguilar/images-gifs/master/react-native-custom-checkbox/demo.gif)

## Install

Install the package via npm:

```javascript
    npm i react-native-custom-checkbox --save
```

The [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
package is a dependency of this component and it's needed to link it, as you can
read in its installation instructions.

In order to link it to the project first install [rnpm](https://github.com/rnpm/rnpm)

```javascript
    npm install rnpm -g
```

Then run the following command to link the react-native-vector-icons package

```javascript
    rnpm link react-native-vector-icons
```

## Usage

Import the component:

```javascript
    import Checkbox from 'react-native-custom-checkbox';
```

```jsx
<Checkbox
    checked={true}
    style={{backgroundColor: '#f2f2f2', color:'#900', borderRadius: 5}}
    onChange={(name, checked) => _myFunction(name, checked)}/>
```

### Properties

#### checked

Boolean to indicate whether the checkbox start checked or not. Default is false.

```jsx
<Checkbox
    checked={true}/>
```

#### name

Optional string used to identify the checkbox when there are many of them in the
same component. Default is empty string.

```jsx
<Checkbox
    name='checkbox1'
    checked={true}
    size={30}/>
```

```jsx
<Checkbox
    name='checkbox2'
    checked={true}
    size={30}/>
```

#### size

The width and height of the checkbox. Default is 20.

```jsx
<Checkbox
    checked={true}
    size={30}/>
```

#### style

Optional object to customize the color, backgroundColor, borderRadius,
borderWidth and margin.

```jsx
<Checkbox
    checked={true}
    style={{backgroundColor: '#f2f2f2', color:'#900', borderRadius: 5,
            borderWidth: 2, margin: 10}}
    onChange={(name, checked) => _myFunction(name, checked)}/>
```

Defaults:
```javascript
    {
        backgroundColor: '#FFF',
        borderRadius: 0,
        borderWidth: 2,
        color: '#000',
        margin: 2,
    }
```

#### onChange
Function to be called when toggling the checkbox. Receives the checkbox name and
the checked state as parameters. Default is null.

```jsx
<Checkbox
    checked={true}
    onChange={(name, checked) => _myFunction(name, checked)}/>
```

## License

```
   Copyright (C) 2016 Carolina Aguilar

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing,
   software distributed under the License is distributed on an
   "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   KIND, either express or implied.  See the License for the
   specific language governing permissions and limitations
   under the License.
```
