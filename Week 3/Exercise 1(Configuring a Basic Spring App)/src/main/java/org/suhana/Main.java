
package org.suhana;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.err.close(); 

        // Load Spring context
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Get BookService bean
        BookService bookService = (BookService) context.getBean("bookService");

        // Print top border
        System.out.println("\n----------------------------\n");

        // Take user input
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter book name to add:  \n> ");
        String bookName = scanner.nextLine();

        // Call the service to add the book
        bookService.addBook(bookName);

        // Print bottom border
        System.out.println("\n----------------------------\n");
    }
}
