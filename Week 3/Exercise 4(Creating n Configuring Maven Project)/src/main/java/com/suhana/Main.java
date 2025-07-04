package com.suhana;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Main {

    public static void main(String[] args) {
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext();
        System.out.println();
        System.out.println("Spring Context Initialized!");
        System.out.println();
        context.close();
    }

}
