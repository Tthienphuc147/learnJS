class Personal {
    constructor(ID, fullName, email, birthday, position, seniority) {
        this.ID = ID;
        this.fullName = fullName;
        this.email = email;
        this.birthday = birthday;
        this.position = position;
        this.seniority = seniority;
    }
  
    
    get age() {
        let today = new Date();
        let bday = new Date(this.birthday);
        let age = today.getFullYear() - bday.getFullYear();

        if (today.getMonth() < bday.getMonth()) {
            age--;
        } else if (today.getMonth() == bday.getMonth() && today.getDate() < bday.getDate()) {
            age--;
        }
        return age;
    }
    get salary() {
        let position = {
            manager: 1000,
            secterary: 400,
            employee: 300
        }
        let sal = position[this.position]
        if (this.seniority < 12) {
            return sal * 1.2;
        }
        if (this.seniority < 24) {
            return sal * 2
        }
        if (this.seniority < 36) {
            return sal * 3.4
        }
        return sal * 4.5;
    }
    static highestSalary(arr) {
        let max = 0;
        let dem = 0;
        arr.forEach((element, index )=> {
            if (max < element.salary) {
                max = element.salary;
                dem = index;
            }
        });
        return arr[dem];
    }
}
let personal = new Personal(1, "Nguyen Van A", "A@email.com", "10/12/1997", "manager", "3")
let personal1 = new Personal(2, "Nguyen Van B", "B@email.com", "9/12/1997", "secterary", "3")
let personal2 = new Personal(3, "Nguyen Van C", "C@email.com", "8/12/1997", "employee", "3")
console.log(personal.age);
console.log(personal.salary);
console.log(Personal.highestSalary([personal,personal1,personal2]));