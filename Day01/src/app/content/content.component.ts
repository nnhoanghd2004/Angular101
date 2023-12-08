import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {
  url =
    'https://fastly.picsum.photos/id/483/200/200.jpg?hmac=tIKQEdwuW7trzVGWGE-cAgtpmRJla51INgO9dvJG3hA';
  handleClick() {
    alert('Chuc mung');
  }
}
