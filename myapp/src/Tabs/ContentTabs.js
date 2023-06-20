import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Tabs.css'
import Reader from '../Reader/Reader';
import Landing from "../Landing/Landing"
import Testing from "../Reader/Testing/Testing"

function ContentTabs(){
return(
  <Tabs>
    <TabList className="tabs">
    <Tab className="tab">О проекте</Tab>
      <Tab className="tab">RSVP чтение</Tab>
      <Tab className="tab">Тестирование</Tab>
    </TabList>
    <TabPanel>
        <Landing/>
    </TabPanel>
    <TabPanel>
      <Reader/>
    </TabPanel>
    <TabPanel>
      <Testing/>
    </TabPanel>    
  </Tabs>
)
} export default ContentTabs;