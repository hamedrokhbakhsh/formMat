import {Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl, NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: InputComponent,
      multi: true,
    }]
})
export class InputComponent implements OnInit, ControlValueAccessor, Validator {


  /*data from form*/
  @Input() label: string = "";
  @Input() type: string = 'text';

  value: string | undefined;

  change: any = () => {
  }

  _onTouched: any = () => {
  };


  control: AbstractControl | undefined;


  constructor(private _renderer: Renderer2, private _elementRef: ElementRef) {
  }

  ngOnInit(): void {
  }

  public onChange(event: Event): void {
    const value: string = (<HTMLInputElement>event.target).value;
    this.change(value);
  }

  registerOnChange(fn: (_: any) => void): void {
    this.change = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
  }

  writeValue(value: any): void {
    this._renderer.setProperty(this._elementRef.nativeElement, 'value', value);
  }

  registerOnValidatorChange(fn: () => void): void {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    //return undefined;
    this.control = control;
    // console.log(this.control)
    return (!this.value) ? null : {
      jsonParseError: {
        valid: false,
      },
    };
  }

}
