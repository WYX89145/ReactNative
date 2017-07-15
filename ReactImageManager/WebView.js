/**
 * Created by Ape on 2017/7/7.
 */

'use strict';

import { PropTypes } from 'react';
import React from 'react';
import {
    View,
    requireNativeComponent,
} from 'react-native';

var iface = {

    name: 'WebView',
    propTypes: {
        url: PropTypes.string,
        html: PropTypes.string,
        ...View.propTypes
    },
};

module.exports = requireNativeComponent('RCTWebView', iface);

