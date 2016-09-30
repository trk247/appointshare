/* @flow */
'use strict';

import React, { PropTypes } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Styles from './Styles';
import Checkbox from './Checkbox';

const CheckboxField = (props) => {
    return (
        <TouchableOpacity onPress={props.onSelect}>
            <View style={props.containerStyle}>
                {
                    props.labelSide === 'left' ?
                        <Text style={props.labelStyle}>{ props.label }</Text>
                        : null
                }
                <Checkbox
                    selected={props.selected}
                    onSelect={props.onSelect}
                    defaultColor={props.defaultColor}
                    selectedColor={props.selectedColor}
                    checkboxStyle={props.checkboxStyle}>
                    { props.children }
                </Checkbox>
                {
                    props.labelSide === 'right' ?
                        <Text style={[props.labelStyle, { textAlign: 'right' }]}>{ props.label }</Text>
                        : null
                }
            </View>
        </TouchableOpacity>
    );
};

CheckboxField.propTypes = {
    // CheckboxField
    label: PropTypes.string,
    containerStyle: PropTypes.oneOfType([ PropTypes.number, PropTypes.object ]),
    labelStyle: PropTypes.oneOfType([ PropTypes.number, PropTypes.object ]),
    labelSide: PropTypes.oneOf([
        'left',
        'right'
    ]),
    
    // Checkbox
    defaultColor: PropTypes.string,
    selectedColor: PropTypes.string,
    selected: PropTypes.bool,
    onSelect: PropTypes.func.isRequired,
    checkboxStyle: PropTypes.oneOfType([ PropTypes.number, PropTypes.object ]),
    children: PropTypes.element
};

CheckboxField.defaultProps = {
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center'
    },
    labelStyle: {
        flex: 1
    },
    checkboxStyle: Styles.checkboxStyle,
    defaultColor: Styles.defaultColor,
    selectedColor: Styles.selectedColor,
    onSelect: () => {},
    labelSide: 'left'
};

export default CheckboxField;
