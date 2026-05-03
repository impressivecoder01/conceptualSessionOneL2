let shopName : string = 'Rahim Store'
let totalProducts: number = 50;
let isOpen: boolean = true;
let rating: null = null;
let discount: undefined = undefined;

const products: {
    shopName: string;
    price: number;
    category: 'gorocery' | 'ele'
    discount?: number

}={
    shopName: 'sss',
    price: 44,
    category: 'ele',
    discount: 444
}

// void

function calculation(price: number, quantity: number): number{
    return price * quantity
}

console.log(calculation(44,4)); // 176

function totalCard(...prices: number[]): number{
    return prices.reduce((sum,p)=> sum + p, 250)
}
const bestProducts = ['oil', 'salt', 'rice']
const newProducts = [...bestProducts, 'mustard oil']
console.log(newProducts)

const buyer = {
    nam: 'karim',
    address: 'dhaka',
    contactNumber: 231312323
}

const {nam,address,contactNumber} = buyer
console.log(nam,address,contactNumber)

type Tproduct = {
    productNm: string,
    price: number,
    address: {
        thana: 'madaripur',
        zipcode: number
    }
}

const item: Tproduct ={
    productNm: 'Sugar',
    price: 80,
    address: {
        thana: 'madaripur',
        zipcode: 3434
    }
}

type tPaymentMethod = 'bkash' | 'rocket' | 'nagod' | 'mcash';
let payment: tPaymentMethod = 'bkash'
type User = {
    name: string,
}
type TSeller = User & {
    shopNamee: string
}
const sellerName: TSeller = {
    name: 'sss',
    shopNamee: 'sfs'
}