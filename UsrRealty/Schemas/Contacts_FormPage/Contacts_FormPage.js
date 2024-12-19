define("Contacts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "AddressSearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "AddressSearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "AddressSearchFilter_AddressList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"AddressList"
										]
									}
								]
							}
						],
						"from": [
							"AddressSearchFilter_SearchValue",
							"AddressSearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "remove",
				"name": "CareerSearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "CareerSearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "CareerSearchFilter_CareerList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"CareerList"
										]
									}
								]
							}
						],
						"from": [
							"CareerSearchFilter_SearchValue",
							"CareerSearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "insert",
				"name": "WebsiteId",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrWebsiteId_4vv5wu2",
					"labelPosition": "auto",
					"control": "$PDS_UsrWebsiteId_4vv5wu2",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "ContactInfoFieldsContainer",
				"propertyName": "items",
				"index": 6
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"PDS_UsrWebsiteId_4vv5wu2": {
						"modelConfig": {
							"path": "PDS.UsrWebsiteId"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"AddressList",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "AddressList_PredefinedFilter",
							"loadOnChange": true
						},
						{
							"name": "AddressSearchFilter_AddressList",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"CareerList",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "CareerSearchFilter_CareerList",
							"loadOnChange": true
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});