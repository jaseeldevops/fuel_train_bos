import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-configuration-body',
  templateUrl: './home-configuration-body.component.html',
  styleUrls: ['./home-configuration-body.component.css'],
})
export class HomeConfigurationBodyComponent implements OnInit {
  @Input() page: any;
  @Input() navCount: any;
  @Input() body: any;
  @Input() data: any;

  constructor() {}

  ngOnInit(): void {}

  onClickSiteConfigurationIslandSettingsEdit = (item: any) => {};
  onClickSiteConfigurationIslandSettingsBin = (item: any) => {};
  onClickSiteConfigurationProductMasterEdit = (item: any) => {};
  onClickSiteConfigurationProductMasterBin = (item: any) => {};
  onClickSiteConfigurationProductListEdit = (item: any) => {};
  onClickSiteConfigurationProductListBin = (item: any) => {};
  onClickSiteConfigurationGradeListEdit = (item: any) => {};
  onClickSiteConfigurationGradeListBin = (item: any) => {};
  onClickSiteConfigurationShiftEdit = (item: any) => {};
  onClickSiteConfigurationShiftBin = (item: any) => {};

  onClickDeviceConfigurationTankGaugeEdit = (item: any) => {};
  onClickDeviceConfigurationTankGaugeBin = (item: any) => {};
  onClickDeviceConfigurationConsoleListEdit = (item: any) => {};
  onClickDeviceConfigurationConsoleListBin = (item: any) => {};
  onClickDeviceConfigurationTankListEdit = (item: any) => {};
  onClickDeviceConfigurationTankListBin = (item: any) => {};
  onClickDeviceConfigurationTankConfigurationGetDetails = () => {};
  onClickDeviceConfigurationTankConfigurationGenerateStrappingTable = () => {};
  onClickDeviceConfigurationTankConfigurationSendToFcc = () => {};
  onClickDeviceConfigurationTankConfigurationEdit = (item: any) => {};
  onClickDeviceConfigurationTankConfigurationBin = (item: any) => {};
  onClickDeviceConfigurationUpsConfigurationEdit = (item: any) => {};
  onClickDeviceConfigurationUpsConfigurationBin = (item: any) => {};
  onClickDeviceConfigurationOtherDeviceEdit = (item: any) => {};
  onClickDeviceConfigurationOtherDeviceBin = (item: any) => {};

  onClickSoftwareConfigurationParameterEdit = (item: any) => {};
  onClickSoftwareConfigurationDeviceDriverEdit = (item: any) => {};
  onClickSoftwareConfigurationActivateConfigSelect = (item: any) => {};
  onClickSoftwareConfigurationSchedulerConfigEdit = (item: any) => {};

  onClickUserManagementUserManagementBin = (item: any) => {};
  onClickUserManagementUserManagementEdit = (item: any) => {};
  onClickUserManagementRoleMasterBin = (item: any) => {};
  onClickUserManagementRoleMasterEdit = (item: any) => {};
  onClickUserManagementRoleScreenMappingEdit = (item: any) => {};

  onClickalarmInterlockAlarmEdit = (item: any) => {};
}
