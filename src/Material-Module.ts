import { NgModule } from "@angular/core";
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';

@NgModule({
    exports: [
        MatCardModule, MatInputModule,
        MatButtonModule, MatFormFieldModule, MatTableModule
    ]
})
export class MaterialModule {
    
}