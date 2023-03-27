function Contact(name, number) {
    this.name = name;
    this.number = number;
    
    this.print = function() {
        document.getElementById("demo5").innerHTML = `${this.name}: ${this.number}`;
    }
  }
  
  // create a new contact object
  const michelle = new Contact('Michelle', '09123456789');
  
  // print the contact information
  michelle.print(); // output: Michelle: 09123456789
