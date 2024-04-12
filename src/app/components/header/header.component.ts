import { Component } from '@angular/core';
import {ButtonComponent} from "../../ui/button/button.component";

@Component({
  selector: 'alte-header',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
