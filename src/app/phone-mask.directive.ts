import { Directive, HostListener, NgModule } from "@angular/core";
import { NgControl } from "@angular/forms";
import { PhonePipe } from "./phone.pipe";

@Directive({
  selector: "[phoneMask]",
})
export class PhoneMaskDirective {
  constructor(public ngControl: NgControl, private phonePipe: PhonePipe) {}

  @HostListener("ngModelChange", ["$event"])
  onModelChange(event) {
    this.ngControl.valueAccessor.writeValue(this.phonePipe.transform(event));
  }

  @HostListener("keydown.backspace", ["$event"])
  keydownBackspace(event) {
    this.ngControl.valueAccessor.writeValue(
      this.phonePipe.transform(event.target.value)
    );
  }
}

@NgModule({
  declarations: [PhoneMaskDirective],
  exports: [PhoneMaskDirective],
})
export class PhoneMaskDirectiveModule {}
