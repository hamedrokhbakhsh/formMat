import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CheckboxComponent,
    multi: true
  },
    {
    provide: NG_VALIDATORS,
    useExisting: CheckboxComponent,
    multi: true,
  }]
})
export class CheckboxComponent implements OnInit, ControlValueAccessor {
  value: string | undefined;

  change: any = () => {}

  _onTouched: any = () => {};


  constructor(private  _renderer: Renderer2, private _elementRef: ElementRef) { }

  public onChange(event: Event): void {
    const value: string = ( <HTMLInputElement>event.target).value;
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

  ngOnInit(): void {
  }



}
