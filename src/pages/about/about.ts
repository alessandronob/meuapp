import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { HomePage } from "../home/home";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  slides = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "https://cdn1.iconfinder.com/data/icons/music-outline-8/32/icon_music_24_icon_-10-512.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUKppcddnVSp__743gktS_m3o7fSSnrr8d_hmXCzr8Gi1DdpoUw",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKZ1Vo7Pt9oxBZCYFqngQUmWop4CP-wPieC8M77fFJd3kPGXbm",
  
  
    }
  ];
}
