import { CogIcon, CurrencyPoundIcon, ThumbUpIcon, UserGroupIcon } from "@heroicons/react/solid";
import React from 'react';

const BusinessSummury = () => {
  return (
    <div>
      <div className="grid items-center px-5  py-5">
        <h3 className="text-center text-3xl text-secondary font-bold my-9 mb-3">
          We Served
        </h3>
        <div class="divider w-1/4 mx-auto "></div>
        <div class="stats stats-vertical lg:stats-horizontal shadow   ">
          <div class="stat">
            <div>
              <UserGroupIcon className="h-12 w-12 text-primary text-center" />
            </div>
            <div class="stat-value text-secondary">100+</div>
            <div class="text-secondary">Happy Customers</div>
          </div>

          <div class="stat">
            <div>
              <CurrencyPoundIcon className="h-12 w-12 text-primary text-center" />
            </div>
            <div class="stat-value text-secondary">120M+</div>
            <div class="text-secondary">Annual Revenue</div>
          </div>

          <div class="stat">
            <div>
              <ThumbUpIcon className="h-12 w-12 text-primary text-center" />
            </div>
            <div class="stat-value text-secondary">33K</div>
            <div class="text-secondary">Reviews</div>
          </div>
          <div class="stat">
            <div>
              <CogIcon className="h-12 w-12 text-primary text-center"></CogIcon>
            </div>
            <div class="stat-value text-secondary">50+</div>
            <div class="text-secondary">Tools</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummury;