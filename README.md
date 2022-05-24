NOTE TO REVIEWERS: The code works, for some reason I just cannot get this to work on repl.it. 
I am still trying til this moment and I apologize for the inconvenience. 

The main issue I am having is running the server with the database, then running the front end. Replit having only 1 cmd, is making this set up impossible. 

If you have the server running locally, then repl.it shows perfectly fine. Unfortunately I did not see this flaw until I was showcasing to my friends! I always had the server running due to testing so I have been ultimately fooled.

Hope you guys can look past this hiccup, and check the code out since it all works ~ I just don't understand how to implement it on repl.it without starting from scratch

![IDK](/Shopify-Fall-2022/idk.png)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This is my submission for the Shopify Intern Challenge for the Backend developer position.

How to use: (This was how it would go if I can figure it out.)

- Upon loading repl.it deployed code you will be given two options, warehouse or inventory.

- Choosing warehouses will display a list of all warehouses in the database.

    - You can edit each individual warehouse:
        Which allows you to change the location of this specific warehouse, which is linked to the Warehouse ID.

    - You can delete each individual warehouse
        Which drops it from the database, and the viewable list

    - You can add a warehouse
        Which allows you to type in a city you want this warehouse in.
            If it does not exist, it will be created with a new Warehouse ID.
            If it exists, an error will show asking to choose another city

    - Any changes will reflect in the list of locations when adding an item on /inventory

- Choosing inventory will display a list of all inventory in the database and which location it is assigned to
    - You can edit each individual item:
        Which allows you to change the name of the item, the location it is tied to, and which Item Id it is assigned to. The item id cannot be changed!

    - You can delete each individual item
        Which drops it from the database, and the viewable list

    - You can add a new item
        - Which allows you to choose the item name, and the location it will be assigned to.
