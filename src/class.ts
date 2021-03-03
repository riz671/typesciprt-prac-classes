// Code goes here!
class Department {
  // private id: string;
  // name: string;
  // by using private, employees array is accessible inside the class only

  // left employees as longhand on purpose
  private employees: string[];
  static power = 200;
  static changePower(x: number) {
    Department.power = x;
  }

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

  get mostRecentReport() {
    return this.reports;
  }

  set changeReport(newReport: string[]) {
    this.reports = newReport;
  }

  addReports(text: string) {
    this.reports.push(text);
  }
}

const acc = new AccDepartment("a1", ["Great", "Good"]);
acc.addReports("Bad");
console.log(acc.mostRecentReport);
acc.changeReport = ["Awesome"];
console.log(acc.mostRecentReport);

// EXAMPLE OF STATIC METHODS
// can be accessed without instantiating new Department class
// console.log(Department.power);
// Department.changePower(500);
// console.log(Department.power);

// EXAMPLE OF PRIVATE PROPERTIES UNNACCESSIBLE OUTSIDE OF CLASS
// const account = new Department("d1", "Accounting");
// account.describe();
// account.addEmployee("Max");
// account.addEmployee("Dana");
// account.addEmployee("Mango");
// // account.employees[2] = "Apple" <== THIS IS NOT POSSIBLE, because employees is set to private
// account.printEmployeeName();
