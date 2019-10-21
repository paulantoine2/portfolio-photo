import {Component, Inject, OnInit} from '@angular/core';
import { AosToken } from '../../aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(AosToken) aos) {
    aos.init({
      offset: 200
    });
  }
  welcome = {
    title: 'Welcome To My Online Portfolio !',
    body: 'Check out my work and we may work together.'
  };

  pictures = [
    {
      src: '9.jpg',
      format: 1,
      line: 1
    },
    {
      src: '8.jpg',
      format: 2,
      line: 2,
    },
    {
      src: '3.jpg',
      format: 2,
      line: 1
    },
    {
      src: '4.jpg',
      format: 1,
      line: 2,
    },
    {
      src: '5.jpg',
      format: 1,
      line: 2,
    },
    {
      src: '6.jpg',
      format: 1,
      line: 1
    },
    {
      src: '7.jpg',
      format: 2,
      line: 2,
    },
    {
      src: '8.jpg',
      format: 2,
      line: 1
    },
    {
      src: '1.jpg',
      format: 1,
      line: 2,
    }
  ];

  filterLine1(items) {
    return items.filter(i => i.line === 1);
  }

  filterLine2(items) {
    return items.filter(i => i.line === 2);
  }

  ngOnInit() {
  }
}
