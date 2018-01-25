import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DeviceinputComponent } from './deviceinput/deviceinput.component';
import { DevicelistingComponent } from './devicelisting/devicelisting.component';
import { CustomvalidationDirective } from './directives/customvalidation.directive';
import { CommonService } from './services/common.service';
import { InterfaceComponent } from './interface/interface.component';

@NgModule({
  declarations: [
    AppComponent,
    DeviceinputComponent,
    DevicelistingComponent,
    CustomvalidationDirective,
    InterfaceComponent,
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
