package com.mynativewebview;

import android.support.annotation.Nullable;
import android.util.Log;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

/**
 * Created by Ape on 2017/7/8.
 */

public class MyWebView extends SimpleViewManager<WebView> {

    private static final String REACT_CLASS = "MyWebView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected WebView createViewInstance(ThemedReactContext reactContext) {
        WebView view = new WebView(reactContext);
        view.setWebViewClient(new WebViewClient(){
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                view.loadUrl(url);
                return true;
            }
        });
        return view;
    }

    @ReactProp(name="url")
    public void setUrl(WebView view,@Nullable String url){

        Log.i("AAAA",url);
        view.loadUrl(url);
    }
}
