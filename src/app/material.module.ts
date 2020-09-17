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
        MatAutocompleteModule, 
        MatRadioModule, 
        MatTabsModule} from '@angular/material'
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
        MatTooltipModule,
        MatSnackBarModule,
        MatDialogModule,
        MatCardModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatRadioModule,
        MatCheckboxModule,
        MatTabsModule
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
        MatCheckboxModule,
        MatTabsModule
    ]
})

export class MaterialModule {}