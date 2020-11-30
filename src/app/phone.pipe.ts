import { Pipe, PipeTransform } from "@angular/core";
import { AsYouType } from "libphonenumber-js";

@Pipe({
  name: "phone",
})
export class PhonePipe implements PipeTransform {
  transform(phoneValue: number | string): string | number {
    if (!phoneValue) {
      return "";
    }
    let ayt = new AsYouType("US");
    try {
      ayt.input(phoneValue + "");
      return ayt.getNumber().formatNational();
    } catch (error) {
      console.log(error);
      return phoneValue;
    }
  }
}
