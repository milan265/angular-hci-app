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
        MatAutocompleteModule, MatRadioModule} from '@angular/material'
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
        ReactiveFormsModule,
        MatDialogModule,
        MatRadioModule,
        MatCheckboxModule
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
        ReactiveFormsModule,
        MatDialogModule,
        MatRadioModule,
        MatCheckboxModule
    ]
})

export class MaterialModule {}