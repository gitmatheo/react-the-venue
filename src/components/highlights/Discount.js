import React, { Component } from "react";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButton from "../utils/MyButton";

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  handlePercentage = () => {
    const { discountEnd, discountStart } = this.state;
    if (discountStart < discountEnd) {
      this.setState({
        discountStart: discountStart + 1
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.handlePercentage();
    }, 50);
  }
  render() {
    const { discountStart } = this.state;
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.handlePercentage()}>
            <div className="discount_percentage">
              <span>{discountStart}</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount_description ">
              <h3>Purchase tickets before 20th JUNE</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident atque deserunt voluptatibus consequuntur laboriosam
                alias. Suscipit cumque alias laudantium. Et error suscipit
                recusandae quos! Recusandae nulla ullam doloribus aut numqua
              </p>
              <MyButton
                text="Puchase tickets"
                bck="orangered"
                color="#fff"
                link="http://google.com"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
