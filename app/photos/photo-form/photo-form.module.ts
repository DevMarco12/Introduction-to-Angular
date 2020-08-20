import { NgModule } from "@angular/core";
import { PhotoFormComponent } from "./photo-form.component";
import { compileComponentFromMetadata } from "@angular/compiler";
import { CommonModule } from "@angular/common";

@NgModule ({
    declarations: [PhotoFormComponent],
    imports: [ CommonModule ]
})

export class PhotoFormModule {

}