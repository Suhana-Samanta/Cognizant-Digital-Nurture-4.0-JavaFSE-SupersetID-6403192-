# E-commerce Platform Search Function

## Understanding Asymptotic Notation

### Big O Notation
Big O notation is a measure of the time or space complexity of an algorithm.  
It describes the upper bound of the number of steps an algorithm takes to complete, relative to the size of the input.  
Big O helps analyze algorithms by providing a way to compare their performance and scalability.

### Best, Average, and Worst-Case Scenarios
- **Best-case scenario**: The minimum time an algorithm takes to complete. For search operations, this is usually when the target element is found at the beginning.
- **Average-case scenario**: The average time complexity across typical inputs. For search, this is when the target is somewhere in the middle.
- **Worst-case scenario**: The maximum time an algorithm takes. For search, this is when the target is not found or is at the end.

---

## Implementation

### Product Class
A class `Product` is created with attributes:
- `productId`
- `productName`
- `category`

### Linear Search
Linear search iterates through each element in the array until it finds the target element.  
**Time complexity:** `O(n)` where `n` is the number of elements.

### Binary Search
Binary search works on sorted arrays. It finds the middle element and compares it to the target element, reducing the search space by half each time.  
**Time complexity:** `O(log n)` where `n` is the number of elements.

---

## Comparison of Linear and Binary Search

| Algorithm       | Time Complexity |
|-----------------|----------------|
| Linear Search    | O(n)            |
| Binary Search    | O(log n)        |

Binary search is more suitable for this platform because it is faster for large datasets.  
However, binary search requires the array to be sorted, which can be a disadvantage if the array is frequently updated.

---

3. **Follow the prompt to run the code**  
   Enter the product name when asked.  
   The program will display:
   - The search result (product details if found)
   - Which search method found the product
     
---

4. **Output-**

   ![image alt text](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/blob/b43c1c2623c42027d45c29a86d3844585ca77371/Week_1/Data_structures_and_algorithms/E-commerce%20Platform%20Search%20Function/Output/Output1.png)
   
 ![image alt text](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/blob/2910efef72e099082c8b16e6aad9bc71d03758e0/Week_1/Data_structures_and_algorithms/E-commerce%20Platform%20Search%20Function/Output/Output2.png)
 
![image alt text](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/blob/b43c1c2623c42027d45c29a86d3844585ca77371/Week_1/Data_structures_and_algorithms/E-commerce%20Platform%20Search%20Function/Output/Output3.png
)

