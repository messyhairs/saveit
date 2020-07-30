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
      person_name: ['', Validators.required],
      business_name: ['', Validators.required],
      business_gst_number: ['', Validators.required]
    });
  }
  addBusiness(person_name, busines_name, business_gst_number) {
    this.storyser.addBusiness(person_name, busines_name, business_gst_number);
  }

  ngOnInit(): void {
  }

}
