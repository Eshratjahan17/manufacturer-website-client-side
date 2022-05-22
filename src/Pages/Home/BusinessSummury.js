import { CogIcon, CurrencyPoundIcon, ThumbUpIcon, UserGroupIcon } from "@heroicons/react/solid";
import React from 'react';

const BusinessSummury = () => {
  return (
    <div>
      <div className="grid items-center px-5  py-5">
        <h3 className="text-center font-bold text-4xl mb-3">We Served</h3>
        <div class="stats stats-vertical lg:stats-horizontal shadow   ">
          <div class="stat">
            <div>
              <UserGroupIcon className="h-12 w-12 text-secondary text-center" />
            </div>
            <div class="stat-value">100+</div>
            <div class="stat-desc ">Happy Customers</div>
          </div>

          <div class="stat">
            <div>
              <CurrencyPoundIcon className="h-12 w-12 text-secondary text-center" />
            </div>
            <div class="stat-value">120M+</div>
            <div class="stat-desc">Annual Revenue</div>
          </div>

          <div class="stat">
            <div>
              <ThumbUpIcon className="h-12 w-12 text-secondary text-center" />
            </div>
            <div class="stat-value">33K</div>
            <div class="stat-desc">Reviews</div>
          </div>
          <div class="stat">
            <div>
              <CogIcon className="h-12 w-12 text-secondary text-center"></CogIcon>
            </div>
            <div class="stat-value">50+</div>
            <div class="stat-desc">Tools</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummury;