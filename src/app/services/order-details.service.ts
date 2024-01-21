import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails

  foodDetails = [
    {
      id:1,
      foodName:"Kitchen Island",
      foodDetails:"Pan-fried masala paneer.",
      foodPrice:200,
      foodImg:"../../assets/img/1.jpeg"
    },
    {
      id:2,
      foodName:"Modern Cabinet",
      foodDetails:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      foodPrice:369,
      foodImg:"../../assets/img/2.jpeg"
    },
    {
      id:3,
      foodName:"Kitchen Renovation",
      foodDetails:"panner",
      foodPrice:149,
      foodImg:"../../assets/img/3.jpeg"
    },
    {
      id:4,
      foodName:"Counter Top",
      foodDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      foodPrice:140,
      foodImg:"../../assets/img/5.jpeg"
    },
    {
      id:5,
      foodName:"Indulgence Brownie",
      foodDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
      foodPrice:105,
      foodImg:"../../assets/img/5.jpeg"
    },
    {
      id:6,
      foodName:"Oreo Cheesecake Ice Cream",
      foodDetails:"Oreo ice cream",
      foodPrice:219,
      foodImg:"../../assets/img/5.jpeg"
    }
  ]




}
