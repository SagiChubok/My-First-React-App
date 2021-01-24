import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export default function Delivery(props) {

  const editDelivery = () => {
    props.onClickEditDelivery(props.index);
  };

  const deleteDelivery = () => {
    props.onClickDeleteDelivery(props.index);
  };

  return ( <ListItem className="delivery">
        <ListItemText style={{ width: '10%' }} primary={props.index + 1}/>
        <ListItemText style={{ width: '20%' }} primary={props.delivery.date}/>
        <ListItemText style={{ width: '20%' }} primary={props.delivery.name}/>
        <ListItemText style={{ width: '20%' }} primary={props.delivery.city}/>
        <div style={{ width: '20%' }}>
          <IconButton style={{ marginLeft: 20, backgroundColor: "#ED4D47"}} size="small" color="primary" onClick={editDelivery} >
            <EditIcon />
          </IconButton>
          <IconButton style={{ marginLeft: 20, backgroundColor: "#ED4D47"}} size="small" color="primary" onClick={deleteDelivery} >
            <DeleteIcon />
          </IconButton>
        </div>
    </ListItem> );

};