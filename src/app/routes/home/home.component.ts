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
    <h1 class="mb-5 text-2xl">Welcome to my Angular Training Station!</h1>
        <p>
          Welcome to the Angular Training Station, my go-to platform for mastering Angular through hands-on projects! My website is designed for comprehensive learning experience by creating multiple Angular projects, each focusing on different aspects of this powerful framework.

          Why Angular Training Station?

          Angular Training Station is more than just a website; it's an interactive training hub where i enhance my Angular skills. My multi-project setup ensures that i gain practical experience in various real-world scenarios.
</p>
        <p>
          Explore my Projects

          Navigate through my tabs to discover a range of projects, each crafted to teach me different Angular concepts and techniques. From basic components to advanced features, our projects cover it all:
</p>
<p>
  <br>
          <li>
            Project 1: To do list - here i created a to do list, to enhance my angular skills, you can add to dos and choose a description with priority and expire date.
         </li>
  <li>

  Project 2: Code snippets- here are just code snippets with no structure, just to try some things in angular.
    </li>
  <li>
          Project 3: Employees - This tab shows a list with some dummy employees of an API, here i embedded my first API to learn how to use APIs in angular.
          </li>
</p>
        <br>
        <p>
          At Angular Training Station, we believe in learning by doing. Engage with our community of learners, share your progress, and get feedback from peers and experts. Together, we can achieve excellence in Angular development.
          More projects will follow!
        </p>
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


