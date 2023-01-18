class Menu {
    constructor() {
        this.menuItems = [];

    }
    
    add(item){
        this.menuItems.push(item);
    }
    deleteItem(itemName) {
        for (var i = this.menuItems.length; i--;) {
          if (this.menuItems[i].name === itemName) this.menuItems.splice(i, 1);
        }
     }

    describe() {
        console.log("Menu list");
        console.log("------------------");
        this.menuItems.forEach(element => {
            element.describe();
        });
        console.log("------------------");
        console.log("------------------");

    }
 }


 class MenuItem{
    constructor(  name , type , price ) {
        this.name = name;
        this.type = type;
        this.price = price;
        }
        
        describe() {
            console.log("\t------------------");
            console.log("\tname: " + this.name);
            console.log("\ttype: " + this.type);
            console.log("\tprice: " + this.price);
        }
 }

 let menuitem1 = new MenuItem("Crazynoodles", "ENTREE", 16);
 let menuitem2 = new MenuItem("Chicken Biryani", "ENTREE", 18);

 

 let menu= new Menu();
 menu.add(menuitem1);
 menu.add(menuitem2);
 menu.describe();

 menu.deleteItem(menuitem1.name);
 menu.describe();

