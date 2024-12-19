namespace Terrasoft.Configuration
{
    using System;
    using Terrasoft.Common;
    using Terrasoft.Core;
    using Terrasoft.Core.Configuration;
    using Terrasoft.Core.Entities;
    using Terrasoft.Core.Entities.Events;
    [EntityEventListener(SchemaName = "UsrRealty")]
    public class RealtyEntityEventListener : BaseEntityEventListener
    {
        public override void OnSaving(object sender, EntityBeforeEventArgs e)
        {
            base.OnSaving(sender, e);
            Entity realty = (Entity)sender;
            decimal price = realty.GetTypedColumnValue<decimal>("UsrPrice");
            var sysSettingMinPrice = SysSettings.GetValue(realty.UserConnection, "PriceMaxValue");
            if (price > (decimal) sysSettingMinPrice)
            {
                e.IsCanceled = true;

                string messageTemplate = new LocalizableString(realty.UserConnection.ResourceStorage,
                    "UsrRealtyEvents", "LocalizableStrings.ValueIsTooBig.Value").ToString();

                string message = string.Format(messageTemplate, sysSettingMinPrice.ToString());
                throw new Exception(message);
            }
        }
    }
}