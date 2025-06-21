import java.util.Arrays;

public class SearchAlgorithm {
    // Linear Search
    public static Product linearSearch(Product[] products, String name) {
        for (Product product : products) {
            if (product.productName.equalsIgnoreCase(name)) {
                return product;
            }
        }
        return null;
    }

    // Binary Search
    public static Product binarySearch(Product[] products, String name) {
        Product[] sortedProducts = Arrays.copyOf(products, products.length);
        Arrays.sort(sortedProducts, (a, b) -> a.productName.compareTo(b.productName));
        int left = 0;
        int right = sortedProducts.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            int compare = sortedProducts[mid].productName.compareToIgnoreCase(name);
            if (compare == 0) {
                return sortedProducts[mid];
            } else if (compare < 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }
}