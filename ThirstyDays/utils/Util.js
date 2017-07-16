/**
 * Created by Ape on 2017/7/15.
 */

import React from 'react';
import {
    PixelRatio
} from 'react-native';
import Dimensions from 'Dimensions';

const Util = {
    ratio : PixelRatio.get(),
    pixe : 1/PixelRatio.get(),
    size : {
        width : Dimensions.get('window').width,
        height : Dimensions.get('window').height
    },
};

export default Util;
