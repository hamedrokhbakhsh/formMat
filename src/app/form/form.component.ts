import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  pattern = "[2-6]"

  form = this._fb.group({
    email: ['', [Validators.required, Validators.pattern(this.pattern)]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
  }

  ngSubmit() {
    console.log(this.form.value)
  }
}
