package com.example.tirup.myapplication;


import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;

import com.twitter.sdk.android.core.Callback;
import com.twitter.sdk.android.core.Result;
import com.twitter.sdk.android.core.Twitter;
import com.twitter.sdk.android.core.TwitterException;
import com.twitter.sdk.android.core.TwitterSession;
import com.twitter.sdk.android.core.identity.TwitterLoginButton;


public class SignInActivity extends AppCompatActivity {

    TwitterLoginButton loginButton;
    Button login_button;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Twitter.initialize(this);
        setContentView(R.layout.activity_sign_in);

        loginButton = (TwitterLoginButton) findViewById(R.id.login_button);
        loginButton.setCallback(new Callback<TwitterSession>() {
            @Override
            public void success(Result<TwitterSession> result) {
                login();
            }
            @Override
            public void failure(TwitterException exception) {
                System.out.println("Login failed.");
            }
        });

        login_button = (Button)findViewById(R.id.create);
        login_button.setOnClickListener(new View.OnClickListener(){
            public void onClick(View view) {
                login();
            }
        });
    }

    public void login(){
        Intent redirect = new Intent(SignInActivity.this, IndexActivity.class);
        startActivity(redirect);
    }
}