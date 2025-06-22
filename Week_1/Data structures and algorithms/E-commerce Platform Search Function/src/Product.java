public class Product {
    private int id;
    private String productName;
    private String category;

    public Product(int id, String productName, String category) {
        this.id = id;
        this.productName = productName;
        this.category = category;
    }

    public String getProductName() {
        return productName;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", productName='" + productName + '\'' +
                ", category='" + category + '\'' +
                '}';
    }
}