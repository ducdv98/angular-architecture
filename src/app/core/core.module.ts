import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '../layout/layout.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    HttpClientModule,
    LayoutModule,
  ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    // It makes sure CoreModule only import once time.
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule!');
    }
  }
}
