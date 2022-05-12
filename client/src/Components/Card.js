import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';
export const Card = ({name,email}) => {
  return (
    <div class="container">
      <div class="row">
        <div class="card-content col-md-4 col-xl-4">
          <div class="card1">
            <div class="card-block">
              <h6 class="head-card1 m-b-20">Username</h6>
              <h2 class="text-right">
                <span className="content">{name}</span>
              </h2>
            </div>
          </div>
        </div>

        <div class="card-content col-md-4 col-xl-4">
          <div class="card2">
            <div class="card-block">
              <h6 class="head-card2 m-b-20">Email</h6>
              <h2 class="text-right">
                <span className="content">{email}</span>
              </h2>
            </div>
          </div>
        </div>

        <div class="card-content col-md-4 col-xl-4">
          <div class="card3">
            <div class="card-block3">
              <h6 class="head-card3 m-b-20">Number of contributions</h6>
              <h2 class="text-right">
                <span>4</span>
              </h2>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
