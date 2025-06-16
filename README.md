import java.util.Scanner;
import java.util.Random;

public class GtaTextGame {
    static String[] missions = {
        "Steal a car.",
        "Deliver a package.",
        "Escape the police.",
        "Win a street race."
    };

    static int money = 100;
    static int wantedLevel = 0

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random rand = new Random();

        System.out.println("Welcome to GTA Java Edition!");
        System.out.println("You have $" + money + " and a wanted level of " + wantedLevel);

        while (true) {
            System.out.println("\nChoose an action:");
            System.out.println("1. Do a mission");
            System.out.println("2. Hide from police");
            System.out.println("3. Show stats");
            System.out.println("4. Quit");

            String choice = scanner.nextLine();

            switch (choice) {
                case "1":
                    int missionIndex = rand.nextInt(missions.length);
                    System.out.println("Mission: " + missions[missionIndex]);
                    boolean success = rand.nextBoolean();

                    if (success) {
                        int reward = 50 + rand.nextInt(100);
                        money += reward;
                        System.out.println("Mission success! You earned $" + reward);
                        // Sometimes increase wanted level
                        if (rand.nextInt(3) == 0) {
                            wantedLevel++;
                            System.out.println("Police noticed your activity! Wanted level increased to " + wantedLevel);
                        }
                    } else {
                        System.out.println("Mission failed! Police are after you.");
                        wantedLevel++;
                    }
                    break;
                case "2":
                    if (wantedLevel > 0) {
                        if (rand.nextBoolean()) {
                            wantedLevel--;
                            System.out.println("You successfully hid from the police! Wanted level is now " + wantedLevel);
                        } else {
                            System.out.println("Police are still searching for you.");
                        }
                    } else {
                        System.out.println("You are not wanted by the police.");
                    }
                    break;
                case "3":
                    System.out.println("Money: $" + money);
                    System.out.println("Wanted level: " + wantedLevel);
                    break;
                case "4":
                    System.out.println("Thanks for playing!");
                    scanner.close();
                    return;
                default:
                    System.out.println("Invalid choice.");
            }

            if (wantedLevel >= 5) {
                System.out.println("You have been caught by the police! Game Over.");
                break;
            }
        }
    }
}
