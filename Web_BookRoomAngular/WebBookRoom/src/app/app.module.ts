import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header/header.component';
import { TrangchuComponent } from './TrangChu/trangchu/trangchu.component';
import { DattruocComponent } from './DatTruoc/dattruoc/dattruoc.component';
import { ChitietComponent } from './ChiTiet/chitiet/chitiet.component';
import { DanhgiaComponent } from './DanhGia/danhgia/danhgia.component';
import { KiemtraphongComponent } from './KiemTraPhong/kiemtraphong/kiemtraphong.component';
import { LienheComponent } from './LienHe/lienhe/lienhe.component';
import { DichvuComponent } from './DichVu/dichvu/dichvu.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CanhquanComponent } from './CanhQuan/canhquan.component';
import { ListRoomItemComponent } from './PhongDaDat/list-room-item/list-room-item.component';
import { PhongdadatComponent } from './PhongDaDat/phongdadat.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TrangchuComponent,
    DattruocComponent,
    CanhquanComponent,
    ChitietComponent,
    DanhgiaComponent,
    KiemtraphongComponent,
    LienheComponent,
    DichvuComponent,
    FooterComponent,
    ListRoomItemComponent,
    PhongdadatComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
