import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  template: `
      <div class="mb-10 hero-img flex font-bold w-full h-[50vh] border-b border-black shadow-2xl drop-shadow-2xl justify-center content-center items-center">

    <div class="hero-bg w-full h-full opacity-40">
    </div>
        <h1 class="hero-text drop-shadow-2xl  md:text-3xl text-xl">ANGULAR TRAINING STATION</h1>
    </div>

      <!--Content with full VH for scroll function on hero image-->
    <div class="content h-screen">
      <div class="home-text px-5">
    <h1 class="mb-5 text-xl">Welcome to my Angular Training Station!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio itaque quas repellendus voluptatem voluptatum. Adipisci animi, autem deleniti, error eum illum incidunt minima, molestias omnis quasi qui sapiente sunt temporibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aliquam architecto autem ea earum esse est eveniet exercitationem fuga, illum incidunt ipsam ipsum minus modi nemo nisi odio perferendis quam ratione repudiandae similique tempora tempore totam veritatis! Ea, veniam.</p>
      </div>

    </div>
  `,

  styles: `

    .hero-text{
      text-shadow: 4px 4px 2px rgba(0,0,0,0.6);

    }

    .hero-bg{
    background: url('https://images6.alphacoders.com/426/426414.jpg');
    z-index: -1;
    background-attachment: fixed;
    background-size: cover;
    position: absolute;
      background-position-y: 90%;



  }

  `
})

export class HomeComponent {

}


