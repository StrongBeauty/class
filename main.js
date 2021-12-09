class AClass {
    Numbers = []

    constructor(n) {
        this.Numbers = Array(n)
        AClass.fill(this.Numbers)
    }

    static fill(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = Math.round(Math.random() * 10 + 1)
        }
    }

    factorial() {
        let t = 1
        const arr = this.Numbers
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i]; j++) {
                t = t * (arr[i] - j)
            }
            arr[i] = t
            t = 1
        }
        return arr
    }

    sort() {}

    getArr() {
        return this.Numbers
    }
}


class Class1 extends AClass {

    constructor(n) {
        super(n)
    }

    sort() {
        const arr = this.Numbers
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - 1 - i; j++) {
                if (arr[j + 1] < arr[j]) {
                    let t = arr[j + 1]
                    arr[j + 1] = arr[j]
                    arr[j] = t
                }
            }
        }
        return super.factorial(arr)
    }
}

const class1 = new Class1(10)
console.log(class1.getArr())
console.log(class1.sort())


class Class2 extends AClass {
    constructor(n) {
        super(n)
    }

    sort() {
        const arr = this.Numbers
        for (let i = 0; i < arr.length - 1; i++) {
            let min = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[min]) min = j;
            }
            let t = arr[min];
            arr[min] = arr[i]
            arr[i] = t
        }
        return super.factorial(arr)
    }
}

const class2 = new Class2(10)
console.log(class2.getArr())
console.log(class2.sort())


