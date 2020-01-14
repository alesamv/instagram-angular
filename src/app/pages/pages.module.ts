import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { PagesRootingModule } from './pages-routing.module';
import { PublishmentComponent } from './publishment/publishment.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations:[
        PublishmentComponent, 
        ProfileComponent, 
        EditProfileComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        CommonModule,
        RouterModule,
        PagesRootingModule
    ],
    providers: [

    ],
    bootstrap: []
})

export class PagesModule{}