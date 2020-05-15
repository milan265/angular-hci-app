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
        MatTooltipModule} from '@angular/material'

@NgModule ({
    imports:[
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule
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
        MatTooltipModule
    ]
})

export class MaterialModule {}