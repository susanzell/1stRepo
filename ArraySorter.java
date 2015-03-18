public class ArraySorter
{
	public static void main (int[] args)
	{	
		private int size = args[0];
		private int min = args[1];
		private int max = args[2];
		
		System.out.println("Behold, " + size + "integers between " + min + "and " max + ":");
		int[] numbers = new int[size];
		for (int i = 0; i < size; i++)
		{	
			numbers[i] = min + (int)(Math.random() * ((max - min)+1));
			System.out.print(numbers[i] + " ");
		}
		
		System.out.println("And the sorted array:");
		
		SortingAlgorithms.insertion (numbers);
		for (int i = 0; i < numbers.length; i++)
		{
			System.out.print(numbers[i] + " ");
		}
	}
}