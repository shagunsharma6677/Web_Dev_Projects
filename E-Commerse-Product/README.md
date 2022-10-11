# JS-Inventory-Management

## 

## Maximum Marks - 10

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ HTML elements and styles are present in index file and inventory file 1 mark
 ✅ Add products is working properly in local storage - 2 marks
 ✅ Add products is working properly in local storage-2 - 1 mark
 ✅ Show products is working properly on DOM - 2 marks
 ✅ remove products is working properly on local storage -2 marks
 ✅ remove products is working properly on DOM - 1 mark
```

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path
- Run **npm install** to install the node modules
- Run **npm test** for the test cases.

## Folder structure

- index.html
- inventory.html
- src
  - `__tests__`
    - inventoryMgmt.spec.js
  - `scripts`
    - inventory.js
    - index.js
- README.md
- package.json

## Description

 Create an inventory managemnet system where a user can add products on one page, maintain the data in local storage and and see list of products on a different page. The user should also be able to delete any product from the list

  - Index.html
    - Create a form which will accept name, brand, price, and image link from the user with ids for input tags being- ```product_name``` , ```product_brand``` , ```product_price``` and ```product_image``` respectively. Also, the input tags values should become null as soon as form is submitted.
    
    - Complete the ```getFormData``` function to get the data and then invoke ```addData``` function with name, brand, price, and imgLink as arguments. (Note: make sure you are preventing the default behaviour of the form to refresh the page- you can refer to[MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event))
    
    - ```addData``` function should take the form data and store the data (you should retrieve the older data, (if any) and add new products to the array) in local storage as array of items with key ```data```
    
    - follow the below schema to store the data in local storage
       ```
       {
        name
        brand
        price
        image
       }
       ```
    
    - Complete the ```redirect``` function to redirect the user to inventory.html page, (this function should be invoked when show all products button is clicked)
    
    <img width="722" alt="Screenshot 2022-10-07 at 7 49 23 PM" src="https://user-images.githubusercontent.com/39851506/194578310-2d28a640-42ec-48ca-84b5-4bd50b07a1d1.png">

 

 - Inventory.html
   - This page should show all the products present in grid format using grid templates  (3 columns) from the local storage. (complete the ```append``` function to achieve this)
   
   - The products need to be appended to div with id = #products_data (retrieve information from localStorage and then append the data)
   
   - The user should be able to remove products. The DOM and localstorage should be updated in real-time after deleting. (send index of the product added to identify which product needs to be deleted)
   
   - Complete the ```redirect``` function to redirect the user to inventory.html page, (this function should be invoked when Add more product button is clicked)

   

![](https://i.imgur.com/Wjsgchi.png)


  **Note:- Do not use any other names for the methods other than mentioned.**

  ####

## Boilerplate

- Do not change the given folder structure
- index.html
- inventory.html
- You can find JS code under src/scripts folder in a filename inventory.js & index.js
- you can find the testcase under `__tests__ ` folder
