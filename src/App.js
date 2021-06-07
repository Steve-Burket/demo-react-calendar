// import logo from './logo.svg';
import './App.css';
import { React, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

function App() {
  // Local state for selected DATE
  const [dateState, setDateState] = useState(new Date(2021, 5, 7));
  // const [dayOfWeek, setDayOfWeek] = useState('')

  // The beginning of a period that shall be displayed.
  // If you wish to use React-Calendar in an uncontrolled way,
  // use defaultActiveStartDate instead.
  // allowPartialRange;

  // Change Date Method
  const changeDate = (e) => {
    setDateState(e);
  };

  // Add a  LESSON
  // When buttons is clicked
  // conditonally render a Form
  // w/ fields:
  // Student's name,
  // instrument,
  // date,
  // time,
  // location
  // save button
  const addLesson = (e) => {};

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Lessons With... (teachers name) </h1>
        <h3>Demo React Calendar </h3>
      </header>
      <div className='calendar-container'>
        <Calendar value={dateState} onChange={changeDate} />
      </div>
      <p>
        Current selected date is:
        <b>{moment(dateState).format('MMMM Do YYYY')}</b>
      </p>
      <button onClick={(e) => addLesson(e)}>+ Add lesson</button>
      <table className='calendar-table'>
        <thead>
          <th>Time</th>
          <th>{moment(dateState).format('ddd M/D')}</th>
          {/* <th>Tuesday 6/8</th>
          <th>Wednesday 6/9</th>
          <th>Thursday 6/10</th>
          <th>Friday 6/11</th>
          <th>Saturday 6/12</th> */}
        </thead>
        <tbody className='calendar-table-body'>
          <tr>
            <td>10:00 am</td>
            <td value={dateState} onChange={changeDate}>
              Student/
              <br />
              Guitar
              <br />
              Online
            </td>
            {/* <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td> */}
          </tr>
          <tr>
            <td>10:30 am</td>
            {/* <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td> */}
          </tr>
          <tr>
            <td>11:00 am</td>

            <td>
              Student/
              <br />
              Guitar
              <br />
              In-home
            </td>
            {/* <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td> */}
          </tr>
          <tr>
            <td>11:30 am</td>
            {/* <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td> */}
          </tr>
          <tr>
            <td>12:00 pm</td>
            <td>
              Student/
              <br />
              Guitar
              <br />
              Studio
            </td>
            {/* <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td> */}
          </tr>
        </tbody>
        <form>
          <input placeholder='name' />
          <input placeholder='instrument' />
        </form>
      </table>
    </div>
  );
}

export default App;
