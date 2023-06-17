import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Tabs.css'
import Reader from '../Reader/Reader';
import Dropdown from "../Reader/Dropdown/Dropdown";

export default () => (
  <Tabs>
    <TabList className="tabs">
      <Tab>RSVP Reader</Tab>
      <Tab>Test</Tab>
      <Tab>Welcome</Tab>
    </TabList>

    <TabPanel>
      <Reader/>
    </TabPanel>
    <TabPanel>
      <h2>Test</h2>
    </TabPanel>    
    <TabPanel>
      <h2>Welcome</h2>
      <div>
        <Dropdown/>
      </div>
      
    </TabPanel>
  </Tabs>
);