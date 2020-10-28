import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Label, ResponsiveContainer, LabelList } from 'recharts';
import Title from './Title';

// Generate Attendance Data
const createData = (time, student) => {{ time, student }};

const data = [
  createData(1, 60),
  createData(2, 28),
  createData(3, 50),
  createData(4, 59),
  createData(5, 60),
  createData(6, 55),
  createData(7, 43),
  createData(8, 37),
  createData(9, 10),
  createData(10, 30),
  createData(11, 34),
  createData(12, 51),
];

export default function Chart() {
  return (
    <React.Fragment>
      <Title>Software Project Management</Title>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time">
            <Label
              value='Week'
              offset={0}
              position="insideBottom"
            />
          </XAxis>
          <YAxis dataKey="student">
            <Label
              angle={-90}
              position="insideLeft"
              style={{ textAnchor: 'middle' }}
            >
              Student number
            </Label>
          </YAxis>
          <Bar type="monotone" dataKey="student" fill="#82ca9d">
            <LabelList dataKey="student" position="top"/>
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
