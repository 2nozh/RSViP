import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Tabs.css'
import Reader from '../Reader/Reader';
import Landing from "../Landing/Landing"

function ContentTabs(){
return(
  <Tabs>
    <TabList className="tabs">
      <Tab className="tab">RSVP Reader</Tab>
      <Tab className="tab">Test</Tab>
      <Tab className="tab">Welcome</Tab>
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
        <Landing/>
      </div>
      
    </TabPanel>
  </Tabs>
)
} export default ContentTabs;