import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoryInterface } from './category-interface';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styles: [],
})
export class SearchBarComponent implements OnInit {
  @Input() categories: Array<CategoryInterface> = [];
  @Input() array: any = [];
  @Input() placeholderText: string =
    'Click the Navigation button to choose a category and then enter the item you are looking for here';
  @Output() onArrayFilterd = new EventEmitter();

  category: CategoryInterface = { name: '', value: '' };

  onCategoryChange(e: any) {
    const categoryChanged = this.categories.find(
      (category: CategoryInterface) => category.value === e.target.value
    );
    if (categoryChanged) this.category = categoryChanged;
  }

  onSearch(e: any) {
    const term = e.target.value;
    const filterd = [...this.array].filter((item: any) =>
      item[this.category.value]
        .toLowerCase()
        .trim()
        .includes(term.toLowerCase().trim())
    );
    this.onArrayFilterd.emit(filterd);
  }

  ngOnInit(): void {
    this.category = {
      name: this.categories[0].name,
      value: this.categories[0].value,
    };
  }
}
