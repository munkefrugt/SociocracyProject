
//https://www.youtube.com/watch?v=XoQKXDWbL1M


let PersonC = class {
    constructor(nm, id) {
      this.name = nm;
      this.id = id;
    }
    getDetails() {
      return `${this.name} :: ${this.id}`;
    }
  };
  let bob = new PersonC("Bob", 123);
  //console.log(bob.getDetails(), bob.name);
  
  let EmployeeC = class extends PersonC {
    // EmployeeC prototype links to PersonC prototype
    constructor(nm, id, salary) {
      super(nm, id);
      this.salary = salary;
    }
    employeeInfo() {
      //exist on the prototype of EmployeeC
      return `${this.name} :: ${this.id} :: ${this.salary}`;
    }
  };
  let noomi = new EmployeeC("Noomi", 456, 8500000);
  //console.log(noomi.employeeInfo());