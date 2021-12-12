import { Component, OnInit, ViewChild } from '@angular/core';
import { Quilt } from './../../shared/quilt';
import { ApiService } from './../../shared/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-quilts-list',
  templateUrl: './quilts-list.component.html',
  styleUrls: ['./quilts-list.component.css']
})
export class QuiltsListComponent implements OnInit {
  QuiltData: any = [];
  dataSource: MatTableDataSource<Quilt>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['_id', 'quilt_name', 'quilt_type', 'numOfBlocks', 'action'];

  constructor(private quiltApi: ApiService) {
    this.quiltApi.GetQuilts().subscribe(data => {
      this.QuiltData = data;
      this.dataSource = new MatTableDataSource<Quilt>(this.QuiltData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })
   }

  ngOnInit(){ }

  deleteQuilt(index: number, e: { _id: any; }){
    if(window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      this.dataSource.data = data;
      this.quiltApi.DeleteQuilt(e._id).subscribe()
    }
  }

}
