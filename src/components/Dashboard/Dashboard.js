

import React, { PureComponent } from 'react';

import { PieChart, Pie, Tooltip } from 'recharts';

function Dashboard() {

  const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  return (
    <>
  
        <div style={{marginLeft:"100px"}}>
        <PieChart width={400} height={400}>
          <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#000000" />
          <Tooltip/>
        </PieChart>
        </div>
       
    
    </>
      
    
  );
}

export default Dashboard;
