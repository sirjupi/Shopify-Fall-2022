This is my submission for the Shopify Intern Challenge for the Backend developer position.

How to use:

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
