import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      phone: [""],
    });
  }

  public submit() {
    console.log(`Phone: ${this.digitsOnly(this.f.phone.value)}`);
  }

  get f() {
    return this.form.controls;
  }

  private digitsOnly(str: string) {
    return str.replace(/\D/g, "");
  }
}
