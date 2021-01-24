import Delivery from './Delivery'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

const useStyles = makeStyles( (theme) => ({
    deliveryList: {
      height: 650,
      width: '100%',
      maxWidth: 700,
      overflow: 'auto',
      borderRadius: 10,
      backgroundColor: '#FFFFFF',
      [theme.breakpoints.down('md')]: {
        width: 500,
        height: 300
      },
    }
  }));
  
export default function DeliveriesList(props) {
    const classes = useStyles();

    const eachDelivery = (item, index) => {
        return  (<Delivery key={item.id} index={index} delivery={item}
                  onClickEditDelivery={props.getDelivery} onClickDeleteDelivery={props.deleteDelivery}>                
                </Delivery>)
                };

    return ( <List className={classes.deliveryList}>
                { props.getAllDeliveries.map(eachDelivery) }
            </List> );   
}