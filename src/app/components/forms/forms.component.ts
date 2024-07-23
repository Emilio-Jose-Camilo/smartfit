import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GetUnitsService } from 'src/app/services/get-units.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit{

  results = [];
  formGroup!: FormGroup;

  constructor(
    private formBiulder: FormBuilder,
    private unitsService: GetUnitsService
  ) {

  }

  ngOnInit(): void {
    this.unitsService.getAllUnits().subscribe(data => console.log(data));
    this.formGroup = this.formBiulder.group({
      hour: '',
      showClosed: false
    })
  }

  onSubmit() {
    console.log(this.formGroup.value)
  }

  onClean() {
    this.formGroup.reset();
  }
}
