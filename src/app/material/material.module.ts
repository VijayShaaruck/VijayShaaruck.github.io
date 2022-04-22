import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  exports: [FlexLayoutModule, MatButtonModule],
  declarations: [],
  imports: [CommonModule],
})
export class MaterialModule {}
