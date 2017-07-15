/**
 * Created by Ape on 2017/7/8.
 */


import React, { PropTypes,Component } from 'react';
import { requireNativeComponent, View } from 'react-native';

/*var iface = {
    name: 'WebView',
    propTypes: {
        url: PropTypes.string,
        html: PropTypes.string,
        ...View.propTypes // 包含默认的View的属性
    },
};

module.exports = requireNativeComponent('MyWebView', iface);*/

class WebView extends Component {

    constructor(){
        super();
        this._onChange = this._onChange.bind(this);
    }

    _onChange(event: Event) {
        if (!this.props.onScrollChange) {
            return;
        }
        this.props.onScrollChange({ScrollX:event.nativeEvent.ScrollX,ScrollY:event.nativeEvent.ScrollY});
    }

    render() {
        return <MyWebView {...this.props} onChange={this._onChange} />;
    };

};

WebView.propTypes = {
    url: PropTypes.string,
    html: PropTypes.string,
    onScrollChange: PropTypes.func,
    ...View.propTypes
};

var MyWebView = requireNativeComponent(`MyWebView`, WebView,{
    nativeOnly: {onChange: true}
});

module.exports = WebView;