import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';

const ProductCard = ({ product, ...rest }) => (
  <Card {...rest}>
    <CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pb: 3,
        }}
      >
        {/* <Avatar
          alt="Product"
          src={product.media}
          variant="square"
        /> */}
      </Box>
      <Typography align="center" color="textPrimary" gutterBottom variant="h4">
        {product.name}
      </Typography>
      <Typography align="left" color="textPrimary" variant="body1">
        Total Equipments : {product.totalEquipments}
      </Typography>
      <Typography align="left" color="textPrimary" variant="body1">
        Available Equipments : {product.totalEquipments - product.issued}
      </Typography>
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex',
          }}
        >
          <AccessTimeIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            Status :{' '}
            {product.totalEquipments - product.issued > 0
              ? 'Available'
              : 'Not Available'}
          </Typography>
        </Grid>
        {/* <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex',
          }}
        >
          <GetAppIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            {product.totalDownloads} Downloads
          </Typography>
        </Grid> */}
      </Grid>
    </Box>
  </Card>
);

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
