package com.example.tirup.myapplication;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class SignUpActivity extends AppCompatActivity {

    Button login_button;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sign_up);
        login_button = (Button)findViewById(R.id.create);
        login_button.setOnClickListener(new View.OnClickListener(){
            public void onClick(View view) {
                Intent redirect = new Intent(SignUpActivity.this, IndexActivity.class);
                startActivity(redirect);
            }
        });
    }
}