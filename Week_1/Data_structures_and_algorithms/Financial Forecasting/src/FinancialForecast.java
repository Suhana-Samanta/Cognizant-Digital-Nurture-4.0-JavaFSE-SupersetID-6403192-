import java.util.Scanner;

public class FinancialForecast {
    private Scanner scanner;

    public FinancialForecast() {
        this.scanner = new Scanner(System.in);
    }

   
    public double predictFutureValue(double currentValue, double rate, int years) {
        if (years == 0) {
            return currentValue;
        }
        return predictFutureValue(currentValue * (1 + rate), rate, years - 1);
    }

    public void getUserInput() {
        System.out.print("Enter current value of investment: ");
        double currentValue = scanner.nextDouble();

        System.out.print("Enter annual growth rate (in %): ");
        double rate = scanner.nextDouble() / 100;

        System.out.print("Enter number of years: ");
        int years = scanner.nextInt();

        double futureValue = predictFutureValue(currentValue, rate, years);
        System.out.printf("Predicted Value after %d years: %.2f\n", years, futureValue);

        System.out.print("\n");
    }

    public void run() {
        getUserInput();
        scanner.close();
    }
}