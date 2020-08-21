import { NgModule } from '@angular/core';
import { MatButtonModule, 
        MatIconModule, 
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatSelectModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatDialogModule,
        MatCardModule,
        MatAutocompleteModule} from '@angular/material'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule ({
    imports:[
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        MatDialogModule,
        MatCardModule,
        MatAutocompleteModule,
        ReactiveFormsModule
    ],
    exports:[
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatSelectModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatDialogModule,
        MatCardModule,
        MatAutocompleteModule,
        ReactiveFormsModule
    ]
})

export class MaterialModule {}