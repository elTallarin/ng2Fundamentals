import { Component } from '@angular/core';

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styles: [`
        .nav.navbar-nav { front-size: 15; }
        #searchForm { margin-right: 100px; }
        @media (max-width: 1200px) { #searchForm { display: none } }
    `]
})
export class NavBarComponent {

}