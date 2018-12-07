class person {
    constructor(firstName, lastName, birthday, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.gender = gender;
    }
    get Age() {
        let today = new Date();
        let bday = new Date(this.birthday)
        let Age = today.getFullYear() - bday.getFullYear();
        if (today.getMonth() < bday.getMonth()) {
            Age--;

        }
        else if (today.getMonth() == bday.getMonth() && today.getDate() < bday.getDate()) {
            Age--;
        }
        return Age;



    }


}
class Employer extends person {
    constructor(firstName, lastName, birthday, gender, position, company, workHours) {
        super(firstName, lastName, birthday, gender)
        this.position = position;
        this.company = company;
        this.workHours = workHours;

    }
    get salary() {
        let position = {
            manager: 10,
            secterary: 7,
            employee: 4,

        }
        let p=position[this.position];
        return p * this.workHours;
    }

}
class Investors extends person {
    constructor(firstName, lastName, birthday, gender, numberOfStocks) {
        super(firstName, lastName, birthday, gender)
        this.numberOfStocks;
    }
}

let P1 = new person("ANH", "THU", "06/08/1998", "YEU MAU TIM");
let e1 = new Employer("anh", "thu", "09/08/1998", "yeu", "secterary", "tnhh", 5)
console.log(P1.Age)
console.log(e1.salary)