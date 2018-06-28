package com.rashmi.android.umkc.edu.helloworldapp;

import android.annotation.TargetApi;
import android.os.Build;
import android.support.annotation.RequiresApi;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Menu;
import android.widget.TextView;
import android.widget.Toolbar;

import java.util.Arrays;


public class MainActivity extends AppCompatActivity {
    TextView email;

    @TargetApi(Build.VERSION_CODES.LOLLIPOP)
    @RequiresApi(api = Build.VERSION_CODES.LOLLIPOP)
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = (Toolbar) findViewById(R.id.Toolbar);
        email = (TextView) findViewById(R.id.txt_uname);
        setSupportActionBar(Toolbar);
    }




    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        callbackManager.onActivityResult(requestCode, resultCode, data);
        super.onActivityResult(requestCode, resultCode, data);
    }
    private static final String EMAIL = "email";
    callbackManager = CallbackManager.Factory.create();
    loginButton = (LoginButton) findViewById(R.id.login_button);
    loginButton.setReadPermissions(Arrays.asList(EMAIL));
    // If you are using in a fragment, call loginButton.setFragment(this);

    // Callback registration
    loginButton.registerCallback(callbackManager, new FacebookCallback<LoginResult>() {
        @Override
        public void onSuccess(LoginResult loginResult) {
            // App code
        }

        @Override
        public void onCancel() {
            // App code
        }

        @Override
        public void onError(FacebookException exception) {
            // App code
        }
    });

}
