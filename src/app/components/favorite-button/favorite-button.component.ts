import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss']
})
export class FavoriteButtonComponent implements OnInit {
  @Input() isFavorite;
  @Output() favoriteButtonToggled = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onFavoriteButtonClick(newStatus) {
    this.favoriteButtonToggled.emit(newStatus);
  }
}
