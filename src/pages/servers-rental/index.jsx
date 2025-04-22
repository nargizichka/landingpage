import React from "react";
import ServerRentalButtons from "./components/ServerRentalButtons";

import ServerRentalFilters from "./components/ServerRentalFilters";
import OrderRequest from "./components/OrderRequest";
import UnlimitedDedicatedServers from "./components/UnlimitedDedicatedServers";
import DeploymentAdvantages from "./components/DeploymentAdvantages";
import FiveDayFreeTrial from "./components/FiveDayFreeTrial";
import TotalServerControl from "./components/TotalServerControl";
import DeploymentHelp from "./components/DeploymentHelp";
import TrustedEquipment from "./components/TrustedEquipment";

function ServersRental() {
  return (
    <div className="container w-[85%] mx-auto ">
      <ServerRentalButtons />
      <ServerRentalFilters />
      <OrderRequest />
      <UnlimitedDedicatedServers />
      <DeploymentAdvantages />
      <FiveDayFreeTrial />
      <TotalServerControl />
      <DeploymentHelp />
      <TrustedEquipment />
    </div>
  );
}

export default ServersRental;
