package com.example.tirup.myapplication;

import android.content.Intent;
import android.net.Uri;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class IndexActivity extends AppCompatActivity {

    Button setting_button;
    Button help_button;
    Button sign_out_button;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_index);

        setting_button = (Button)findViewById(R.id.setting);
        setting_button.setOnClickListener(new View.OnClickListener(){
            public void onClick(View view) {
                Intent redirect = new Intent(IndexActivity.this, SettingActivity.class);
                startActivity(redirect);
            }
        });

        help_button = (Button)findViewById(R.id.help);
        help_button.setOnClickListener(new View.OnClickListener(){
            public void onClick(View view) {
                Uri uri = Uri.parse("https://developer.android.com/index.html");
                Intent intent = new Intent(Intent.ACTION_VIEW, uri);
                startActivity(intent);
            }
        });

        sign_out_button = (Button)findViewById(R.id.sign_out);
        sign_out_button.setOnClickListener(new View.OnClickListener(){
            public void onClick(View view) {
                Intent redirect = new Intent(IndexActivity.this, MainActivity.class);
                startActivity(redirect);
            }
        });
    }
}