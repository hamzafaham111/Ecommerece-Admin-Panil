import React from 'react';
import {Container,Button, Segment, Icon, Grid} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import Table from './Tabel';
import TableMaterial from '../TableMatrial/PageHeader';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Empoloyee from "../Employee/Employees";

export default function Driver() {
    return (
        <div className="home">

            <Container className={"container-admin"}>

                <div className="ui horizontal divider header">
                    DRIVERS
                </div>
                <Segment.Group stacked>

                    <Segment className="title">
                        <Button color='green'>
                            <Icon name='add' /> add
                        </Button>
                        <Link to={"/"}>
                        <Button >
                            <Icon name='left arrow' />
                            Back
                        </Button>
                        </Link>

                    </Segment>
                    <Segment.Group  className={"group-Home"}>


                            <TableMaterial title={"Ride Shide"} subtitle={"Form of all Users"} icon={<AccountBoxIcon fontSize={"large"}/>}/>


<Empoloyee />
                        {/*<Grid container divided='vertically' className={"ui grid"}>*/}
                        {/*    <Grid.Row columns={2}>*/}
                        {/*        <Grid.Column class="four wide column">*/}
                        {/*            <div className={"group-box"}>*/}
                        {/*                <div className={"box-icon"}>*/}
                        {/*                    <Icon  color='white' name='users'/>*/}
                        {/*                </div>*/}
                        {/*                <div className={"box-content"}>*/}
                        {/*                    <p>*/}
                        {/*                        Total Rider*/}
                        {/*                    </p>*/}
                        {/*                    <h3>*/}
                        {/*                        456*/}
                        {/*                    </h3>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </Grid.Column>*/}
                        {/*        <Grid.Column class="four wide column">*/}
                        {/*            <div className={"group-box"}>*/}
                        {/*                <div className={"box-icon"}>*/}
                        {/*                    <Icon  color='white' name='users'/>*/}
                        {/*                </div>*/}
                        {/*                <div className={"box-content"}>*/}
                        {/*                    <p>*/}
                        {/*                        Total Rider*/}
                        {/*                    </p>*/}
                        {/*                    <h3>*/}
                        {/*                        456*/}
                        {/*                    </h3>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </Grid.Column>*/}
                        {/*        <Grid.Column class="four wide column">*/}
                        {/*            <div className={"group-box"}>*/}
                        {/*                <div className={"box-icon"}>*/}
                        {/*                    <Icon  color='white' name='users'/>*/}
                        {/*                </div>*/}
                        {/*                <div className={"box-content"}>*/}
                        {/*                    <p>*/}
                        {/*                        Total Rider*/}
                        {/*                    </p>*/}
                        {/*                    <h3>*/}
                        {/*                        456*/}
                        {/*                    </h3>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </Grid.Column>*/}
                        {/*        <Grid.Column class="four wide column">*/}
                        {/*            <div className={"group-box"}>*/}
                        {/*                <div className={"box-icon"}>*/}
                        {/*                    <Icon  color='white' name='users'/>*/}
                        {/*                </div>*/}
                        {/*                <div className={"box-content"}>*/}
                        {/*                    <p>*/}
                        {/*                        Total Rider*/}
                        {/*                    </p>*/}
                        {/*                    <h3>*/}
                        {/*                        456*/}
                        {/*                    </h3>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </Grid.Column>*/}
                        {/*    </Grid.Row>*/}
                        {/*</Grid>*/}


                    </Segment.Group>





                <Table/>
                </Segment.Group>
            </Container>



        </div>
    );
}
