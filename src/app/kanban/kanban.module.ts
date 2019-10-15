import { NgModule } from '@angular/core';
import { KanbanRoutingModule } from './kanban-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [
    KanbanRoutingModule,
    SharedModule,
    FormsModule,
    DragDropModule,
    MatButtonToggleModule,
    MatDialogModule
  ]
})
export class KanbanModule {}
