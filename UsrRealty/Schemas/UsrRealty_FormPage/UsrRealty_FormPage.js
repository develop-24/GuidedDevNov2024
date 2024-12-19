define("UsrRealty_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common", "RightUtilities"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk, RightUtilities)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "9f302edc-b163-4959-a26a-f75ad0ee2d4e",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_rr80tox",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_rr80tox_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "actions-button-icon",
					"clicked": {},
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CalcAvgPriceMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_r7qpix1_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrCalculateAverageRealtyPriceProcess",
							"processRunType": "ForTheSelectedPage",
							"showNotification": true,
							"recordIdProcessParameterName": "RealtyIdParameter"
						}
					}
				},
				"parentName": "Button_rr80tox",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RunWebServiceMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_box9i9i_caption)#",
					"visible": true,
					"clicked": {
						"request": "usr.RunWebServiceRequest"
					},
					"icon": "bars-button-icon"
				},
				"parentName": "Button_rr80tox",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_tcv3w6x_caption)#",
					"color": "outline",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "database-icon",
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "RealtyNumber",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_UsrNumber_wnydqia",
					"labelPosition": "auto",
					"control": "$PDS_UsrNumber_wnydqia",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_328dy2o",
					"labelPosition": "auto",
					"control": "$PDS_UsrPrice_328dy2o"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Area",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrArea_cr5a4p1",
					"labelPosition": "auto",
					"control": "$PDS_UsrArea_cr5a4p1"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Commission",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCommission_ykm0ogm",
					"labelPosition": "auto",
					"control": "$PDS_UsrCommission_ykm0ogm",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "SecretTabVisible",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PageParameters_UsrBooleanParameter1_r7szu24",
					"labelPosition": "auto",
					"control": "$PageParameters_UsrBooleanParameter1_r7szu24",
					"visible": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "RealtyType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrType_lmm35r5",
					"labelPosition": "auto",
					"control": "$PDS_UsrType_lmm35r5",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOfferType_qc997mm",
					"labelPosition": "auto",
					"control": "$PDS_UsrOfferType_qc997mm",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_poxxqod",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_poxxqod_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "OfferType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_vmayuq6",
					"labelPosition": "auto",
					"control": "$PDS_UsrComment_vmayuq6",
					"multiline": false,
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_m10uo72",
					"labelPosition": "auto",
					"control": "$PDS_UsrManager_m10uo72",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_05ataxc",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_05ataxc_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Manager",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Country",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCountry_gwfshtk",
					"labelPosition": "auto",
					"control": "$PDS_UsrCountry_gwfshtk",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "City",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCity_u5osj42",
					"labelPosition": "auto",
					"control": "$PDS_UsrCity_u5osj42",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "ListAction_nov2xs8",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "ComboBox.AddNewRecord",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "City",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PromotionDate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_UsrPromotionDate_5bo0cu8",
					"labelPosition": "auto",
					"control": "$PDS_UsrPromotionDate_5bo0cu8",
					"pickerType": "date"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Percent",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "#ResourceString(Percent_label)#",
					"control": "$PDS_UsrOfferTypeUsrCommissionPercent",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_l5a833z",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_l5a833z_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_0x34667",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_l5a833z",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_og7lliz",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_0x34667",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_z2gw8ij",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_z2gw8ij_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_og7lliz",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_5lwz93i",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_5lwz93i_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_3wh6il2DS"
						}
					}
				},
				"parentName": "FlexContainer_og7lliz",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_qnakz45",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_qnakz45_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_og7lliz",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_iac97hs",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_iac97hs_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "VisitsGridDetail"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_qnakz45",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_ekn1x2t",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_ekn1x2t_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_qnakz45",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_0j6cng6",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_0j6cng6_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_0j6cng6_GridDetail_3wh6il2",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_3wh6il2"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_0j6cng6_SearchValue",
							"GridDetailSearchFilter_0j6cng6_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_og7lliz",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_r1inp8n",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_l5a833z",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "VisitsGridDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_3wh6il2",
					"activeRow": "$GridDetail_3wh6il2_ActiveRow",
					"selectionState": "$GridDetail_3wh6il2_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_3wh6il2_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_3wh6il2DS_Id",
					"columns": [
						{
							"id": "5e3e438c-2650-0895-9fed-d3a12573c280",
							"code": "GridDetail_3wh6il2DS_UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_3wh6il2DS_UsrVisitDateTime)#",
							"dataValueType": 7,
							"width": 114
						},
						{
							"id": "90107b13-d1b5-19df-6458-8d5611ad01e5",
							"code": "GridDetail_3wh6il2DS_UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_3wh6il2DS_UsrPotentialCustomer)#",
							"dataValueType": 10,
							"width": 136
						},
						{
							"id": "ecd75ff5-ecda-371f-c7d7-7444a3a0252c",
							"code": "GridDetail_3wh6il2DS_UsrManager",
							"caption": "#ResourceString(GridDetail_3wh6il2DS_UsrManager)#",
							"dataValueType": 10,
							"width": 114
						},
						{
							"id": "255ef359-3b86-7717-4649-7f8f1d1d3c65",
							"code": "GridDetail_3wh6il2DS_UsrComment",
							"caption": "#ResourceString(GridDetail_3wh6il2DS_UsrComment)#",
							"dataValueType": 28,
							"width": 121
						},
						{
							"id": "1919088b-e97d-87c7-4063-5907ca94167f",
							"code": "GridDetail_3wh6il2DS_CreatedOn",
							"caption": "#ResourceString(GridDetail_3wh6il2DS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "461d8317-a73a-a557-fdd0-258cc0ebe479",
							"code": "GridDetail_3wh6il2DS_UsrParentRealty",
							"caption": "#ResourceString(GridDetail_3wh6il2DS_UsrParentRealty)#",
							"dataValueType": 10
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_r1inp8n",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_3wh6il2_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_3wh6il2DS",
							"filters": "$GridDetail_3wh6il2 | crt.ToCollectionFilters : 'GridDetail_3wh6il2' : $GridDetail_3wh6il2_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_3wh6il2_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "VisitsGridDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_3wh6il2_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_3wh6il2DS",
							"filters": "$GridDetail_3wh6il2 | crt.ToCollectionFilters : 'GridDetail_3wh6il2' : $GridDetail_3wh6il2_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_3wh6il2_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_3wh6il2_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_3wh6il2_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "VisitsGridDetail",
							"filters": "$GridDetail_3wh6il2 | crt.ToCollectionFilters : 'GridDetail_3wh6il2' : $GridDetail_3wh6il2_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_3wh6il2_SelectionState"
						}
					}
				},
				"parentName": "VisitsGridDetail",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_3wh6il2_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_3wh6il2DS",
							"filters": "$GridDetail_3wh6il2 | crt.ToCollectionFilters : 'GridDetail_3wh6il2' : $GridDetail_3wh6il2_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_3wh6il2_SelectionState"
						}
					}
				},
				"parentName": "VisitsGridDetail",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "SecretTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_1vvh88s_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_d3v1yg8",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					}
				},
				"parentName": "SecretTab",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPrice_328dy2o": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 50,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrArea_cr5a4p1": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 100,
									"message": "#ResourceString(AreaCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrType_lmm35r5": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrOfferType_qc997mm": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_UsrComment_vmayuq6": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrManager_m10uo72": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrNumber_wnydqia": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"PDS_UsrCountry_gwfshtk": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"PDS_UsrCity_u5osj42": {
						"modelConfig": {
							"path": "PDS.UsrCity"
						}
					},
					"PDS_UsrCommission_ykm0ogm": {
						"modelConfig": {
							"path": "PDS.UsrCommission"
						}
					},
					"PDS_UsrOfferTypeUsrCommissionPercent": {
						"modelConfig": {
							"path": "PDS.UsrOfferTypeUsrCommissionPercent"
						}
					},
					"PDS_UsrPromotionDate_5bo0cu8": {
						"modelConfig": {
							"path": "PDS.UsrPromotionDate"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.FutureDateValidator",
								"params": {
									"message": "#ResourceString(FutureDateWarning)#"
								}
							}
						}
					},
					"GridDetail_3wh6il2": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_3wh6il2DS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_0j6cng6_GridDetail_3wh6il2",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrComment"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_3wh6il2DS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_3wh6il2DS.UsrVisitDateTime"
									}
								},
								"GridDetail_3wh6il2DS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_3wh6il2DS.UsrPotentialCustomer"
									}
								},
								"GridDetail_3wh6il2DS_UsrManager": {
									"modelConfig": {
										"path": "GridDetail_3wh6il2DS.UsrManager"
									}
								},
								"GridDetail_3wh6il2DS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_3wh6il2DS.UsrComment"
									}
								},
								"GridDetail_3wh6il2DS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_3wh6il2DS.CreatedOn"
									}
								},
								"GridDetail_3wh6il2DS_UsrParentRealty": {
									"modelConfig": {
										"path": "GridDetail_3wh6il2DS.UsrParentRealty"
									}
								},
								"GridDetail_3wh6il2DS_Id": {
									"modelConfig": {
										"path": "GridDetail_3wh6il2DS.Id"
									}
								}
							}
						}
					},
					"PageParameters_UsrBooleanParameter1_r7szu24": {
						"modelConfig": {
							"path": "PageParameters.UsrSecretTabVisibleParameter"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_3wh6il2DS": [
							{
								"attributePath": "UsrParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealty",
							"attributes": {
								"UsrOfferTypeUsrCommissionPercent": {
									"path": "UsrOfferType.UsrCommissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_3wh6il2DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisit",
							"attributes": {
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								},
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"UsrManager": {
									"path": "UsrManager"
								},
								"UsrComment": {
									"path": "UsrComment"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"UsrParentRealty": {
									"path": "UsrParentRealty"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
	
          {
		
                  request: "usr.PushButtonRequest",
		
                  /* Implementation of the custom query handler. */
		
                  handler: async (request, next) => {
                      console.log("Button works...");
                      console.log(request);
                      //Terrasoft.showInformation("My button was pressed.");
                      var price = await request.$context.PDS_UsrPrice_328dy2o;
                      console.log("Price = " + price);
                      request.$context.PDS_UsrArea_cr5a4p1 = price * 0.2;

                      let s = await request.$context.Resources.Strings.MyLocString;
                    
                    console.log(s);

                    const sysSettingsService = new sdk.SysSettingsService();

                    const minPrice = await sysSettingsService.getByCode('MinPriceToRequireRealtyComment');
                    console.log("pricesetting");
                    console.log(minPrice);
                    console.log(minPrice.value);
                    console.log(pricesetting);

                    var config = {
    					
                      operation: "HasAccessToSecretTab"
    				
                    };
                   
                    var result;
    				
                    RightUtilities.checkCanExecuteOperation(config, function (response) 
                                                            
                                                            {result = response; 
                                                             
                                                             request.$context.PageParameters_UsrBooleanParameter1_r7szu24 = response;} , request);
                    
                    console.log("result = " + result);
                      /* Call the next handler if it exists and return its result. */
                      return next?.handle(request);
		
                  }
                
	
          },
          {
             request: "crt.HandleViewModelAttributeChangeRequest",
	  /* The custom implementation of the system query handler. */
	  
            handler: async (request, next) => {
			  
              if (request.attributeName === 'PDS_UsrPrice_328dy2o' || 	  // if price changed
				 
                  request.attributeName === 'PDS_UsrOfferTypeUsrCommissionPercent' ) { 		// or percent changed
						
                var price = await request.$context.PDS_UsrPrice_328dy2o;
						
                var percent = await request.$context.PDS_UsrOfferTypeUsrCommissionPercent;
						
                var commission = price * percent / 100;
						
                request.$context.PDS_UsrCommission_ykm0ogm = commission;
			  
              }
			  
              /* Call the next handler if it exists and return its result. */
			  
              return next?.handle(request);}
	  },
        {
				request: "usr.RunWebServiceRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("Run web service call works...");

					// get id from type lookup type object
					var typeObject = await request.$context.PDS_UsrType_lmm35r5;
					var typeId = "";
					if (typeObject) {
						typeId = typeObject.value;
					}

					// get id from type lookup offer type object
					var offerTypeObject = await request.$context.PDS_UsrOfferType_qc997mm;
					var offerTypeId = "";
					if (offerTypeObject) {
						offerTypeId = offerTypeObject.value;
					}
                    
                  /* Create an instance of the HTTP client from @creatio-devkit/common. */
					const httpClientService = new sdk.HttpClientService();

					/* Specify the URL to run web service method. */
					const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
					const transferName = "rest";
					const serviceName = "RealtyService";
					const methodName = "GetMaxPriceByTypeId";
					const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);
        //const endpoint = "http://localhost/D1_Studio/0/rest/RealtyService/GetMaxPriceByTypeId";
					/* Send a POST HTTP request. The HTTP client converts the response body from JSON to a JS object automatically. */
					var params = {
						realtyTypeId: typeId,
						realtyOfferTypeId: offerTypeId
					};
					const response = await httpClientService.post(endpoint, params);
					
					console.log("response max price = " + response.body.GetMaxPriceByTypeIdResult);
					
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			}                                                                                                                                                                       
]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
              /* The validator type must contain a vendor prefix.
			
              Format the validator type in PascalCase. */
			
                "usr.FutureDateValidator": {
				
                  validator: function (config) {
					
                    return function (control) {
						
                      let value = control.value;
						
                      let today = new Date();
						
                      let valueIsCorrect = value >= today;
						
                      var result;
						
                            if (valueIsCorrect) {
							
                                  result = null;
						
                            } else {
							
                                  result = {
								
                                    "usr.FutureDateValidator": { 
									
                                      message: config.message
								
                                    }
							
                                  };
						
                            }
						
                      return result;
					
                    };
				
                  },
				
                  params: [
					
			
                    {
						
                      name: "message"
					
                    }
				
                  ],
				
                  async: false
			
                },
          /* The validator type must contain a vendor prefix.
			Format the validator type in PascalCase. */
			"usr.DGValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"usr.DGValidator": { 
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
          
        }/**SCHEMA_VALIDATORS*/
	};
});