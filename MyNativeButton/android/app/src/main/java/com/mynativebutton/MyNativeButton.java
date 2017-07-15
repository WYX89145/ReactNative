package com.mynativebutton;

import android.support.annotation.Nullable;
import android.support.v7.widget.AppCompatButton;
import android.util.Log;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

import com.facebook.react.uimanager.annotations.ReactProp;

/**
 * Created by Ape on 2017/7/8.
 */

public class MyNativeButton extends SimpleViewManager<MyButton> {

    public static  final String REACT_CLASS = "MyNativeButton";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected MyButton createViewInstance(ThemedReactContext reactContext) {
        MyButton btn = new MyButton(reactContext);
        return  btn;
    }

    @ReactProp(name="contentText")
    public void setContent(MyButton btn, @Nullable String contentText){
        Log.i("AAAA",contentText);
        btn.setText(contentText);
    }
}
