import React from 'react';
import HolidayPlan from '../cards/HolidayPlan';

const HolidayPlans = () => {

    return (
        <div
            className="holiday-plan-area tp-holiday-plan-area mg-top-96"
            style={{ backgroundImage: "url(assets/img/bg/8.png)" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-9">
                        <div className="section-title text-center">
                            <h2
                                className="title wow animated fadeInUp"
                                data-wow-duration="0.6s"
                                data-wow-delay="0.1s"
                            >
                                Perfect Holiday Plan
                            </h2>
                            <p
                                className="wow animated fadeInUp"
                                data-wow-duration="0.6s"
                                data-wow-delay="0.2s"
                            >
                                No vis fastidii accumsan, ignota postulant ea mea. Vis et prima
                                integre, ei vis ridens moderatius reformidans cu vim doctus accumsan
                                ignota.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <HolidayPlan />
                    <HolidayPlan />
                    <HolidayPlan />
                    <HolidayPlan />
                </div>
            </div>
        </div>

    )
};

export default HolidayPlans;