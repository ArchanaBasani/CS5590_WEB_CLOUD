package com.example.tirup.myapplication;


import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void SignInRedirect(View view) {
        Intent redirect = new Intent(MainActivity.this, SignInActivity.class);
        startActivity(redirect);
    }

    public void SignUpRedirect(View view) {
        Intent redirect = new Intent(MainActivity.this, SignUpActivity.class);
        startActivity(redirect);
    }
}
