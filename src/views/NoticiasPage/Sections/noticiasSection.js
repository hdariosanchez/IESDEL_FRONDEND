import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import work4 from "assets/img/examples/mariya-georgieva.jpg";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    contentItem: {
        width: '100%',
        maxWidth: 800,
        height:"100%",
        maxHeight:600,
      },
    root: {
        flexGrow: 1,
        //backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 600,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

export default function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
                <Tab label="Item Four" {...a11yProps(3)} />
                <Tab label="Item Five" {...a11yProps(4)} />
                <Tab label="Item Six" {...a11yProps(5)} />
                <Tab label="Item Seven" {...a11yProps(6)} />
            </Tabs>
            <TabPanel value={value} index={0}>

            </TabPanel>
            <TabPanel 
            orientation="vertical"
            variant="scrollable"
            value={value} index={1}>
            <div className={classes.contentItem}>
                
                <img
                    alt="..."
                    src={work4}
                    
                />
                <Typography variant="h1" component="h2" gutterBottom>
                    h1. Heading
                </Typography>
                <Typography variant="h2" gutterBottom>
                    h2. Heading
                </Typography>
                <Typography variant="h3" gutterBottom>
                    h3. Heading
                </Typography>
                <Typography variant="h4" gutterBottom>
                    h4. Heading
                </Typography>
                <Typography variant="h5" gutterBottom>
                    h5. Heading
                </Typography>
                <Typography variant="h6" gutterBottom>
                    h6. Heading
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                </Typography>
                <Typography variant="body1" gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                    unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                    dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                </Typography>
                <Typography variant="body2" gutterBottom>
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                    unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                    dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                </Typography>
                <Typography variant="button" display="block" gutterBottom>
                    button text
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    caption text
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    overline text
                </Typography>
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
      </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
      </TabPanel>
            <TabPanel value={value} index={4}>
                Item Five
      </TabPanel>
            <TabPanel value={value} index={5}>
                Item Six
      </TabPanel>
            <TabPanel value={value} index={6}>
                Item Seven
      </TabPanel>
        </div>
    );
}