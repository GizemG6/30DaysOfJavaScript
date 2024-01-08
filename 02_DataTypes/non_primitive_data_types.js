let nums = [1, 2, 3]
nums[0] = 10
console.log(nums) // [10, 2, 3]

let nums = [1, 2, 3]
let numbers = [1, 2, 3]
console.log(nums == numbers) // false

let userOne = {
  name: 'Asabeneh',
  role: 'teaching',
  country: 'Finland'
}
let userTwo = {
  name: 'Asabeneh',
  role: 'teaching',
  country: 'Finland'
}
console.log(userOne == userTwo) // false

let numberss = nums
console.log(nums == numberss)  // true

let userOnee = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}
let userTwo0 = userOnee
console.log(userOnee == userTwo0)  // true