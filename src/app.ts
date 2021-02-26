// Code goes here!
class Department {
  // private id: string;
  // name: string;
  // by using private, employees array is accessible inside the class only

  // left employees as longhand on purpose
  private employees: string[];

  // mentionining private as params is shorthand version
  // readonly makes id IMMUTABLE
  constructor(private readonly id: string, public name: string) {
    this.employees = [];
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
    console.log("" + this.id + "" + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeName(this: Department) {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  // Inherit properties from ITDepartment from original department class
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
}

class AccDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addReports(text: string) {
    this.reports.push(text);
  }

  getReports() {
    console.log(this.reports);
  }
}

const acc = new AccDepartment("a1", ["Great", "Good"]);
acc.getReports();
acc.addReports("Bad");
acc.getReports();

// const account = new Department("d1", "Accounting");

// account.describe();
// account.addEmployee("Max");
// account.addEmployee("Dana");
// account.addEmployee("Mango");
// // account.employees[2] = "Apple" <== THIS IS NOT POSSIBLE, because employees is set to private
// account.printEmployeeName();
