import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlockComponent } from './components/add-block/add-block.component';
import { AddPieceComponent } from './components/add-piece/add-piece.component';
import { AddQuiltComponent } from './components/add-quilt/add-quilt.component';
import { BlocksListComponent } from './components/blocks-list/blocks-list.component';
import { EditQuiltComponent } from './components/edit-quilt/edit-quilt.component';
import { PiecesComponent } from './components/pieces/pieces.component';
import { QuiltsListComponent } from './components/quilts-list/quilts-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-quilt' },
  { path: 'add-quilt', component: AddQuiltComponent },
  { path: 'edit-quilt/:id', component: EditQuiltComponent },
  { path: 'quilts-list', component: QuiltsListComponent },
  { path: 'blocks-list', component: BlocksListComponent},
  { path: 'add-block', component: AddBlockComponent},
  { path: 'pieces-list', component: PiecesComponent},
  { path: 'add-piece', component: AddPieceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
