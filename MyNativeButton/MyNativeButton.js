/**
 * Created by Ape on 2017/7/8.
 */

import React,{PropTypes,Component} from 'react';
import {
    requireNativeComponent,
    View
} from 'react-native';


class MyButton extends Component {

    constructor() {
        super();
        this._onChange = this._onChange.bind(this);
    }

    _onChange(event: Event) {
        if (!this.props.onClick) {
            return;
        }
        this.props.onClick({one:event.nativeEvent.one,two:event.nativeEvent.two});
    }

    render() {
        return <MyNativeButton {...this.props} onChange={this._onChange} />;
    }

};

MyButton.propTypes = {
    contentText: PropTypes.string,
    onClick: PropTypes.func,
    ...View.propTypes
};

var MyNativeButton = requireNativeComponent('MyNativeButton', MyButton,{
    nativeOnly: {onChange: true}
});

module.exports = MyButton;