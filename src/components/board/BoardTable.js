import React from 'react';
import '../../lib/icon/remixicon.css';
import '../../lib/styles/board.css';
import classNames from 'classnames';

const BoardTable = ({ parking }) => {
  return (
    <table>
      <tr>
        <th colspan="13" className="lightgray">
          1층
        </th>
      </tr>
      <tr>
        <td> </td>
        <td>
          <i
            className={classNames("ri-car-fill", {parking:parking[0]})}
          ></i>
        </td>
        <td>
          <i
            className={classNames("ri-car-fill", {parking:parking[1]})}
          ></i>
        </td>
        <td>
          <i
            className={classNames("ri-car-fill", {parking:parking[2]})}
          ></i>
        </td>
        <td>
          <i
            className={classNames("ri-car-fill", {parking:parking[3]})}
          ></i>
        </td>
        <td>
          <i
            className={classNames("ri-car-fill", {parking:parking[4]})}
          ></i>
        </td>
        <td>
          <i
            className={classNames("ri-car-fill", {parking:parking[5]})}
          ></i>
        </td>
        <td>
          <i
            className={classNames("ri-car-fill", {parking:parking[6]})}
          ></i>
        </td>
        <td>
          <i
            className={classNames("ri-car-fill", {parking:parking[7]})}
          ></i>
        </td>
        <td>
          <i
            className={classNames("ri-car-fill", {parking:parking[8]})}
          ></i>
        </td>
        <td>
          <i
            className={classNames("ri-car-fill", {parking:parking[9]})}
          ></i>
        </td>
        <td> </td>
        <td>
          <i
            className={classNames("ri-car-fill", {parking:parking[10]})}
          ></i>
        </td>
      </tr>
      <tr>
        <td>
          <i className="ri-arrow-left-circle-line space"></i>
        </td>
        <td> </td>
        <td> </td>
        <td>
          <i className="ri-arrow-left-line"></i>
        </td>
        <td> </td>
        <td>
          <i className="ri-arrow-left-line"></i>
        </td>
        <td> </td>
        <td>
          <i className="ri-arrow-left-line"></i>
        </td>
        <td> </td>
        <td>
          <i className="ri-arrow-left-line"></i>
        </td>
        <td> </td>
        <td> </td>
        <td>
          <i
            className={classNames("ri-car-fill", {parking:parking[11]})}
          ></i>
        </td>
      </tr>
      <tr>
        <td> </td>
        <td> </td>
        <td>
          <i
            className={classNames("ri-car-fill", {parking:parking[12]})}
          ></i>
        </td>
        <td>
          <i
            className={classNames("ri-car-fill", {parking:parking[13]})}
          ></i>
        </td>
        <td>
          <i
            className={classNames("ri-car-fill", {parking:parking[14]})}
          ></i>
        </td>
        <td>
          <i
            className={classNames("ri-car-fill", {parking:parking[15]})}
          ></i>
        </td>
        <td>
          <i
            className={classNames("ri-car-fill", {parking:parking[16]})}
          ></i>
        </td>
        <td>
          <i
            className={classNames("ri-car-fill", {parking:parking[17]})}
          ></i>
        </td>
        <td>
          <i
            className={classNames("ri-car-fill", {parking:parking[18]})}
          ></i>
        </td>
        <td>
          <i
            className={classNames("ri-car-fill", {parking:parking[19]})}
          ></i>
        </td>
        <td>
          <i
            className={classNames("ri-car-fill", {parking:parking[20]})}
          ></i>
        </td>
        <td>
         
        </td>
        <td>
          <i
            className={classNames("ri-car-fill", {parking:parking[21]})}
          ></i>
        </td>
      </tr>
      <tr style={{ height: '4rem' }}>
        <td>
          <i className="ri-arrow-right-circle-line space"></i>
        </td>
        <td> </td>
        <td> </td>
        <td>
          <i className="ri-arrow-right-line"></i>
        </td>
        <td> </td>
        <td>
          <i className="ri-arrow-right-line"></i>
        </td>
        <td> </td>
        <td>
          <i className="ri-arrow-right-line"></i>
        </td>
        <td> </td>
        <td>
          <i className="ri-arrow-right-line"></i>
        </td>
        <td> </td>
        <td> </td>
        <td style={{ background: 'lightgray' }}>
          <i className="ri-arrow-up-down-line"></i>
        </td>
      </tr>
    </table>
  );
};

export default BoardTable;
