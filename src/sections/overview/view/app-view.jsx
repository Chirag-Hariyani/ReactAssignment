// import { lazy } from 'react';
// import { faker } from '@faker-js/faker';
import { useState,useEffect,   } from 'react'; // Adjusted spacing here
import axios from 'axios'; // Adjusted spacing here
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

// import data from 'src/staticData.json'; // Adjusted spacing here
import Iconify from 'src/components/iconify'; // Adjusted spacing here
import {TopProducts as ProductsView} from 'src/sections/top-products/view/index'; // Adjusted spacing her
// import AppTasks from '../app-tasks'; // Adjusted spacing here
// import AppNewsUpdate from '../app-news-update';
// import AppOrderTimeline from '../app-order-timeline';
import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';
import AppTrafficBySite from '../app-traffic-by-site';
// import AppCurrentSubject from '../app-current-subject';

// import AppConversionRates from '../app-conversion-rates';
// ----------------------------------------------------------------------

export default function AppView() {
  const [dashBoardCounts,setDashboardCounts]=useState({});
  const [performanceDetails,setPerformanceDetails]=useState({});
  const [communityFeedBackDetails,setCommunityFeedBackDetails]=useState({});

  const fetchPerformance=async ()=>{
   await axios.get('http://3.227.101.169:8020/api/v1/sample_assignment_api_3/',{
    auth: {
      username: 'trial',
      password: 'assignment123',
    },
    headers: {
      'Content-Type': 'application/json',
    }
   } 
    )
  .then(response => {
    // Handle success
    setPerformanceDetails(response.data)
    console.log("setPerformanceDetails",response.data);
  })
  .catch(error => {
    // Handle error
    console.error(error);
  });
  }
  const fetchCommunityFeedback=async ()=>{
    await axios.get('http://3.227.101.169:8020/api/v1/sample_assignment_api_5/',{
     auth: {
       username: 'trial',
       password: 'assignment123',
     },
     headers: {
       'Content-Type': 'application/json',
     }
    } 
     )
   .then(response => {
     // Handle success
     setCommunityFeedBackDetails(response.data)
   })
   .catch(error => {
     // Handle error
     console.error(error);
   });
   }
  const fetchDashboardData=async ()=>{
    await axios.get('http://3.227.101.169:8020/api/v1/sample_assignment_api_1/',{
     auth: {
       username: 'trial',
       password: 'assignment123',
     },
     headers: {
       'Content-Type': 'application/json',
     }
    } 
     )
   .then(response => {
     // Handle success
     setDashboardCounts(response.data)
     console.log("response",response.data);
   })
   .catch(error => {
     // Handle error
     console.error(error);
   });
   }
  useEffect(()=>{
    fetchDashboardData();
    fetchPerformance();
    fetchCommunityFeedback();
  },[])
    return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back 👋
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={4}>
          <AppWidgetSummary
            title="Purchases"
            total={dashBoardCounts?.purchases ||0}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={4}>
          <AppWidgetSummary
            title="Revenue"
            total={dashBoardCounts?.revenue ||0}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>
        {/* <Grid xs={12} sm={6} md={3} >
            <AppWidgetSummary
              title="Revenue"
              total={dashBoardCounts?.revenue}
              color="warning"
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
            />
          </Grid> */}

        

        <Grid xs={12} sm={6} md={4}>
          <AppWidgetSummary
            title="Refunds"
            total={dashBoardCounts?.refunds ||0}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>
        

        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Caparison"
            chart={{
              labels: [
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ],
              series: [
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'column',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                // {
                //   name: 'Team C',
                //   type: 'line',
                //   fill: 'solid',
                //   data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                // },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          {
             performanceDetails && <AppCurrentVisits
             title={performanceDetails?.title}
             message={performanceDetails?.message}
             chart={{
               series: [
                 { label: performanceDetails?.title, value: performanceDetails?.score },
               ],
             }}
           />
          }
          
         
        </Grid>

         {/* Top Products */}
        <Grid xs={12} md={6} lg={8}>
        <AppWebsiteVisits
            title="Customers By Device"
            // subheader="(+43%) than last year"
            chart={{
              labels: [
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                // '08/01/2003',
                // '09/01/2003',
                // '10/01/2003',
                // '11/01/2003',
              ],
              series: [
                
                {
                  name: 'Team A',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'gradient',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
        
        {
          communityFeedBackDetails &&  <AppTrafficBySite
          title="Community Feedback"
          list={[
            {
              name: 'Negative',
              value: communityFeedBackDetails.negative,
              icon: <Iconify icon="eva:minus-circle-fill" color="#FF0000" width={32} />,
            },
            {
              name: 'Positive',
              value: communityFeedBackDetails.positive,
              icon: <Iconify icon="eva:plus-circle-fill" color="#00CC00" width={32} />,
            },
            {
              name: 'Natural',
              value: communityFeedBackDetails.neutral,
              icon: <Iconify icon="eva:plus-circle-fill" color="#006097" width={32} />,
            },
            
          ]}
        />
        }
         
       
        </Grid>

        <Grid xs={12} md={12} lg={12}>
          <ProductsView/>
        </Grid>
        {/* <Grid xs={12} md={6} lg={8}>
          <AppNewsUpdate
            title="News Update"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: faker.person.jobTitle(),
              description: faker.commerce.productDescription(),
              image: `/assets/images/covers/cover_${index + 1}.jpg`,
              postedAt: faker.date.recent(),
            }))}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppOrderTimeline
            title="Order Timeline"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: [
                '1983, orders, $4220',
                '12 Invoices have been paid',
                'Order #37745 from September',
                'New order placed #XF-2356',
                'New order placed #XF-2346',
              ][index],
              type: `order${index + 1}`,
              time: faker.date.past(),
            }))}
          />
        </Grid> */}

      </Grid>
    </Container>
  );
}
