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
      foodDetails:"Call us for estimation",
      foodPrice:200,
      foodImg:"../../assets/img/1.jpeg"
    },
    {
      id:2,
      foodName:"Modern Cabinet",
      foodDetails:"Call us for estimation",
      foodPrice:369,
      foodImg:"../../assets/img/2.jpeg"
    },
    {
      id:3,
      foodName:"Kitchen Renovation",
      foodDetails:"Call us for estimation",
      foodPrice:149,
      foodImg:"../../assets/img/3.jpeg"
    },
    {
      id:4,
      foodName:"Counter Top",
      foodDetails:"Call us for estimation",
      foodPrice:140,
      foodImg:"../../assets/img/5.jpeg"
    },
    {
      id:5,
      foodName:"Indulgence Brownie",
      foodDetails:"Call us for estimation",
      foodPrice:105,
      foodImg:"../../assets/img/5.jpeg"
    },
    {
      id:6,
      foodName:"Oreo Cheesecake Ice Cream",
      foodDetails:"Call us for estimation",
      foodPrice:219,
      foodImg:"../../assets/img/5.jpeg"
    }
  ]




}
