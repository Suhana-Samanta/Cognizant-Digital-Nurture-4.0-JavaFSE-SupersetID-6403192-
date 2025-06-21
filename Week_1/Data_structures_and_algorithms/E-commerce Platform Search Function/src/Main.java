import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Product[] products = {
            new Product(102, "Shoes", "Footwear"),
            new Product(104, "Phone", "Electronics"),
            new Product(101, "T-shirt", "Clothing"),
            new Product(105, "Phone Case", "Electronics"),
            new Product(103, "Laptop", "Electronics")
        };

        // Display available products
        System.out.println("Available products:");
        for (Product product : products) {
            System.out.println("- " + product.getProductName());
        }

        // Get product name input
        System.out.print("\nEnter Product Name to search: ");
        String searchName = scanner.nextLine().trim();

        // Linear Search
        long linearStartTime = System.nanoTime();
        Product linearResult = SearchAlgorithm.linearSearch(products, searchName);
        long linearEndTime = System.nanoTime();
        long linearTime = linearEndTime - linearStartTime;

        // Binary Search
        Product[] sortedProducts = Arrays.copyOf(products, products.length);
        Arrays.sort(sortedProducts, (a, b) -> a.getProductName().compareTo(b.getProductName()));
        long binaryStartTime = System.nanoTime();
        Product binaryResult = SearchAlgorithm.binarySearch(sortedProducts, searchName);
        long binaryEndTime = System.nanoTime();
        long binaryTime = binaryEndTime - binaryStartTime;

        System.out.println("\nSearch Results:");
        System.out.println("Linear Search:");
        System.out.println(linearResult != null ? linearResult : "Not Found");
        System.out.println("Time taken: " + linearTime + " nanoseconds");

        System.out.println("\nBinary Search:");
        System.out.println(binaryResult != null ? binaryResult : "Not Found");
        System.out.println("Time taken: " + binaryTime + " nanoseconds");

        if (linearTime < binaryTime) {
            System.out.println("\nLinear Search is faster.");
        } else if (linearTime > binaryTime) {
            System.out.println("\nBinary Search is faster.");
        } else {
            System.out.println("\nBoth searches took the same time.");
        }
        System.out.println("\n");

        scanner.close();
    }
}
