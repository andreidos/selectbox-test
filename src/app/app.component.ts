import { NgModule, Component } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import {
  DxSelectBoxModule,
  DxTextBoxModule,
  DxTemplateModule,
  DxButtonModule
} from "devextreme-angular";

//Externals
import CustomStore from "devextreme/data/custom_store";
import DataSource from "devextreme/data/data_source";

@Component({
  selector: "demo-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  options: any;
  searchBoxDataSource: any = [];
  searchValue: string;
  dataStore: any = [
    {
      key: "Found in",
      items: [
        { Name: "Item1", Count: 10, Value: "Value1", ItemType: 1 },
        { Name: "Item2", Count: 20, Value: "Value2", ItemType: 2 }
      ]
    },
    {
      key: "Show all",
      items: [{ Name: "Item3", Count: 30, Value: "Value3", ItemType: 3 }]
    }
  ];

  constructor() {
    this.setSelectBoxDataSource();
    this.setSelectBoxOptions();
  }

  setSelectBoxOptions() {
    this.options = {
      dataSource: this.searchBoxDataSource,
      placeholder: "Search....",
      displayExpr: "Value",
      valueExpr: "Value",
      value: this.searchValue
    };
  }

  setSelectBoxDataSource() {
    let vm = this;

    this.searchBoxDataSource = vm.dataStore;
  }

  click($event) {
    this.options.value = "Value3";
    // this.searchValue = "Value3";
  }
}

@NgModule({
  imports: [
    BrowserModule,
    DxButtonModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxTemplateModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
