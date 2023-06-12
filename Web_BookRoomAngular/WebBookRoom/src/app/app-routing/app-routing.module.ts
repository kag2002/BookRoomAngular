import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrangchuComponent } from '../TrangChu/trangchu/trangchu.component';
import { ChitietComponent } from '../ChiTiet/chitiet/chitiet.component';
import { DanhgiaComponent } from '../DanhGia/danhgia/danhgia.component';
import { DattruocComponent } from '../DatTruoc/dattruoc/dattruoc.component';
import { DichvuComponent } from '../DichVu/dichvu/dichvu.component';
import { KiemtraphongComponent } from '../KiemTraPhong/kiemtraphong/kiemtraphong.component';
import { LienheComponent } from '../LienHe/lienhe/lienhe.component';
import { CanhquanComponent } from '../CanhQuan/canhquan.component';
import { PhongdadatComponent } from '../PhongDaDat/phongdadat.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/TrangChu', pathMatch: 'full' },
  { path: 'TrangChu', component: TrangchuComponent },
  { path: 'CanhQuan', component: CanhquanComponent },
  { path: 'ChiTiet', component: ChitietComponent },
  { path: 'DanhGia', component: DanhgiaComponent },
  { path: 'DatTruoc', component: DattruocComponent },
  { path: 'DichVu', component: DichvuComponent },
  { path: 'KiemTraPhong', component: KiemtraphongComponent },
  { path: 'LienHe', component: LienheComponent },
  { path: 'PhongDaDat', component: PhongdadatComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
