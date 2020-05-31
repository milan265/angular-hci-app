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
        MatDialogModule} from '@angular/material'

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
        MatDialogModule
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
        MatDialogModule
    ]
})

export class MaterialModule {}