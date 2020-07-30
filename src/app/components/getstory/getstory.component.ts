import { Component, OnInit } from '@angular/core';
import { StoryService } from '../../api/story.service';
import Business from '../../api/business';

@Component({
  selector: 'app-getstory',
  templateUrl: './getstory.component.html',
  styleUrls: ['./getstory.component.css']
})
export class GetstoryComponent implements OnInit {

  businesses: Business[];

  constructor(private bs: StoryService) { }

  ngOnInit() {
    this.bs
      .getBusinesses()
      .subscribe((data: Business[]) => {
        this.businesses = data;
      });
  }

}
