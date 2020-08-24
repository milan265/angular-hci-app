import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollToService {

  constructor() { }

  scrollToTop() {
    (function smoothscroll() { 
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop; 
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 15));
      }
    })();
  }
}
