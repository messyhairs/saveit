import { Component, OnInit } from '@angular/core';
import { StoryService } from '../../api/story.service';
import Business from '../../api/business';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-getstory',
  templateUrl: './getstory.component.html',
  styleUrls: ['./getstory.component.css']
})
export class GetstoryComponent implements OnInit {

  businesses: Business[];

  constructor(private bs: StoryService, private SpinnerService: NgxSpinnerService, private router: Router) { }

  ngOnInit() {
    this.SpinnerService.show();
    this.bs
      .getBusinesses()
      .subscribe((data: Business[]) => {
        this.businesses = data;
        this.SpinnerService.hide();
      });
  }
  deleteBusiness(id): void {
    this.bs.deleteBusiness(id).subscribe(res => {
      console.log('Deleted');
      this.router.navigate(['addstory']);

    });
  }
}
