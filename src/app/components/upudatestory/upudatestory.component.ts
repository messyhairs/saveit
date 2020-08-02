import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StoryService } from '../../api/story.service';
import Business from '../../api/business';
@Component({
  selector: 'app-upudatestory',
  templateUrl: './upudatestory.component.html',
  styleUrls: ['./upudatestory.component.css']
})
export class UpudatestoryComponent implements OnInit {

  business: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private bs: StoryService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm(): void {
    this.angForm = this.fb.group({
      storytitle: ['', Validators.required],
      avatarurl: ['', Validators.required],
      song: [''],
      explainstory: ['']
    });
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.bs.editBusiness(params['id']).subscribe(res => {
        this.business = res;
      });
    });
  }
  updateBusiness(storytitle, avatarurl, song, explainstory) {
    this.route.params.subscribe(params => {
      this.bs.updateBusiness(storytitle, avatarurl, song, explainstory, params['id']);
      this.router.navigate(['addstory']);
    });
  }
}
