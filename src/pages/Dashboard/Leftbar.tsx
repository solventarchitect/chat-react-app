import React from "react";
import { TabContent, TabPane } from "reactstrap";

// hooks
import { useRedux } from "../../hooks/index";

// constants
import { TABS } from "../../constants/index";

// component
import Profile from "./Profile/index";
import Chats from "./Chats/index";
import Contacts from "./Contacts/index";
import Calls from "./Calls/index";
import Bookmark from "./Bookmark/index";
import Settings from "./Settings/index";

interface LeftbarProps {}
const Leftbar = (props: LeftbarProps) => {
  // global store
  const { useAppSelector } = useRedux();

  const { activeTab } = useAppSelector(state => ({
    activeTab: state.Layout.activeTab,
  }));

  // console.log("activeTab", activeTab);
  function changeActiveTab(tab: any) {
    // console.log("activeTab", tab);
  }

  // const changeActiveTab = (tab: string) => {
  //   console.log("activeTab", tab);
  // };

  return (
    <>
      {/* start chat-leftsidebar */}
      <div className="chat-leftsidebar">
        <TabContent activeTab={activeTab}>
          {/* Start Profile tab-pane */}
          <TabPane
            tabId={TABS.USERS}
            role="tabpanel"
            aria-labelledby="pills-user-tab"
          >
            <div onChange={() => changeActiveTab("pills-user")}>
              <Profile />
            </div>
          </TabPane>

          <TabPane
            tabId={TABS.CHAT}
            role="tabpanel"
            aria-labelledby="pills-chat-tab"
            onClick={() => changeActiveTab("pills-chat")}
          >
            <Chats />
          </TabPane>

          <TabPane
            tabId={TABS.CONTACTS}
            role="tabpanel"
            aria-labelledby="pills-contacts-tab"
          >
            <Contacts />
          </TabPane>

          <TabPane
            tabId={TABS.CALLS}
            role="tabpanel"
            aria-labelledby="pills-calls-tab"
          >
            <Calls />
          </TabPane>

          <TabPane
            tabId={TABS.BOOKMARK}
            role="tabpanel"
            aria-labelledby="pills-bookmark-tab"
          >
            <Bookmark />
          </TabPane>

          <TabPane
            tabId={TABS.SETTINGS}
            role="tabpanel"
            aria-labelledby="pills-setting-tab"
          >
            <Settings />
          </TabPane>
        </TabContent>
      </div>
    </>
  );
};

export default Leftbar;
