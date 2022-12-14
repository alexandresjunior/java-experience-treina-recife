package com.treina.recife.helper;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Objects;

public class CommonHelper {

    public static Date convertStringToDate(String date) {
        SimpleDateFormat format = new SimpleDateFormat(DATE_FORMAT);

        try {
            if (Objects.isNull(date)) {
                return new Date();
            }

            return format.parse(date);
        } catch (ParseException | NumberFormatException e) {
            return new Date();
        }
    }

    private static final String DATE_FORMAT = "dd/MM/yyyy";

}
