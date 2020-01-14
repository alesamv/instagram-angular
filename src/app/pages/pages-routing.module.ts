import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { PublishmentComponent } from './publishment/publishment.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

export const PagesRoutes = [
    {
        path: '',
        component: PublishmentComponent
    },
    {
        path:'perfil',
        component: ProfileComponent
    },
    {
        path: 'edit-profile',
        component: EditProfileComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '',
            component: PublishmentComponent
        },
        {
            path:'perfil',
            component: ProfileComponent
        },
        {
            path: 'edit-profile',
            component: EditProfileComponent
        }
    ])]
})

export class PagesRootingModule{}