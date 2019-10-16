import React from 'react';

import './Calendar.css';

const calendar = () => (

    <div class="centered">
    <table border="0">
    <tbody><tr class="row"><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>
    <tr class="row"><td class="col"><span class="date">&nbsp;</span></td><td class="col"><span class="date">&nbsp;</span></td><td class="col"><span class="date">1</span></td><td class="col"><span class="date">2</span></td><td class="col"><span class="date">3</span></td><td class="col"><span class="date">4</span></td><td class="col"><span class="date">5</span></td></tr>
    <tr class="row"><td class="col"><span class="date">6</span></td><td class="col"><span class="date">7</span></td><td class="col"><span class="date">8</span></td><td class="col"><span class="date">9</span></td><td class="col"><span class="date">10</span></td><td class="col"><span class="date">11</span></td><td class="col"><span class="date">12</span></td></tr>
    <tr class="row"><td class="col"><span class="date">13</span></td><td class="col"><span class="date">14</span></td><td class="col"><span class="date">15</span></td><td class="col"><span class="date">16</span></td><td class="col"><span class="date">17</span></td><td class="col"><span class="date">18</span></td><td class="col"><span class="date">19</span></td></tr>
    <tr class="row"><td class="col"><span class="date">20</span></td><td class="col"><span class="date">21</span></td><td class="col"><span class="date">22</span></td><td class="col"><span class="date">23</span></td><td class="col"><span class="date">24</span></td><td class="col"><span class="date">25</span></td><td class="col"><span class="date">26</span></td></tr>
    <tr class="row"><td class="col"><span class="date">27</span></td><td class="col"><span class="date">28</span></td><td class="col"><span class="date">29</span></td><td class="col"><span class="date">30</span></td><td class="col"><span class="date">31</span></td><td class="col"><span class="date">&nbsp;</span></td><td class="col"><span class="date">&nbsp;</span></td></tr>
    </tbody></table>
    </div>
    
);

export default calendar;