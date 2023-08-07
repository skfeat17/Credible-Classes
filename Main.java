import java.util.*;

public class Main {

    public static int minimumDistances(List<Integer> a) {
        int minAbsDiff = Integer.MAX_VALUE;
        for (int i = 0; i < a.size() - 1; i++) {
            for (int j = 0; j < a.size(); j++) {
                if (a.get(i) == a.get(j) && i != j) {
                    minAbsDiff = Math.min(minAbsDiff, Math.abs(j-i));
                }
                
            }
        }
                return minAbsDiff==Integer.MAX_VALUE?-1:minAbsDiff;
    }

    public static void main(String[] args) {
        List<Integer> arr = new ArrayList<>(Arrays.asList(7 ,1 ,3 ,4 ,1 ,7));
        System.out.println(minimumDistances(arr));

    }
}
