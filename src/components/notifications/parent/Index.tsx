import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import AllNotifications from "./tabs/All";
import Learning from "./tabs/Learning";
import SafetyAlerts from "./tabs/SafetyAlerts";
import SystemUpdates from "./tabs/SystemUpdates";

const ParentNotificationTab = () => {
  const Tabs = createMaterialTopTabNavigator();
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="All"
        component={AllNotifications}
      />
      <Tabs.Screen
        name="Learning"
        component={Learning}
      />
      <Tabs.Screen
        name="Safety Alerts"
        component={SafetyAlerts}
      />
      <Tabs.Screen
        name="System Updates"
        component={SystemUpdates}
      />
    </Tabs.Navigator>
  );
};

export default ParentNotificationTab;
