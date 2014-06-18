/*
 * Copyright 2013 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.mikegs.android.gcm;

import android.app.Activity;
import android.content.Context;
import android.os.Bundle;
import android.util.Log;
import android.widget.TextView;

/**
 * Main UI for the demo app.
 */
public class DisplayActivity extends Activity 
{
    static final String TAG = "GCM Demo";

    TextView mDisplay;
    Context context;


    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.display);
        mDisplay = (TextView) findViewById(R.id.textView1);

        context = getApplicationContext();

        String data = getIntent().getExtras().getString("message");
        Log.i(TAG, data);
		mDisplay.setText(data);
    }
}
