import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StoryService } from '../../api/story.service';
@Component({
  selector: 'app-addstory',
  templateUrl: './addstory.component.html',
  styleUrls: ['./addstory.component.css']
})
export class AddstoryComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private storyser: StoryService) {
    this.createForm();
  }

  createForm(): void {
    this.angForm = this.fb.group({
      storytitle: ['', Validators.required],
      avatarurl: ['', Validators.required],
      explainstory: ['', Validators.required]
    });
  }
  addBusiness(storytitle, avatarurl, explainstory) {
    this.storyser.addBusiness(storytitle, avatarurl, explainstory);
  }

  ngOnInit(): void {
  }

}
