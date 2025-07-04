package com.suhana;

import com.suhana.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        // Load Spring context
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Get BookService bean
        BookService bookService = context.getBean("bookService", BookService.class);

        // User input
        Scanner scanner = new Scanner(System.in);

        // Line space before
        System.out.println();
        System.out.println("--------------------------");

        System.out.print("Enter book name: ");
        String bookName = scanner.nextLine();

        // Call service method
        bookService.addBook(bookName);

        // Closing line and spacing
        System.out.println("--------------------------");
        System.out.println();
    }
}
