import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';

import { GoogleMapsModule } from '@angular/google-maps';
import { NgChartsModule } from 'ng2-charts';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeOperationsComponent } from './home-operations/home-operations.component';
import { HomeMonitoringComponent } from './home-monitoring/home-monitoring.component';
import { HomeReportComponent } from './home-report/home-report.component';
import { HomeConfigurationComponent } from './home-configuration/home-configuration.component';
import { TankComponent } from './home-monitoring/tank/tank.component';
import { AlarmComponent } from './home-monitoring/alarm/alarm.component';
import { DeviceComponent } from './home-monitoring/device/device.component';
import { UpsComponent } from './home-monitoring/ups/ups.component';
import { PumpComponent } from './home-monitoring/pump/pump.component';
import { NavPageComponent } from './widget/nav-page/nav-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeDashboardComponent,
    LoginComponent,
    HomeOperationsComponent,
    HomeMonitoringComponent,
    HomeReportComponent,
    HomeConfigurationComponent,
    TankComponent,
    AlarmComponent,
    DeviceComponent,
    UpsComponent,
    PumpComponent,
    NavPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    NgChartsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// git add .
// git commit -m "Ordinery Push"
// git push origin main
