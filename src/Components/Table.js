import Table from 'react-bootstrap/Table';

function TableDisplay() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
        
          <th>Item</th>
          <th>Item Name</th>
          <th>Item Amount</th>
          <th>Item Quantity</th>
          <th>Transaction Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
        </tr>
       <tr>
        <td>3</td>
        <td>Omuami</td>
        <td>Mtumishi</td>
        <td>@ingoho</td>
        <td>@senje</td>
       </tr>
      </tbody>
    </Table>
  );
}

export default TableDisplay;