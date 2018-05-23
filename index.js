import Vue from "vue";

import { DxDataGrid } from "devextreme-vue";
import { sales, selectedKeys } from "./data.js";

new Vue({
  el: "#app",
  components: { DxDataGrid },
  data() {
    return {
      sales,
      selectedKeys,
      grouping: { autoExpandAll: true },
      groupPanel: { visible: true },
      paging: { pageSize: 10 },
      selection: { mode: "multiple" },
      filterRow: { visible: true },
      columns: [
        {
          dataField: "orderId",
          caption: "Order ID",
          allowSorting: false,
          allowFiltering: false,
          allowGrouping: false,
          allowReordering: false,
          width: 100
        },
        {
          dataField: "city"
        },
        {
          dataField: "country",
          sortOrder: "asc"
        },
        {
          dataField: "region",
          groupIndex: 0
        },
        {
          dataField: "date",
          dataType: "date",
          selectedFilterOperation: ">=",
          filterValue: "2013/04/01",
          width: 150
        },
        {
          dataField: "amount",
          format: "currency",
          selectedFilterOperation: ">=",
          filterValue: 1000,
          width: 100
        }
      ]
    };
  }
});
