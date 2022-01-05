//For each of these values, what type will TypeScript infer?

let a = 1042
// number

let b = 'apples and oranges'
// string
const c = 'pineapples'
// 'pineapples'
let d = [true, true, false]
// boolean[]
let e = {type: 'ficus'}
// {type: string}
let f = [1, false]
// (number | boolean)[]
const g = [3]
// number[]
let h = null
// any


//Why does each of these throw the error it does?

let i: 3 = 3
i = 4 // Error TS2322: Type '4' is not assignable to type '3'.
// i is of type literal 3; it cannot be assigned to 4, which is of type literal 4

let j = [1, 2, 3]
j.push(4)
j.push('5') // Error TS2345: Argument of type '"5"' is not
            // assignable to parameter of type 'number'.
// j is inferred to be number[] type; it thus can only accept values of type
// number pushed to it, and '5' is type literal '5'

let k: never = 4 // Error TSTS2322: Type '4' is not assignable
                 // to type 'never'.
// we cannot assign a number to a var declared to by of type never

let l: unknown = 4
let m = l * 2 // Error TS2571: Object is of type 'unknown'.
// cannot do operations that require type number of values that are
// declared to be of type unknown without first proving there is a
// subtype via typeof declaration of similar