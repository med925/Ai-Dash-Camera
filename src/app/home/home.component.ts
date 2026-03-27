import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  currentImageIndex = 0;
  private intervalId: any;
  private isCarouselPaused = false;

  displayCount: number = 40000;

  carouselImages = [
    {
      url: 'assets/dash-camera9.png',
      alt: 'AI Dashcam with digital safety overlays',
      titleKey: 'HOME.SAFETY_SLIDE_1_TITLE',
      textKey: 'HOME.SAFETY_SLIDE_1_TEXT'
    },
    {
      url: 'assets/dash-camera7.jpg',
      alt: 'Smart fleet management and road tracking',
      titleKey: 'HOME.SAFETY_SLIDE_2_TITLE',
      textKey: 'HOME.SAFETY_SLIDE_2_TEXT'
    },
    {
      url: 'assets/home-carousel-slide-3.png',
      alt: 'Smart fleet management and road tracking',
      titleKey: 'HOME.SAFETY_SLIDE_3_TITLE',
      textKey: 'HOME.SAFETY_SLIDE_3_TEXT'
    },
    {
      url: 'assets/home-carousel-slide-4.png',
      alt: 'Smart fleet management and road tracking',
      titleKey: 'HOME.SAFETY_SLIDE_4_TITLE',
      textKey: 'HOME.SAFETY_SLIDE_4_TEXT'
    },
  ];

  get currentSlide() {
    return this.carouselImages[this.currentImageIndex];
  }

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.fragment.subscribe(frag => {
      if (!frag) {
        window.scrollTo(0, 0);
      }
    });
    this.startCarousel();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private startCarousel() {
    this.intervalId = setInterval(() => {
      if (!this.isCarouselPaused) {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.carouselImages.length;
      }
    }, 3000);
  }

  pauseCarousel() {
    this.isCarouselPaused = true;
  }

  resumeCarousel() {
    this.isCarouselPaused = false;
  }

  nextSlide() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.carouselImages.length;
  }

}