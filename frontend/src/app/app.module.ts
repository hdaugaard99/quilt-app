import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddQuiltComponent } from './components/add-quilt/add-quilt.component';
import { EditQuiltComponent } from './components/edit-quilt/edit-quilt.component';
import { QuiltsListComponent } from './components/quilts-list/quilts-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './shared/api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlocksListComponent } from './components/blocks-list/blocks-list.component';
import { AddBlockComponent } from './components/add-block/add-block.component';
import { AddPieceComponent } from './components/add-piece/add-piece.component';
import { PiecesComponent } from './components/pieces/pieces.component';

@NgModule({
  declarations: [
    AppComponent,
    AddQuiltComponent,
    EditQuiltComponent,
    QuiltsListComponent,
    BlocksListComponent,
    AddBlockComponent,
    AddPieceComponent,
    PiecesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
