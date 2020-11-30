import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomePage } from "./home.page";

import { HomePageRoutingModule } from "./home-routing.module";
import { PhonePipe } from "../phone.pipe";
import { PhoneMaskDirectiveModule } from "../phone-mask.directive";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule,
    PhoneMaskDirectiveModule,
  ],
  declarations: [HomePage],
  providers: [PhonePipe],
})
export class HomePageModule {}
