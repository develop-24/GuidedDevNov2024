namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyEventsSchema

	/// <exclude/>
	public class UsrRealtyEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyEventsSchema(UsrRealtyEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("113b70ef-4b02-4652-9f0a-721486ef3048");
			Name = "UsrRealtyEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("2b3ef121-6e40-4001-9e3f-d02c878c2550");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,77,107,219,64,16,189,7,242,31,6,209,131,4,102,73,174,77,27,168,141,91,2,161,45,177,210,75,233,97,189,26,43,91,246,67,236,172,156,186,37,255,189,179,90,185,118,228,20,50,23,105,103,222,188,121,111,24,39,45,82,39,21,66,141,33,72,242,155,40,22,222,109,116,219,7,25,181,119,231,103,127,206,207,128,163,39,237,90,88,237,40,162,189,58,78,29,55,90,235,221,127,139,1,197,210,69,29,53,210,107,48,98,185,69,23,247,208,239,67,122,55,228,110,53,139,112,24,202,149,122,64,43,63,179,7,120,15,197,61,133,59,148,38,238,138,234,71,110,234,250,181,209,10,148,145,68,144,107,47,208,192,91,152,75,194,23,42,153,101,92,192,17,161,223,178,100,221,32,108,189,110,224,139,91,201,45,27,41,253,250,39,170,8,132,174,193,48,131,76,56,199,13,187,26,104,63,132,150,0,171,3,221,17,115,138,53,171,16,255,216,246,52,88,93,61,135,101,94,8,131,31,54,94,230,68,149,27,38,224,6,149,182,210,64,23,180,74,91,202,93,226,19,198,122,215,97,179,240,166,183,238,155,52,61,190,27,161,215,101,218,228,215,132,47,166,163,245,6,202,204,116,13,151,23,251,168,158,131,38,174,82,160,184,161,133,116,10,13,54,44,34,134,30,153,249,20,71,49,164,139,224,155,36,217,98,141,182,51,50,38,217,14,31,225,214,43,105,244,111,185,54,184,26,112,229,104,230,158,48,240,209,58,94,62,95,172,184,67,242,125,80,12,242,129,89,102,167,99,82,28,206,37,223,89,49,131,226,100,2,137,97,53,55,84,123,63,215,109,126,21,149,168,253,168,160,122,133,13,150,159,19,226,163,15,86,198,114,98,143,7,95,138,139,249,155,147,109,167,136,15,193,63,14,246,151,191,20,118,201,224,190,127,10,127,58,60,199,95,254,60,253,5,167,152,202,124,226,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("2072966f-962d-90ee-b9fd-53c350893e96"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("2b3ef121-6e40-4001-9e3f-d02c878c2550"),
				CreatedInSchemaUId = new Guid("113b70ef-4b02-4652-9f0a-721486ef3048"),
				ModifiedInSchemaUId = new Guid("113b70ef-4b02-4652-9f0a-721486ef3048")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("113b70ef-4b02-4652-9f0a-721486ef3048"));
		}

		#endregion

	}

	#endregion

}

