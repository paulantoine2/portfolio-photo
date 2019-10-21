import {Component, Input, OnInit} from '@angular/core';
import set = Reflect.set;

@Component({
  selector: 'app-picture-card',
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.scss']
})
export class PictureCardComponent implements OnInit {
  @Input() data: any;
  zoom = false;
  left: string;
  top: string;
  right: string;
  bottom: string;

  constructor() { }

  ngOnInit() {
  }

  expand(e) {
    const x = e.target.x;
    const y = e.target.y;
    const w = e.target.width;
    const h = e.target.height;
    const img = e.path[0];
    const container = e.path[1];
    const card = e.path[2];
    const black = document.getElementById('blackout');
    if (!this.zoom) {
      this.zoom = true;
      card.style.position = 'static';
      container.style.left = this.left = x + 'px';
      container.style.top = this.top = y + 'px';
      container.style.right = this.right = (window.innerWidth - (x + w)) + 'px';
      container.style.bottom = this.bottom = (window.innerHeight - (y + h)) + 'px';
      container.style.zIndex = 1000;
      setTimeout(() => {
        black.style.opacity = '0.8';
        black.style.zIndex = '500';
        container.style.transition = 'all .3s ease';
        container.style.left = container.style.top = container.style.right = container.style.bottom = 0;
        img.style.transform = 'scale(2)';
      }, 0);
    } else {
      container.style.left = this.left;
      container.style.top = this.top;
      container.style.right = this.right;
      container.style.bottom = this.bottom;
      img.style.transform = 'scale(1)';
      black.style.opacity = '0';
      setTimeout(() => {
        card.style.position = 'relative';
        black.style.zIndex = '0';
        container.style.transition = null;
        container.style.left = container.style.top = container.style.right = container.style.bottom = 0;
        container.style.zIndex = 0;
        this.zoom = false;
      }, 300);
    }
  }

}
