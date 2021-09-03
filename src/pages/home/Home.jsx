import Chart from "../../component/chart/Chart";
import FeaturedInfo from "../../component/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../component/widgetSm/WidgetSm";
import WidgetLg from "../../component/widgetLg/WidgetLg";
import { Grid, Image } from 'semantic-ui-react'
import { Container,Segment,Icon } from 'semantic-ui-react'
import {Button} from "@material-ui/core";

export default function Home() {
  return (
    <div className="home">

        <Container className={"container-admin"}>

            <div className="ui horizontal divider header">
               HOME DASHBOARD
            </div>
        </Container>

        <div className="piled-home">
            <Grid container divided='vertically' className={"ui grid"}>
            <Grid.Row columns={2}>
                <Grid.Column class="four wide column">
                    <Segment.Group stacked style={{background:"white"}}>
                        <Segment className="title"> <Icon color='white' name='users'/>
                            Site Statictics
                     </Segment>
                        <Segment.Group  className={"group-Home"} horizontal>
                            <Grid container divided='vertically' className={"ui grid"}>
                                <Grid.Row columns={2}>
                                    <Grid.Column class="four wide column">
                                    <div className={"group-box"}>
                                        <div className={"box-icon"}>
                                            <Icon  color='white' name='users'/>
                                        </div>
                                        <div className={"box-content"}>
                                            <p>
                                                Total Customers
                                            </p>
                                            <h3>
                                                45600+
                                            </h3>
                                        </div>
                                    </div>
                                    </Grid.Column>
                                    <Grid.Column class="four wide column">
                                    <div className={"group-box"}>
                                        <div className={"box-icon"}>
                                            <Icon  color='white' name='users'/>
                                        </div>
                                        <div className={"box-content"}>
                                            <p>
                                                Total Orders
                                            </p>
                                            <h3>
                                                45600
                                            </h3>
                                        </div>
                                    </div>
                                    </Grid.Column>
                                    <Grid.Column class="four wide column">
                                    <div className={"group-box"}>
                                        <div className={"box-icon"}>
                                            <Icon  color='white' name='users'/>
                                        </div>
                                        <div className={"box-content"}>
                                            <p>
                                                products
                                            </p>
                                            <h3>
                                                456
                                            </h3>
                                        </div>
                                    </div>
                                    </Grid.Column>
                                    <Grid.Column class="four wide column">
                                    <div className={"group-box"}>
                                        <div className={"box-icon"}>
                                            <Icon  color='white' name='users'/>
                                        </div>
                                        <div className={"box-content"}>
                                            <p>
                                                Total Rider
                                            </p>
                                            <h3>
                                                456
                                            </h3>
                                        </div>
                                    </div>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>

                        </Segment.Group>

                    </Segment.Group>
                </Grid.Column>
                <Grid.Column class="four wide column">
                 <FeaturedInfo />
                {/*     <Segment.Group stacked>
                        <Segment className="title"> <Icon color='white' name='users'/>
                            Ride Statistics
                        </Segment>
                        <Segment.Group  className={"group-Home"} horizontal>
                            <Grid container divided='vertically' className={"ui grid"}>
                                <Grid.Row columns={2}>
                                    <Grid.Column class="four wide column">
                                        <div className={"group-box"}>
                                            <div className={"box-icon"}>
                                                <Icon  color='white' name='users'/>
                                            </div>
                                            <div className={"box-content"}>
                                                <p>
                                                    Total Rider
                                                </p>
                                                <h3>
                                                    456
                                                </h3>
                                            </div>
                                        </div>
                                    </Grid.Column>
                                    <Grid.Column class="four wide column">
                                        <div className={"group-box"}>
                                            <div className={"box-icon"}>
                                                <Icon  color='white' name='users'/>
                                            </div>
                                            <div className={"box-content"}>
                                                <p>
                                                    Total Rider
                                                </p>
                                                <h3>
                                                    456
                                                </h3>
                                            </div>
                                        </div>
                                    </Grid.Column>
                                    <Grid.Column class="four wide column">
                                        <div className={"group-box"}>
                                            <div className={"box-icon"}>
                                                <Icon  color='white' name='users'/>
                                            </div>
                                            <div className={"box-content"}>
                                                <p>
                                                    Total Rider
                                                </p>
                                                <h3>
                                                    456
                                                </h3>
                                            </div>
                                        </div>
                                    </Grid.Column>
                                    <Grid.Column class="four wide column">
                                        <div className={"group-box"}>
                                            <div className={"box-icon"}>
                                                <Icon  color='white' name='users'/>
                                            </div>
                                            <div className={"box-content"}>
                                                <p>
                                                    Total Rider
                                                </p>
                                                <h3>
                                                    456
                                                </h3>
                                            </div>
                                        </div>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>

                        </Segment.Group>

                    </Segment.Group> */}
                </Grid.Column> 

            </Grid.Row>
        </Grid>


        </div>
      {/* <FeaturedInfo /> */}
      {/* <Chart data={userData} title="User Analytics" grid dataKey="Active User"/> */}
      <div className="homeWidgets" style={{background:"white"}}>
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
