package rashmi.umkc.edu.samplecalendarapp;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.CalendarView;
import android.widget.TextView;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

import com.example.displaycalendareventintent.R;

public class MainActivity extends AppCompatActivity {

    public TextView text;
    public SimpleDateFormat simpleDateFormat;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        CalendarView simpleCalendarView = (CalendarView) findViewById(R.id.calander);
        simpleCalendarView.setDate(Calendar.getInstance().getTimeInMillis(),false,true);
        text = (TextView)findViewById(R.id.date);
        simpleDateFormat = new SimpleDateFormat("MM/dd/yyyy");
        text.setText(simpleDateFormat.format(new Date()));
        simpleCalendarView.setOnDateChangeListener(new CalendarView.OnDateChangeListener() {
            @Override
            public void onSelectedDayChange(CalendarView view, int year, int month, int dayOfMonth) {
                Calendar c1 = GregorianCalendar.getInstance();
                c1.set(year, month, dayOfMonth);
                text.setText(simpleDateFormat.format(c1.getTime()));
            }
        });
    }
}