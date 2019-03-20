import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsComponentComponent } from './dumb/documents-component/documents-component.component';
import {NbInputModule} from '@nebular/theme';

@NgModule({
  declarations: [DocumentsComponentComponent],
  imports: [CommonModule, NbInputModule],
  exports: [DocumentsComponentComponent]
})

export class SharedModule {}
