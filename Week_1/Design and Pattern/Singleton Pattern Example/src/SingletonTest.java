public class SingletonTest{
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        System.out.println("\n");
        logger1.log("Logger initialized");

        logger1.log("This is the first log message");
        logger1.log("This is the second log message");

        Logger logger2 = Logger.getInstance();
        
        if (logger1 == logger2) {
            System.out.println("Both logger instances are the same.");
        } else {
            System.out.println("Different instances (Something is wrong!).");
        }

        logger2.log("This is another log message");
        System.out.println("\n");
    }
}