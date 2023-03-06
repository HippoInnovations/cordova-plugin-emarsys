package com.emarsys.cordova;
import com.emarsys.config.EmarsysConfig;
import com.emarsys.Emarsys;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.Application;
import org.json.JSONObject;
import org.json.JSONArray;
import org.json.JSONException;

public class EmarsysApplication extends Application {
    @Override
    public void onCreate() {
		EmarsysConfig config = new EmarsysConfig.Builder()
		.application(this)
		.applicationCode(<applicationCode:String?>)
		.merchantId(<merchantId:String?>)
		.build();
		Emarsys.setup(config);
	}
}
