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
import { HomeConfigurationBodyComponent } from './home-configuration/home-configuration-body/home-configuration-body.component';
import { HomeOperationsBodyComponent } from './home-operations/home-operations-body/home-operations-body.component';
import { TablePagingComponent } from './widget/table-paging/table-paging.component';
import { HomeConfigurationPopupsComponent } from './home-configuration/home-configuration-popups/home-configuration-popups.component';
import { HomeOperationsPopupsComponent } from './home-operations/home-operations-popups/home-operations-popups.component';
import { ToastComponent } from './widget/toast/toast.component';
import { DatePickerComponent } from './widget/date-picker/date-picker.component';
import { HomeCalenderComponent } from './home-calender/home-calender.component';
import { HomeCashAndBankComponent } from './home-cash-and-bank/home-cash-and-bank.component';
import { HomePurchaseComponent } from './home-purchase/home-purchase.component';
import { HomeExpensesComponent } from './home-expenses/home-expenses.component';
import { HomeStaffMasterComponent } from './home-staff-master/home-staff-master.component';
import { HomeInventoryComponent } from './home-inventory/home-inventory.component';
import { CStoreComponent } from './home-dashboard/c-store/c-store.component';
import { ForecortComponent } from './home-dashboard/forecort/forecort.component';
import { ProductManagementComponent } from './home-inventory/product-management/product-management.component';
import { PriceManagementComponent } from './home-inventory/price-management/price-management.component';
import { BranchManagementComponent } from './home-inventory/branch-management/branch-management.component';
import { StockManagementComponent } from './home-inventory/stock-management/stock-management.component';
import { MasterSettingsComponent } from './home-configuration/master-settings/master-settings.component';
import { OtherSettingsComponent } from './home-configuration/other-settings/other-settings.component';
import { AuditingInformationComponent } from './home-configuration/auditing-information/auditing-information.component';
import { DocumentPrefixComponent } from './home-configuration/document-prefix/document-prefix.component';
import { LocalAccountComponent } from './home-operations/local-account/local-account.component';
import { DiscountConfigurationsComponent } from './home-operations/discount-configurations/discount-configurations.component';

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
    HomeConfigurationBodyComponent,
    HomeOperationsBodyComponent,
    TablePagingComponent,
    HomeConfigurationPopupsComponent,
    HomeOperationsPopupsComponent,
    ToastComponent,
    DatePickerComponent,
    HomeCalenderComponent,
    HomeCashAndBankComponent,
    HomePurchaseComponent,
    HomeExpensesComponent,
    HomeStaffMasterComponent,
    HomeInventoryComponent,
    CStoreComponent,
    ForecortComponent,
    ProductManagementComponent,
    PriceManagementComponent,
    BranchManagementComponent,
    StockManagementComponent,
    MasterSettingsComponent,
    OtherSettingsComponent,
    AuditingInformationComponent,
    DocumentPrefixComponent,
    LocalAccountComponent,
    DiscountConfigurationsComponent,
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
