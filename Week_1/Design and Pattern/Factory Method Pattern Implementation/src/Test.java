import java.util.Scanner;

public class Test {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println();

        System.out.println("Enter the type of document to create (word/pdf/excel/all):");
        String input = scanner.nextLine().trim().toLowerCase();

        DocumentFactory[] factories = getFactories(input);
        if (factories == null) {
            System.out.println("Invalid document type entered. Please enter: word, pdf, excel, or all.");
            scanner.close();
            return;
        }

        for (DocumentFactory factory : factories) {
            createAndOpen(factory);
        }

        System.out.println();
        scanner.close();
    }

    private static DocumentFactory[] getFactories(String input) {
        switch (input) {
            case "word":
                return new DocumentFactory[]{new WordDocumentFactory()};
            case "pdf":
                return new DocumentFactory[]{new PdfDocumentFactory()};
            case "excel":
                return new DocumentFactory[]{new ExcelDocumentFactory()};
            case "all":
                return new DocumentFactory[]{new WordDocumentFactory(), new PdfDocumentFactory(), new ExcelDocumentFactory()};
            default:
                return null;
        }
    }

    private static void createAndOpen(DocumentFactory factory) {
        Document doc = factory.createDocument();
        doc.open();
    }
}