import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Tabs.css'
import Reader from '../Reader/Reader';

export default () => (
  <Tabs>
    <TabList className="tabs">
      <Tab>RSVP Reader</Tab>
      <Tab>Test</Tab>
    </TabList>

    <TabPanel>
      <h2>RSVP Reader</h2>
      <Reader/>
    </TabPanel>
    <TabPanel>
      <h2>Test</h2>
    </TabPanel>
  </Tabs>
);