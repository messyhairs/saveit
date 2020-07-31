import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StoryService } from '../../api/story.service';
import Business from '../../api/business';
@Component({
  selector: 'app-readfullstory',
  templateUrl: './readfullstory.component.html',
  styleUrls: ['./readfullstory.component.css']
})
export class ReadfullstoryComponent implements OnInit {

  business: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private bs: StoryService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.bs.editBusiness(params['id']).subscribe(res => {
        this.business = res;
      });
    });
  }
}
